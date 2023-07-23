const express = require('express');
const ProductModel = require('../models/product.model');
const productRoute = express.Router();

productRoute.get('/get-all', (req, res) => {
  ProductModel.find({})
    .then(data => res.send(data))
    .catch(err => res.status(420).send('Error in DB.'));
});

// Random Product
productRoute.get('/random/:number', async (req, res)  => {
  let count = await ProductModel.count({});

  //let randomProduct = Math.floor(Math.random() * count + 1);

  let query = {
    skip: 0, // Skips first enter a number (products in base)
    limit: parseInt(req.params.number), // Determines how many products will be displayed
    sort: { price: 1 }, // to sort the price with the highest value use sort: { price: -1 };
  };

  // To display all products use projection = null;
  // throw out some value and use it projection = { price: 0 }
  // To display certain values projection = { price: 1, title: 1, description: 1, rating: 0 } itc...
  let projection = {title: 1, description: 1, price: 1};

  ProductModel.find({}, projection, query)
    .then((data) => {
      //console.log(data);
      res.send('ok');
    })
    .catch((err) => {
      //console.log(err);
      res.status(420).send('Error in DB.');
    });
})

// Top two product
productRoute.get('/topTwo', (req, res) => {

  let query = {
    limit: 2,
    sort: { rating: -1 },
  };

  let projection = null;

  ProductModel.find({}, projection, query)
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(415).send(err);
    })
})

module.exports = productRoute;
