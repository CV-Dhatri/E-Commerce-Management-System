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
import AdminLogin from "./admin/pages/AdminLogin";
import ShippingManagement from "./admin/pages/ShippingManagement";

import ProtectedRoute from "./admin/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ManageProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <CategoryManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <InventoryManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shipping"
          element={
           <ProtectedRoute>
             <ShippingManagement />
           </ProtectedRoute>
         }
       />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <CustomerManagement />
            </ProtectedRoute>
          }
        />


        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;