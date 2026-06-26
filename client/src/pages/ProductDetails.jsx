import { useParams } from "react-router-dom";
import { useState } from "react";

import ReviewForm from "../components/ReviewForm";
import RatingSummary from "../components/RatingSummary";
import ReviewList from "../components/ReviewList";
import RelatedProducts from "../components/RelatedProducts";
import RecommendedProducts from "../components/RecommendedProducts";
import RecentlyViewed from "../components/RecentlyViewed";

function ProductDetails() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [reviews, setReviews] = useState([
    {
      user: "Rahul",
      rating: 5,
      comment:
        "Excellent product. Highly recommended.",
      date: "25/06/2026",
      verified: true,
    },
    {
      user: "Sneha",
      rating: 4,
      comment:
        "Very good quality and fast delivery.",
      date: "24/06/2026",
      verified: true,
    },
  ]);

  const handleReviewSubmit = (review) => {
    setReviews([review, ...reviews]);
  };

  // Sample Product
  // Replace this with API data later if needed

  const product = {
    id,
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    category: "Smartphones",

    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",

    price: 149999,

    oldPrice: 159999,

    discount: 6,

    stock: 12,

    rating: 4.8,

    reviews: 248,

    description:
      "Experience the next generation smartphone with Apple's latest A18 Pro chip, professional camera system, premium titanium finish, incredible battery life and AI-powered features designed for productivity and entertainment.",

    specifications: [
      "Display : 6.9-inch Super Retina XDR OLED",
      "Processor : Apple A18 Pro",
      "Storage : 256 GB",
      "RAM : 8 GB",
      "Rear Camera : 48MP + 48MP + 12MP",
      "Front Camera : 12MP",
      "Battery : 4685 mAh",
      "Operating System : iOS 26",
      "Warranty : 1 Year Manufacturer Warranty",
      "Network : 5G Supported",
    ],
  };

  return (
    <div className="container py-5">

      {/* Breadcrumb */}

      <div className="mb-4">

        <small className="text-muted">

          Home /

          <span className="mx-1">
            Products
          </span>

          /

          <span className="fw-semibold">
            {product.name}
          </span>

        </small>

      </div>

      <div className="row g-5">

        {/* LEFT SIDE */}

        <div className="col-lg-5">

          <div
            className="card border-0 shadow-lg"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body text-center">

              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{
                  maxHeight: "430px",
                  objectFit: "contain",
                  transition: ".3s",
                }}
              />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="col-lg-7">

          <span className="badge bg-primary mb-3">
            {product.category}
          </span>

          <h2 className="fw-bold">
            {product.name}
          </h2>

          <p className="text-muted mb-3">
            Brand :
            <strong className="ms-2">
              {product.brand}
            </strong>
          </p>

          <div className="d-flex align-items-center flex-wrap gap-3 mb-3">

            <span className="badge bg-success fs-6">
              ⭐ {product.rating}
            </span>

            <span className="text-muted">
              {product.reviews} Ratings &
              Reviews
            </span>

            <span className="badge bg-danger">
              {product.discount}% OFF
            </span>

          </div>

          <div className="mb-3">

            <h2 className="text-success fw-bold">

              ₹
              {product.price.toLocaleString()}

            </h2>

            <h5 className="text-muted text-decoration-line-through">

              ₹
              {product.oldPrice.toLocaleString()}

            </h5>

          </div>

          <p
            className="text-secondary"
            style={{
              lineHeight: "1.8",
            }}
          >
            {product.description}
          </p>

          <div className="my-4">
                        <h5 className="mb-3">
              Stock :
              {product.stock > 0 ? (
                <span className="text-success ms-2">
                  In Stock ({product.stock} Available)
                </span>
              ) : (
                <span className="text-danger ms-2">
                  Out of Stock
                </span>
              )}
            </h5>

          </div>

          {/* Quantity */}

          <div className="mb-4">

            <label className="form-label fw-semibold">
              Quantity
            </label>

            <div
              className="d-flex align-items-center"
              style={{ maxWidth: "180px" }}
            >

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                −
              </button>

              <input
                type="text"
                className="form-control text-center mx-2"
                value={quantity}
                readOnly
              />

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  if (quantity < product.stock) {
                    setQuantity(quantity + 1);
                  }
                }}
              >
                +
              </button>

            </div>

          </div>

          {/* Action Buttons */}

          <div className="row g-3 mb-4">

            <div className="col-md-4">

              <button className="btn btn-primary btn-lg w-100">
                🛒 Add To Cart
              </button>

            </div>

            <div className="col-md-4">

              <button className="btn btn-warning btn-lg w-100">
                Buy Now
              </button>

            </div>

            <div className="col-md-4">

              <button className="btn btn-outline-danger btn-lg w-100">
                ❤ Wishlist
              </button>

            </div>

          </div>

          {/* Product Highlights */}

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h5 className="fw-bold mb-3">
                Product Highlights
              </h5>

              <ul className="mb-0">

                <li>✔ Premium Build Quality</li>

                <li>✔ 100% Genuine Product</li>

                <li>✔ Secure Online Payment</li>

                <li>✔ Easy 7-Day Return Policy</li>

                <li>✔ Free Shipping Across India</li>

                <li>✔ Manufacturer Warranty Included</li>

              </ul>

            </div>

          </div>

          {/* Delivery Information */}

          <div className="card border-0 shadow-sm mt-4">

            <div className="card-body">

              <h5 className="fw-bold mb-3">
                Delivery Information
              </h5>

              <p className="mb-2">
                🚚 Free Delivery Available
              </p>

              <p className="mb-2">
                📦 Cash on Delivery Available
              </p>

              <p className="mb-2">
                🔄 Easy 7-Day Replacement
              </p>

              <p className="mb-0">
                🔒 100% Secure Payment
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Specifications */}

      <div className="card shadow-lg border-0 mt-5">

        <div className="card-body">

          <h3 className="fw-bold mb-4">
            Product Specifications
          </h3>

          <div className="row">

            {product.specifications.map((item, index) => (

              <div
                className="col-md-6 mb-3"
                key={index}
              >

                <div className="border rounded p-3 h-100 bg-light">

                  {item}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
            {/* Reviews */}

      <div className="mt-5">

        <div className="card border-0 shadow-lg">

          <div className="card-body">

            <h3 className="fw-bold mb-4">
              Customer Reviews
            </h3>

            <RatingSummary reviews={reviews} />

            <hr />

            <ReviewForm
              onSubmitReview={handleReviewSubmit}
            />

            <hr />

            <ReviewList reviews={reviews} />

          </div>

        </div>

      </div>

      {/* Related Products */}

      <div className="mt-5">

        <div className="card border-0 shadow-lg">

          <div className="card-body">

            <h3 className="fw-bold mb-4">
              Related Products
            </h3>

            <RelatedProducts />

          </div>

        </div>

      </div>

      {/* Recommended Products */}

      <div className="mt-5">

        <div className="card border-0 shadow-lg">

          <div className="card-body">

            <h3 className="fw-bold mb-4">
              Recommended For You
            </h3>

            <RecommendedProducts />

          </div>

        </div>

      </div>

      {/* Recently Viewed */}

      <div className="mt-5 mb-5">

        <div className="card border-0 shadow-lg">

          <div className="card-body">

            <h3 className="fw-bold mb-4">
              Recently Viewed Products
            </h3>

            <RecentlyViewed />

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;