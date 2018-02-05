
const config = require('../config/config.js');
const axios = require('axios');

// for geocode, look into autocomplete feature
// https://developers.google.com/maps/documentation/geocoding/best-practices

// will be user input
var encodedURL = encodeURIComponent("1600 Amphitheatre Parkway, Mountain View, CA");
var geoReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=${config.getKey().gg_key}`;
var dsReq = `https://api.darksky.net/forecast/${config.getKey().ds_key}`;

// Fetch weather data using geocoding

const getWeather = () => {
    axios.get(geoReq)
    .then((response) => {
        var geodata = {
          formatted_add: response.data.results[0].formatted_address,
          lat: response.data.results[0].geometry.location.lat,
          long: response.data.results[0].geometry.location.lng
        };
        
        console.log(geodata.formatted_add);
        return axios.get(`${dsReq}/${geodata.lat},${geodata.long}`);
      
    })
    .then((response) => {
        var dsdata = {
            current: {
                temp: response.data.currently.temperature,
                appTemp: response.data.currently.apparentTemperature,
                summary: response.data.currently.summary
            },
            daily: {
                summary: response.data.daily.summary,
                dailySummary: response.data.daily.data[0].summary,
                dailyHigh: response.data.daily.data[0].temperatureHigh,
                dailyLow: response.data.daily.data[0].temperatureLow
            }
        };

        console.log(dsdata);
    })
    .catch((e) => {
        console.log(e);
    });
};

getWeather();

module.exports = {
    getWeather
};