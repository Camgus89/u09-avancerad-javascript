const User = require("../models/user");
const Product = require("../models/Product");

exports.addToCart = async (req, res) => {
  try {
    const productId = req.body.productId;
    const quantity = req.body.quantity || 1;
    const userID = req.params.userID;

    const user = await User.findById(userID);

    const newCartItem = {
      product: productId,
      quantity: quantity,
    };

    user.products.push(newCartItem);

    await user.save();

    res.status(200).json({ message: "Produkt tillagd i varukorgen" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userID = req.params.userID;

    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ message: "Användaren hittades inte" });
    }

    const indexToRemove = user.products.findIndex(
      (item) => item.productId === productId
    );

    if (indexToRemove !== -1) {
      user.products.splice(indexToRemove, 1);
    }

    await user.save();

    res.status(200).json({ message: "Produkt borttagen från varukorgen" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const productId = req.params.productId;
    const quantity = req.body.quantity;
    const userID = req.params.userID;

    const user = await User.findById(userID);

    const itemToUpdate = user.products.find(
      (item) => item.productId === productId
    );

    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
    }

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

    const user = await User.findById(userID).populate({
      path: "products.product",
      model: "Product",
    });

    const cartItems = user.products.map((cartItem) => ({
      productInfo: cartItem.product,
      quantity: cartItem.quantity,
    }));

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
