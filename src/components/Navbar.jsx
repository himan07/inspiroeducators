import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import "../assets/css/Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeActive = location.pathname === "/";
  const isAboutUsActive = location.pathname === "/about";
  const isContactUs = location.pathname === "/contact"

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="nav">
        <div className="nav_items">
          <Toolbar>
            <Typography color="inherit" className="shadow-button">
              InspiroEducators
            </Typography>
          </Toolbar>
          <Toolbar className="nav_btn">
            <Button
              className={isHomeActive ? "red_button" : "white_btn"}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              className={isAboutUsActive ? "red_button" : "white_btn"}
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
            <Button
              className={isContactUs ? "red_button" : "white_btn"}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
};

export default Navbar;
