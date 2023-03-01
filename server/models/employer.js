const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Jobposting = require('./jobposting')
const passportLocalMongoose = require('passport-local-mongoose');

const EmployerSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Number,
        required: true
    },
    numberOfEmployee: {
        type: Number,
        required: true
    },
    jobpostings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Jobposting'
        }
    ]
});

EmployerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Employer', EmployerSchema);