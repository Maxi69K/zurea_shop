const Mongoose = require('mongoose');

const cartShema = new Mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const CartModel = Mongoose.model('cart', cartSchema);

module.exports = CartModel;