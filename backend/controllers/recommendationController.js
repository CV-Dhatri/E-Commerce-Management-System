const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

// ===========================================
// Product Recommendation
// ===========================================
const getRecommendations = async (req, res) => {

    try {

        const userId = req.params.userId;

        // Get all user orders
        const orders = await Order.find({
            user: userId
        }).populate("products.product");

        if (orders.length === 0) {

            return res.json({
                message: "No purchase history found",
                recommendations: []
            });

        }

        // Purchased Categories
        const categoryIds = [];

        orders.forEach(order => {

            order.products.forEach(item => {

                if (
                    item.product &&
                    item.product.category
                ) {

                    categoryIds.push(
                        item.product.category.toString()
                    );

                }

            });

        });

        // Remove duplicate categories
        const uniqueCategories =
            [...new Set(categoryIds)];

        // Purchased Product IDs
        const purchasedProducts = [];

        orders.forEach(order => {

            order.products.forEach(item => {

                purchasedProducts.push(
                    item.product._id
                );

            });

        });

        // Recommend similar products
        const recommendations =
            await Product.find({

                category: {
                    $in: uniqueCategories
                },

                _id: {
                    $nin: purchasedProducts
                }

            }).limit(5);

        res.status(200).json(recommendations);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ===========================================
// Top Selling Products
// ===========================================
const getTopSellingProducts = async (req, res) => {

    try {

        const products =
            await Order.aggregate([

                {
                    $unwind: "$products"
                },

                {
                    $group: {

                        _id: "$products.product",

                        totalSold: {
                            $sum: "$products.quantity"
                        }

                    }

                },

                {
                    $sort: {
                        totalSold: -1
                    }
                },

                {
                    $limit: 5
                }

            ]);

        await Product.populate(
            products,
            {
                path: "_id",
                select: "name price category"
            }
        );

        res.json(products);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ===========================================
// Customer Insights
// ===========================================
const getCustomerInsights = async (req, res) => {

    try {

        const insights =
            await Order.aggregate([

                {

                    $group: {

                        _id: "$user",

                        totalOrders: {
                            $sum: 1
                        },

                        totalSpent: {
                            $sum: "$totalAmount"
                        }

                    }

                },

                {
                    $sort: {
                        totalSpent: -1
                    }
                }

            ]);

        await User.populate(
            insights,
            {
                path: "_id",
                select: "name email"
            }
        );

        res.json(insights);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ===========================================
// Product Performance
// ===========================================
const getProductPerformance = async (req, res) => {

    try {

        const performance =
            await Order.aggregate([

                {
                    $unwind: "$products"
                },

                {

                    $group: {

                        _id: "$products.product",

                        quantitySold: {
                            $sum: "$products.quantity"
                        },

                        revenue: {

                            $sum: {

                                $multiply: [

                                    "$products.quantity",

                                    "$products.price"

                                ]

                            }

                        }

                    }

                },

                {

                    $sort: {
                        revenue: -1
                    }

                }

            ]);

        await Product.populate(
            performance,
            {
                path: "_id",
                select: "name stockQuantity category"
            }
        );

        res.json(performance);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ===========================================
// Analytics Summary
// ===========================================
const getAnalyticsSummary = async (req, res) => {

    try {

        const totalRevenue =
            await Order.aggregate([

                {

                    $group: {

                        _id: null,

                        revenue: {
                            $sum: "$totalAmount"
                        }

                    }

                }

            ]);

        const totalCustomers =
            await User.countDocuments({
                role: "user"
            });

        const totalProducts =
            await Product.countDocuments();

        const totalOrders =
            await Order.countDocuments();

        res.json({

            totalRevenue:
                totalRevenue[0]?.revenue || 0,

            totalCustomers,

            totalProducts,

            totalOrders

        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {

    getRecommendations,

    getTopSellingProducts,

    getCustomerInsights,

    getProductPerformance,

    getAnalyticsSummary

};