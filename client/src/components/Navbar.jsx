import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import {
  FaShoppingCart,
  FaStore,
  FaSearch,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {

  const { cartItems } =
    useContext(CartContext);

  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{
        background:
          "linear-gradient(90deg,#2563eb,#1d4ed8,#1e40af)",
        boxShadow:
          "0 5px 18px rgba(0,0,0,0.15)",
      }}
    >

      <div className="container">

        {/* Logo */}

        <Link
          className="navbar-brand fw-bold fs-3 d-flex align-items-center"
          to="/"
        >

          <FaStore
            className="me-2"
            size={28}
          />

          EMS Store

        </Link>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >

          <FaBars />

        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          {/* Navigation */}

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">

              <Link
                className="nav-link px-3 fw-semibold"
                to="/"
              >
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link px-3 fw-semibold"
                to="/products"
              >
                Products
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link px-3 fw-semibold"
                to="/orders"
              >
                Orders
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link px-3 fw-semibold"
                to="/cart"
              >
                Cart
              </Link>

            </li>

          </ul>

          {/* Search */}

          <form className="d-flex me-3 my-3 my-lg-0">

            <div
              className="input-group"
              style={{
                width: "260px",
              }}
            >

              <span
                className="input-group-text bg-white border-end-0"
              >

                <FaSearch />

              </span>

              <input
                type="search"
                className="form-control border-start-0"
                placeholder="Search products..."
              />

            </div>

          </form>
                    {/* User & Cart */}

          <div className="d-flex align-items-center gap-3">

            {/* Login */}

            <Link
              to="/login"
              className="btn btn-outline-light d-flex align-items-center"
            >
              <FaUserCircle className="me-2" />
              Login
            </Link>

            {/* Register */}

            <Link
              to="/register"
              className="btn btn-light text-primary fw-semibold"
            >
              Register
            </Link>

            {/* Cart */}

            <Link
              to="/cart"
              className="btn btn-warning position-relative"
              style={{
                borderRadius: "10px",
                padding: "10px 14px",
              }}
            >

              <FaShoppingCart size={20} />

              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{
                  fontSize: "11px",
                  minWidth: "22px",
                  height: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartItems.length}
              </span>

            </Link>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;