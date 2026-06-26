import { Link } from "react-router-dom";

function FeaturedCategories() {

  const categories = [

    {
      name: "Electronics",
      icon: "💻",
      color: "#2563eb",
      description: "Mobiles, Laptops & Gadgets",
    },

    {
      name: "Fashion",
      icon: "👕",
      color: "#16a34a",
      description: "Latest Clothing Collection",
    },

    {
      name: "Accessories",
      icon: "⌚",
      color: "#ea580c",
      description: "Watches & Lifestyle",
    },

    {
      name: "Home",
      icon: "🏠",
      color: "#9333ea",
      description: "Furniture & Decor",
    },

    {
      name: "Audio",
      icon: "🎧",
      color: "#dc2626",
      description: "Speakers & Headphones",
    },

    {
      name: "Gaming",
      icon: "🎮",
      color: "#0891b2",
      description: "Consoles & Accessories",
    },

  ];

  return (

    <section className="container py-5">

      {/* Heading */}

      <div className="text-center mb-5">

        <span className="badge bg-primary fs-6 mb-3">
          Browse Collection
        </span>

        <h2 className="fw-bold display-6">

          Shop By Category

        </h2>

        <p className="text-muted">

          Find products from your favourite categories.

        </p>

      </div>

      {/* Categories */}

      <div className="row g-4">

        {categories.map((category) => (

          <div
            className="col-lg-4 col-md-6"
            key={category.name}
          >

            <Link
              to="/products"
              style={{
                textDecoration: "none",
              }}
            >

              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "18px",
                  transition: ".35s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >

                <div className="card-body text-center p-5">

                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background: category.color,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                      fontSize: "42px",
                      color: "#fff",
                    }}
                  >
                    {category.icon}
                  </div>

                  <h3
                    className="mt-4 fw-bold"
                    style={{
                      color: category.color,
                    }}
                  >
                    {category.name}
                  </h3>

                  <p className="text-muted">

                    {category.description}

                  </p>

                  <button
                    className="btn btn-outline-primary mt-2"
                  >
                    Explore
                  </button>

                </div>

              </div>

            </Link>

          </div>

        ))}

      </div>

    </section>

  );

}

export default FeaturedCategories;