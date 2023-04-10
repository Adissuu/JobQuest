const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jobApplicationSchema = new Schema({
  jobPostingId: {
    type: String,
    required: true
  },

  employerId: {
    type: String,
    required: true
  },

  applicantId: {
    type: String,
    required: true
  },

}, { timestamps: true })

module.exports = mongoose.model('JobApplication', jobApplicationSchema)