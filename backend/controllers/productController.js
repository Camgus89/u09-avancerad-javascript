// controllers/productController.js

const Product = require('../models/Product');

// Skapa en ny produkt
exports.createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

// Hämta alla produkter
exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

// Hämta en produkt med ID
exports.getProductById = async (req, res) => {
    try {
      const productId = req.params.productId; // Hämta productId från URL
      const product = await Product.findById(productId);
      if (!product) {
        res.status(404).json({ message: 'Produkten hittades inte' });
      } else {
        res.json(product);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

// Uppdatera en produkt med ID
exports.updateProduct = async (req, res) => {
    try {
      const productId = req.params.productId; // Hämta productId från URL
      const updatedProduct = req.body; // Uppdaterad produktdata
  
      const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
      if (!product) {
        res.status(404).json({ message: 'Produkten hittades inte' });
      } else {
        res.json(product);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

// Ta bort en produkt med ID
exports.deleteProduct = async (req, res) => {
    try {
      const productId = req.params.productId; // Hämta productId från URL
  
      const product = await Product.findByIdAndRemove(productId);
      if (!product) {
        res.status(404).json({ message: 'Produkten hittades inte' });
      } else {
        res.json({ message: 'Produkten har tagits bort' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

