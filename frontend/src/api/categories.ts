import api from "./axios";

import type { Category } from "../features/pos/types/Category";

export async function getCategories(): Promise<Category[]> {
  const response = await api.get<Category[]>("/categories");

  return response.data;
}