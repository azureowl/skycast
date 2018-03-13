const config = require('../config/config.js');
const axios = require('axios');

let search = (userInput) => {
    return encodeURIComponent(userInput);
};

var dsReq = `https://api.darksky.net/forecast/${process.env.ds_key}`;
// var dsReq = `https://api.darksky.net/forecast/${config.getKey().ds_key}`;

const getWeather = (address) => {
    let geoReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${search(address)}&key=${process.env.gg_key}`;
    // let geoReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${search(address)}&key=${config.getKey().gg_key}`;
    
    return axios.get(geoReq)
    .then((response) => {
        var geodata = {
          formatted_add: response.data.results[0].formatted_address,
          lat: response.data.results[0].geometry.location.lat,
          long: response.data.results[0].geometry.location.lng
        };
        
        return axios.get(`${dsReq}/${geodata.lat},${geodata.long}`, {
            formatted_add: geodata.formatted_add,
            lat: geodata.lat,
            long: geodata.long
        });
      
    })
    .then((response) => {
        var dsdata = {
            current: {
                temp: Math.round(response.data.currently.temperature),
                appTemp: Math.round(response.data.currently.apparentTemperature),
                summary: response.data.currently.summary,
                icon: response.data.currently.icon,
                hourly: response.data.hourly.summary
            },
            daily: {
                summary: response.data.daily.summary,
                dailyHigh: Math.round(response.data.daily.data[0].temperatureHigh),
                dailyLow: Math.round(response.data.daily.data[0].temperatureLow)
            }
        };

        if (response.data.hasOwnProperty('alerts')) {
            dsdata.current.alerts = response.data.alerts[0].title;
            dsdata.current.alertsURI = response.data.alerts[0].uri;
            dsdata.current.alertsTrue = "true";
        }
        
        return {
            dsdata: dsdata,
            formatted_add: response.config.formatted_add,
            lat: response.config.lat,
            long: response.config.long
        };
    })
    .catch((e) => {
        console.log('Unable to find that address', e);
    });
};

module.exports = {
    getWeather
};