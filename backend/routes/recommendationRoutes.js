const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
    getRecommendations,
    getTopSellingProducts,
    getCustomerInsights,
    getProductPerformance,
    getAnalyticsSummary
} = require("../controllers/recommendationController");

router.get(
    "/top-selling",
    authMiddleware,
    roleMiddleware("admin"),
    getTopSellingProducts
);

router.get(
    "/customer-insights",
    authMiddleware,
    roleMiddleware("admin"),
    getCustomerInsights
);

router.get(
    "/product-performance",
    authMiddleware,
    roleMiddleware("admin"),
    getProductPerformance
);

router.get(
    "/summary",
    authMiddleware,
    roleMiddleware("admin"),
    getAnalyticsSummary
);

// IMPORTANT: This must be LAST
router.get(
    "/:userId",
    authMiddleware,
    getRecommendations
);

module.exports = router;