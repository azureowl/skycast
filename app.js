const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'hbs');

const skycast = require('./api/getWeather');

app.get('/', (req, res) => { 
    var result = skycast.getWeather();
    
    result.then((response) => {
        res.render('index', {
            pageTitle: "Skycast",
            intro: "Welcome to my weather app!",
            temp: response.current.temp,
            feelsLike: response.current.appTemp,
            summary: response.current.summary,
            dailyWkSum: response.daily.summary,
            dailySum: response.daily.dailySummary,
            dailyHigh: response.daily.dailyHigh,
            dailyLow: response.daily.dailyLow
        });
    });

});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});