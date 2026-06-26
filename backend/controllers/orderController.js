const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Create Order / Checkout
const createOrder = async (req, res) => {
  try {

    const cart = await Cart.findOne({
      user: req.user.id
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty"
      });
    }

    // Product & Stock Validation
    for (const item of cart.items) {

      if (!item.product) {
        return res.status(400).json({
          message: "Product not found"
        });
      }

      if (item.product.stockQuantity < item.quantity) {
        return res.status(400).json({
          message: `${item.product.name} is out of stock`
        });
      }

    }

    let totalAmount = 0;

    const products = cart.items.map(item => {

      totalAmount +=
        item.product.price * item.quantity;

      return {
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price
      };

    });

    const order = await Order.create({
      user: req.user.id,
      products,
      totalAmount,
      address: req.body.address,
      status: "Pending"
    });

    // Reduce Stock
    for (const item of cart.items) {

      await Product.findByIdAndUpdate(
        item.product._id,
        {
          $inc: {
            stockQuantity: -item.quantity
          }
        }
      );

    }

    // Clear Cart
    cart.items = [];

    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Get All Orders of Logged In User
const getUserOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      user: req.user.id
    })
    .populate("products.product");

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Get Single Order Details
const getOrderDetails = async (req, res) => {
  try {

    const order = await Order.findById(
      req.params.id
    )
    .populate("products.product");

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
//get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Coupon Validation
const validateCoupon = async (req, res) => {
  try {

    const { couponCode } = req.body;

    if (couponCode === "SAVE10") {

      return res.status(200).json({
        valid: true,
        discount: 10,
        message: "Coupon Applied Successfully"
      });

    }

    return res.status(200).json({
      valid: false,
      discount: 0,
      message: "Invalid Coupon"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


module.exports = {
  createOrder,
  getUserOrders,
  getAllOrders,
  getOrderDetails,
  validateCoupon,
};