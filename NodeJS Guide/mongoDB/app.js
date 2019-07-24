//Connection to MongoDB:
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users').then(()=>{
    console.log('Connected to MongoDB...');
}).catch((error)=>{
    console.log('Error');
})

//Schema: based on Mongoose
let Schema = mongoose.Schema;
let userSchema = new Schema({
    login: String,
    password: {
        type: String,
        minlength: 4
    },
    age: {
        type: Number,
        min: 0
    },
    student: Boolean,
    country: String
});


//Creating: class using Mongoose
let User = mongoose.model('User',userSchema);
// let user1 = new User({
//     login: 'June',
//     password: '1212',
//     age: 23,
//     student: true,
//     country:'Canada'
// });

// console.log(user1);
// user1.save().then(()=>{
//     console.log('Saved!');
// });

//Reading: query functions...
//find(): find all
//limit(value): limit the number of information 
//sort({JS element: 1 or -1})
//select({JS element:Boolean}): select or avoid specific element
//where(condition)
async function getUsers(){
    let users = await User
        .find()
        .where('age').gt(25).lt(45)
        .limit(3)
        .sort({age: 1})    //1: min to max, -1: max to min
        .select({login: true, password:true});
    console.log(users);
}

//Updating
async function updateUser(){
    //option 1:
    // let user = await User.findOne({login: 'Peter'});
    // user.password = 'newpassword';
    // await user.save();
    //option 2:
    await User.findOneAndUpdate({login:'Peter'},{password:'newnew'},()=>{
        console.log('Updated!');
    })
}
//updateUser();

//Removing
async function removeUser(){
    let result = await User.deleteOne({login:'June'});
    console.log(result);
}
removeUser();
