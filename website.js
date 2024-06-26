const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
let port = 5500;


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"Clock layout")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname ,"Clock layout","main.html" ));
});

app.listen(port,() => {
    console.log(`listening on port http://localhost:${port}`);    
});
