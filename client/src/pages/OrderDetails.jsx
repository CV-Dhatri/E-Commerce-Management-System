import { Link, useParams } from "react-router-dom";
import orders from "../data/orders";

function OrderDetails() {
  const { id } = useParams();

  const order = orders.find(
    (item) => item.id === Number(id)
  );

  if (!order) {
    return (
      <div className="container py-5">
        <h2>Order Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="card shadow border-0">

        <div className="card-body">

          <h2 className="mb-4">
            Order Details
          </h2>

          <div className="row">

            <div className="col-md-5">

              <img
                src={order.image}
                alt={order.productName}
                className="img-fluid rounded"
              />

            </div>

            <div className="col-md-7">

              <h3>{order.productName}</h3>

              <hr />

              <p>
                <strong>Order ID :</strong> #{order.id}
              </p>

              <p>
                <strong>Price :</strong> ₹{order.price}
              </p>

              <p>
                <strong>Quantity :</strong> {order.quantity}
              </p>

              <p>
                <strong>Total :</strong> ₹{order.total}
              </p>

              <p>
                <strong>Payment :</strong> {order.payment}
              </p>

              <p>
                <strong>Status :</strong> {order.status}
              </p>

              <p>
                <strong>Order Date :</strong> {order.date}
              </p>

              <p>
                <strong>Expected Delivery :</strong>{" "}
                {order.expectedDelivery}
              </p>

              <p>
                <strong>Shipping Address :</strong>
                <br />
                {order.address}
              </p>

              <div className="mt-4">

                <Link
                  to={`/order-tracking/${order.id}`}
                  className="btn btn-success me-2"
                >
                  Track Order
                </Link>

                <Link
                  to="/orders"
                  className="btn btn-secondary"
                >
                  Back
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;