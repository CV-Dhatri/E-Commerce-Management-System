function AdminNavbar() {
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/admin-login";
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminNavbar;