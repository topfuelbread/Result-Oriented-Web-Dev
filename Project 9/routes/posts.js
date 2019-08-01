let uniqid = require('uniqid');
let Post = require('../models/posts').Post;
let express = require('express');
let router = express.Router(); //allows redirection of requests from one file to another
let path = require('path');

router.get('/', async (req,resp)=>{
    let posts = await Post.find();          //to find all posts in DB
    resp.send(posts);
})

router.get('/:id', async (req,resp)=>{
    let id = req.params.id;
    let post = await Post.findOne({id:id});         
    resp.send(post);
})

router.post('/', async (req,resp)=>{
    let imgPath;
    if (req.body.imageURL)  imgPath = req.body.imageURL;            //option 1: URL
    else imgPath = req.file.path.substring(req.file.path.indexOf(path.sep),req.file.path.length);   //option 2: file
    console.log(imgPath);
    let newPost = new Post({
        id: uniqid(),
        title: req.body.title,
        date: new Date(),
        description: req.body.description,
        country: req.body.country,
        text: req.body.text,
        imageURL: imgPath
    });
    await newPost.save();
    resp.send('Created');
})

router.delete('/:id', async (req,resp) => {
    let id = req.params.id;
    await Post.deleteOne({id: id});
    resp.send('Deleted!');
})

router.put('/:id', async (req,resp)=>{
    let id = req.params.id;
    await Post.updateOne({id:id}, req.body);
    resp.send('Updated!');
})

module.exports = router;