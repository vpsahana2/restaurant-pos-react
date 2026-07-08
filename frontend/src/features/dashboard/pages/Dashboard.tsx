import { Typography, Grid } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";
import DashboardCard from "../components/DashboardCard";
import RecentOrders from "../components/RecentOrders";

import { dashboardCards } from "../data/dashboard";

function Dashboard() {
  return (
    <MainLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {dashboardCards.map((card) => (
          <Grid key={card.id} size={{ xs: 12, md: 6, lg: 3 }}>
            <DashboardCard
              title={card.title}
              value={card.value}
              color={card.color}
            />
          </Grid>
        ))}

        <Grid size={{ xs: 12 }}>
          <RecentOrders />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Dashboard;
