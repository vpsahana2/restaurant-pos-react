import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function ProductSearch({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      placeholder="Search Products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        mb: 3,
      }}
    />
  );
}

export default ProductSearch;
