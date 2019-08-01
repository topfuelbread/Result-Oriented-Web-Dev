let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(express.json());
let Post = require('./models/posts').Post;
let CallbackRequest = require('./models/callback-requests').CallbackRequest;


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

//requests to /posts will be redirected to postsRouter
let postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);
let callbackRequestsRouter = require('./routes/callback-requests');
app.use('/callback-requests', callbackRequestsRouter);
let emailRouter = require('./routes/emails');
app.use('/emails', emailRouter);

app.listen(3000, ()=>console.log('Listening 3000...'));