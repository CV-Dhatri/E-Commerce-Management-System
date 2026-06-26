function RatingSummary({ reviews }) {
  const average =
    reviews.length === 0
      ? 0
      : (
          reviews.reduce((sum, r) => sum + r.rating, 0) /
          reviews.length
        ).toFixed(1);

  return (
    <div className="card shadow-sm border-0 mb-4">

      <div className="card-body text-center">

        <h1 className="display-4 text-warning">
          {average}
        </h1>

        <h4>
          ⭐⭐⭐⭐⭐
        </h4>

        <p>
          {reviews.length} Reviews
        </p>

      </div>

    </div>
  );
}

export default RatingSummary;