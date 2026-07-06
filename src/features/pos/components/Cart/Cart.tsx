import { useState } from "react";

import { Badge, Box, Button, Divider, Paper, Typography } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import CartItem from "./CartItem";
import ClearCartDialog from "./ClearCartDialog";

import type { CartItem as CartItemType } from "../../types/Cart";

interface Props {
  cart: CartItemType[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onClearCart: () => void;
}

function Cart({ cart, onIncrease, onDecrease, onRemove, onClearCart }: Props) {
  const [openDialog, setOpenDialog] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.15;

  const grandTotal = subtotal + tax;

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          height: "100%",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6">Cart</Typography>

          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <Typography
            color="text.secondary"
            align="center"
            sx={{
              mt: 5,
            }}
          >
            Cart is empty
          </Typography>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onIncrease={() => onIncrease(item.product.id)}
                onDecrease={() => onDecrease(item.product.id)}
                onRemove={() => onRemove(item.product.id)}
              />
            ))}

            <Divider sx={{ my: 2 }} />

            {/* Summary */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography>Subtotal</Typography>

              <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography>Tax (15%)</Typography>

              <Typography>${tax.toFixed(2)}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                Grand Total
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                }}
              >
                ${grandTotal.toFixed(2)}
              </Typography>
            </Box>

            {/* Checkout */}
            <Button
              variant="contained"
              fullWidth
              size="large"
              disabled={cart.length === 0}
              sx={{
                mb: 2,
              }}
            >
              Checkout
            </Button>

            {/* Clear Cart */}
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => setOpenDialog(true)}
            >
              Clear Cart
            </Button>
          </>
        )}
      </Paper>

      {/* Confirmation Dialog */}
      <ClearCartDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={() => {
          onClearCart();
          setOpenDialog(false);
        }}
      />
    </>
  );
}

export default Cart;
