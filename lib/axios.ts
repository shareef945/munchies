import { API_BASE_URL, API_PASSWORD } from "@/config/config";
import {  getToken } from "@/functions/generateToken";
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;


