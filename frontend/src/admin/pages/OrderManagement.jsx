import AdminLayout from "../layout/AdminLayout";

function OrderManagement() {
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
        <tr>
          <td>#ORD001</td>
          <td>Rahul Sharma</td>
          <td>3</td>
          <td>₹5,500</td>
          <td>Processing</td>
          <td>
            <select className="form-select">
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>#ORD002</td>
          <td>Priya Singh</td>
          <td>2</td>
          <td>₹2,000</td>
          <td>Shipped</td>
          <td>
            <select className="form-select">
              <option>Processing</option>
              <option selected>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Order Details */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>📋 Order Details</h3>

    <p>
      <strong>Order ID:</strong> #ORD001
    </p>

    <p>
      <strong>Customer:</strong> Rahul Sharma
    </p>

    <p>
      <strong>Shipping Address:</strong>
      <br />
      24 MG Road,
      <br />
      Bengaluru, Karnataka,
      <br />
      India - 560001
    </p>

    <p>
      <strong>Coupon Applied:</strong> SAVE10
    </p>

    <p>
      <strong>Total Amount:</strong> ₹5,500
    </p>

    <p>
      <strong>Status:</strong> Processing
    </p>
  </div>
</AdminLayout>


);
}

export default OrderManagement;
