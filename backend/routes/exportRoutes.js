const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const {

  exportOrders,

  exportProducts,

  exportCustomers,

  exportReviews

} = require("../controllers/exportController");

// Export Orders
router.get(
  "/orders",
  authMiddleware,
  roleMiddleware("admin"),
  exportOrders
);

// Export Products
router.get(
  "/products",
  authMiddleware,
  roleMiddleware("admin"),
  exportProducts
);

// Export Customers
router.get(
  "/customers",
  authMiddleware,
  roleMiddleware("admin"),
  exportCustomers
);

// Export Reviews
router.get(
  "/reviews",
  authMiddleware,
  roleMiddleware("admin"),
  exportReviews
);

module.exports = router;