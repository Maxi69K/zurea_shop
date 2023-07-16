const express = require('express');
const authRoute = express.Router();

authRoute.post('/login', (req, res) => {
    console.log(req.body);
    if (!req.body.email || !req.body.password) {
        res.status(409).send(`The ${!req.body.email ? 'email' : 'password'} field is required`);
    }
    res.send('login test');
})

authRoute.post('/register', (req, res) => {
    console.log('REGISTER api call', req.body);
    res.send('register test');
})

module.exports = authRoute;