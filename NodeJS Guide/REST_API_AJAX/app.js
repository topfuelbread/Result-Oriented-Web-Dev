let express = require('express');
let app = express();

//static files within public folder are opened
app.use(express.static('public'));
app.use(express.json());    //decrypt data sent by client
let users = [];
let id = 1;

app.get('/users/:id', (req,resp)=>{
    let user = getUserById(req.params.id);
    resp.send(user);        //if ID was not found
})

app.post('/users', (req,resp)=>{
    let newUser = req.body;
    newUser.id = id++;
    users.push(newUser);
    resp.send('Created');
})

app.put('/users/:id', (req,resp)=>{
    let user = getUserById(req.params.id);
    if(!user)
        resp.send('User not found... Rejected!');
    else {
        let data = req.body;
        for (let key in data){
            user[key] = data[key];
        }
        resp.send('User data updated!');
    }
})

app.delete('/users/:id',(req,resp)=>{
    let user = getUserById(req.params.id);
    if (user){
        users.splice(users.indexOf(user),1);
        resp.send("User was removed!");
    }
    else{
        resp.send("User to be removed was not found...");
    }
})


function getUserById(id){
    id = +id;       //string to number
    for (let i = 0; i < users.length; i++){
        if (users[i].id===id){
            return users[i];
        }
    }
    return null;
}

//create a local server with port number 3000
app.listen(3000, ()=>console.log("Listening 3000..."));

//AJAX: asynchronous JS and XML... activities w/o reloading