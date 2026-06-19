console.log("Product Routes Loaded");

const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware =
require("../middleware/roleMiddleware");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
}
=
require("../controllers/productController");

// Public Routes
router.get("/test", (req,res)=>{
    res.send("Product API Working");
});

router.get("/", getProducts);

router.get("/:id", getProductById);

// Admin Only Routes
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createProduct
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProduct
);

module.exports = router;