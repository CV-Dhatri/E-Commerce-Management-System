import ProductCard from "./ProductCard";

function RecentlyViewed() {
  const products = [
    {
      id: 301,
      name: "Bluetooth Speaker",
      price: 5999,
      rating: 4.7,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 302,
      name: "Wireless Mouse",
      price: 1299,
      rating: 4.4,
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div className="mt-5">

      <h3 className="mb-4">
        Recently Viewed
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

export default RecentlyViewed;