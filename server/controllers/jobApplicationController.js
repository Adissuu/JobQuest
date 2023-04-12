const JobApplication = require('../models/jobApplicationModel')
const Applicant = require('../models/applicantModel')
const JobPosting = require('../models/jobPostingModel')

const mongoose = require('mongoose')
const jobApplicationModel = require('../models/jobApplicationModel')

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
  const {jobPostingId, employerId, applicantId} = req.body

  let emptyFields = []

  if(!jobPostingId) {
    emptyFields.push('jobPostingId')
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
    return res.status(400).json({ error: 'Please enter valid IDs', invalidFields })
  }

  //  add the applicant to the list of applicants of the jobPosting
  try {
    var applicantToAdd = null
    await Applicant.findById(applicantId).exec().then(function(doc) {
      console.log("doc: ", doc)
      applicantToAdd = doc;
    });
    console.log("applicantToAdd:", applicantToAdd)
    //console.log(typeof(applicantToAdd))
    const jobPosting = await JobPosting.findOneAndUpdate({ _id: jobPostingId }, {
      //  $push adds the new applicant to the existing array inside the jobPosting
      $push: { applicants: applicantToAdd }
    })
  } catch (error)
  {
    console.log("caught error pushing applicant")
    console.log(error)
    res.status(400).json({error: error.message})
  }

  //  add the jobPosting to the list of jobPostings of the applicant
  try {
    var jobPostingToAdd = null
    await JobPosting.findById(jobPostingId).exec().then(function(doc) {
      console.log("doc: ", doc)
      jobPostingToAdd = doc;
    });
    console.log("jobPostingToAdd:", jobPostingToAdd)
    //console.log(typeof(jobPostingToAdd))
    const applicant = await Applicant.findOneAndUpdate({ _id: applicantId }, {
      //  $push adds the new jobPostings to the existing array inside the applicant

      $push: { jobPostingsAppliedTo: jobPostingToAdd }
    })
  } catch (error)
  {
    console.log("caught error pushing jobPosting")
    console.log(error)
    res.status(400).json({error: error.message})
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const jobApplication = await JobApplication.create({jobPostingId, employerId, applicantId})
    //console.log("inserted job application")
    res.status(200).json(jobApplication)
    //console.log("sent response 200")
  } catch (error) {
    //console.log("caught error")
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

const hasApplicantAlreadyAppliedToPosting = async (req, res) => {
  //  grab applicant and jobPosting from request
  const {applicantId} = req.body;
  const {jobPostingId} = req.body;

  //  validate applicant and jobPosting
  if (!mongoose.Types.ObjectId.isValid(applicantId)) {
    console.log(applicantId)
    return res.status(404).json({error: 'No such applicant'})

  }
  if (!mongoose.Types.ObjectId.isValid(jobPostingId)) {
    return res.status(404).json({error: 'No such jobPosting'})
  }

  var exists = await JobApplication.exists({applicantId: applicantId, jobPostingId: jobPostingId})

  res.send(200, {result: exists})
}







module.exports = {
  getJobApplications,
  getJobApplication,
  createJobApplication,
  deleteJobApplication,
  updateJobApplication,
  hasApplicantAlreadyAppliedToPosting
}