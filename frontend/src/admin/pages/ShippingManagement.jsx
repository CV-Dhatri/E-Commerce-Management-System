import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";

function ShippingManagement() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
  fetchOrders();
}, []);

const fetchOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(response.data);

  } catch (error) {
    console.log(error);
  }
};
const updateShippingStatus = async (
  orderId,
  status
) => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/shipping/status/${orderId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Shipping status updated");

    fetchOrders();

  } catch (error) {
    console.log(error);
    alert("Failed to update");
  }
};
return ( <AdminLayout>
<h1
style={{
marginBottom: "20px",
color: "#1e293b",
}}
>
🚚 Shipping Management </h1>


  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>Shipping Orders</h3>

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Shipping Status</th>
          <th>Update Status</th>
        </tr>
      </thead>

      <tbody>
  {orders.map((order) => (
    <tr key={order._id}>
      <td>{order._id.slice(-6)}</td>

      <td>{order.user?.name}</td>

      <td>{order.status}</td>

      <td>
        <select
          className="form-select"
          value={order.status}
          onChange={(e) =>
            updateShippingStatus(
              order._id,
              e.target.value
            )
          }
        >
          <option>Pending</option>
          <option>Processing</option>
          <option>Packed</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
      </td>
    </tr>
  ))}
</tbody>
    </table>
  </div>
</AdminLayout>


);
}

export default ShippingManagement;
