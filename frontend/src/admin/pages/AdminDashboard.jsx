import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchDashboard();
    fetchProducts();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/analytics/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
return ( <AdminLayout>
<h1
style={{
marginBottom: "25px",
color: "#1e293b",
}}
>
📊 Analytics Dashboard </h1>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background: "#2563eb",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h4>📦 Products</h4>
    <h2>{stats.totalProducts}</h2>
  </div>

  <div
    style={{
      background: "#16a34a",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h4>🛒 Orders</h4>
    <h2>{stats.totalOrders}</h2>
  </div>

  <div
    style={{
      background: "#f59e0b",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h4>👥 Customers</h4>
    <h2>{stats.totalCustomers}</h2>
  </div>

  <div
    style={{
      background: "#dc2626",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h4>💰 Revenue</h4>
    <h2>₹{stats.totalRevenue}</h2>
  </div>

  <div
    style={{
      background: "#7c3aed",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h4>⚠️ Low Stock</h4>
    <h2>
      {
        products.filter(
          (product) => product.stockQuantity < 10
        ).length
      }
    </h2>
  </div>
</div>
        <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            marginBottom: "20px",
            color: "#1e293b",
          }}
        >
          💡 Business Insights
        </h3>

        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <th>Total Products</th>
              <td>{stats.totalProducts}</td>
            </tr>

            <tr>
              <th>Total Orders</th>
              <td>{stats.totalOrders}</td>
            </tr>

            <tr>
              <th>Total Customers</th>
              <td>{stats.totalCustomers}</td>
            </tr>

            <tr>
              <th>Total Revenue</th>
              <td>₹{stats.totalRevenue}</td>
            </tr>

            <tr>
              <th>Low Stock Products</th>
              <td>
                {
                  products.filter(
                    (product) => product.stockQuantity < 10
                  ).length
                }
              </td>
            </tr>

            <tr>
              <th>Inventory Status</th>
              <td>
                {products.filter(
                  (product) => product.stockQuantity < 10
                ).length > 0
                  ? "Some products need restocking."
                  : "All products are sufficiently stocked."}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
