import AdminLayout from "../layout/AdminLayout";

function CustomerManagement() {
  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        👥 Customer Management
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Customer List</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>9876543210</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Priya Singh</td>
              <td>priya@gmail.com</td>
              <td>9876543211</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Amit Kumar</td>
              <td>amit@gmail.com</td>
              <td>9876543212</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default CustomerManagement;