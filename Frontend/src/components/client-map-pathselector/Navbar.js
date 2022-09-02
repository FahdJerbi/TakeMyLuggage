import * as React from "react";
import { Typography, AppBar, Toolbar, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const Navbar = () => {
  // add style to link elements
  // let linkStyle =

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">TakeMyLuggage</Link>
          </Typography>

          <Button color="inherit">
            <Link to="map">Map</Link>
          </Button>

          <Divider />
          <Button color="inherit">
            <Link to="login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="register">Sign Up</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
