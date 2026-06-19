function AdminNavbar() {
const handleLogout = () => {
localStorage.removeItem("adminAuth");
window.location.href = "/admin-login";
};

return (
<div
style={{
background: "#ffffff",
padding: "15px 25px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
borderBottom: "1px solid #e5e7eb",
boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
}}
> <div>
<h2
style={{
margin: 0,
color: "#1e293b",
}}
>
Admin Dashboard </h2>


    <p
      style={{
        margin: 0,
        color: "#64748b",
        fontSize: "14px",
      }}
    >
      E-Commerce Management System
    </p>
  </div>

  <button
    onClick={handleLogout}
    style={{
      background: "#dc2626",
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Logout
  </button>
</div>


);
}

export default AdminNavbar;
