import api from "./axios";

export interface Customer {
  id: number;
  full_name: string;
  phone: string;
  email: string;
}

export async function getCustomers(): Promise<Customer[]> {
  const response = await api.get<Customer[]>("/customers");
  return response.data;
}