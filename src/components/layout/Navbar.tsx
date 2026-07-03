import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1300,
      }}
    >
      <Toolbar>
        <Typography variant="h6">Restaurant POS</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
