import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";

import {
  getProducts,
  searchProducts,
  getProductsByCategory,
} from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);

    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to load products."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    try {
      if (value.trim() === "") {
        loadProducts();
        return;
      }

      setLoading(true);

      const response = await searchProducts(value);

      setProducts(response.data);
    } catch (error) {
      toast.error("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategory = async (e) => {
    const value = e.target.value;
    setCategory(value);

    try {
      if (value === "All") {
        loadProducts();
        return;
      }

      setLoading(true);

      const response = await getProductsByCategory(value);

      setProducts(response.data);
    } catch (error) {
      toast.error("Unable to filter products.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">

      {/* Header */}

      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Products</h1>
        <p className="text-muted">
          Discover quality products at the best prices.
        </p>
      </div>

      {/* Search & Filter */}

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">

          <div className="row g-3">

            <div className="col-lg-5">

              <input
                type="text"
                className="form-control"
                placeholder="🔍 Search products..."
                value={searchTerm}
                onChange={handleSearch}
              />

            </div>

            <div className="col-lg-4">

              <select
                className="form-select"
                value={category}
                onChange={handleCategory}
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Fashion">Fashion</option>
              </select>

            </div>

            <div className="col-lg-3">

              <button
                className="btn btn-primary w-100"
                onClick={loadProducts}
              >
                Refresh Products
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Product Count */}

      {!loading && (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">
            {products.length} Product
            {products.length !== 1 && "s"} Found
          </h5>
        </div>
      )}

      {/* Loading */}

      {loading ? (
        <div className="text-center py-5">

          <div
            className="spinner-border text-primary"
            role="status"
            style={{
              width: "3rem",
              height: "3rem",
            }}
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>

          <h5 className="mt-3">
            Loading Products...
          </h5>

        </div>
      ) : products.length === 0 ? (

        <div className="text-center py-5">

          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
            alt="No Products"
            width="120"
            className="mb-3"
          />

          <h4>No Products Found</h4>

          <p className="text-muted">
            Try searching with another keyword or
            choose a different category.
          </p>

        </div>

      ) : (

        <div className="row g-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </div>
  );
}

export default Products;