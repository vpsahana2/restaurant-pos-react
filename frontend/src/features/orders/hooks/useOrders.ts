import { useEffect, useState } from "react";

import { getOrders } from "../../../api/orders";

import type { Order } from "../types/Order";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadOrders();
  }, []);

  async function loadOrders() {
    try {
      setLoading(true);

      const data = await getOrders();

      setOrders(data);
    } catch (error) {
      console.error("Failed to load orders:", error);
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