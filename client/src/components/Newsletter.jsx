function Newsletter() {
  return (
    <section
      className="py-5 text-white"
      style={{
        background: "linear-gradient(90deg,#2563eb,#6610f2)",
      }}
    >
      <div className="container text-center">

        <h2 className="fw-bold">
          Subscribe to our Newsletter
        </h2>

        <p>
          Get updates on the latest offers and products.
        </p>

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="input-group">

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />

              <button className="btn btn-warning">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;