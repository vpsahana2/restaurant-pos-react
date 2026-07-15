import api from "./axios";

import type { DashboardStats } from "../features/dashboard/types/dashboard";

export async function getDashboardStats() {
  const response = await api.get<DashboardStats>(
    "/dashboard"
  );

  return response.data;
}