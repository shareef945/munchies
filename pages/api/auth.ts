import { endpoints } from "@/config/endpoints";
import { authApi } from "@/lib/axios";
import { handleApiError } from "@/utils/utils";

export async function login(email?: string, password?: string) {
  const params = {
    email,
    password,
  };
  try {
    const response = await authApi.post(endpoints.backend.auth.login, params);
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
}
