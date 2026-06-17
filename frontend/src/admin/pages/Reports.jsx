import AdminLayout from "../layout/AdminLayout";

function Reports() {
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
          <h2>₹25,000</h2>
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
          <h4>Total Customers</h4>
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
          <h4>Total Products</h4>
          <h2>120</h2>
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
              <td>January</td>
              <td>₹5,000</td>
              <td>10</td>
              <td>15</td>
            </tr>

            <tr>
              <td>February</td>
              <td>₹8,000</td>
              <td>12</td>
              <td>18</td>
            </tr>

            <tr>
              <td>March</td>
              <td>₹12,000</td>
              <td>15</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Reports;