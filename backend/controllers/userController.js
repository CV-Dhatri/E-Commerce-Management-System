const User = require("../models/User");

// Get Profile
const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id)
      .select("-password");

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Get All Users (Admin)
const getAllUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
// Update Profile
const updateProfile = async (req, res) => {
  try {

    const user = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      {
        new: true
      }
    ).select("-password");

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Add Address
const addAddress = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    user.addresses.push(req.body);

    await user.save();

    res.status(201).json(user.addresses);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Update Address
const updateAddress = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    const address =
      user.addresses.id(req.params.id);

    if (!address) {
      return res.status(404).json({
        message: "Address not found"
      });
    }

    Object.assign(address, req.body);

    await user.save();

    res.status(200).json(address);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
const getAddresses = async (req, res) => {
  try {

    const user = await User.findById(
      req.user.id
    );

    res.status(200).json(
      user.addresses
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
// Delete Address
const deleteAddress = async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    user.addresses =
      user.addresses.filter(
        address =>
          address._id.toString() !== req.params.id
      );

    await user.save();

    res.status(200).json({
      success: true,
      message: "Address deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getProfile,
  getAllUsers,
  updateProfile,
  addAddress,
  updateAddress,
  getAddresses,
  deleteAddress
};