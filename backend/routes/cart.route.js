const express = require('express');
const CartRouter = express.Router();
const CartModel = require('../models/cart.model');
const verifyToken = require('../validation/tokenValidation');

CartRouter.post('/cartshop/checkout', verifyToken, (req, res) => {
    console.log('bodyCart...', req.body);
});
