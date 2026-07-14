import api from "./axios";

export const createPayment = (data: any) =>
  api.post("/payments", data);