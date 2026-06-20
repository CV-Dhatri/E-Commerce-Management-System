import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";

function ManageProducts() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }
};
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

       <div
  style={{
    overflowX: "auto",
  }}
>
  <table
    className="table table-bordered table-striped"
    style={{
      width: "100%",
      textAlign: "center",
    }}
  >
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
      {products.map((product, index) => (
        <tr key={product._id}>
          <td>{index + 1}</td>

          <td style={{ minWidth: "180px" }}>
            {product.name}
          </td>

          <td style={{ minWidth: "120px" }}>
            ₹{product.price}
          </td>

          <td style={{ minWidth: "150px" }}>
            {product.category?.name}
          </td>

          <td style={{ minWidth: "100px" }}>
            {product.stockQuantity}
          </td>

          <td style={{ minWidth: "180px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <button className="btn btn-warning btn-sm">
                Edit
              </button>

              <button className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      </div>
    </AdminLayout>
  );
}

export default ManageProducts;