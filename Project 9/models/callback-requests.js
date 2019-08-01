let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let callbackRequestSchema = new Schema({
    id: String,
    phoneNumber: String,
    date: Date
});

//creating class based on schema
let CallbackRequest = mongoose.model('CallbackRequest', callbackRequestSchema, 'callback-requests');

//exporting class
module.exports = { CallbackRequest };