function AuthLayout({ title, children }) {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #2563eb, #7c3aed)",
      }}
    >
      <div className="row justify-content-center align-items-center min-vh-100">

        <div className="col-lg-5 col-md-7 col-sm-10">

          <div
            className="card shadow-lg border-0"
            style={{
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-5">

              <h2
                className="text-center fw-bold mb-4"
                style={{ color: "#2563eb" }}
              >
                {title}
              </h2>

              {children}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;