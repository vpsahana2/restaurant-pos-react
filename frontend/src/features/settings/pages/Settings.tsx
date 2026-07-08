import { useState } from "react";

import { Button, Grid, Snackbar, Alert, Typography } from "@mui/material";

import MainLayout from "../../../components/layout/MainLayout";

import RestaurantSettings from "../components/RestaurantSettings";
import TaxSettings from "../components/TaxSettings";
import ReceiptSettings from "../components/ReceiptSettings";

import { getSettings } from "../services/settingsService";

import type { Settings as SettingsType } from "../types/Settings";

function Settings() {
  const [settings, setSettings] = useState<SettingsType>(getSettings());

  const [open, setOpen] = useState(false);

  const handleChange = (
    field: keyof SettingsType,
    value: string | number | boolean,
  ) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log(settings);
    setOpen(true);
  };

  return (
    <MainLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <RestaurantSettings settings={settings} onChange={handleChange} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TaxSettings settings={settings} onChange={handleChange} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ReceiptSettings
            settings={settings}
            onTextChange={handleChange}
            onSwitchChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button variant="contained" size="large" onClick={handleSave}>
            Save Settings
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">Settings saved successfully!</Alert>
      </Snackbar>
    </MainLayout>
  );
}

export default Settings;
