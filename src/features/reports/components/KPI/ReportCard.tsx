import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  title: string;
  value: string | number;
  color: string;
}

function ReportCard({ title, value, color }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        borderLeft: `6px solid ${color}`,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Box
          sx={{
            mt: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ReportCard;
