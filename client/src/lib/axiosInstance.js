import axios from 'axios';

// Create instance
const devUrl = 'http://localhost:8080/api';
const prodUrl = 'https://nemesis-club-web.onrender.com/api';
const axiosInstance = axios.create({
  baseURL: prodUrl, // ✅ Your backend base URL
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
