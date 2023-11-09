const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  productName: String,
  flavor: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model('Product', productSchema);
