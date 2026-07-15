export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Completed"
  | "Cancelled";

export interface OrderItem {
  id: number;
  product_id: number;
  quantity: number;
  price: number;
  total: number;
}

export interface Order {
  id: number;
  customer_id: number;
  payment_method: string;
  status: OrderStatus;
  subtotal: number;
  tax: number;
  grand_total: number;
  created_at: string;
  items: OrderItem[];
}