
const config = require('../config/config.js');
const axios = require('axios');

// for geocode, look into autocomplete feature
// https://developers.google.com/maps/documentation/geocoding/best-practices

// https://maps.googleapis.com/maps/api/geocode/json?address=params&key=YOUR_API_KEY

// will be user input
var encodedURL = encodeURIComponent("1600 Amphitheatre Parkway, Mountain View, CA");
var geoReq = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=${config.getKey().gg_key}`;

axios.get(geoReq)
  .then((response) => {
      var data = {
        formatted_add : response.data.results[0].formatted_address,
        lat : response.data.results[0].geometry.location.lat,
        long : response.data.results[0].geometry.location.lng
      };
    
  })
  .catch((e) => {
      console.log(e);
  });


const getWeather = () => {
    const ds_key = config.getKey().ds_key;
    var getData = `https://api.darksky.net/forecast/${ds_key}/37.8267,-122.4233`;
    
    axios.get(getData)
      .then((response) => {
        //   console.log(response);
      })
      .catch((e) => {
          console.log(e);
      });
};

// getWeather();

module.exports = {
    getWeather
};