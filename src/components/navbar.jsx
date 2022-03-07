import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  AddCircleOutline,
  HomeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  return (
    <Box sx={{ width: "100%", height: "fit-content" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <HomeOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Data
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate("/add")}
              color="inherit"
            >
              <AddCircleOutline />
            </IconButton>
            <Button
              color="error"
              variant="contained"
              endIcon={<LogoutOutlined />}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              LogOut
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
