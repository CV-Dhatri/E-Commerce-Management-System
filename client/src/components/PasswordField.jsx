import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordField({
  label,
  placeholder,
  register,
  name,
  validation,
  errors,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">

      <label className="form-label fw-semibold">
        {label}
      </label>

      <div className="input-group">

        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder={placeholder}
          {...register(name, validation)}
        />

        <span
          className="input-group-text"
          style={{ cursor: "pointer" }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>

      </div>

      <small className="text-danger">
        {errors[name]?.message}
      </small>

    </div>
  );
}

export default PasswordField;