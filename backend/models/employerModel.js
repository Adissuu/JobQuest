const { Int32 } = require('bson')
const mongoose = require('mongoose')
const JobPosting = require('./jobPostingModel');

const Schema = mongoose.Schema

const employerSchema = new Schema({
    name: {type: String, required: true},
    numberOfJobPostings: {type: Number, required: true},
    //jobPostings: {type: Array(JobPosting), required: false},
    shortId: {
        type: String,
        required: true
      }
}, { timestamps: true} )

module.exports = mongoose.model('Employer', employerSchema);