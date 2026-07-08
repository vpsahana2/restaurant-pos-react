import Chip from "@mui/material/Chip";

import type { OrderStatus } from "../types/Order";

interface Props {
  status: OrderStatus;
}

function OrderStatusChip({ status }: Props) {
  switch (status) {
    case "Pending":
      return <Chip label="Pending" color="warning" size="small" />;

    case "Preparing":
      return <Chip label="Preparing" color="info" size="small" />;

    case "Completed":
      return <Chip label="Completed" color="success" size="small" />;

    case "Cancelled":
      return <Chip label="Cancelled" color="error" size="small" />;

    default:
      return <Chip label={status} />;
  }
}

export default OrderStatusChip;
