import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderSuccess from "./pages/OrderSuccess";

import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

import Address from "./pages/Address";
import AddAddress from "./pages/AddAddress";
import EditAddress from "./pages/EditAddress";

import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import OrderTracking from "./pages/OrderTracking";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        {/* Address */}
        <Route path="/address" element={<Address />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/edit-address/:id" element={<EditAddress />} />

        {/* Orders */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />
        <Route path="/order-tracking/:id" element={<OrderTracking />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;