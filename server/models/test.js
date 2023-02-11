const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The test text field is required'],
  },
});

const Test = mongoose.model('test', TestSchema);

module.exports = Test;


mongoose.connect("mongodb+srv://softwareprocess:soen341!@jobquest.lwy8itm.mongodb.net/?retryWrites=true&w=majority");