import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const orders = ["Pizza x2", "Burger x1", "Coffee x3", "Pasta x1"];

function RecentOrders() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Orders
      </Typography>

      <List>
        {orders.map((order) => (
          <ListItem key={order}>
            <ListItemText primary={order} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default RecentOrders;
