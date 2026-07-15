import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

import type { Customer } from "../../../../api/customers";

interface Props {
  customers: Customer[];
  value: number | "";
  onChange: (id: number) => void;
}

function CustomerSelect({ customers, value, onChange }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Customer</InputLabel>

      <Select
        value={value === "" ? "" : value.toString()}
        label="Customer"
        onChange={handleChange}
      >
        {customers.map((customer) => (
          <MenuItem key={customer.id} value={customer.id}>
            {customer.full_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomerSelect;
