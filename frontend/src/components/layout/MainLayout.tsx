import { Box, Toolbar } from "@mui/material";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Navbar />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}

export default MainLayout;
