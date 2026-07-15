import { Box, Typography } from "@mui/material";

import CategoryButton from "./CategoryButton";

import type { Category } from "../../types/Category";

interface Props {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (categoryId: number | null) => void;
}

function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
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
        {/* All Categories */}
        <CategoryButton
          name="All"
          selected={selectedCategory === null}
          onClick={() => onSelectCategory(null)}
        />

        {/* Categories from API */}
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            name={category.name}
            selected={selectedCategory === category.id}
            onClick={() => onSelectCategory(category.id)}
          />
        ))}
      </Box>
    </>
  );
}

export default CategoryList;
