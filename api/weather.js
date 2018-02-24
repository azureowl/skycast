const skycast = require('./getWeather');

var storedData = (address) => {
    var result = skycast.getWeather(address);
    
    return result.then((response) => {
        return dsObject = {
            address: response.formatted_add,
            pageTitle: "Skycast",
            intro: "Welcome to my weather app!",
            temp: response.dsdata.current.temp,
            feelsLike: response.dsdata.current.appTemp,
            summary: response.dsdata.current.summary,
            dailyWkSum: response.dsdata.daily.summary,
            dailySum: response.dsdata.daily.dailySummary,
            dailyHigh: response.dsdata.daily.dailyHigh,
            dailyLow: response.dsdata.daily.dailyLow
        };    
    });
};

module.exports = {
    storedData
};

