import axios, { AxiosInstance } from "axios";
import { ANALYTICS_BASE_URL, AUTH_BASE_URL } from "@/config/config";

const createApi = (baseURL: string | undefined): AxiosInstance => {
  if (!baseURL) {
    throw new Error(
      `Base URL is not defined. Please check your environment variables.`
    );
  }

  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const authApi = createApi(AUTH_BASE_URL);
export const analyticsApi = createApi(ANALYTICS_BASE_URL);
