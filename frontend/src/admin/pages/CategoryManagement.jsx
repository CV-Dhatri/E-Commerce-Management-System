import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
function CategoryManagement() {
  const [categories, setCategories] = useState([]);

useEffect(() => {
  fetchCategories();
}, []);

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
  return (
    <AdminLayout>
      <h1
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        📂 Category Management
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
        <h3>Add Category</h3>

        <form>
          <input
            type="text"
            placeholder="Category Name"
            className="form-control mb-3"
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Category
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
        <h3>Category List</h3>

<table className="table table-bordered table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Category Name</th>
      <th>Actions</th>
    </tr>
  </thead>          
           <tbody>
  {categories.map((category, index) => (
    <tr key={category._id}>
      <td>{index + 1}</td>

      <td>{category.name}</td>

      <td>
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
    </AdminLayout>
  );
}

export default CategoryManagement;