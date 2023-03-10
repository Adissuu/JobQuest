const { Int32 } = require('bson')
const mongoose = require('mongoose')
const jobPostings = require('./jobPostingModel');

const Schema = mongoose.Schema

const employerSchema = new Schema({
    name: {type: String, required: true},
    numberOfJobPostings: {type: Number, required: true},
    jobPostings: {type: [JobPosting], required: false},
}, { timestamps: true} )

module.exports = mongoose.model('Employer', employerSchema);