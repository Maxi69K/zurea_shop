const express = require('express');
const UserRouter = express.Router();
const ProductModel = require('../models/product.model');
const UserModel = require('../models/user.model');

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

UserRouter.get('/activate-account/:userId', (req, res) => {
    let {userId} = req.params;
    try {
        UserModel.updateOne({_id: userId}, {isActive: true})
            .then((data) => {
                res.send('OK');
            })
            .catch((error) => {
                console.log(error);
                res.status(410).send('Error while activating user.');
            })
    } catch (e) {
        res.status(410).send('Error while activating user.');
    }
});

UserRouter.get('/get-all', (req, res) => {
    UserModel.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(410).send(error);
      });
});

UserRouter.get('/:id', (req, res) => {
    let {id} = req.params;
    UserModel.find({
        _id: id
    })
    .then((data) => {
        if (!data) {
            return res.status(209).send('no user');
        }
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
        res.status(415).send(error);
    })
})

module.exports = UserRouter;