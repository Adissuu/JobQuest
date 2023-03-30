const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jobApplicationSchema = new Schema({
  jobPosting: {
    type: String,
    required: true
  },

  applicant: {
    type: String,
    required: true
  },


}, { timestamps: true })

module.exports = mongoose.model('JobApplication', jobApplicationSchema)