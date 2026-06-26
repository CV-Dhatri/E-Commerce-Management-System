import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import addresses from "../data/addresses";

function EditAddress() {
  const navigate = useNavigate();
  const { id } = useParams();

  const address = addresses.find((item) => item.id === Number(id));

  const { register, handleSubmit } = useForm({
    defaultValues: address,
  });

  const onSubmit = (data) => {
    console.log("Updated Address:", data);

    toast.success("Address Updated Successfully!");

    setTimeout(() => {
      navigate("/address");
    }, 1500);
  };

  if (!address) {
    return (
      <div className="container py-5 text-center">
        <h3>Address Not Found</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <ToastContainer />

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow border-0">

            <div className="card-body p-5">

              <h2 className="text-center mb-4">
                Edit Address
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label>Full Name</label>
                    <input className="form-control" {...register("name")} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input className="form-control" {...register("phone")} />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label>Address</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      {...register("address")}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>City</label>
                    <input className="form-control" {...register("city")} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>State</label>
                    <input className="form-control" {...register("state")} />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Pincode</label>
                    <input className="form-control" {...register("pincode")} />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label>Address Type</label>
                    <select className="form-select" {...register("type")}>
                      <option>Home</option>
                      <option>Office</option>
                      <option>Other</option>
                    </select>
                  </div>

                </div>

                <button
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Update Address
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditAddress;