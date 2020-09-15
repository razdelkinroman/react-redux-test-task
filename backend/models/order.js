const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    title: {
      type: String
    },
    distance: {
      type: String
    },
    type: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
    collection: 'orders'
  }
);

module.exports = mongoose.model('Order', orderSchema);
