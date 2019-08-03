let User = require('../models/users').User;
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let auth = require('../controllers/auth');

router.post('/login',async (req,resp)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email:email});
    console.log(user);
    if (user.length>0) {
        let result = await bcrypt.compare(password, user[0].password);
        if (result){
            let token = auth.generateToken(user[0]);
            resp.cookie('auth_token',token);
            resp.send({
                redirectURL:'/admin'
            });
        }
        else{
            resp.status(400);
            resp.send('Login Unsuccessful');
        }
    }
    else {
        resp.status(400);
        resp.send('Login Unsuccessful');
    }
})

router.post('/register',async (req,resp)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email:email});
    if (user.length===0) {
        let encryptedPass = await bcrypt.hash(password,12);
        let newUser = new User({
            email:email,
            password: encryptedPass
        });
        await newUser.save();
        resp.send('Registered');
    }
    else resp.send('Rejected');
})

module.exports = router;