
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api-main-6iz9.onrender.com", // Remove trailing slash
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Necessary for cookies and authentication
});

export default axiosInstance;
