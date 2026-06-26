import api from "./api";

export const getProducts = () => {
  return api.get("/products");
};

export const getProduct = (id) => {
  return api.get(`/products/${id}`);
};

export const searchProducts = (keyword) => {
  return api.get(`/products/search?keyword=${keyword}`);
};

export const getProductsByCategory = (category) => {
  return api.get(`/products/category/${category}`);
};