const mongoose = require('mongoose')

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
}, { timestamps: true })

module.exports = mongoose.model('Applicant', applicantSchema)