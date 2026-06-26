import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { getOrders } from "../services/orderService";

function Orders() {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {

    try {

      const response = await getOrders();

      setOrders(response.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Unable to load orders."
      );

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="container py-5 text-center">

        <div
          className="spinner-border text-primary"
          style={{
            width: "3rem",
            height: "3rem",
          }}
        >
        </div>

        <h4 className="mt-3">
          Loading Orders...
        </h4>

      </div>

    );

  }

  return (

    <div className="container py-5">

      <ToastContainer />

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            My Orders
          </h2>

          <p className="text-muted mb-0">
            Track all your recent purchases
          </p>

        </div>

        <span className="badge bg-primary fs-6">
          {orders.length} Orders
        </span>

      </div>

      {orders.length === 0 ? (

        <div className="text-center py-5">

          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
            alt="No Orders"
            width="150"
          />

          <h3 className="mt-4">
            No Orders Yet
          </h3>

          <p className="text-muted">
            Looks like you haven't placed
            any orders yet.
          </p>

          <Link
            to="/products"
            className="btn btn-primary mt-3"
          >
            Start Shopping
          </Link>

        </div>

      ) : (

        <>
                  {orders.map((order) => (

            <div
              className="card border-0 shadow-sm mb-4"
              key={order._id || order.id}
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="row g-0 align-items-center">

                {/* Product Image */}

                <div className="col-md-3 text-center p-3">

                  <img
                    src={
                      order.image ||
                      "https://via.placeholder.com/250"
                    }
                    alt={order.productName}
                    className="img-fluid rounded"
                    style={{
                      maxHeight: "180px",
                      objectFit: "contain",
                    }}
                  />

                </div>

                {/* Order Details */}

                <div className="col-md-9">

                  <div className="card-body">

                    <div className="d-flex justify-content-between flex-wrap">

                      <div>

                        <h4 className="fw-bold mb-2">
                          {order.productName}
                        </h4>

                        <p className="text-muted mb-2">
                          Order ID :
                          <strong className="ms-2">
                            #{order._id || order.id}
                          </strong>
                        </p>

                      </div>

                      <div>

                        <span
                          className={`badge fs-6 ${
                            order.status === "Delivered"
                              ? "bg-success"
                              : order.status === "Cancelled"
                              ? "bg-danger"
                              : order.status === "Processing"
                              ? "bg-warning text-dark"
                              : "bg-primary"
                          }`}
                        >
                          {order.status}
                        </span>

                      </div>

                    </div>

                    <div className="row mt-3">

                      <div className="col-md-4 mb-3">

                        <small className="text-muted">
                          Quantity
                        </small>

                        <h6 className="fw-bold">
                          {order.quantity}
                        </h6>

                      </div>

                      <div className="col-md-4 mb-3">

                        <small className="text-muted">
                          Price
                        </small>

                        <h6 className="fw-bold">
                          ₹
                          {Number(
                            order.price
                          ).toLocaleString()}
                        </h6>

                      </div>

                      <div className="col-md-4 mb-3">

                        <small className="text-muted">
                          Total Amount
                        </small>

                        <h6 className="text-success fw-bold">
                          ₹
                          {Number(
                            order.total
                          ).toLocaleString()}
                        </h6>

                      </div>

                    </div>

                    <div className="d-flex justify-content-between align-items-center flex-wrap">

                      <p className="mb-0">

                        <strong>
                          Ordered On :
                        </strong>

                        <span className="ms-2">
                          {order.date}
                        </span>

                      </p>

                      <Link
                        to={`/order-details/${
                          order._id || order.id
                        }`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </>

      )}

    </div>

  );

}

export default Orders;