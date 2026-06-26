import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";

function Reports() {
  const [orders, setOrders] = useState([]);
const [products, setProducts] = useState([]);
const [customers, setCustomers] = useState([]);
const [reviews, setReviews] = useState([]);
useEffect(() => {
  fetchReports();
}, []);

const fetchReports = async () => {
  try {

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const [
      orderRes,
      productRes,
      customerRes,
      reviewRes,
    ] = await Promise.all([

      axios.get(
        "http://localhost:5000/api/export/orders",
        { headers }
      ),

      axios.get(
        "http://localhost:5000/api/export/products",
        { headers }
      ),

      axios.get(
        "http://localhost:5000/api/export/customers",
        { headers }
      ),

      axios.get(
        "http://localhost:5000/api/export/reviews",
        { headers }
      ),

    ]);

    setOrders(orderRes.data);
    setProducts(productRes.data);
    setCustomers(customerRes.data);
    setReviews(reviewRes.data.reviews || []);

  } catch (error) {
    console.log(error);
  }
};
  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        📈 Reports Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "25px",
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
          <h4>Total Revenue</h4>
          <h2>
₹
{orders.reduce(
  (sum, order) =>
    sum + order.totalAmount,
  0
)}
</h2>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h4>Total Orders</h4>
          <h2>{orders.length}</h2>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h4>Total Customers</h4>
          <h2>{customers.length}</h2>
        </div>

        <div
          style={{
            background: "#dc2626",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h4>Total Products</h4>
          <h2>{products.length}</h2>
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
        <h3>Monthly Report Summary</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
              <th>Orders</th>
              <th>Customers</th>
            </tr>
          </thead>

          <tbody>

<tr>
<td>Total Orders</td>
<td>₹{
orders.reduce(
(sum,o)=>sum+o.totalAmount,
0
)}
</td>
<td>{orders.length}</td>
<td>{customers.length}</td>
</tr>

<tr>
<td>Products</td>
<td>-</td>
<td>{products.length}</td>
<td>-</td>
</tr>

<tr>
<td>Reviews</td>
<td>-</td>
<td>{reviews.length}</td>
<td>-</td>
</tr>

</tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Reports;