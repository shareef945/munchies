import { API_BASE_URL } from "./config";

export const endpoints = {
  backend: {
    all: "/v1/hubtel",
  },
  token: {
    generate: `${API_BASE_URL}/v1/login`,
  },
};
