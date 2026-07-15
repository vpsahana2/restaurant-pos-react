export interface RecentOrder {
  id: number;

  customer: {
    id: number;
    full_name: string;
  };

  payment_method: string;

  status: string;

  grand_total: number;

  created_at: string;
}