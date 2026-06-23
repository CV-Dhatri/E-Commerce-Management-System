import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar, Pie } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
useEffect(() => {
  fetchProducts();
  fetchCategories();
}, []);

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

const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/categories"
    );

    setCategories(response.data);
  } catch (error) {
    console.log(error);
  }
};
  const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [5000, 8000, 12000, 15000, 18000, 25000],
      borderColor: "#2563eb",
      backgroundColor: "#93c5fd",
    },
  ],
};
const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [50, 70, 90, 120, 140, 180],
      backgroundColor: "#16a34a",
    },
  ],
};

const categoryData = {
  labels: categories.map(
    (category) => category.name
  ),
  datasets: [
    {
      data: categories.map(() => 1),
      backgroundColor: [
        "#2563eb",
        "#16a34a",
        "#f59e0b",
        "#dc2626",
      ],
    },
  ],
};

const orderStatusData = {
  labels: ["Delivered", "Shipped", "Processing", "Cancelled"],
  datasets: [
    {
      data: [55, 20, 15, 10],
      backgroundColor: [
        "#16a34a",
        "#2563eb",
        "#f59e0b",
        "#dc2626",
      ],
    },
  ],
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
      <h2>{products.length}</h2>
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
      <h2>50</h2>
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
      <h2>75</h2>
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
      <h2>₹25,000</h2>
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
      (product) =>
        product.stockQuantity < 10
    ).length
  }
</h2>
    </div>
  </div>

  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>🔥 Top Selling Products</h3>

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Product</th>
          <th>Units Sold</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Laptop</td>
          <td>150</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Mouse</td>
          <td>120</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Keyboard</td>
          <td>95</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Headphones</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>
  </div>
 <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "20px",
  }}
>
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      height: "350px",
    }}
  >
    <h3>📈 Revenue Chart</h3>
    <Line data={revenueData} />
  </div>
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>📊 Monthly Sales Chart</h3>
    <Bar data={salesData} />
  </div>

  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>📂 Category Performance</h3>
    <Pie data={categoryData} />
  </div>

  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>🛒 Order Status</h3>
    <Pie data={orderStatusData} />
  </div>
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  }}
>
  <h3>💡 Business Insights</h3>

  <ul>
    <li>Revenue increased by 20% this month.</li>
    <li>Laptop is the top-selling product.</li>
    <li>Electronics category generates highest revenue.</li>
    <li>8 products are currently low in stock.</li>
    <li>Customer orders increased compared to last month.</li>
  </ul>
</div>
</AdminLayout>


);
}

export default AdminDashboard;
