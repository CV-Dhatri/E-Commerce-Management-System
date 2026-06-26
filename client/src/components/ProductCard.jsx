import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

      <div
        className="card h-100 border-0 shadow-sm"
        style={{
          transition: "0.3s",
          borderRadius: "15px",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 12px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "";
        }}
      >

        {/* Product Image */}

        <div
          className="bg-light d-flex justify-content-center align-items-center"
          style={{
            height: "250px",
          }}
        >
          <img
            src={
              product.image ||
              "https://via.placeholder.com/250x250?text=No+Image"
            }
            alt={product.name}
            className="img-fluid"
            style={{
              maxHeight: "220px",
              objectFit: "contain",
              padding: "15px",
            }}
          />
        </div>

        {/* Card Body */}

        <div className="card-body d-flex flex-column">

          <h6
            className="fw-bold"
            style={{
              minHeight: "48px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.name}
          </h6>

          <div className="mb-2">

            <span className="badge bg-success fs-6">
              ₹
              {Number(product.price).toLocaleString()}
            </span>

          </div>

          <div className="mb-3">

            <span
              className="badge bg-warning text-dark"
            >
              ⭐ {product.rating || 4.5}
            </span>

          </div>

          <div className="mt-auto">

            <Link
              to={`/product/${product._id || product.id}`}
              className="btn btn-primary w-100"
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;