import { Typography, Grid, CircularProgress } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";
import DashboardCard from "../components/DashboardCard";
import RecentOrders from "../components/RecentOrders";

import { useDashboard } from "../hooks/useDashboard";

function Dashboard() {
  const { stats, loading } = useDashboard();

  if (loading) {
    return (
      <MainLayout>
        <CircularProgress />
      </MainLayout>
    );
  }

  if (!stats) {
    return (
      <MainLayout>
        <Typography color="error">Failed to load dashboard.</Typography>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <DashboardCard
            title="Products"
            value={stats.products}
            color="primary"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <DashboardCard
            title="Customers"
            value={stats.customers}
            color="success"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <DashboardCard title="Orders" value={stats.orders} color="warning" />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <DashboardCard
            title="Sales"
            value={`₹ ${stats.sales.toFixed(2)}`}
            color="error"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <RecentOrders />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Dashboard;
