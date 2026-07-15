// import api from "./axios";

// export const getProducts = () =>
//   api.get("/products");

// export const createProduct = (data: any) =>
//   api.post("/products", data);

// export const updateProduct = (
//   id: number,
//   data: any
// ) =>
//   api.put(`/products/${id}`, data);

// export const deleteProduct = (
//   id: number
// ) =>
//   api.delete(`/products/${id}`);

import api from "./axios";

import type { Product } from "../features/pos/types/Product";

export async function getProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>("/products");

  return response.data;
}