const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  image: String,
});

const Products = mongoose.model('products', productSchema);

module.exports = Products;
