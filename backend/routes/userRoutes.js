

const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
  addAddress,
  updateAddress,
  getAddresses,
  deleteAddress
}
=
require("../controllers/userController");

// Profile
router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.put(
  "/profile",
  authMiddleware,
  updateProfile
);

// Address
router.post(
  "/address",
  authMiddleware,
  addAddress
);

router.get(
  "/addresses",
  authMiddleware,
  getAddresses
);

router.put(
  "/address/:id",
  authMiddleware,
  updateAddress
);

router.delete(
  "/address/:id",
  authMiddleware,
  deleteAddress
);

module.exports = router;