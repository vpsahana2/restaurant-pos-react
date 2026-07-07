import { Grid, Paper, TextField, Typography } from "@mui/material";

import type { Settings } from "../types/Settings";

interface Props {
  settings: Settings;
  onChange: (field: keyof Settings, value: number) => void;
}

function TaxSettings({ settings, onChange }: Props) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Tax Settings
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            type="number"
            label="VAT %"
            value={settings.tax}
            onChange={(e) => onChange("tax", Number(e.target.value))}
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            fullWidth
            type="number"
            label="Service Charge"
            value={settings.serviceCharge}
            onChange={(e) => onChange("serviceCharge", Number(e.target.value))}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TaxSettings;
