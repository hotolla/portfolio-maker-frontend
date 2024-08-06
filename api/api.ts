import axios from 'axios';

export const localStorageKey = 'auth';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

api.interceptors.request.use((config) => {
  const { token } = JSON.parse(localStorage?.getItem(localStorageKey) || '{}');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { api };
