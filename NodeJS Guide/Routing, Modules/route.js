let express = require('express');
let app = express();    //saves all functions of express

//universal route parameters
app.get('/shop/:cat/:sub', (req,resp) => {
    resp.send(`${req.params.cat}, ${req.params.sub}`);
});

app.listen(4000, () => console.log('Listening 4000...'));