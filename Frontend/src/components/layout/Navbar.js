import React, { useEffect, useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  let user = localStorage.getItem("isUser");
  let driver = localStorage.getItem("isDriver");
  let token = localStorage.getItem("auth-token");

  let userRole = user || driver;

  //logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // -------------------    Nav Changes    ------------------------
  let role;
  let visitor;

  if (userRole) {
    // ------------------   This is User Nav  -------------------
    role = (
      <Box>
        {/* <Button color="inherit">
          <Link to="map">My Map</Link>
        </Button> */}
        {/* Logout  */}
        <Button color="inherit">
          <Link to="login" onClick={handleLogout}>
            Logout
          </Link>
        </Button>
      </Box>
    );
  } else {
    visitor = (
      <Box>
        {/* Login compoenent */}
        <Button color="inherit">
          <Link to="login">Login</Link>
        </Button>
        {/* Register compoenent */}
        <Button color="inherit">
          <Link to="register">Sign Up</Link>
        </Button>
      </Box>
    );
  }

  useEffect(() => {
    userRole ? role : visitor;
  }, [visitor]);

  return (
    <div>
      <AppBar
        position="fixed"
        // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link to="/"> */}
            TakeMyLuggage
            {/* </Link> */}
          </Typography>
          {/* -------------- this is working fine, without Admin role   ------------ */}
          {/* {user && token ? (
          <Box>
            <Button color="inherit">
              <Link to="map">Map</Link>
            </Button>
            <Button color="inherit">
              <Link to="login" onClick={handleLogout}>
                Logout
              </Link>
            </Button>
          </Box>
          ) : (
          <Box>
            <Button color="inherit">
              <Link to="driver">Driver</Link>
            </Button>
            <Button color="inherit">
              <Link to="login" onClick={handleLogout}>
                Logout
              </Link>
            </Button>
          </Box>
          )} */}

          {/* ----------------------------------------- */}
          {token ? role : visitor}

          {/* {user && token && (
            <Button color="inherit">
              <Link to="map">Map</Link>
            </Button>
          )} */}
          {/* Driver map */}
          {/* {driver && token && (
            <Button color="inherit">
              <Link to="driver">Driver</Link>
            </Button>
          )} */}
          {/* ------------------------------------------------- */}
          <Divider />
          {/* ------------------------------------------------------- */}
          {/* Login compoenent */}
          {/* <Button color="inherit">
            <Link to="login">Login</Link>
          </Button> */}
          {/* Register component  */}
          {/* <Button color="inherit">
            <Link to="register">Sign Up</Link>
          </Button> */}
          <Button color="inherit">
            <Link to="admin">Dashboard</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
