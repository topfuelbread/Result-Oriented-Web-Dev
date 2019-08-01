let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let emailSchema = new Schema({
    id: String,
    email: String,
    name: String,
    message: String,
    date: Date
});

//creating class based on schema
let Email = mongoose.model('Email', emailSchema, 'emails');

//exporting class
module.exports = { Email };