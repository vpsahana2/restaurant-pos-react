import { useMemo, useState } from "react";

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  Typography,
} from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import OrderSearch from "../components/OrderSearch";
import OrderTable from "../components/OrderTable";
import OrderDetailsDialog from "../components/OrderDetailsDialog";

import { orders } from "../data/orders";

import type { Order, OrderStatus } from "../types/Order";

function Orders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOrder(null);
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || order.status === (status as OrderStatus);

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <MainLayout>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        Orders
      </Typography>

      <Paper
        sx={{
          p: 3,
        }}
      >
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <OrderSearch value={search} onChange={setSearch} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>

              <Select
                value={status}
                label="Status"
                onChange={handleStatusChange}
              >
                <MenuItem value="All">All</MenuItem>

                <MenuItem value="Pending">Pending</MenuItem>

                <MenuItem value="Preparing">Preparing</MenuItem>

                <MenuItem value="Completed">Completed</MenuItem>

                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <OrderTable orders={filteredOrders} onView={handleViewOrder} />
      </Paper>

      <OrderDetailsDialog
        open={dialogOpen}
        order={selectedOrder}
        onClose={handleCloseDialog}
      />
    </MainLayout>
  );
}

export default Orders;
