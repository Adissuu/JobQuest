const { Int32 } = require('bson')
const mongoose = require('monogoose')
require('.JobPosting');

const Schema = mongoose.Schema


const applicantSchema = new Schema({
    name: {type: String, required: true},
    numberOfJobPostings: {type: Number, required: true},
    jobPostings: {type: [JobPosting], required: false},
}, { timestamps: true} )

module.exports = mongoose.model('Applicant', applicantSchema);