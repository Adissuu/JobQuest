const JobPosting = require('../models/jobPostingModel')
const Applicant = require('../models/applicantModel')

const JobApplication = require('../models/jobApplicationModel')
const mongoose = require('mongoose')

// get all jobPostings
const getJobPostings = async (req, res) => {
  const jobPostings = await JobPosting.find({}).sort({ createdAt: -1 })

  res.status(200).json(jobPostings)
}

// get a single jobPosting
const getJobPosting = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }

  const jobPosting = await JobPosting.findById(id)

  if (!jobPosting) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }

  res.status(200).json(jobPosting)
}

//  get jobPostings for a specified applicant
const getAllJobPostingsByApplicant = async (req, res) => {
  const { id } = req.params
  //console.log(req)
  //console.log(id)

  const applicant = await Applicant.findById( id )
  //console.log(applicant);

  if (!applicant) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }
  const jobPostings = applicant.jobPostingsAppliedTo

  res.status(200).json(jobPostings)
}

// create new jobPosting
const createJobPosting = async (req, res) => {
  const { jobTitle, jobType, location, remote, description, employerId, employerName, employerWebsite } = req.body

  let emptyFields = []

  if (!jobTitle) {
    emptyFields.push('jobTitle')
  }
  if (!jobType) {
    emptyFields.push('jobType')
  }
  if (!location) {
    emptyFields.push('location')
  }
  if (!remote) {
    emptyFields.push('remote')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (!employerId) {
    emptyFields.push('employerId')
  }
  if (!employerName) {
    emptyFields.push('employerName')
  }
  if (!employerWebsite) {
    emptyFields.push('employerWebsite')
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  //  validate the employer id
  if (!mongoose.Types.ObjectId.isValid(employerId)) {
    return res.status(404).json({error: 'No such employer'})
  }


  // add doc to db
  try {
    const jobPosting = await JobPosting.create({ jobTitle, jobType, location, remote, description, employerId, employerName, employerWebsite })
    res.status(200).json(jobPosting)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a jobPosting
const deleteJobPosting = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }

  const jobPosting = await JobPosting.findOneAndDelete({ _id: id })

  if (!jobPosting) {
    return res.status(400).json({ error: 'No such jobPosting' })
  }

  res.status(200).json(jobPosting)
}

// update a jobPosting
const updateJobPosting = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }

  const jobPosting = await JobPosting.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!jobPosting) {
    return res.status(400).json({ error: 'No such jobPosting' })
  }

  res.status(200).json(JobPosting)
}

// get all jobPostings for a specified employer
const getAllJobPostingsByEmployer = async (req, res) => {
  const { id } = req.params
  //console.log(req)
  //console.log(id)

  // if (!mongoose.Types.ObjectId.isValid(employerId)) {
  //   return res.status(404).json({error: 'No such jobPosting'})
  // }

  const jobPostings = await JobPosting.find({ employerId: id })

  if (!jobPostings) {
    return res.status(404).json({ error: 'No such jobPosting' })
  }

  res.status(200).json(jobPostings)
}

/*
OLD METHOD DO NOT USE
// get all jobPostings applied to by a specific applicant
const getAllJobPostingsByApplicant = async (req, res) => {
  const { id } = req.params
  //console.log(req)
  //console.log(id)

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such applicant'})
  }

  //  start by grabbing the job applications
  const jobApplications = await JobApplication.find({ applicantId: id })

  //console.log("jobApplications:", jobApplications)

  const jobPostingsAppliedTo = new Set();
  //  make list of job postings by job application 
  jobApplications.forEach(async jobApplication => {

    if (!mongoose.Types.ObjectId.isValid(jobApplication.jobPostingId)) {
      return res.status(404).json({error: 'one of the jobPostings from the jobApplications doesnt exist'})
    }
  
    var jobPosting = await JobPosting.findById(jobApplication.jobPostingId)
    console.log("jobApplication: ", jobApplication)
    console.log("jobPosting:", jobPosting)
    console.log(typeof(jobPosting))

    jobPostingsAppliedTo.add(jobPosting)
    jobPostingsAppliedTo.add({name: "steben"})
    })

    jobPostingsAppliedTo.add({name: "janathan"})

    console.log("jobPostingsAppliedTo:", jobPostingsAppliedTo)

  res.status(200).json(jobPostingsAppliedTo)
}
*/

module.exports = {
  getJobPostings,
  getJobPosting,
  createJobPosting,
  deleteJobPosting,
  updateJobPosting,
  getAllJobPostingsByEmployer,
  getAllJobPostingsByApplicant
}