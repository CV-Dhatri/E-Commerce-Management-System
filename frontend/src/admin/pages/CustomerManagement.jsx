import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layout/AdminLayout";
function CustomerManagement() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
  fetchUsers();
}, []);

const fetchUsers = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setUsers(response.data);

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
        👥 Customer Management
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Customer List</h3>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Role</th>
<th>Created Date</th>
            </tr>
          </thead>

          <tbody>
  {users.map((user, index) => (
    <tr key={user._id}>
      <td>{index + 1}</td>

      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        {new Date(user.createdAt).toLocaleDateString()}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default CustomerManagement;