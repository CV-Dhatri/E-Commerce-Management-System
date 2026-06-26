import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container mt-5 text-center">

      <h1 className="text-success">
        🎉 Order Placed Successfully
      </h1>

      <p className="lead mt-3">
        Thank you for shopping with EMS Store.
      </p>

      <Link
        to="/products"
        className="btn btn-primary mt-3"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default OrderSuccess;