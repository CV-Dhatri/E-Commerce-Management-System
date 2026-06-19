const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {
 addToCart,
 getCart,
 updateCartItem,
 removeCartItem
}
=
require("../controllers/cartController");

router.post(
 "/",
 authMiddleware,
 addToCart
);

router.get(
 "/",
 authMiddleware,
 getCart
);

router.put(
 "/:id",
 authMiddleware,
 updateCartItem
);

router.delete(
 "/:id",
 authMiddleware,
 removeCartItem
);

router.get("/test", (req,res)=>{
   res.send("Cart Route Working");
});

module.exports = router;

