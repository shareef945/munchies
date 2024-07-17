import { endpoints } from "@/config/endpoints";
import { analyticsApi } from "@/lib/axios";
import { handleApiError } from "@/utils/utils";

export async function getHubtelData(from?: string, to?: string) {
  const params = {
    startDate: from,
    endDate: to,
  };
  try {
    const response = await analyticsApi.get(endpoints.backend.reports.revenue, {
      params,
    });
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
}

export async function getHubtelTransactions(from?: string, to?: string) {
  const params = {
    startDate: from,
    endDate: to,
  };
  try {
    const response = await analyticsApi.get(
      endpoints.backend.transactions.hubtel.get,
      {
        params,
      }
    );
    return response.data;
  } catch (error: any) {
    handleApiError(error);
  }
}
