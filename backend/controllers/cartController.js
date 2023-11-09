const User = require("../models/user");
const Product = require('../models/Product'); // Importera din Product-modell

exports.addToCart = async (req, res) => {
  try {
    const productId = req.body.productId; // Hämta productId från request body
    const quantity = req.body.quantity || 1; // Antal att lägga till i varukorgen
    const userID = req.params.userID;

    const user = await User.findById(userID); // Hitta användaren i databasen

    // Skapa en ny post i varukorgen
    const newCartItem = {
      product: productId,
      quantity: quantity,
    };

    // Lägg till den nya posten i användarens varukorg
    user.products.push(newCartItem);

    // Spara användaren med den uppdaterade varukorgen i databasen
    await user.save();

    res.status(200).json({ message: "Produkt tillagd i varukorgen" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const productId = req.params.productId; // Hämta productId från URL
    const userID = req.params.userID;

    const user = await User.findById(userID); // Hitta användaren i databasen

    if (!user) {
      return res.status(404).json({ message: "Användaren hittades inte" });
    }

    // Hitta index för produktposten som ska tas bort
    const indexToRemove = user.products.findIndex(
      (item) => item.productId === productId
    );

    // Om produkten finns i varukorgen, ta bort den
    if (indexToRemove !== -1) {
      user.products.splice(indexToRemove, 1);
    }

    // Spara användaren med den uppdaterade varukorgen i databasen
    await user.save();

    res.status(200).json({ message: "Produkt borttagen från varukorgen" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};


// Uppdatera en produkt i varukorgen
exports.updateCartItem = async (req, res) => {
  try {
    const productId = req.params.productId; // Hämta productId från URL
    const quantity = req.body.quantity; // Nytt antal för produkten
    const userID = req.params.userID;

    const user = await User.findById(userID); // Hitta användaren i databasen

    // Hitta produktposten som ska uppdateras
    const itemToUpdate = user.products.find(
      (item) => item.productId === productId
    );

    // Om produkten finns i varukorgen, uppdatera antalet
    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
    }

    // Spara användaren med den uppdaterade varukorgen i databasen
    await user.save();

    res.status(200).json({ message: "Produkt i varukorgen uppdaterad" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.getAllCartItems = async (req, res) => {
  try {
    const userID = req.params.userID;

    // Hämta användaren
    const user = await User.findById(userID).populate({
      path: 'products.product',
      model: 'Product'
    });

    // Hämta produkterna i varukorgen
    const cartItems = user.products.map(cartItem => ({
      productInfo: cartItem.product,
      quantity: cartItem.quantity
    }));

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};



