const JobPosting = require('../models/jobPostingModel')
const mongoose = require('mongoose')

// get all jobPostings
const getJobPostings = async (req, res) => {
  const jobPostings = await JobPosting.find({}).sort({createdAt: -1})

  res.status(200).json(jobPostings)
}

// get a single jobPosting
const getJobPosting = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such jobPosting'})
  }

  const jobPosting = await JobPosting.findById(id)

  if (!jobPosting) {
    return res.status(404).json({error: 'No such jobPosting'})
  }
  
  res.status(200).json(jobPosting)
}


// create new jobPosting
const createJobPosting = async (req, res) => {
  const {jobTitle, jobType, location, remote, description, employerId, employerName, employerWebsite} = req.body

  let emptyFields = []

  if(!jobTitle) {
    emptyFields.push('jobTitle')
  }
  if(!jobType) {
    emptyFields.push('jobType')
  }
  if(!location) {
    emptyFields.push('location')
  }
  if(!remote) {
    emptyFields.push('remote')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(!employerId) {
    emptyFields.push('employerId')
  }
  if(!employerName) {
    emptyFields.push('employerName')
  }
  if(!employerWebsite) {
    emptyFields.push('employerWebsite')
  }

  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const jobPosting = await JobPosting.create({jobTitle, jobType, location, remote, description, employerId, employerName, employerWebsite})
    res.status(200).json(jobPosting)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a jobPosting
const deleteJobPosting = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such jobPosting'})
  }

  const jobPosting = await JobPosting.findOneAndDelete({_id: id})

  if (!jobPosting) {
    return res.status(400).json({error: 'No such jobPosting'})
  }

  res.status(200).json(jobPosting)
}

// update a jobPosting
const updateJobPosting = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such jobPosting'})
  }

  const jobPosting = await JobPosting.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!jobPosting) {
    return res.status(400).json({error: 'No such jobPosting'})
  }

  res.status(200).json(JobPosting)
}


module.exports = {
  getJobPostings,
  getJobPosting,
  createJobPosting,
  deleteJobPosting,
  updateJobPosting
}