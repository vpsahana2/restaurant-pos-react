import { useMemo, useState } from "react";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import OrderSearch from "../components/OrderSearch";
import OrderTable from "../components/OrderTable";
import OrderDetailsDialog from "../components/OrderDetailsDialog";

import { useOrders } from "../hooks/useOrders";

import type { Order, OrderStatus } from "../types/Order";

function Orders() {
  const { orders, loading, reload } = useOrders();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrderId(order.id);

    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedOrderId(null);
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch = order.id.toString().includes(search);

      const matchesStatus =
        status === "All" || order.status === (status as OrderStatus);

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, status]);

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
        orderId={selectedOrderId}
        onClose={handleCloseDialog}
      />
    </MainLayout>
  );
}

export default Orders;
