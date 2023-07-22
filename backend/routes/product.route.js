const express = require('express');
const ProductModel = require('../models/product.model');
const productRoute = express.Router();

productRoute.get('/get-all', (req, res) => {
  ProductModel.find({})
    .then(data => res.send(data))
    .catch(err => res.status(420).send('Error in DB.'));
});

module.exports = productRoute;
