const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    resume: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    graduationDate: {
        type: String,
        required: true
    },
    github: {
        type: String,
        unique: true
    },
});

EmployeeSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Employee', EmployeeSchema);