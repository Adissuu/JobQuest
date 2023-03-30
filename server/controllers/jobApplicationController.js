const JobApplication = require('../models/jobApplicationModel')
const mongoose = require('mongoose')

// get all jobApplications
const getJobApplications = async (req, res) => {

  //console.log(req.user)

  const jobApplications = await JobApplication.find({}).sort({createdAt: -1})

  res.status(200).json(jobApplications)
}

// get a single jobApplication
const getJobApplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such jobApplication'})
  }

  const jobApplication = await JobApplication.findById(id)

  if (!jobApplication) {
    return res.status(404).json({error: 'No such jobApplication'})
  }
  
  res.status(200).json(jobApplication)
}


// create new jobApplication
const createJobApplication = async (req, res) => {
  const {jopPostingId, employerId, applicantId} = req.body

  let emptyFields = []

  if(!jopPostingId) {
    emptyFields.push('jopPostingId')
  }
  if(!employerId) {
    emptyFields.push('employerId')
  }
  if(!applicantId) {
    emptyFields.push('applicantId')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  //  check that the jobPostingId, employerId and applicantId exist
  let invalidFields = []
  if (!mongoose.isValidObjectId(jobPostingId)){
    invalidFields.push('jobPostingId')
  }
  if (!mongoose.isValidObjectId(employerId)){
    invalidFields.push('employerId')
  }
  if (!mongoose.isValidObjectId(applicantId)){
    invalidFields.push('applicantId')
  }
  if(invalidFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', invalidFields })
  }




  // add doc to db
  try {
    const user_id = req.user._id
    const jobApplication = await JobApplication.create({jopPostingId, employerId, applicantId})
    res.status(200).json(jobApplication)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a jobApplication
const deleteJobApplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such jobApplication'})
  }

  const jobApplication = await JobApplication.findOneAndDelete({_id: id})

  if (!jobApplication) {
    return res.status(400).json({error: 'No such jobApplication'})
  }

  res.status(200).json(jobApplication)
}

// update an jobApplication
const updateJobApplication = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such jobApplication'})
  }

  const jobApplication = await JobApplication.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!jobApplication) {
    return res.status(400).json({error: 'No such jobApplication'})
  }

  res.status(200).json(jobApplication)
}





module.exports = {
  getJobApplications,
  getJobApplication,
  createJobApplication,
  deleteJobApplication,
  updateJobApplication,
}