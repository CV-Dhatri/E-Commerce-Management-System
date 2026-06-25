const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const {

  getRevenueAnalytics,

  getProductAnalytics,

  getCustomerAnalytics,

  getDashboardStats,

  getTopSellingProducts,

  getLowStockProducts

} = require("../controllers/analyticsController");

// Revenue Analytics
router.get(
  "/revenue",
  authMiddleware,
  roleMiddleware("admin"),
  getRevenueAnalytics
);

// Product Analytics
router.get(
  "/products",
  authMiddleware,
  roleMiddleware("admin"),
  getProductAnalytics
);

// Customer Analytics
router.get(
  "/customers",
  authMiddleware,
  roleMiddleware("admin"),
  getCustomerAnalytics
);

// Dashboard Statistics
router.get(
  "/dashboard",
  authMiddleware,
  roleMiddleware("admin"),
  getDashboardStats
);

// Top Selling Products
router.get(
  "/top-products",
  authMiddleware,
  roleMiddleware("admin"),
  getTopSellingProducts
);

// Low Stock Products
router.get(
  "/low-stock",
  authMiddleware,
  roleMiddleware("admin"),
  getLowStockProducts
);

module.exports = router;