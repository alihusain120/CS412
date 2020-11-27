var express = require('express');
var router = express.Router();
const APICONFIG = require('../config/config');
const fetch = require("node-fetch");

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, response) => {
    if (err) {throw new Error('Flushing error')}
})

router.post('/', async (req, res) => {
    const apivalue = await fetch(APICONFIG.url + APICONFIG.key + '&q=' + req.body.city)

    if (await asyncExists(apivalue)){

        let data = asyncGet(apivalue);
        let response = {
            value: data,
            cached: true
        }
        res.json(response);

    } else {

        let data = request(apivalue, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
        await asyncSet(apivalue, data);
        let response = {
            value: data,
            cached: false
        }
        res.json(response);
    }

})

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData('/', { })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });

module.exports = router;

