import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
function OrderManagement() {
  const [orders, setOrders] = useState([]);
const [selectedOrder, setSelectedOrder] = useState(null);
useEffect(() => {
  fetchOrders();
  const handleStatusUpdate = async (
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

    alert("Order status updated");

    fetchOrders();

  } catch (error) {
    console.log(error);
    alert("Failed to update status");
  }
};
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

    if (response.data.length > 0) {
      setSelectedOrder(response.data[0]);
    }

  } catch (error) {
    console.log(error);
  }
};
const handleStatusUpdate = async (orderId, status) => {
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

    alert("Order status updated");

    fetchOrders();

  } catch (error) {
    console.log(error);
    alert("Failed to update status");
  }
};
return ( <AdminLayout>
<h1
style={{
marginBottom: "20px",
color: "#1e293b",
}}
>
🛒 Order Management </h1>


  {/* Orders Table */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>Order List</h3>

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Product Count</th>
          <th>Total Amount</th>
          <th>Order Status</th>
          <th>Update Status</th>
        </tr>
      </thead>

     <tbody>
  {orders.map((order) => (
    <tr
      key={order._id}
      onClick={() => setSelectedOrder(order)}
      style={{ cursor: "pointer" }}
    >
      <td>{order._id.slice(-6)}</td>

      <td>{order.user?.name}</td>

      <td>{order.products.length}</td>

      <td>₹{order.totalAmount}</td>

      <td>{order.status}</td>

      <td>
        <select
  className="form-select"
  value={order.status}
  onChange={(e) =>
    handleStatusUpdate(
      order._id,
      e.target.value
    )
  }
>
          <option>Pending</option>
          <option>Processing</option>
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

  {/* Order Details */}
 <h3>📋 Order Details</h3>

{selectedOrder ? (
  <>
    <p>
      <strong>Order ID:</strong>{" "}
      {selectedOrder._id}
    </p>

    <p>
      <strong>Customer:</strong>{" "}
      {selectedOrder.user?.name}
    </p>

    <p>
      <strong>Email:</strong>{" "}
      {selectedOrder.user?.email}
    </p>

    <p>
      <strong>Shipping Address:</strong>
      <br />
      {selectedOrder.address.fullName}
      <br />
      {selectedOrder.address.street}
      <br />
      {selectedOrder.address.city},{" "}
      {selectedOrder.address.state}
      <br />
      {selectedOrder.address.country} -{" "}
      {selectedOrder.address.pincode}
    </p>

    <p>
      <strong>Total Amount:</strong> ₹
      {selectedOrder.totalAmount}
    </p>

    <p>
      <strong>Status:</strong>{" "}
      {selectedOrder.status}
    </p>

    <h5>Products</h5>

    <ul>
      {selectedOrder.products.map((item) => (
        <li key={item._id}>
          {item.product?.name} × {item.quantity}
        </li>
      ))}
    </ul>
  </>
) : (
  <p>Select an order to view details.</p>
)}
</AdminLayout>


);
}

export default OrderManagement;
