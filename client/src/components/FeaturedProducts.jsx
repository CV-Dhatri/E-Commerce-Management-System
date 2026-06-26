import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import ProductCard from "./ProductCard";
import { getRecommendedProducts } from "../services/recommendationService";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getRecommendedProducts();

      setProducts(response.data);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to load featured products"
      );

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <section className="container py-5">

        <div className="text-center">

          <div
            className="spinner-border text-primary"
            style={{
              width: "3rem",
              height: "3rem",
            }}
          ></div>

          <h4 className="mt-3">
            Loading Featured Products...
          </h4>

        </div>

      </section>
    );
  }

  return (
    <section className="container py-5">

      {/* Heading */}

      <div className="text-center mb-5">

        <span className="badge bg-primary fs-6 mb-3">
          Featured Collection
        </span>

        <h2 className="fw-bold display-6">
          Trending Products
        </h2>

        <p className="text-muted">

          Handpicked products specially
          selected for you.

        </p>

      </div>

      {/* Products */}

      <div className="row g-4">

        {products.length === 0 ? (

          <div className="text-center">

            <div className="alert alert-info">

              No Featured Products Available.

            </div>

          </div>

        ) : (

          products
            .slice(0, 4)
            .map((product) => (

              <ProductCard
                key={product._id || product.id}
                product={product}
              />

            ))

        )}

      </div>

      {/* View All */}

      {products.length > 0 && (

        <div className="text-center mt-5">

          <Link
            to="/products"
            className="btn btn-outline-primary btn-lg px-5"
          >
            View All Products
          </Link>

        </div>

      )}

    </section>
  );
}

export default FeaturedProducts;