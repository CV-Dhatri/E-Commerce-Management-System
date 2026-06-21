import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");
const [stockQuantity, setStockQuantity] = useState("");
const [editingId, setEditingId] = useState(null);

useEffect(() => {
  fetchProducts();
  fetchCategories();
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
const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/categories"
    );

    setCategories(response.data);
  } catch (error) {
    console.log(error);
  }
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token =
      localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/products",
      {
        name,
        price,
        category,
        stockQuantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Product Added");

    setName("");
    setPrice("");
    setCategory("");
    setStockQuantity("");

    fetchProducts();

  } catch (error) {
  console.log("ERROR:", error.response?.data);
  console.log(error);

  alert(
    error.response?.data?.message ||
    "Failed to add product"
  );
}
};
const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Product Deleted");

    fetchProducts();

  } catch (error) {
    console.log(error);
    alert("Delete Failed");
  }
};
const handleEdit = (product) => {
  setEditingId(product._id);

  setName(product.name);
  setPrice(product.price);
  setCategory(product.category?._id);
  setStockQuantity(product.stockQuantity);
};
const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/products/${editingId}`,
      {
        name,
        price,
        category,
        stockQuantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Product Updated");

    setEditingId(null);
    setName("");
    setPrice("");
    setCategory("");
    setStockQuantity("");

    fetchProducts();

  } catch (error) {
    console.log(error);
    alert("Update Failed");
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

        <form
  onSubmit={
    editingId
      ? handleUpdate
      : handleSubmit
  }
>        
         <input
  type="text"
  placeholder="Product Name"
  className="form-control mb-3"
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>

          <input
  type="number"
  placeholder="Price"
  className="form-control mb-3"
  value={price}
  onChange={(e) =>
    setPrice(e.target.value)
  }
/>

          <select
  className="form-control mb-3"
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
>
  <option value="">
    Select Category
  </option>

  {categories.map((cat) => (
    <option
      key={cat._id}
      value={cat._id}
    >
      {cat.name}
    </option>
  ))}
</select>

          <input
  type="number"
  placeholder="Stock Quantity"
  className="form-control mb-3"
  value={stockQuantity}
  onChange={(e) =>
    setStockQuantity(e.target.value)
  }
/>

          <button
  type="submit"
  className="btn btn-primary"
>
  {editingId
    ? "Update Product"
    : "Add Product"}
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
              <button
  className="btn btn-warning btn-sm"
  onClick={() => handleEdit(product)}
>
  Edit
</button>

             <button
  className="btn btn-danger btn-sm"
  onClick={() => handleDelete(product._id)}
>
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