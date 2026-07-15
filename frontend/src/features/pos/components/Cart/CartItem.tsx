import { Box, Typography, IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import type { CartItem as CartItemType } from "../../types/Cart";
interface Props {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

function CartItem({ item, onIncrease, onDecrease, onRemove }: Props) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #ddd",
        py: 2,
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>{item.product.name}</Typography>

      <Typography color="text.secondary">
        ${Number(item.product.price).toFixed(2)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1,
        }}
      >
        <IconButton onClick={onDecrease}>
          <RemoveIcon />
        </IconButton>

        <Typography>{item.quantity}</Typography>

        <IconButton onClick={onIncrease}>
          <AddIcon />
        </IconButton>

        <IconButton color="error" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CartItem;
