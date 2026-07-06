import { Box, Typography, Button } from "@mui/material";

interface Props {
  total: number;
}

function CartSummary({ total }: Props) {
  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
        }}
      >
        Total: ${total.toFixed(2)}
      </Typography>

      <Button variant="contained" fullWidth size="large">
        Checkout
      </Button>
    </Box>
  );
}

export default CartSummary;
