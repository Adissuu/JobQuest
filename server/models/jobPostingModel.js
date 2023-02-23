const { Int32 } = require('bson')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobPostingSchema = new Schema({
    employerId: {type: String, required: true},
    employerName: {type: String, required: true},
    jobTitle: {type: String, required: true},
    numberOfPositions: {type: Number, required: true},
    description: {type: String, required: true},
    dateAdded: {type: String, required: true}

}, { timestamps: true} )

module.exports = mongoose.model('JobPosting', jobPostingSchema);