import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { login } from "../services/authService";

import "../styles/Login.css";
function Login() {

    const [showPassword,setShowPassword]=useState(false);
    const navigate = useNavigate();

    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const onSubmit = async (data) => {
  try {
    const response = await login(data);

    // Expected backend response:
    // {
    //   token: "...",
    //   user: { ... }
    // }

    localStorage.setItem("token", response.data.token);

    if (response.data.user) {
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );
    }

    toast.success("Login Successful");

    setTimeout(() => {
      navigate("/");
    }, 1000);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Invalid email or password"
    );

  }
};

    return(

        <div className="login-container">

            <ToastContainer/>

            <div className="card login-card">

                <div className="card-body">

                    <h2 className="login-title">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">

                            <label>Email</label>

                            <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"

                            {...register("email",{
                                required:"Email is required"
                            })}
                            />

                            <small className="text-danger">
                                {errors.email?.message}
                            </small>

                        </div>

                        <div className="mb-3">

                            <label>Password</label>

                            <div className="input-group">

                                <input

                                type={showPassword?"text":"password"}

                                className="form-control"

                                placeholder="Enter Password"

                                {...register("password",{
                                    required:"Password is required",
                                    minLength:{
                                        value:6,
                                        message:"Minimum 6 characters"
                                    }
                                })}

                                />

                                <span
                                className="input-group-text toggle-password"
                                onClick={()=>setShowPassword(!showPassword)}
                                >

                                    {showPassword?<FaEyeSlash/>:<FaEye/>}

                                </span>

                            </div>

                            <small className="text-danger">
                                {errors.password?.message}
                            </small>

                        </div>

                        <div className="d-flex justify-content-between mb-3">

                            <div>

                                <input
                                type="checkbox"
                                className="form-check-input me-2"
                                />

                                Remember Me

                            </div>

                            <Link to="#">
                                Forgot Password?
                            </Link>

                        </div>

                        <button
                        className="btn btn-primary login-btn"
                        type="submit"
                        >
                            Login
                        </button>

                    </form>

                    <div className="login-footer">

                        Don't have an account?

                        <Link to="/register">
                            Register
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Login;