import AdminLayout from "../layout/AdminLayout";

function ReviewManagement() {
  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        ⭐ Review Management
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Customer Reviews</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Rahul Sharma</td>
              <td>Laptop</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>Excellent product and fast delivery.</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Priya Singh</td>
              <td>Mouse</td>
              <td>⭐⭐⭐⭐</td>
              <td>Good quality and affordable.</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Amit Kumar</td>
              <td>Keyboard</td>
              <td>⭐⭐⭐</td>
              <td>Works fine but delivery was delayed.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default ReviewManagement;