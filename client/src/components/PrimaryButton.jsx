function PrimaryButton({ text }) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-100 py-2 fw-bold"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;