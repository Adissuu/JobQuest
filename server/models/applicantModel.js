const mongoose = require('mongoose')
const JobPosting = require('../models/jobPostingModel')
const Schema = mongoose.Schema
const applicantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  numberOfJobApplications: {
    type: Number,
    required: true
  },
  shortId: {
    type: String,
    required: false
  },

  //  removed because it creates a circular dependency 
  // jobPostingsAppliedTo: {
  //   type: Array(JobPosting),
  //   required: false
  // }

}, { timestamps: true })

module.exports = mongoose.model('Applicant', applicantSchema)