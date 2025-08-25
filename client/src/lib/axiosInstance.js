import axios from 'axios';

// Create instance
const backendUrl = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: backendUrl, // ✅ Your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attach token (if available) to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
