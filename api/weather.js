const skycast = require('./getWeather');

var storedData = (address) => {
    var result = skycast.getWeather(address);
    
    return result.then((response) => {
        return dsObject = {
            address: response.formatted_add,
            lat: response.lat,
            long: response.long,
            temp: response.dsdata.current.temp,
            feelsLike: response.dsdata.current.appTemp,
            summary: response.dsdata.current.summary,
            hourly: response.dsdata.current.hourly,
            dailyHigh: response.dsdata.daily.dailyHigh,
            dailyLow: response.dsdata.daily.dailyLow,
            icon: response.dsdata.current.icon,
            alert: response.dsdata.current.alerts,
            alertsURI: response.dsdata.current.alertsURI,
            alertsTrue: response.dsdata.current.alertsTrue
        };    
    });
};

module.exports = {
    storedData
};

