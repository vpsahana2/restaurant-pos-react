import { useState } from "react";

import { Grid, Paper, Typography } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import CategoryList from "../components/Category/CategoryList";
import ProductGrid from "../components/Product/ProductGrid";
import Cart from "../components/Cart/Cart";

import { products } from "../data/products";
import ProductSearch from "../components/Product/ProductSearch";
import type { Product } from "../types/Product";
import type { CartItem } from "../types/Cart";

function POS() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchText, setSearchText] = useState("");
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
  };

  return (
    <MainLayout>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        Restaurant POS
      </Typography>

      <Grid container spacing={3}>
        {/* Categories */}
        <Grid size={{ xs: 12, md: 2 }}>
          <Paper
            sx={{
              p: 2,
            }}
          >
            <CategoryList
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </Paper>
        </Grid>
        {/* Search */}
        <ProductSearch value={searchText} onChange={setSearchText} />
        {/* Products */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{
              p: 2,
            }}
          >
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </Paper>
        </Grid>

        {/* Cart */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Cart
            cart={cart}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeItem}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default POS;
