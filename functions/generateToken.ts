import { endpoints } from "@/config/endpoints";
import { API_PASSWORD } from "../config/config";
import axios from "axios";

let token: string | undefined;
let expiration: number | undefined;

async function generateToken(): Promise<string> {
  const data = {
    Password: API_PASSWORD,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  try {
    const response = await axios.post(endpoints.token.generate, data, config);
    const newToken = response.data.token; 
    expiration = Date.now() + 55 * 60 * 1000
    return newToken;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
}

export async function getToken(): Promise<string> {
  if (!token || Date.now() > (expiration || 0)) {
    token = await generateToken();
  }
  return token;
}