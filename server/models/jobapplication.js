const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;

const JobapplicationSchema = new Schema({
    resume: String,
    coverletter: String,
    comments : String
});

module.exports = mongoose.model('Jobapplication', JobapplicationSchema);