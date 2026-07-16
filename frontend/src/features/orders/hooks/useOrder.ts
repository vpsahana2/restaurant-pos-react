import { useEffect, useState } from "react";

import { getOrder } from "../../../api/orders";

import type { Order } from "../types/Order";

export function useOrder(
  orderId: number | null,
  open: boolean
) {
  const [order, setOrder] =
    useState<Order | null>(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (open && orderId) {
      loadOrder();
    }
  }, [orderId, open]);

  async function loadOrder() {
    try {
      setLoading(true);

      const data = await getOrder(
        orderId!
      );

      setOrder(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    order,
    loading,
  };
}