import { API_BASE_URL, API_BASE_URL_AUTH } from "@/config/config";
import axios from "axios";

const authApi = axios.create({
  baseURL: API_BASE_URL_AUTH,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export { authApi, api };
