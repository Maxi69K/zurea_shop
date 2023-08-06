const express = require('express');
const UserRouter = express.Router();
const ProductModel = require('../models/product.model');

UserRouter.get('/products/:userId', (req, res) => {
    const {userId} = req.params;

    ProductModel.find({userId})
        .then((products) => {
            res.send(products);
        })
        .catch((err) => {
            res.status(415).send(err);
        })
})

module.exports = UserRouter;