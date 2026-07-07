import { Button } from "@mui/material";

interface Props {
  name: string;
  selected: boolean;
  onClick: () => void;
}

function CategoryButton({ name, selected, onClick }: Props) {
  return (
    <Button
      variant={selected ? "contained" : "outlined"}
      onClick={onClick}
      sx={{
        minWidth: 120,
        height: 46,
        px: 3,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
      }}
    >
      {name}
    </Button>
  );
}

export default CategoryButton;
