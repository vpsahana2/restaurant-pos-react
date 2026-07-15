import { useEffect, useState } from "react";

import { getDashboardStats } from "../../../api/dashboard";

import type { DashboardStats } from "../types/dashboard";

export function useDashboard() {
  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data =
          await getDashboardStats();

        setStats(data);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    stats,
    loading,
  };
}