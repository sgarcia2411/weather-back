const superagent = require('superagent');

const key = 'efd10ddc46eb31d72d892aa74394e4ee';

const getIpData = (ip) => {
    const query = `http://api.ipapi.com/api/${ip}?access_key=${key}`
    console.log(query)
    return superagent.get(query).then();
}
exports.getIpData = getIpData;