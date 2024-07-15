import { endpoints } from "@/config/endpoints";
import api from "@/lib/axios";

export function totalSales(data: any[]): number {
  return data?.reduce((total: any, item: any) => {
    return total + parseInt(item[" Selling Price"], 10);
  }, 0);
}

export function totalQuantity(data: any[]): number {
  return data?.length;
}

export function chartData(data: any[]) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monthlySales = monthNames.map((month) => ({ name: month, total: 0 }));

  data?.forEach((item) => {
    const date = new Date(item["Date"]);
    const monthIndex = date.getMonth();
    const sellingPrice = parseFloat(item["Amount After Charges"]);

    monthlySales[monthIndex].total += sellingPrice;
  });

  return monthlySales;
}

export async function getHubtelData(from?: string, to?: string) {
  const params = {
    from: from,
    to: to,
  };
  try {
    const response = await api.get(endpoints.backend.reports.revenue, { params });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    } else {
      throw error;
    }
  }
}
