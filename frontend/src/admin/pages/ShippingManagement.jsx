import AdminLayout from "../layout/AdminLayout";

function ShippingManagement() {
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
        <tr>
          <td>#ORD001</td>
          <td>Rahul Sharma</td>
          <td>Processing</td>
          <td>
            <select className="form-select">
              <option>Processing</option>
              <option>Packed</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>#ORD002</td>
          <td>Priya Singh</td>
          <td>Shipped</td>
          <td>
            <select className="form-select">
              <option>Processing</option>
              <option>Packed</option>
              <option selected>Shipped</option>
              <option>Delivered</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</AdminLayout>


);
}

export default ShippingManagement;
