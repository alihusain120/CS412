var express = require('express');
var router = express.Router();
const APICONFIG = require('../config/config');
const fetch = require("node-fetch");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
