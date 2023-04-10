const Applicant = require('../models/applicantModel')
const JobPosting = require('../models/jobPostingModel')
const JobApplication = require('../models/jobApplicationModel')
const mongoose = require('mongoose')

// get all applicants
const getApplicants = async (req, res) => {

  //console.log(req.user)

  const applicants = await Applicant.find({}).sort({createdAt: -1})

  res.status(200).json(applicants)
}

// get a single applicant
const getApplicant = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such applicant'})
  }

  const applicant = await Applicant.findById(id)

  if (!applicant) {
    return res.status(404).json({error: 'No such applicant'})
  }
  
  res.status(200).json(applicant)
}

//  get applicants for a specified jobPosting
const getApplicantsByJobPosting = async (req, res) => {
  const { id } = req.params
  //console.log(req)
  //console.log(id)

  //console.log(mongoose.Types.ObjectId.isValid('640a39609df61efc7ee0fad5'))

  const jobPosting = await JobPosting.findById( id )
  //console.log(jobPosting);


  if (!jobPosting) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }
  const applicants = jobPosting.applicants

  res.status(200).json(applicants)
}

// create new applicant
const createApplicant = async (req, res) => {
  const {name, numberOfJobApplications, shortId} = req.body

  let emptyFields = []

  if(!name) {
    emptyFields.push('name')
  }
  if(!numberOfJobApplications) {
    emptyFields.push('numberOfJobApplications')
  }
  if(!shortId) {
    emptyFields.push('shortId')
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const applicant = await Applicant.create({name, numberOfJobApplications, shortId})
    res.status(200).json(applicant)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a applicant
const deleteApplicant = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such applicant'})
  }

  const applicant = await Applicant.findOneAndDelete({_id: id})

  if (!applicant) {
    return res.status(400).json({error: 'No such applicant'})
  }

  res.status(200).json(applicant)
}

// update an applicant
const updateApplicant = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such applicant'})
  }

  const applicant = await Applicant.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!applicant) {
    return res.status(400).json({error: 'No such applicant'})
  }

  res.status(200).json(applicant)
}


// get an applicant from shortId
const getApplicantFromShortId = async (req, res) => {
  const { shortId } = req.params
  
  //console.log(shortId)

  const applicant = await Applicant.find({shortId: shortId})

  //console.log(applicant)

  if (!applicant) {
    return res.status(404).json({error: 'No such applicant'})
  }
  
  res.status(200).json(applicant)
}



module.exports = {
  getApplicants,
  getApplicant,
  createApplicant,
  deleteApplicant,
  updateApplicant,
  getApplicantFromShortId,
  getApplicantsByJobPosting
}