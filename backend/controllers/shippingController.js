const Order = require("../models/Order");

// Update Order Status
const updateOrderStatus = async (
  req,
  res
) => {
  try {

    const { status } = req.body;

    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Order Tracking
const trackOrder = async (
  req,
  res
) => {
  try {

    const order =
      await Order.findById(
        req.params.id
      );

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.status(200).json({
      orderId: order._id,
      status: order.status
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Shipping Status
const shippingStatus = async (
  req,
  res
) => {
  try {

    const order =
      await Order.findById(
        req.params.id
      );

    res.status(200).json({
      status: order.status
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  updateOrderStatus,
  trackOrder,
  shippingStatus
};