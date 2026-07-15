export interface CheckoutItem {
  product_id: number;
  quantity: number;
}

export interface CheckoutRequest {
  customer_id: number;
  payment_method: string;
  items: CheckoutItem[];
}

export interface CheckoutResponse {
  id: number;
  subtotal: number;
  tax: number;
  grand_total: number;
}