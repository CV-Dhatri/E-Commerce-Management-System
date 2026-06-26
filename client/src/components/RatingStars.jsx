function RatingStars({ rating }) {
  return (
    <span className="text-warning fs-5">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default RatingStars;