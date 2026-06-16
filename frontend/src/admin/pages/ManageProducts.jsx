import React from "react";
import AdminLayout from "../layout/AdminLayout";

function ManageProducts() {
  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        📦 Manage Products
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search Products..."
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Add Product</h3>

        <form>
          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-3"
          />

          <input
            type="number"
            placeholder="Price"
            className="form-control mb-3"
          />

          <input
            type="text"
            placeholder="Category"
            className="form-control mb-3"
          />

          <input
            type="number"
            placeholder="Stock Quantity"
            className="form-control mb-3"
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Product
          </button>
        </form>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Product List</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Laptop</td>
              <td>₹50,000</td>
              <td>Electronics</td>
              <td>25</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Mouse</td>
              <td>₹500</td>
              <td>Accessories</td>
              <td>100</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default ManageProducts;