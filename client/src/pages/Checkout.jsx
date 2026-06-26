import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { placeOrder } from "../services/orderService";

function Checkout() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "Cash On Delivery",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckout = async () => {

    if (
      !formData.name.trim() ||
      !formData.address.trim() ||
      !formData.phone.trim()
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    try {

      setLoading(true);

      const response =
        await placeOrder(formData);

      toast.success(
        response?.data?.message ||
          "Order Placed Successfully"
      );

      setTimeout(() => {
        navigate("/order-success");
      }, 1200);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Unable to place order"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="container py-5">

      <ToastContainer />

      <h2 className="fw-bold text-center mb-5">
        Secure Checkout
      </h2>

      <div className="row">

        {/* Billing Details */}

        <div className="col-lg-8">

          <div
            className="card border-0 shadow"
            style={{
              borderRadius: "15px",
            }}
          >

            <div className="card-body p-4">

              <h4 className="fw-bold mb-4">
                Billing Details
              </h4>

              <div className="mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Delivery Address
                </label>

                <textarea
                  rows="4"
                  name="address"
                  className="form-control"
                  placeholder="Enter Complete Address"
                  value={formData.address}
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              <div className="mb-4">

                <label className="form-label">
                  Payment Method
                </label>

                <select
                  className="form-select"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >

                  <option value="Cash On Delivery">
                    Cash On Delivery
                  </option>

                  <option value="UPI">
                    UPI
                  </option>

                  <option value="Credit Card">
                    Credit Card
                  </option>

                </select>

              </div>
                            <button
                className="btn btn-success btn-lg w-100"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Placing Order...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>

            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="col-lg-4">

          <div
            className="card border-0 shadow"
            style={{
              borderRadius: "15px",
            }}
          >

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                Order Summary
              </h4>

              <div className="d-flex justify-content-between mb-3">

                <span>Subtotal</span>

                <strong>
                  Calculated at Cart
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>Shipping</span>

                <strong className="text-success">
                  FREE
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>GST</span>

                <strong>
                  Included
                </strong>

              </div>

              <hr />

              <div className="alert alert-success">

                🚚 Your order qualifies for
                <strong> FREE Delivery</strong>

              </div>

              <div className="card bg-light border-0">

                <div className="card-body">

                  <h6 className="fw-bold">
                    Payment Security
                  </h6>

                  <p className="mb-2">
                    🔒 100% Secure Checkout
                  </p>

                  <p className="mb-2">
                    💳 Safe Payment Gateway
                  </p>

                  <p className="mb-2">
                    📦 Easy Return Policy
                  </p>

                  <p className="mb-0">
                    ✅ Trusted Store
                  </p>

                </div>

              </div>

              <button
                className="btn btn-primary w-100 mt-4"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading
                  ? "Processing..."
                  : "Confirm Order"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Checkout;