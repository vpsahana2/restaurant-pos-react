import type { Order } from "../types/Order";

export const orders: Order[] = [
  {
    id: 1,
    orderNumber: "ORD-1001",
    customer: "Walk-In Customer",
    total: 52,
    status: "Completed",
    paymentMethod: "Cash",
    createdAt: "2026-07-07 10:15",

    items: [
      {
        id: 1,
        name: "Chicken Pizza",
        quantity: 2,
        price: 15,
      },
      {
        id: 2,
        name: "Coffee",
        quantity: 2,
        price: 11,
      },
    ],
  },

  {
    id: 2,
    orderNumber: "ORD-1002",
    customer: "John",
    total: 34,
    status: "Pending",
    paymentMethod: "Card",
    createdAt: "2026-07-07 10:30",

    items: [
      {
        id: 1,
        name: "Beef Burger",
        quantity: 2,
        price: 12,
      },
      {
        id: 2,
        name: "Coke",
        quantity: 2,
        price: 5,
      },
    ],
  },

  {
    id: 3,
    orderNumber: "ORD-1003",
    customer: "Sarah",
    total: 89,
    status: "Preparing",
    paymentMethod: "Cash",
    createdAt: "2026-07-07 11:00",

    items: [
      {
        id: 1,
        name: "Chicken Pizza",
        quantity: 3,
        price: 15,
      },
      {
        id: 2,
        name: "Chocolate Cake",
        quantity: 2,
        price: 12,
      },
      {
        id: 3,
        name: "Coffee",
        quantity: 4,
        price: 5,
      },
    ],
  },

  {
    id: 4,
    orderNumber: "ORD-1004",
    customer: "Ahmed",
    total: 25,
    status: "Cancelled",
    paymentMethod: "Card",
    createdAt: "2026-07-07 11:30",

    items: [
      {
        id: 1,
        name: "French Fries",
        quantity: 1,
        price: 8,
      },
      {
        id: 2,
        name: "Orange Juice",
        quantity: 2,
        price: 8.5,
      },
    ],
  },
];