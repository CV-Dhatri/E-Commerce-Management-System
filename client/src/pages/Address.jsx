import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getAddresses,
  deleteAddress as deleteAddressAPI,
} from "../services/addressService";


function Address() {
  const [addresses, setAddresses] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetchAddresses();
}, []);

const fetchAddresses = async () => {
  try {
    const response = await getAddresses();

    setAddresses(response.data);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Unable to load addresses"
    );

  } finally {

    setLoading(false);

  }
};
 const deleteAddress = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this address?"
  );

  if (!confirmDelete) return;

  try {
    await deleteAddressAPI(id);

    setAddresses((prev) =>
      prev.filter((address) => address.id !== id)
    );

    toast.success("Address deleted successfully");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to delete address"
    );

  }
};
  const setDefaultAddress = (id) => {
    const updatedAddresses = addresses.map((address) => ({
      ...address,
      isDefault: address.id === id,
    }));

    setAddresses(updatedAddresses);
  };
  if (loading) {
  return (
    <div className="container text-center mt-5">
      <h4>Loading Addresses...</h4>
    </div>
  );
}

  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold">My Addresses</h2>

        <Link
          to="/add-address"
          className="btn btn-primary"
        >
          + Add New Address
        </Link>

      </div>

      <div className="row">

        {addresses.map((address) => (

          <div
            className="col-lg-6 mb-4"
            key={address.id}
          >

            <div className="card shadow border-0 h-100">

              <div className="card-body">

                <div className="d-flex justify-content-between">

                  <h5>
                    {address.type}
                  </h5>

                  {address.isDefault && (

                    <span className="badge bg-success">
                      Default
                    </span>

                  )}

                </div>

                <hr />

                <p className="mb-1">
                  <strong>{address.name}</strong>
                </p>

                <p className="mb-1">
                  {address.address}
                </p>

                <p className="mb-1">
                  {address.city}, {address.state}
                </p>

                <p className="mb-1">
                  {address.pincode}
                </p>

                <p className="mb-3">
                  📞 {address.phone}
                </p>

                <div className="d-flex gap-2 flex-wrap">

                  <Link
                    to={`/edit-address/${address.id}`}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteAddress(address.id)}
                  >
                    Delete
                  </button>

                  {!address.isDefault && (

                    <button
                      className="btn btn-success"
                      onClick={() => setDefaultAddress(address.id)}
                    >
                      Set Default
                    </button>

                  )}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Address;