import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />

      <div style={{ flex: 1 }}>
        <AdminNavbar />

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;