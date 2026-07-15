// export interface Product {
//   id: number;
//   name: string;
//   category: string;
//   description?: string;
//   price: number;
//   image: string;
//   stock?: number;
// }

export interface Product {
  id: number;
  category_id: number;

  name: string;

  description?: string;

  price: number;

  stock: number;

  image?: string;
}