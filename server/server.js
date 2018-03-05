const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Local imports
const dsObject = require('../api/weather.js');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
    res.render('index');
});

app.post('/', (req, res) => {
    let address = req.body.address;
    let result = dsObject.storedData(address);
    
    result.then((response) => {
        res.render('index', response);
    }, (err) => {
        res.send('Unable to locate that address.');
    });
    
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

module.exports = {app};