var express = require('express');
var router = express.Router();
const APICONFIG = require('../config/config');
const fetch = require("node-fetch");

router.post('/', async (req, res) => {
    const apivalue = await fetch(APICONFIG.url + APICONFIG.key + '&q=' + req.body.city)
    request(apivalue, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
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

