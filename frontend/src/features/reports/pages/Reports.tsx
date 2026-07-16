import { CircularProgress, Grid, Typography, Box } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import ReportCard from "../components/KPI/ReportCard";

import { useReports } from "../hooks/useReports";

function Reports() {
  const { report, loading } = useReports();

  if (loading) {
    return (
      <MainLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 8,
          }}
        >
          <CircularProgress />
        </Box>
      </MainLayout>
    );
  }

  if (!report) {
    return (
      <MainLayout>
        <Typography color="error">Failed to load report.</Typography>
      </MainLayout>
    );
  }

  const averageOrder =
    report.total_orders > 0 ? report.total_sales / report.total_orders : 0;

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
            title="Total Sales"
            value={`₹${report.total_sales.toFixed(2)}`}
            color="#4CAF50"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Total Orders"
            value={report.total_orders}
            color="#1976D2"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Average Order"
            value={`₹${averageOrder.toFixed(2)}`}
            color="#FF9800"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Customers"
            value={report.total_customers}
            color="#9C27B0"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Products"
            value={report.total_products}
            color="#E91E63"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Cash Sales"
            value={`₹${report.cash_sales.toFixed(2)}`}
            color="#2E7D32"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="Card Sales"
            value={`₹${report.card_sales.toFixed(2)}`}
            color="#1565C0"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <ReportCard
            title="UPI Sales"
            value={`₹${report.upi_sales.toFixed(2)}`}
            color="#6A1B9A"
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default Reports;
