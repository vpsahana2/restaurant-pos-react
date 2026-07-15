import { useState } from "react";

import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";

import CustomerSelect from "../components/Checkout/CustomerSelect";
import PaymentMethodSelect from "../components/Checkout/PaymentMethodSelect";
import { paymentMethods } from "../data/paymentMethods";
import MainLayout from "../../../components/layout/MainLayout";

import CategoryList from "../components/Category/CategoryList";
import ProductGrid from "../components/Product/ProductGrid";
import Cart from "../components/Cart/Cart";
import ProductSearch from "../components/Product/ProductSearch";

import { usePOS } from "../hooks/usePOS";

import type { Product } from "../types/Product";
import type { CartItem } from "../types/Cart";
import { checkout } from "../../../api/orders";
function POS() {
  const { products, categories, customers, loading } = usePOS();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );

  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchText, setSearchText] = useState("");
  const [customerId, setCustomerId] = useState<number | "">("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  if (loading) {
    return (
      <MainLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress />
        </Box>
      </MainLayout>
    );
  }
  const handleCheckout = async () => {
    try {
      if (customerId === "") {
        alert("Please select a customer");
        return;
      }

      const request = {
        customer_id: customerId,
        payment_method: paymentMethod,
        items: cart.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
        })),
      };
      const order = await checkout(request);

      setSnackbarMessage(`Order #${order.id} created successfully`);

      setSnackbarOpen(true);

      clearCart();
    } catch (error) {
      console.error(error);

      alert("Checkout failed");
    }
  };
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategoryId === null || product.category_id === selectedCategoryId;

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

      <Paper sx={{ p: 2, mb: 3 }}>
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />
      </Paper>

      <ProductSearch value={searchText} onChange={setSearchText} />
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomerSelect
              customers={customers}
              value={customerId}
              onChange={setCustomerId}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <PaymentMethodSelect
              methods={paymentMethods}
              value={paymentMethod}
              onChange={setPaymentMethod}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Paper sx={{ p: 2 }}>
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </Paper>
        </Grid>

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
              onCheckout={handleCheckout}
              customerId={customerId}
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
