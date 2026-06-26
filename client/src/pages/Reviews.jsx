import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import {
  getReviews,
  addReview,
} from "../services/reviewService";

function Review() {
  const { productId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const res = await getReviews(productId);

      setReviews(res.data);

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Unable to load reviews"
      );

    } finally {

      setPageLoading(false);

    }
  };

  const submitReview = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      await addReview({
        productId,
        rating,
        comment,
      });

      toast.success("Review submitted successfully");

      setRating(5);
      setComment("");

      fetchReviews();

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Unable to submit review"
      );

    } finally {

      setLoading(false);

    }
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, item) => sum + item.rating,
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  if (pageLoading) {
    return (
      <div className="container text-center mt-5">
        <h3>Loading Reviews...</h3>
      </div>
    );
  }

  return (
    <div className="container py-4">

      <ToastContainer />

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h3 className="mb-3">
            Customer Reviews
          </h3>

          <div className="d-flex align-items-center mb-4">

            <h2 className="text-warning me-3">
              ⭐ {averageRating}
            </h2>

            <div>

              <h6 className="mb-0">
                {reviews.length} Reviews
              </h6>

            </div>

          </div>

          <form onSubmit={submitReview}>

            <div className="mb-3">

              <label className="form-label">
                Rating
              </label>

              <select
                className="form-select"
                value={rating}
                onChange={(e) =>
                  setRating(Number(e.target.value))
                }
              >
                <option value={5}>
                  ★★★★★ (5)
                </option>

                <option value={4}>
                  ★★★★☆ (4)
                </option>

                <option value={3}>
                  ★★★☆☆ (3)
                </option>

                <option value={2}>
                  ★★☆☆☆ (2)
                </option>

                <option value={1}>
                  ★☆☆☆☆ (1)
                </option>

              </select>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Review
              </label>

              <textarea
                className="form-control"
                rows="4"
                placeholder="Write your review..."
                value={comment}
                onChange={(e) =>
                  setComment(e.target.value)
                }
              />

            </div>

            <button
              className="btn btn-primary"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Review"}
            </button>

          </form>

        </div>

      </div>

      <div className="card shadow-sm border-0">

        <div className="card-body">

          <h4 className="mb-4">
            All Reviews
          </h4>

          {reviews.length === 0 ? (

            <div className="alert alert-info">
              No reviews yet.
            </div>

          ) : (

            reviews.map((review) => (

              <div
                key={review._id}
                className="border-bottom pb-3 mb-3"
              >

                <h6 className="mb-1">
                  {review.user?.name ||
                    "Anonymous"}
                </h6>

                <div className="text-warning mb-2">
                  {"⭐".repeat(review.rating)}
                </div>

                <p className="mb-1">
                  {review.comment}
                </p>

                <small className="text-muted">
                  {new Date(
                    review.createdAt
                  ).toLocaleDateString()}
                </small>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Review;