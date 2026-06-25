const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const shippingRoutes = require("./routes/shippingRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const exportRoutes = require("./routes/exportRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

console.log("Auth Routes Loaded");
console.log("User Routes Loaded");
console.log("Category Routes Loaded");
console.log("Product Routes Loaded");
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/shipping", shippingRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/export", exportRoutes);
app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});