const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {
  createOrder,
  getUserOrders,
  getOrderDetails,
  validateCoupon
}
=
require("../controllers/orderController");

router.post(
  "/checkout",
  authMiddleware,
  createOrder
);

router.get(
  "/my-orders",
  authMiddleware,
  getUserOrders
);

router.get(
  "/:id",
  authMiddleware,
  getOrderDetails
);

router.post(
  "/coupon",
  authMiddleware,
  validateCoupon
);

module.exports = router;