import {
  FaTruck,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {

  const services = [

    {
      icon: <FaTruck size={42} />,
      title: "Free Delivery",
      description:
        "Enjoy free delivery on orders above ₹999 anywhere in India.",
      color: "#2563eb",
    },

    {
      icon: <FaShieldAlt size={42} />,
      title: "Secure Payment",
      description:
        "Shop confidently with our trusted and encrypted payment gateway.",
      color: "#16a34a",
    },

    {
      icon: <FaUndoAlt size={42} />,
      title: "Easy Returns",
      description:
        "Simple 7-day return and replacement policy for eligible products.",
      color: "#ea580c",
    },

    {
      icon: <FaHeadset size={42} />,
      title: "24×7 Support",
      description:
        "Our support team is available anytime to assist you.",
      color: "#9333ea",
    },

  ];

  return (

    <section className="container py-5">

      {/* Heading */}

      <div className="text-center mb-5">

        <span className="badge bg-primary fs-6 mb-3">
          Our Services
        </span>

        <h2 className="fw-bold display-6">
          Why Choose EMS Store?
        </h2>

        <p className="text-muted">
          We are committed to providing a secure,
          reliable, and enjoyable shopping experience.
        </p>

      </div>

      {/* Cards */}

      <div className="row g-4">

        {services.map((service, index) => (

          <div
            className="col-lg-3 col-md-6"
            key={index}
          >

            <div
              className="card border-0 shadow-sm text-center h-100"
              style={{
                borderRadius: "18px",
                transition: ".35s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >

              <div className="card-body p-5">

                <div
                  className="mx-auto mb-4"
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                    background: service.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </div>

                <h4 className="fw-bold">
                  {service.title}
                </h4>

                <p className="text-muted mt-3">
                  {service.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default WhyChooseUs;