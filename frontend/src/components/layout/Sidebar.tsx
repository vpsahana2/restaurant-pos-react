import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";
const drawerWidth = 240;
const menus = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "POS", path: "/pos", icon: <RestaurantIcon /> },
  { label: "Orders", path: "/orders", icon: <ReceiptIcon /> },
  { label: "Reports", path: "/reports", icon: <BarChartIcon /> },
  { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
];
function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <Toolbar />

      <List>
        {menus.map((menu) => (
          <ListItemButton
            key={menu.path}
            component={Link}
            to={menu.path}
            selected={location.pathname === menu.path}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>

            <ListItemText primary={menu.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
