import api from "./api";

export const getRecommendedProducts = () => {
  return api.get("/recommendations");
};

export const getTopSellingProducts = () => {
  return api.get("/products/top-selling");
};

export const getCustomersAlsoBought = (productId) => {
  return api.get(`/recommendations/${productId}`);
};