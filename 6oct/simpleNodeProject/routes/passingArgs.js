const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res, next) => {
    console.log(`${req.url} ${req.method}`)

})
.post()