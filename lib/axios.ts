import axios from "axios";
import { ANALYTICS_BASE_URL, AUTH_BASE_URL } from "@/config/config";

const createApi = (baseURL: string | undefined) => {
  const token = localStorage.getItem("authToken");

  if (!baseURL) {
    throw new Error(
      `Base URL is not defined. Please check your environment variables.`
    );
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return axios.create({
    baseURL,
    headers,
    withCredentials: true,
  });
};

export const authApi = createApi(AUTH_BASE_URL);
export const analyticsApi = createApi(ANALYTICS_BASE_URL);
