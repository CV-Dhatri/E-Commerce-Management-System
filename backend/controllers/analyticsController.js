const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

// ===============================
// Revenue Analytics
// ===============================
const getRevenueAnalytics = async (req, res) => {
  try {

    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalAmount"
          },
          totalOrders: {
            $sum: 1
          }
        }
      }
    ]);

    res.status(200).json(
      revenue[0] || {
        totalRevenue: 0,
        totalOrders: 0
      }
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// ===============================
// Product Analytics
// ===============================
const getProductAnalytics = async (req, res) => {
  try {

    const totalProducts =
      await Product.countDocuments();

    const inStock =
      await Product.countDocuments({
        stockQuantity: { $gt: 0 }
      });

    const outOfStock =
      await Product.countDocuments({
        stockQuantity: 0
      });

    res.status(200).json({
      totalProducts,
      inStock,
      outOfStock
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// ===============================
// Customer Analytics
// ===============================
const getCustomerAnalytics = async (req, res) => {
  try {

    const totalCustomers =
      await User.countDocuments({
        role: "user"
      });

    const totalAdmins =
      await User.countDocuments({
        role: "admin"
      });

    res.status(200).json({
      totalCustomers,
      totalAdmins
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// ===============================
// Dashboard Statistics
// ===============================
const getDashboardStats = async (req, res) => {
  try {

    const totalProducts =
      await Product.countDocuments();

    const totalOrders =
      await Order.countDocuments();

    const totalCustomers =
      await User.countDocuments({
        role: "user"
      });

    const revenue =
      await Order.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$totalAmount"
            }
          }
        }
      ]);

    res.status(200).json({

      totalProducts,

      totalOrders,

      totalCustomers,

      totalRevenue:
        revenue[0]?.totalRevenue || 0

    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// ===============================
// Top Selling Products
// ===============================
const getTopSellingProducts = async (req, res) => {
  try {

    const topProducts =
      await Order.aggregate([

        { $unwind: "$products" },

        {
          $group: {
            _id: "$products.product",
            totalSold: {
              $sum: "$products.quantity"
            }
          }
        },

        {
          $sort: {
            totalSold: -1
          }
        },

        {
          $limit: 5
        }

      ]);

    await Product.populate(
      topProducts,
      {
        path: "_id",
        select: "name price"
      }
    );

    res.status(200).json(topProducts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// ===============================
// Low Stock Products
// ===============================
const getLowStockProducts = async (req, res) => {
  try {

    const products =
      await Product.find({
        stockQuantity: { $lt: 10 }
      });

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {

  getRevenueAnalytics,

  getProductAnalytics,

  getCustomerAnalytics,

  getDashboardStats,

  getTopSellingProducts,

  getLowStockProducts

};