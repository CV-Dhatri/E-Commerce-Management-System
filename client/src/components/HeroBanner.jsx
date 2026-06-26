import { Link } from "react-router-dom";
import "../styles/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero">

      <div className="container">

        <div className="row align-items-center min-vh-75">

          {/* Left Content */}

          <div className="col-lg-6">

            <span className="badge bg-warning text-dark mb-3 fs-6">
              🔥 Best Deals Available
            </span>

            <h1 className="display-3 fw-bold hero-title">
              Shop Smarter
              <br />
              Live Better
            </h1>

            <p className="lead mt-4 mb-4">

              Discover premium electronics,
              fashion, accessories and much
              more with unbeatable prices,
              secure payment and lightning-fast
              delivery.

            </p>

            <div className="d-flex flex-wrap gap-3">

              <Link
                to="/products"
                className="btn btn-warning btn-lg px-5"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="btn btn-outline-light btn-lg px-5"
              >
                Explore Products
              </Link>

            </div>

            <div className="row mt-5">

              <div className="col-4">

                <h3 className="fw-bold text-warning">
                  10K+
                </h3>

                <p>Customers</p>

              </div>

              <div className="col-4">

                <h3 className="fw-bold text-warning">
                  500+
                </h3>

                <p>Products</p>

              </div>

              <div className="col-4">

                <h3 className="fw-bold text-warning">
                  24/7
                </h3>

                <p>Support</p>

              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900"
              alt="Shopping"
              className="img-fluid hero-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;