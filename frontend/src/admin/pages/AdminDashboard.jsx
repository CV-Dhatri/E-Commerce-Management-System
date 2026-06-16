import AdminLayout from "../layout/AdminLayout";

function AdminDashboard() {
  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Total Products</h3>
          <h2>120</h2>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Total Orders</h3>
          <h2>50</h2>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Total Customers</h3>
          <h2>75</h2>
        </div>

        <div
          style={{
            background: "#dc2626",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Revenue</h3>
          <h2>₹25,000</h2>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;