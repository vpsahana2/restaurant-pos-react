import { useState } from "react";

import { Alert, Box, Grid, Paper, Snackbar, Typography } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import CategoryList from "../components/Category/CategoryList";
import ProductGrid from "../components/Product/ProductGrid";
import Cart from "../components/Cart/Cart";
import ProductSearch from "../components/Product/ProductSearch";

import { products } from "../data/products";

import type { Product } from "../types/Product";
import type { CartItem } from "../types/Cart";

function POS() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchText, setSearchText] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
      const existing = prevCart.find((item) => item.product.id === product.id);

      if (existing) {
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

    setSnackbarMessage(`${product.name} added successfully`);
    setSnackbarOpen(true);
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
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
    setCart((prev) =>
      prev
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
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <MainLayout>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Restaurant POS
      </Typography>

      {/* Categories */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </Paper>

      {/* Search */}
      <ProductSearch value={searchText} onChange={setSearchText} />

      <Grid container spacing={3}>
        {/* Products */}
        <Grid size={{ xs: 12, lg: 9 }}>
          <Paper sx={{ p: 2 }}>
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </Paper>
        </Grid>

        {/* Cart */}
        <Grid size={{ xs: 12, lg: 3 }}>
          <Box
            sx={{
              position: "sticky",
              top: 90,
            }}
          >
            <Cart
              cart={cart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
              onClearCart={clearCart}
            />
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
        >
          ✓ {snackbarMessage}
        </Alert>
      </Snackbar>
    </MainLayout>
  );
}

export default POS;
