import api from "./api";

export const getOrders = () => {
  return api.get("/orders");
};

export const getOrderById = (id) => {
  return api.get(`/orders/${id}`);
};

export const placeOrder = (data) => {
  return api.post("/orders", data);
};

export const cancelOrder = (id) => {
  return api.delete(`/orders/${id}`);
};