import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
const [editingId, setEditingId] = useState(null);

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
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/categories",
      {
        name,
        description: name,
        status: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Category Added");

    setName("");

    fetchCategories();
  } catch (error) {
    console.log(error);
    alert("Failed");
  }
};

const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/categories/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Category Deleted");

    fetchCategories();
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = (category) => {
  setEditingId(category._id);
  setName(category.name);
};

const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/categories/${editingId}`,
      {
        name,
        description: name,
        status: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Category Updated");

    setEditingId(null);
    setName("");

    fetchCategories();
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

        <form
  onSubmit={
    editingId
      ? handleUpdate
      : handleSubmit
  }
>
          <input
  type="text"
  placeholder="Category Name"
  className="form-control mb-3"
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>

          <button
            type="submit"
            className="btn btn-primary"
          >
            {editingId
  ? "Update Category"
  : "Add Category"}
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
          <button
  className="btn btn-warning btn-sm"
  onClick={() => handleEdit(category)}
>
  Edit
</button>

          <button
  className="btn btn-danger btn-sm"
  onClick={() => handleDelete(category._id)}
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
    </AdminLayout>
  );
}

export default CategoryManagement;