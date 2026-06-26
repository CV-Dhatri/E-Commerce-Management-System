import api from "./api";

export const login = (data) => {
  return api.post("/auth/login", data);
};

export const register = (data) => {
  return api.post("/auth/register", data);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getProfile = () => {
  return api.get("/users/profile");
};

export const updateProfile = (data) => {
  return api.put("/users/profile", data);
};