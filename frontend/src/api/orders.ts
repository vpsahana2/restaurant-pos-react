import api from "./axios";

import type {
  CheckoutRequest,
  CheckoutResponse,
} from "../features/orders/types/CreateOrder";

import type { Order } from "../features/orders/types/Order";

export async function checkout(
  request: CheckoutRequest
): Promise<CheckoutResponse> {
  const response = await api.post(
    "/orders",
    request
  );

  return response.data;
}

export async function getOrders(): Promise<Order[]> {
  const response = await api.get("/orders");

  return response.data;
}

export async function getOrder(
  id: number
): Promise<Order> {
  const response = await api.get(
    `/orders/${id}`
  );

  return response.data;
}