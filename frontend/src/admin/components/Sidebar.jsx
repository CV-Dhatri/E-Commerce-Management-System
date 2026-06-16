import { Link } from "react-router-dom";

function Sidebar() {
const linkStyle = {
color: "white",
textDecoration: "none",
fontSize: "16px",
display: "block",
padding: "12px 15px",
borderRadius: "8px",
marginBottom: "8px",
};

return (
<div
style={{
width: "260px",
background: "#0f172a",
color: "white",
minHeight: "100vh",
padding: "20px",
boxSizing: "border-box",
}}
>
<h2
style={{
textAlign: "center",
marginBottom: "20px",
}}
>
🛍️ Admin Panel </h2>


  <hr
    style={{
      border: "1px solid #334155",
      marginBottom: "20px",
    }}
  />

  <Link to="/" style={linkStyle}>
    🏠 Dashboard
  </Link>

  <Link to="/products" style={linkStyle}>
    📦 Products
  </Link>

  <Link to="/categories" style={linkStyle}>
    📂 Categories
  </Link>

  <Link to="/inventory" style={linkStyle}>
    📊 Inventory
  </Link>

  <Link to="/orders" style={linkStyle}>
    🛒 Orders
  </Link>

  <Link to="/customers" style={linkStyle}>
    👥 Customers
  </Link>

  <Link to="/reviews" style={linkStyle}>
    ⭐ Reviews
  </Link>

  <Link to="/coupons" style={linkStyle}>
    🎟️ Coupons
  </Link>

  <Link to="/reports" style={linkStyle}>
    📈 Reports
  </Link>
</div>


);
}

export default Sidebar;
