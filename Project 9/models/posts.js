let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    id:Number,
    title:String,
    date:Date,
    description:String,
    text:String,
    country:String,
    imageURL:String
});

let Post = mongoose.model('Post', postSchema);      //converts schema to class

module.exports = {
    Post: Post          //or can be written as 'Post' as key == value
}