import { useEffect, useState } from "react";

import { getRecentOrders } from "../../../api/orders";

import type { RecentOrder } from "../types/RecentOrder";

export function useRecentOrders() {
  const [orders, setOrders] = useState<RecentOrder[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await getRecentOrders();

      setOrders(data.slice(0, 5));
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