import RatingStars from "./RatingStars";

function ReviewCard({ review }) {
  return (
    <div className="card shadow-sm mb-3 border-0">

      <div className="card-body">

        <div className="d-flex justify-content-between">

          <div>

            <h5 className="mb-1">
              {review.user}
            </h5>

            {review.verified && (
              <span className="badge bg-success">
                Verified Purchase
              </span>
            )}

          </div>

          <small className="text-muted">
            {review.date}
          </small>

        </div>

        <div className="mt-3">
          <RatingStars rating={review.rating} />
        </div>

        <p className="mt-3">
          {review.comment}
        </p>

      </div>

    </div>
  );
}

export default ReviewCard;