import axios from "axios";
import { ANALYTICS_BASE_URL, AUTH_BASE_URL } from "@/config/config";

const createApi = (baseURL: string | undefined) => {
  if (!baseURL) {
    throw new Error(
      `Base URL is not defined. Please check your environment variables.`
    );
  }

  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const authApi = createApi(AUTH_BASE_URL);
export const analyticsApi = createApi(ANALYTICS_BASE_URL);
