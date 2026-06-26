import api from "./api";

export const getCart = () => {
  return api.get("/cart");
};

export const addToCart = (data) => {
  return api.post("/cart", data);
};

export const updateCart = (id, quantity) => {
  return api.put(`/cart/${id}`, { quantity });
};

export const removeFromCart = (id) => {
  return api.delete(`/cart/${id}`);
};