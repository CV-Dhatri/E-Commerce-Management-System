import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import PrimaryButton from "../components/PrimaryButton";
import { register as registerUser } from "../services/authService";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

 const onSubmit = async (data) => {
  try {
    // Remove confirmPassword before sending to backend
    const { confirmPassword, ...userData } = data;

    const response = await registerUser(userData);

    toast.success(
      response.data?.message || "Registration Successful!"
    );

    setTimeout(() => {
      navigate("/login");
    }, 1000);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Registration Failed"
    );

  }
};

  return (
    <>
      <ToastContainer />

      <AuthLayout title="Create Your Account">

        <form onSubmit={handleSubmit(onSubmit)}>

          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            register={register}
            name="name"
            validation={{
              required: "Full Name is required",
            }}
            errors={errors}
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register}
            name="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            }}
            errors={errors}
          />

          <InputField
            label="Mobile Number"
            type="tel"
            placeholder="Enter your mobile number"
            register={register}
            name="phone"
            validation={{
              required: "Mobile Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            }}
            errors={errors}
          />

          <PasswordField
            label="Password"
            placeholder="Create Password"
            register={register}
            name="password"
            validation={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }}
            errors={errors}
          />

          <PasswordField
            label="Confirm Password"
            placeholder="Confirm Password"
            register={register}
            name="confirmPassword"
            validation={{
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            errors={errors}
          />

          <PrimaryButton text="Register" />

        </form>

        <div className="text-center mt-4">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </div>

      </AuthLayout>
    </>
  );
}

export default Register;