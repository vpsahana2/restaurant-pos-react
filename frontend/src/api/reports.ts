import api from "./axios";

export interface DashboardReport {
  total_sales: number;

  total_orders: number;

  total_customers: number;

  total_products: number;

  cash_sales: number;

  card_sales: number;

  upi_sales: number;
}

export async function getDashboardReport() {
  const response =
    await api.get<DashboardReport>(
      "/reports/dashboard"
    );

  return response.data;
}