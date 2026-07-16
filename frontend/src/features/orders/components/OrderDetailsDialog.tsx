import {
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import { useOrder } from "../hooks/useOrder";

interface Props {
  open: boolean;

  orderId: number | null;

  onClose: () => void;
}

function OrderDetailsDialog({ open, orderId, onClose }: Props) {
  const { order, loading } = useOrder(orderId, open);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Order Details</DialogTitle>

      <DialogContent>
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 5,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {!loading && order && (
          <>
            <Typography>Customer: {order.customer.full_name}</Typography>

            <Typography>Payment: {order.payment_method}</Typography>

            <Typography>Status: {order.status}</Typography>

            <Typography>
              Date: {new Date(order.created_at).toLocaleString()}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <List>
              {order.items.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.product.name}
                    secondary={`${item.quantity} × ₹${item.price}`}
                  />

                  <Typography>₹{item.total.toFixed(2)}</Typography>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography>Subtotal: ₹{order.subtotal.toFixed(2)}</Typography>

            <Typography>Tax: ₹{order.tax.toFixed(2)}</Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
              Grand Total: ₹{order.grand_total.toFixed(2)}
            </Typography>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default OrderDetailsDialog;
