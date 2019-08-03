let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: String,
    password: String
});

//creating class based on schema
let User = mongoose.model('User', userSchema, 'users');

//exporting class
module.exports = { User };