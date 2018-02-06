const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

const skycast = require('./api/getWeather');
const dsObject = require('./api/weather.js');

app.get('/', (req, res) => { 
    var result = dsObject.storedData();
    
    result.then((response) => {
        res.render('index', response);
    });

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});