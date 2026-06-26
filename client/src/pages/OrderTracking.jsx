import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { getOrderById } from "../services/orderService";

function OrderTracking() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const steps = [
    "Order Placed",
    "Payment Confirmed",
    "Packed",
    "Shipped",
    "Out For Delivery",
    "Delivered",
  ];

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const response = await getOrderById(id);

      setOrder(response.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to load tracking details"
      );

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <h3>Loading Tracking Details...</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <ToastContainer />

      <h2 className="mb-4">
        Tracking Order #{id}
      </h2>

      <div className="card shadow border-0">

        <div className="card-body">

          <div className="mb-4">

            <h4>{order?.productName}</h4>

            <p className="text-muted">
              Current Status :
              <strong className="text-success ms-2">
                {order?.status}
              </strong>
            </p>

          </div>

          {steps.map((step, index) => (

            <div
              key={index}
              className="d-flex align-items-center mb-4"
            >

              <div
                className={`rounded-circle text-white me-3 ${
                  index <=
                  steps.indexOf(order?.status)
                    ? "bg-success"
                    : "bg-secondary"
                }`}
                style={{
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                ✓
              </div>

              <h5 className="m-0">
                {step}
              </h5>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default OrderTracking;