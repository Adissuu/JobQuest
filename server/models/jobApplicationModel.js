const { Int32 } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobApplicationSchema = new Schema({

    employerId: {type: String, required: true},
    employerName: {type: String, required: true},

    applicantId: {type: String, required: true},
    applicantName: {type: String, required: true},

    jobPostingId: {type: String, required: true},
    jobTitle: {type: String, required: true},

    
    //  logo image ???


}, { timestamps: true} )

module.exports = mongoose.model('Job Application', jobApplicationSchema);