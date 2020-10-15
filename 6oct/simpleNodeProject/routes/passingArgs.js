const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res, next) => {
    console.log(`Got ${req.query.name} and ${req.query.dept} on ${req.url} ${req.method}`)
    console.log(`Here's the list of params:\n`)
    for (key in req.query){
        console.log(`${key}`);
    }
})

.post((req, res, next) => {
    console.log(`Got ${req.query.name} and ${req.query.dept} on ${req.url} ${req.method}`)
    req.params.name=req.body.name;
    req.isAuthenticated = false;
    console.log('');
    res.render('passingArgs', {'name': req.body.name})

})
module.exports = router;