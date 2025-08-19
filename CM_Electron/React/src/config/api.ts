import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token && req.headers) {
    // adiciona/atualiza o header Authorization
    req.headers.set("Authorization", `Bearer ${token}`);
    req.headers.set("Content-Type", "application/json");
  }

  return req;
});
