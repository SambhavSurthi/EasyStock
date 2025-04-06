import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const login = (email, password) => API.post("/auth/login", { email, password });
export const signup = (name, email, password, role) => API.post("/auth/signup", { name, email, password, role });
