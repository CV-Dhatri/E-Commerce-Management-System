import ProductCard from "./ProductCard";

function RelatedProducts() {
  const products = [
    {
      id: 101,
      name: "Apple AirPods Pro",
      price: 24999,
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83"
    },
    {
      id: 102,
      name: "Apple Watch Series 10",
      price: 45999,
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40"
    },
    {
      id: 103,
      name: "MagSafe Charger",
      price: 4999,
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3"
    },
    {
      id: 104,
      name: "Apple 20W Adapter",
      price: 1999,
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU7V2"
    }
  ];

  return (
    <div className="mt-5">

      <h3 className="mb-4">
        Related Products
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

export default RelatedProducts;