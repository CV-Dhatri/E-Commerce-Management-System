import { useState } from "react";

function ReviewForm({ onSubmitReview }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("Please enter your review.");
      return;
    }

    onSubmitReview({
      rating,
      comment,
      date: new Date().toLocaleDateString(),
      user: "You",
      verified: true,
    });

    setRating(5);
    setComment("");
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">

        <h4 className="mb-4">
          Write a Review
        </h4>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label className="form-label">
              Rating
            </label>

            <select
              className="form-select"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value={5}>★★★★★ Excellent</option>
              <option value={4}>★★★★☆ Very Good</option>
              <option value={3}>★★★☆☆ Good</option>
              <option value={2}>★★☆☆☆ Average</option>
              <option value={1}>★☆☆☆☆ Poor</option>
            </select>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Review
            </label>

            <textarea
              rows="4"
              className="form-control"
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

          </div>

          <button
            className="btn btn-success"
            type="submit"
          >
            Submit Review
          </button>

        </form>

      </div>
    </div>
  );
}

export default ReviewForm;