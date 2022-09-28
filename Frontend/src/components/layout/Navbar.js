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
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "./layout.css";

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

  // -------------------    Nav Changes    ------------------------
  const clientNav = (
    <Toolbar className="client-navbar">
      {/* <Tooltip sx={{ flexGrow: 2 }} title="Open settings">
        <IconButton sx={{ p: 1 }}>
          <Avatar alt="User Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Typography>User@gmail.com</Typography> */}

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
    </Toolbar>
  );

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

  const visitor = (
    <Toolbar>
      <AdbIcon />
      <Typography variant="h6" component="div">
        TakeMyLuggage
      </Typography>

      <Box sx={{ flexGrow: 1 }} />

      <Button color="inherit">Home</Button>
      <Button color="inherit">Contact Us</Button>
      {/* Login compoenent */}
      <Button color="inherit">
        <Link to="login">Login</Link>
      </Button>
      {/* Register compoenent */}
      <Button color="inherit">
        <Link to="register">Sign Up</Link>
      </Button>
    </Toolbar>
  );

  // useEffect(() => {
  //   userRole ? role : visitor;
  // }, [visitor]);

  return (
    <AppBar
      position="fixed"
      // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      {/* <Toolbar> */}

      {!token ? visitor : clientNav}

      {/* </Toolbar> */}
    </AppBar>
  );
};

export default Navbar;
