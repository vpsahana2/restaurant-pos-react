import { Box, Typography } from "@mui/material";

import CategoryButton from "./CategoryButton";
import { categories } from "../../data/categories";

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryList({ selectedCategory, onSelectCategory }: Props) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
        }}
      >
        Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            name={category.name}
            selected={selectedCategory === category.name}
            onClick={() => onSelectCategory(category.name)}
          />
        ))}
      </Box>
    </>
  );
}

export default CategoryList;
