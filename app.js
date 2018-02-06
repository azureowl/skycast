const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

const skycast = require('./api/getWeather');
const dsObject = require('./api/weather.json');

app.get('/', (req, res) => { 
    var result = skycast.getWeather();
    
    result.then((response) => {
        res.render('index', dsObject);
    });

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});