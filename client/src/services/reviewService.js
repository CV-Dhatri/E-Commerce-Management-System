import api from "./api";

export const getReviews = (productId) => {
  return api.get(`/reviews/${productId}`);
};

export const addReview = (data) => {
  return api.post("/reviews", data);
};

export const updateReview = (id, data) => {
  return api.put(`/reviews/${id}`, data);
};

export const deleteReview = (id) => {
  return api.delete(`/reviews/${id}`);
};