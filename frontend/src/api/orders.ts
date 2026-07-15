import api from "./axios";

import type {
  CheckoutRequest,
  CheckoutResponse,
} from "../features/orders/types/CreateOrder";

export async function checkout(
  request: CheckoutRequest
): Promise<CheckoutResponse> {
  const response = await api.post<CheckoutResponse>(
    "/orders",
    request
  );

  return response.data;
}
export async function getOrders() {
  const response = await api.get("/orders");
  return response.data;
}

export async function getOrder(id: number) {
  const response = await api.get(`/orders/${id}`);
  return response.data;
}