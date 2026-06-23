const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const {
  updateOrderStatus,
  trackOrder,
  shippingStatus
}
=
require("../controllers/shippingController");

// Admin
router.put(
  "/status/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateOrderStatus
);

// Customer
router.get(
  "/track/:id",
  authMiddleware,
  trackOrder
);

router.get(
  "/shipping-status/:id",
  authMiddleware,
  shippingStatus
);

module.exports = router;