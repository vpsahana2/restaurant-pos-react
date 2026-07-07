export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Completed"
  | "Cancelled";

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  total: number;
  status: OrderStatus;
  paymentMethod: "Cash" | "Card";
  createdAt: string;

  items: OrderItem[];
}