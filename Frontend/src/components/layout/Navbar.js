import React from "react";
import { Typography, AppBar, Toolbar, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TakeMyLuggage
          </Typography>

          <Link to="/">
            <Button color="inherit">Map</Button>
          </Link>
          <Link to="/dash">
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Divider />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
