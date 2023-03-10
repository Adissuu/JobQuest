const mongoose = require('mongoose')

const Schema = mongoose.Schema

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  courses: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Applicant', applicantSchema)
