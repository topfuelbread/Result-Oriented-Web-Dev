let uniqid = require('uniqid');
let Email = require('../models/emails').Email;
let express = require('express');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req,resp)=>{
    resp.send(await Email.find());
});

router.post('/',async (req,resp)=>{
    let newEmail = new Email({
        id: uniqid(),
        message: req.body.message,
        name: req.body.name,
        email: req.body.email,
        date: new Date()
    })
    await newEmail.save();
    resp.send('Accepted');
});

router.delete('/:id', authMiddleware, async (req,resp)=>{
    await Email.deleteOne({id: req.params.id});
    resp.send('Deleted');
});

module.exports = router;