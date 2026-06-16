import React from "react";
import AdminLayout from "../layout/AdminLayout";

function CategoryManagement() {
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
            <tr>
              <td>1</td>
              <td>Electronics</td>
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
              <td>Accessories</td>
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

export default CategoryManagement;