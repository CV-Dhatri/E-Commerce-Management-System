function InputField({
  label,
  type,
  placeholder,
  register,
  name,
  validation,
  errors,
}) {
  return (
    <div className="mb-3">

      <label className="form-label fw-semibold">
        {label}
      </label>

      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name, validation)}
      />

      <small className="text-danger">
        {errors[name]?.message}
      </small>

    </div>
  );
}

export default InputField;