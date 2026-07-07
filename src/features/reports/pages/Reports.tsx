import { Grid, Typography } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import ReportCard from "../components/KPI/ReportCard";

import { getReportSummary } from "../services/reportService";

function Reports() {
  const summary = getReportSummary();

  return (
    <MainLayout>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
        }}
      >
        Reports
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Today's Sales"
            value={`$${summary.totalSales.toFixed(2)}`}
            color="#4CAF50"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Orders Today"
            value={summary.totalOrders}
            color="#1976D2"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Average Order"
            value={`$${summary.averageOrder.toFixed(2)}`}
            color="#FF9800"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Customers"
            value={summary.customers}
            color="#9C27B0"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Products Sold"
            value={summary.productsSold}
            color="#E91E63"
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Reports;
