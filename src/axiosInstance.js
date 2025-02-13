
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Remove trailing slash
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Necessary for cookies and authentication
});

export default axiosInstance;
