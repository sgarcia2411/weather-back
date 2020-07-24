const ipApiService = require('../services/ip-api.service');
const assert    = require("chai").assert;
const should = require('should');

describe("ip api service get info for your api ", function() {
    describe("Check IP data: ", function() {
        it("Check data return with ip 8.8.8.8 (Google) ", async function() {
            const ip = "8.8.8.8"
            const dataResult = {
                "ip": "8.8.8.8",
                "type": "ipv4",
                "latitude": 37.38801956176758,
                "longitude": -122.07431030273438
            };
            const result = await ipApiService.getIpData(ip);

            assert.equal(result.body.ip, dataResult.ip);
            dataResult.should.have.property('ip', dataResult.ip);
            dataResult.should.have.property('ip').which.is.a.String()

            assert.equal(result.body.type, dataResult.type);
            dataResult.should.have.property('type', dataResult.type);
            dataResult.should.have.property('type').which.is.a.String()

            assert.equal(result.body.latitude, dataResult.latitude);
            dataResult.should.have.property('latitude', dataResult.latitude);
            dataResult.should.have.property('latitude').which.is.a.Number()

            assert.equal(result.body.longitude, dataResult.longitude);
            dataResult.should.have.property('longitude', dataResult.longitude);
            dataResult.should.have.property('longitude').which.is.a.Number()
        });
    });
})
