let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(express.json());
let Post = require('./models/posts').Post;

//to read binary file-- use multer
let multer = require('multer');
let imageStorage = multer.diskStorage({
    destination: (req,file,cb)=>cb(null,'public/images'),
    filename: (req,file,cb)=>cb(null, file.originalname)
})
app.use(multer({storage:imageStorage}).single('imageFile'));

// Database Connection
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/travels', { useNewUrlParser: true });



let postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

// let id = 1;

// //request to Database
// app.get('/posts', async (req,resp)=>{
//     let posts = await Post.find();          //to find all posts in DB
//     resp.send(posts);
// })

// app.post('/posts', async (req,resp)=>{
//     let imgPath;
//     if (req.body.imageURL)  imgPath = req.body.imageURL;
//     else imgPath = req.file.path.substring(6,req.file.path.length); //path.indexOf('/') or 'public' didn't work
//     console.log(req.file.path.indexOf('public'));
//     console.log(imgPath);
//     let newPost = new Post({
//         id: id++,
//         title: req.body.title,
//         date: new Date(),
//         description: req.body.description,
//         country: req.body.country,
//         text: req.body.text,
//         imageURL: imgPath
//     });
//     await newPost.save();
//     resp.send('Created');
// })

app.listen(3000, ()=>console.log('Listening 3000...'));