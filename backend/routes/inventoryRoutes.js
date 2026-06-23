const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const {
  getInventory,
  updateStock,
  getLowStockProducts,
  inventoryReport
}
=
require("../controllers/inventoryController");

// Admin Only
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getInventory
);

router.put(
  "/stock/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateStock
);

router.get(
  "/low-stock",
  authMiddleware,
  roleMiddleware("admin"),
  getLowStockProducts
);

router.get(
  "/report",
  authMiddleware,
  roleMiddleware("admin"),
  inventoryReport
);

module.exports = router;