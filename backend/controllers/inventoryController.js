const Product = require("../models/Product");

// Get Inventory
const getInventory = async (req, res) => {
  try {

    const products =
      await Product.find()
      .populate("category");

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Update Stock
const updateStock = async (req, res) => {
  try {

    const { stockQuantity } = req.body;

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        { stockQuantity },
        { new: true }
      );

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Low Stock Alert
const getLowStockProducts = async (req, res) => {
  try {

    const products =
      await Product.find({
        stockQuantity: { $lt: 10 }
      });

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Inventory Report
const inventoryReport = async (req, res) => {
  try {

    const totalProducts =
      await Product.countDocuments();

    const totalStock =
      await Product.aggregate([
        {
          $group: {
            _id: null,
            totalStock: {
              $sum: "$stockQuantity"
            }
          }
        }
      ]);

    res.status(200).json({
      totalProducts,
      totalStock:
        totalStock[0]?.totalStock || 0
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getInventory,
  updateStock,
  getLowStockProducts,
  inventoryReport
};