import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "./admin/pages/AdminDashboard";
import ManageProducts from "./admin/pages/ManageProducts";
import InventoryManagement from "./admin/pages/InventoryManagement";
import OrderManagement from "./admin/pages/OrderManagement";
import Reports from "./admin/pages/Reports";
import CategoryManagement from "./admin/pages/CategoryManagement";
import CustomerManagement from "./admin/pages/CustomerManagement";
import ReviewManagement from "./admin/pages/ReviewManagement";
import CouponManagement from "./admin/pages/CouponManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/products" element={<ManageProducts />} />
        <Route path="/categories" element={<CategoryManagement />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/customers" element={<CustomerManagement />} />
        <Route path="/reviews" element={<ReviewManagement />} />
        <Route path="/coupons" element={<CouponManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;