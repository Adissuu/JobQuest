const { Int32 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    CompanyName: 
    {
        type: String,
        required: [true, 'The test text field is required'],
    },
    NumberOfPostings:
    {
        type: Number,
        required: true
    }

});

const Employer = mongoose.model('employer', EmployerSchema);

module.exports = Employer;


mongoose.connect("mongodb+srv://softwareprocess:soen341@jobquest.lwy8itm.mongodb.net/?retryWrites=true&w=majority");