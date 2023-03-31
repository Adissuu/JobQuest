const mongoose = require('mongoose')
const Applicant = require('../models/applicantModel').Schema

const Schema = mongoose.Schema

const jobPostingSchema = new Schema({
  jobTitle: {type: String, required: true},

  jobType: {type: String, required: true},
  location: {type: String, required: true},
  remote: {type: Boolean, required: true},
  description: {type: String, required: true},

  employerId: {type: String, required: true},
  employerName: {type: String, required: true},
  employerWebsite: {type: String, required: true},

  applicants: {type: [Applicant], required: false}

}, { timestamps: true })

module.exports = mongoose.model('JobPosting', jobPostingSchema)