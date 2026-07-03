import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          marginTop: 10,
          padding: 5,
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h4">Restaurant POS</Typography>

          <Typography color="text.secondary">Login to continue</Typography>

          <TextField fullWidth label="Email" />

          <TextField fullWidth label="Password" type="password" />
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
