import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-aoqe.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((req) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const token = JSON.parse(userInfo).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
