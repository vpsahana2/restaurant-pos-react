import { Button } from "@mui/material";

interface Props {
  name: string;
  selected: boolean;
  onClick: () => void;
}

function CategoryButton({ name, selected, onClick }: Props) {
  return (
    <Button
      fullWidth
      variant={selected ? "contained" : "outlined"}
      sx={{
        justifyContent: "flex-start",
        py: 1.2,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
}

export default CategoryButton;
