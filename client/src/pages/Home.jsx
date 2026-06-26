import HeroBanner from "../components/HeroBanner";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <HeroBanner />

      {/* Categories */}
      <section className="py-5 bg-light">
        <FeaturedCategories />
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <FeaturedProducts />
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <WhyChooseUs />
      </section>

      {/* Newsletter */}
      <section className="py-5">
        <Newsletter />
      </section>

    </main>
  );
}

export default Home;