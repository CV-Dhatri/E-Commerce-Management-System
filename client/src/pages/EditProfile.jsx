import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  getProfile,
  updateProfile,
} from "../services/profileService";

function EditProfile() {
 const navigate = useNavigate();

const {
  register,
  handleSubmit,
  reset,
} = useForm();
useEffect(() => {
  loadProfile();
}, []);

const loadProfile = async () => {
  try {
    const response = await getProfile();

    reset(response.data);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Unable to load profile"
    );

  }
};

 const onSubmit = async (data) => {
  try {

    const response = await updateProfile(data);

    toast.success(
      response.data?.message ||
      "Profile Updated Successfully"
    );

    setTimeout(() => {
      navigate("/profile");
    }, 1000);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Profile Update Failed"
    );

  }
};
  return (
    <div className="container py-5">

      <ToastContainer />

      <div className="row justify-content-center">

        <div className="col-lg-7">

          <div className="card shadow border-0">

            <div className="card-body p-5">

              <h2 className="text-center mb-4">
                Edit Profile
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">

                  <label>Name</label>

                  <input
                    className="form-control"
                    {...register("name")}
                  />

                </div>

                <div className="mb-3">

                  <label>Email</label>

                  <input
                    className="form-control"
                    {...register("email")}
                  />

                </div>

                <div className="mb-3">

                  <label>Phone</label>

                  <input
                    className="form-control"
                    {...register("phone")}
                  />

                </div>

                <div className="mb-4">

                  <label>Address</label>

                  <textarea
                    rows="3"
                    className="form-control"
                    {...register("address")}
                  />

                </div>

                <button
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Save Changes
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditProfile;