const express = require('express');
const UserModel = require('../models/user.model');
const authRoute = express.Router();

authRoute.post('/login', (req, res) => {
    console.log('body...', req.body);
    if (!req.body.email || !req.body.password) {
        res.status(409).send(`The ${!req.body.email ? 'email' : 'password'} field is required`);
    }

    UserModel.findOne(req.body)
        .then((data) => {
            console.log('data...', data);

            // if user not exists in DB
            if (!data) {
                res.status(215).send('Bad credentials.');
            }

            // user exist in DB
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(415).send(err);
        })
})

authRoute.post('/register', (req, res) => {
    console.log('REGISTER api call', req.body);
    res.send('register test');
})

module.exports = authRoute;