const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

// =============================
// Export Orders
// =============================
const exportOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product", "name price");

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// =============================
// Export Products
// =============================
const exportProducts = async (req, res) => {
  try {

    const products = await Product.find()
      .populate("category");

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// =============================
// Export Customers
// =============================
const exportCustomers = async (req, res) => {
  try {

    const customers = await User.find(
      { role: "user" }
    ).select("-password");

    res.status(200).json(customers);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// =============================
// Export Reviews
// =============================
const exportReviews = async (req, res) => {

  try {

    // If Review model doesn't exist
    // return an empty list

    res.status(200).json({
      message: "Review module not implemented",
      reviews: []
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {

  exportOrders,

  exportProducts,

  exportCustomers,

  exportReviews

};