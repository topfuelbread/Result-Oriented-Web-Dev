let express = require('express');
let app = express();    //saves all functions of express

// app.get('/', function(request, response){
//     //route function... listens and sends back info
//     response.send('<h1>Home Page</h1>');
// })

app.get('/', (request,response) => response.send('Home Page'));
app.get('/contacts', (request,response) => response.send('Contacts'));
app.get('*',(request,response)=>response.send('404'));

app.listen(4000, () => console.log('Listening 4000...'));
// app.listen(4000, function(){
//     console.log('listening 4000...');
// })