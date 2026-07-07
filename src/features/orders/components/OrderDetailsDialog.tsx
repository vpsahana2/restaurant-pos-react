import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import OrderStatusChip from "./OrderStatusChip";

import type { Order } from "../types/Order";

interface Props {
  open: boolean;
  order: Order | null;
  onClose: () => void;
}

function OrderDetailsDialog({ open, order, onClose }: Props) {
  if (!order) return null;

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const tax = subtotal * 0.15;

  const grandTotal = subtotal + tax;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Order Details</DialogTitle>

      <DialogContent dividers>
        {/* Order Information */}

        <Paper
          elevation={1}
          sx={{
            p: 2,
            mb: 3,
          }}
        >
          <Typography variant="h6">{order.orderNumber}</Typography>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="body2" color="text.secondary">
                Customer
              </Typography>

              <Typography>{order.customer}</Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Payment
              </Typography>

              <Chip
                label={order.paymentMethod}
                color={order.paymentMethod === "Cash" ? "success" : "primary"}
              />
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Date
              </Typography>

              <Typography>{order.createdAt}</Typography>
            </Box>

            <Box>
              <Typography variant="body2" color="text.secondary">
                Status
              </Typography>

              <OrderStatusChip status={order.status} />
            </Box>
          </Box>
        </Paper>

        {/* Ordered Items */}

        <Typography
          variant="h6"
          sx={{
            mb: 2,
          }}
        >
          Ordered Items
        </Typography>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>

              <TableCell align="center">Qty</TableCell>

              <TableCell align="right">Price</TableCell>

              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {order.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>

                <TableCell align="center">{item.quantity}</TableCell>

                <TableCell align="right">${item.price.toFixed(2)}</TableCell>

                <TableCell align="right">
                  ${(item.quantity * item.price).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Divider
          sx={{
            my: 3,
          }}
        />

        {/* Summary */}

        <Box
          sx={{
            width: 300,
            ml: "auto",
          }}
        >
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

          <Divider
            sx={{
              my: 1,
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Grand Total
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              ${grandTotal.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrderDetailsDialog;
