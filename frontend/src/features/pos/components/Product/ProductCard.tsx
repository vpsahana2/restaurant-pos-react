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
    // <Card
    //   sx={{
    //     height: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    <Card
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      {/* <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      /> */}
      <CardMedia
        component="img"
        height="190"
        image={product.image}
        alt={product.name}
      />
      {/* <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{product.name}</Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent> */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          {product.name}
        </Typography>

        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          ${Number(product.price).toFixed(2)}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions> */}
      <CardActions sx={{ p: 2 }}>
        <Button
          fullWidth
          size="large"
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
