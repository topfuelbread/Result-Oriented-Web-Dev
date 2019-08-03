let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(express.json());

let cookieParser = require('cookie-parser');
app.use(cookieParser());

let Post = require('./models/posts').Post;
let CallbackRequest = require('./models/callback-requests').CallbackRequest;
let auth = require('./controllers/auth');

app.set('view engine', 'ejs');      //for template 

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
let userRouter = require('./routes/users');
app.use('/users',userRouter);

app.get('/sight', async (req,resp)=>{      //for template
    let post = await Post.findOne({title: req.query.title});
    resp.render('sight', {          //location: views/sight.ejs
        title: post.title,
        imageURL: post.imageURL,
        date: post.date,
        text: post.text
    })
});

app.get('/admin',(req,resp)=>{
    let token = req.cookies['auth_token'];
    if (token && auth.checkToken(token))
        resp.render('admin');
    else 
        resp.redirect('/login');
});

app.get('/login',(req,resp)=>{
    resp.render('login');
})

app.listen(3000, ()=>console.log('Listening 3000...'));