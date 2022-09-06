import React from "react";
import { Typography, AppBar, Toolbar, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">TakeMyLuggage</Link>
          </Typography>

          {/* User map */}
          <Button color="inherit">
            <Link to="map">Map</Link>
          </Button>

          {/* Driver map */}
          <Button color="inherit">
            <Link to="driver">Driver</Link>
          </Button>
          <Divider />
          {/* Login compoenent */}
          <Button color="inherit">
            <Link to="login">Login</Link>
          </Button>

          {/* Register component  */}
          <Button color="inherit">
            <Link to="register">Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
