const superagent = require('superagent');

const key = '98cc9ebf1779cfcb82fb4ebed1a6d04a';
const units = 'metric'

const getCityDataByCityId = (id) => {
    const query = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}&units=${units}`
    console.log(query)
    return superagent.get(query).then();
    
}

const getCityDataByLatitudeAndLogitude = (lat, lon) => {
    const query = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`
    console.log(query)
    return superagent.get(query).then();
}

const getCityDataForecastByLatitudeAndLogitude = (lat, lon) => {
    const query = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`
    console.log(query)
    return superagent.get(query).then();
}

const getCityDataForecastByCityId = (id) => {
    const query = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}&units=${units}`
    console.log(query)
    return superagent.get(query).then();
    
}

// exports
exports.getCityDataByCityId = getCityDataByCityId;
exports.getCityDataByLatitudeAndLogitude = getCityDataByLatitudeAndLogitude;
exports.getCityDataForecastByLatitudeAndLogitude = getCityDataForecastByLatitudeAndLogitude
exports.getCityDataForecastByCityId = getCityDataForecastByCityId