let express = require('express');
let app = express();
app.use(express.static('public'));


// Database Connection
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true });

let Post = require('./models/posts').Post;

//request to Database
app.get('/posts', async (req,resp)=>{
    let posts = await Post.find();          //to find all posts in DB
    resp.send(posts);
})

app.listen(3000, ()=>console.log('Listening 3000...'));