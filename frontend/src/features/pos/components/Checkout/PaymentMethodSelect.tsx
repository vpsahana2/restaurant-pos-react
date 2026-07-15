import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

interface Props {
  methods: string[];
  value: string;
  onChange: (method: string) => void;
}

function PaymentMethodSelect({ methods, value, onChange }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Payment Method</InputLabel>

      <Select value={value} label="Payment Method" onChange={handleChange}>
        {methods.map((method) => (
          <MenuItem key={method} value={method}>
            {method}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PaymentMethodSelect;
