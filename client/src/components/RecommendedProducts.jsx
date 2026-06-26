import ProductCard from "./ProductCard";

function RecommendedProducts() {
  const products = [
    {
      id: 201,
      name: "Samsung Galaxy Buds",
      price: 11999,
      rating: 4.5,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 202,
      name: "Wireless Power Bank",
      price: 3499,
      rating: 4.4,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 203,
      name: "Fast Charging Cable",
      price: 899,
      rating: 4.6,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 204,
      name: "Phone Case",
      price: 699,
      rating: 4.3,
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div className="mt-5">

      <h3 className="mb-4">
        You May Also Like
      </h3>

      <div className="row">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default RecommendedProducts;