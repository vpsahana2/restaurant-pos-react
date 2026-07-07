import {
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import type { Settings } from "../types/Settings";

interface Props {
  settings: Settings;
  onTextChange: (field: keyof Settings, value: string) => void;
  onSwitchChange: (field: keyof Settings, value: boolean) => void;
}

function ReceiptSettings({ settings, onTextChange, onSwitchChange }: Props) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Receipt Settings
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Receipt Footer"
        value={settings.receiptFooter}
        onChange={(e) => onTextChange("receiptFooter", e.target.value)}
      />

      <FormControlLabel
        control={
          <Switch
            checked={settings.autoPrint}
            onChange={(e) => onSwitchChange("autoPrint", e.target.checked)}
          />
        }
        label="Auto Print Receipt"
        sx={{ mt: 2 }}
      />
    </Paper>
  );
}

export default ReceiptSettings;
