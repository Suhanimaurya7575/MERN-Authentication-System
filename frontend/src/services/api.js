import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-authentication-system-gii8.onrender.com/api/auth",
});

export default API;