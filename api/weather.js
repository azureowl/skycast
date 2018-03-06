const skycast = require('./getWeather');

var storedData = (address) => {
    var result = skycast.getWeather(address);
    
    return result.then((response) => {
        return dsObject = {
            address: response.formatted_add,
            temp: response.dsdata.current.temp,
            feelsLike: response.dsdata.current.appTemp,
            summary: response.dsdata.current.summary,
            dailyWkSum: response.dsdata.daily.summary,
            dailySum: response.dsdata.daily.dailySummary,
            dailyHigh: response.dsdata.daily.dailyHigh,
            dailyLow: response.dsdata.daily.dailyLow,
            icon: response.dsdata.current.icon
        };    
    });
};

module.exports = {
    storedData
};

