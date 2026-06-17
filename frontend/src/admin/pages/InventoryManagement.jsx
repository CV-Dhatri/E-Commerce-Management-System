import AdminLayout from "../layout/AdminLayout";

function InventoryManagement() {
return ( <AdminLayout>
<h1
style={{
marginBottom: "20px",
color: "#1e293b",
}}
>
📊 Inventory Management </h1>

  {/* Inventory Dashboard Cards */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginBottom: "25px",
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
      <h4>Total Products</h4>
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
      <h4>Total Stock</h4>
      <h2>2,450</h2>
    </div>

    <div
      style={{
        background: "#dc2626",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h4>Low Stock Items</h4>
      <h2>8</h2>
    </div>
  </div>

  {/* Inventory Table */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>Inventory Stock</h3>

    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Stock Quantity</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Laptop</td>
          <td>Electronics</td>
          <td>25</td>
        </tr>

        <tr>
          <td>Mouse</td>
          <td>Accessories</td>
          <td>100</td>
        </tr>

        <tr>
          <td>Keyboard</td>
          <td>Accessories</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Low Stock Products */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>⚠️ Low Stock Products</h3>

    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Current Stock</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Headphones</td>
          <td>5</td>
        </tr>

        <tr>
          <td>Webcam</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Stock Update Form */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3>Update Stock</h3>

    <form>
      <input
        type="text"
        placeholder="Product Name"
        className="form-control mb-3"
      />

      <input
        type="number"
        placeholder="New Stock Quantity"
        className="form-control mb-3"
      />

      <button
        type="submit"
        className="btn btn-primary"
      >
        Update Stock
      </button>
    </form>
  </div>
</AdminLayout>

);
}

export default InventoryManagement;
