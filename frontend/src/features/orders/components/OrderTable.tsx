import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";

import OrderStatusChip from "./OrderStatusChip";

import type { Order } from "../types/Order";

interface Props {
  orders: Order[];
  onView: (order: Order) => void;
}

function OrderTable({ orders, onView }: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>

            <TableCell>Customer</TableCell>

            <TableCell>Payment</TableCell>

            <TableCell>Total</TableCell>

            <TableCell>Status</TableCell>

            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>#{order.id}</TableCell>

              <TableCell>{order.customer.full_name}</TableCell>

              <TableCell>{order.payment_method}</TableCell>

              <TableCell>${Number(order.grand_total).toFixed(2)}</TableCell>

              <TableCell>
                <OrderStatusChip status={order.status} />
              </TableCell>

              <TableCell align="center">
                <IconButton onClick={() => onView(order)}>
                  <VisibilityIcon />
                </IconButton>

                <IconButton>
                  <PrintIcon />
                </IconButton>

                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default OrderTable;
