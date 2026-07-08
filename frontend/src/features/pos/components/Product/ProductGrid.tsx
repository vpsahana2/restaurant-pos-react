import { Grid, Box, Typography } from "@mui/material";

import ProductCard from "./ProductCard";

import type { Product } from "../../types/Product";

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

function ProductGrid({ products, onAddToCart }: Props) {
  if (products.length === 0) {
    return (
      <Box
        sx={{
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 1,
          }}
        >
          No Products Found
        </Typography>

        <Typography color="text.secondary">Try another search</Typography>
      </Box>
    );
  }
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        // <Grid
        //   key={product.id}
        //   size={{
        //     xs: 12,
        //     sm: 6,
        //     md: 4,
        //     lg: 3,
        //   }}
        // >
        <Grid
          key={product.id}
          size={{
            xs: 12,
            sm: 6,
            md: 6,
            lg: 4,
          }}
        >
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
