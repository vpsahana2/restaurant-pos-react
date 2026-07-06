import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import type { Product } from "../../types/Product";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
