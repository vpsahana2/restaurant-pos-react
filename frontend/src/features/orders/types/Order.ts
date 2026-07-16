export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Completed"
  | "Cancelled";

export interface Customer {
  id: number;
  full_name: string;
}

export interface Product {
  id: number;
  name: string;
}

export interface OrderItem {
  id: number;
  product_id: number;
  product: Product;
  quantity: number;
  price: number;
  total: number;
}

export interface Order {
  id: number;
  customer_id: number;
  customer: Customer;
  payment_method: string;
  status: OrderStatus;
  subtotal: number;
  tax: number;
 grand_total: number;
  created_at: string;
  items: OrderItem[];
}