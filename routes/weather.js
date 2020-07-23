const express = require('express');
const router = express.Router();

const ipApiService = require('../services/ip-api.service');
const weatherService = require('../services/weather.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({ service: "weather" });
});

router.get('/location', async (req, res, next) => {
    const { ip } = req.query;
    const { body } = await ipApiService.getIpData(ip)
    const weather = await weatherService.getCityDataByLatitudeAndLogitude(body.latitude, body.longitude)

    res.send(weather.body);
});

router.get('/current', async (req, res, next) => {
    const { ip } = req.query;
    const { body } = await ipApiService.getIpData(ip)
    const weather = await weatherService.getCityDataByLatitudeAndLogitude(body.latitude, body.longitude)

    res.send(weather.body);
});

router.get('/current/:city', async (req, res, next) => {
    const city = (req.params) ? req.params.city : null;
    const weather = await weatherService.getCityDataByCityId(city);

    res.send(weather.body);
});

router.get('/forecast', async (req, res, next) => {
    const { ip } = req.query;
    const { body } = await ipApiService.getIpData(ip)
    const weather = await weatherService.getCityDataForecastByLatitudeAndLogitude(body.latitude, body.longitude)

    res.send(weather.body);
});

router.get('/forecast/:city', async (req, res, next) => {
    const city = (req.params) ? req.params.city : null;
    const weather = await weatherService.getCityDataForecastByCityId(city);

    res.send(weather.body);
});

module.exports = router;