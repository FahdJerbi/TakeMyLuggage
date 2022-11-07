import React, { useEffect, useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Divider,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Modal,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import ProfileModal from "./profile-settings/ProfileModal";
// import "./layout.css";

// *******************    Navbar : Start    ***********************
const Navbar = () => {
  // let user = localStorage.getItem("isUser");
  // let driver = localStorage.getItem("isDriver");
  // let admin = localStorage.getItem("isAdmin");
  let token = localStorage.getItem("auth-token");

  //logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const driverNav = (
    <Toolbar className="client-navbar">
      <Typography
        id="navbar-title"
        variant="h6"
        component="div"
        sx={{ flexGrow: 0, fontFamily: "Roboto Condensed, sans-serif" }}
      >
        TakeMyLuggage
      </Typography>

      <Box sx={{ flexGrow: 1 }} />
      <Button color="inherit">
        <Link
          style={{
            fontFamily: "Roboto Condensed, sans-serif",
            textDecoration: "none",
            color: "whitesmoke",
          }}
          to="login"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </Button>

      {/* Profile component */}
      <ProfileModal />
    </Toolbar>
  );
  // *******************    Navbar : End    ***********************

  // const driverNav = (
  //   <Toolbar>
  //     <Tooltip sx={{ flexGrow: 2 }} title="Open settings">
  //       <IconButton sx={{ p: 1 }}>
  //         <Avatar alt="Driver" src="/static/images/avatar/2.jpg" />
  //       </IconButton>
  //     </Tooltip>
  //     <Typography>Driver@gmail.com</Typography>

  //     <Box sx={{ flexGrow: 1 }} />
  //     <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
  //       TakeMyLuggage
  //     </Typography>

  //     <Box sx={{ flexGrow: 1 }} />
  //     <Button
  //       color="inherit"
  //       // sx={{ flexGrow: 0 }}
  //     >
  //       <Link to="login" onClick={handleLogout}>
  //         Logout
  //       </Link>
  //     </Button>
  //   </Toolbar>
  // );

  return (
    <AppBar
      position="fixed"
      // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      {driverNav}
    </AppBar>
  );
};

export default Navbar;
