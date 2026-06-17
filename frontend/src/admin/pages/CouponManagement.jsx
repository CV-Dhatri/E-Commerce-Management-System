import AdminLayout from "../layout/AdminLayout";

function CouponManagement() {
  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        🎟️ Coupon Management
      </h1>

      {/* Add Coupon Form */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Add Coupon</h3>

        <form>
          <input
            type="text"
            placeholder="Coupon Code"
            className="form-control mb-3"
          />

          <input
            type="number"
            placeholder="Discount Percentage"
            className="form-control mb-3"
          />

          <input
            type="date"
            className="form-control mb-3"
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Coupon
          </button>
        </form>
      </div>

      {/* Coupon Table */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Available Coupons</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Coupon Code</th>
              <th>Discount</th>
              <th>Expiry Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>SAVE10</td>
              <td>10%</td>
              <td>31-12-2026</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>WELCOME20</td>
              <td>20%</td>
              <td>30-11-2026</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>3</td>
              <td>FESTIVE15</td>
              <td>15%</td>
              <td>15-10-2026</td>
              <td>Expired</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default CouponManagement;