import api from "./api";

export const getProfile = () => {
  return api.get("/users/profile");
};

export const updateProfile = (data) => {
  return api.put("/users/profile", data);
};