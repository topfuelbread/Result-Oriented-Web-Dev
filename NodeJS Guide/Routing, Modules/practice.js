//route /joke/2 --> generates 2 jokes
//route /joke/sport/2 --> 2 jokes with tag sports
//tags: sport, it, attitude, love
//route /joke/.../2 --> message no jokes
//other routes: 404 it's not funny

let express = require('express');
let app = express();
let joke = require('one-liner-joke');

let tags = ['sport','IT','attitude','love'];

app.get('/jokes/:number', (req,resp)=>{
    let num = req.params.number;
    let result = '';
    for(let i = 0; i < num; i++){
        result += `<h4>${joke.getRandomJoke().body}</h4>***`;
    }
    resp.send(result);
})

app.get('/jokes/:tag/:number', (req,resp)=>{
    let tag = req.params.tag;
    let num = req.params.number;
    let result = '';

    if(tags.includes(tag)){
        for(let i = 0; i < num; i++){
            result += `<h4>${joke.getRandomJokeWithTag(tag).body}</h4>***`;
        }
    }
    else result = 'No jokes for this tag';
    resp.send(result);
})

app.get('*',(req,resp)=>{
    resp.send(`<h4>404 it's not funny</h4>`);
});

app.listen(3000, () => console.log('3000'));