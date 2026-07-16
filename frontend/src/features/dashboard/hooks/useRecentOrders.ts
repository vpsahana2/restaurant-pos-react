import { useEffect, useState } from "react";

import { getOrders } from "../../../api/orders";

import type { RecentOrder } from "../types/RecentOrder";

export function useRecentOrders() {
  const [orders, setOrders] = useState<RecentOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadOrders();
  }, []);

  async function loadOrders() {
    try {
      setLoading(true);

      const data = await getOrders();

      setOrders(data.slice(0, 5));
    } catch (error) {
      console.error("Failed to load recent orders:", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    orders,
    loading,
    reload: loadOrders,
  };
}