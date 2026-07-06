import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";

import type { Product } from "../../types/Product";

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

function ProductGrid({ products, onAddToCart }: Props) {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid
          key={product.id}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
          }}
        >
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
