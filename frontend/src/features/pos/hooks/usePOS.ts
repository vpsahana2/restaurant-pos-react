import { useEffect, useState } from "react";

import { getProducts } from "../../../api/products";
import { getCategories } from "../../../api/categories";
import {
  getCustomers,
  type Customer,
} from "../../../api/customers";

import type { Product } from "../types/Product";
import type { Category } from "../types/Category";

export function usePOS() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [
        productsData,
        categoriesData,
        customersData,
      ] = await Promise.all([
        getProducts(),
        getCategories(),
        getCustomers(),
      ]);

      setProducts(productsData);
      setCategories(categoriesData);
      setCustomers(customersData);
    } finally {
      setLoading(false);
    }
  }

  return {
    products,
    categories,
    customers,
    loading,
    reload: loadData,
  };
}