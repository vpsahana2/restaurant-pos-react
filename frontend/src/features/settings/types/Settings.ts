export interface Settings {
  restaurantName: string;
  address: string;
  phone: string;
  email: string;
  vatNumber: string;

  tax: number;
  serviceCharge: number;

  currency: string;
  language: string;
  timezone: string;

  receiptFooter: string;
  autoPrint: boolean;
}