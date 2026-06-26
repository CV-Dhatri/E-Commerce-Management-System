import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body text-center">
          <h5 className="text-muted">
            No reviews yet.
          </h5>

          <p className="text-secondary">
            Be the first customer to review this product.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h4 className="mb-4">
        Customer Reviews ({reviews.length})
      </h4>

      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
        />
      ))}
    </div>
  );
}

export default ReviewList;