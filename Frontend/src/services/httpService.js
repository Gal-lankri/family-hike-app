import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:3000/api';
const http = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

/* ----- Add interceptors (token + global errors) ----- */
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn('401 – redirecting to login');
      // e.g. router.navigate('/login');
    }
    return Promise.reject(
      err.response?.data?.message || err.message || 'API Error'
    );
  }
);

export default http;