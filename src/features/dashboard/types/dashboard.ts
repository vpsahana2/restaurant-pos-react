export interface DashboardCard {
  id: number;
  title: string;
  value: string;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
}