import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 5000 || subtotal === 0
      ? 0
      : 150;

  const tax = Math.round(subtotal * 0.05);

  const total =
    subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (

      <div className="container py-5">

        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Empty Cart"
            width="180"
          />

          <h2 className="mt-4">
            Your Shopping Cart is Empty
          </h2>

          <p className="text-muted">
            Looks like you haven't added
            anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="btn btn-primary btn-lg mt-3"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    );
  }

  return (

    <div className="container py-5">

      <h2 className="fw-bold mb-4">
        Shopping Cart
      </h2>

      <div className="row">

        {/* Cart Items */}

        <div className="col-lg-8">
                      {cartItems.map((item, index) => (

            <div
              className="card shadow-sm border-0 mb-4"
              key={item._id || item.id}
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body">

                <div className="row align-items-center">

                  {/* Product Image */}

                  <div className="col-md-3 text-center">

                    <img
                      src={
                        item.image ||
                        "https://via.placeholder.com/150"
                      }
                      alt={item.name}
                      className="img-fluid"
                      style={{
                        maxHeight: "120px",
                        objectFit: "contain",
                      }}
                    />

                  </div>

                  {/* Product Details */}

                  <div className="col-md-5">

                    <h5 className="fw-bold">
                      {item.name}
                    </h5>

                    <p className="text-muted mb-2">
                      ₹
                      {Number(item.price).toLocaleString()}
                    </p>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() =>
                        removeFromCart(index)
                      }
                    >
                      🗑 Remove
                    </button>

                  </div>

                  {/* Quantity */}

                  <div className="col-md-2">

                    <div className="d-flex justify-content-center align-items-center">

                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          decreaseQuantity(
                            item._id || item.id
                          )
                        }
                      >
                        -
                      </button>

                      <span className="mx-3 fw-bold">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          increaseQuantity(
                            item._id || item.id
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Subtotal */}

                  <div className="col-md-2 text-end">

                    <h5 className="text-success fw-bold">

                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}

                    </h5>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Order Summary */}

        <div className="col-lg-4">

          <div
            className="card shadow border-0"
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
                  ₹
                  {subtotal.toLocaleString()}
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>Shipping</span>

                <strong>
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>GST (5%)</span>

                <strong>
                  ₹
                  {tax.toLocaleString()}
                </strong>

              </div>

              <hr />

              <div className="d-flex justify-content-between">

                <h5>Total</h5>

                <h4 className="text-success">

                  ₹
                  {total.toLocaleString()}

                </h4>

              </div>

              <div className="alert alert-success mt-4">

                🚚
                {shipping === 0
                  ? " Congratulations! You qualify for FREE Shipping."
                  : " Add more items worth ₹" +
                    (5000 - subtotal).toLocaleString() +
                    " to get FREE Shipping."}

              </div>

              <Link
                to="/checkout"
                className="btn btn-success w-100 btn-lg mt-2"
              >
                Proceed To Checkout
              </Link>

              <Link
                to="/products"
                className="btn btn-outline-primary w-100 mt-3"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Cart;