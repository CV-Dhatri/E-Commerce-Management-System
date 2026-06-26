import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";
import { toast } from "react-toastify";

function Profile() {
  const [user, setUser] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  image: "https://i.pravatar.cc/200?img=12",
});

const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {
  try {
    const response = await getProfile();
console.log(response.data);

    setUser(response.data);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Unable to load profile"
    );

  } finally {
    setLoading(false);
  }
};
if (loading) {
  return (
    <div className="container text-center mt-5">
      <h4>Loading Profile...</h4>
    </div>
  );
}

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow-lg border-0">

            <div className="card-body p-5">

              <div className="text-center">

                <img
                  src={user.image}
                  alt="Profile"
                  className="rounded-circle shadow"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />

                <h2 className="mt-3 fw-bold">
                  {user.name}
                </h2>

                <p className="text-muted">
                  Customer Profile
                </p>

              </div>

              <hr />

              <div className="row">

                <div className="col-md-6 mb-3">
                  <h6>Email</h6>
                  <p>{user.email}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <h6>Phone</h6>
                  <p>{user.phone}</p>
                </div>

                <div className="col-12 mb-4">
                  <h6>Address</h6>
                  <p>{user.address}</p>
                </div>

              </div>

              <div className="row g-3">

                <div className="col-md-6">

                  <Link
                    to="/edit-profile"
                    className="btn btn-primary w-100"
                  >
                    Edit Profile
                  </Link>

                </div>

                <div className="col-md-6">

                  <Link
                    to="/address"
                    className="btn btn-warning w-100"
                  >
                    Manage Address
                  </Link>

                </div>

                <div className="col-md-6">

                  <Link
                    to="/orders"
                    className="btn btn-success w-100"
                  >
                    My Orders
                  </Link>

                </div>

                <div className="col-md-6">

                  <button
  className="btn btn-danger w-100"
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }}
>
  Logout
</button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;