import { Grid, Paper, TextField, Typography } from "@mui/material";

import type { Settings } from "../types/Settings";

interface Props {
  settings: Settings;
  onChange: (field: keyof Settings, value: string) => void;
}

function RestaurantSettings({ settings, onChange }: Props) {
  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Restaurant Information
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Restaurant Name"
            value={settings.restaurantName}
            onChange={(e) => onChange("restaurantName", e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Phone"
            value={settings.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Address"
            value={settings.address}
            onChange={(e) => onChange("address", e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Email"
            value={settings.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="VAT Number"
            value={settings.vatNumber}
            onChange={(e) => onChange("vatNumber", e.target.value)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default RestaurantSettings;
