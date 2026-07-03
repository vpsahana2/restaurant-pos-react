import { Card, CardContent, Typography, Chip } from "@mui/material";

interface Props {
  title: string;
  value: string;
  color: "primary" | "secondary" | "success" | "warning" | "error";
}

function DashboardCard({ title, value, color }: Props) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          {value}
        </Typography>

        <Chip label={title} color={color} sx={{ mt: 2 }} />
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
