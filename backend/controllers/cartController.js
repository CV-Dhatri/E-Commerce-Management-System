const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add To Cart
const addToCart = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({
      user: req.user.id
    });

    if (!cart) {
      cart = await Cart.create({
        user: req.user.id,
        items: []
      });
    }

    const existingItem = cart.items.find(
      item =>
        item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity
      });
    }

    await cart.save();

    res.status(200).json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// View Cart
const getCart = async (req, res) => {
  try {

    const cart = await Cart.findOne({
      user: req.user.id
    }).populate("items.product");

    res.status(200).json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Update Quantity
const updateCartItem = async (req, res) => {
  try {

    const cart = await Cart.findOne({
      user: req.user.id
    });

    const item =
      cart.items.id(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Cart Item Not Found"
      });
    }

    item.quantity = req.body.quantity;

    await cart.save();

    res.status(200).json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Remove Item
const removeCartItem = async (req, res) => {
  try {

    const cart = await Cart.findOne({
      user: req.user.id
    });

    cart.items = cart.items.filter(
      item =>
        item._id.toString() !== req.params.id
    );

    await cart.save();

    res.status(200).json(cart);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem
};