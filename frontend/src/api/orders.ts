import api from "./axios";

export const getOrders = () =>
  api.get("/orders");

export const createOrder = (data: any) =>
  api.post("/orders", data);