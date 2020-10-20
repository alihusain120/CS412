var express = require('express');
var router = express.Router();

/* GET a fixed string. */
router.get('/', (req, res, next) => {
    res.render('ps3', { string : 'Here is my fixed string' });
})

router.post('/', function (req, res, next) {
    req.body.word = req.query.word
    res.render('ps3', { word : req.body.word, len: req.body.word.length });
})

module.exports = router;
