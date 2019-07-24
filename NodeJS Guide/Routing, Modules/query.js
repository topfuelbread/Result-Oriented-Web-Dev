//e.g. /products?page=2&ps=50
// page and ps are query parameters
// website?param=value&param=value&param=value

let express = require('express');
let app = express();

app.get('/:cat', (req,resp) => {
    let page;
    if (req.query.page === undefined)
        page = 1;
    else page = req.query.page;
    resp.send(`${req.params.cat}: ${page}`);
});

app.listen(4000, () => console.log('Listening 4000...'));
