const { Int32 } = require('bson')
const mongoose = require('mongoose')
require('./jobApplicationModel.js');

const Schema = mongoose.Schema


const applicantSchema = new Schema({
    name: {type: String, required: true},
    numberOfJobApplications: {type: Number, required: true},
    //  jobApplications: {type: [JobApplication], required: false},
    //  cover letter: file
    //  resume: file

}, { timestamps: true} )

module.exports = mongoose.model('Applicant', applicantSchema);