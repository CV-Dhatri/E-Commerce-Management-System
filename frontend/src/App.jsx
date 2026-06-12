import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import ManageProducts from "./admin/ManageProducts";
import InventoryManagement from "./admin/InventoryManagement";
import OrderManagement from "./admin/OrderManagement";
import Reports from "./admin/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/products" element={<ManageProducts />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;