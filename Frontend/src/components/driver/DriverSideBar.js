import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// ---------------------------------------   Material UI imports  -------------
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
// --------------------------------   my components imports ---------------
import DriverCard from "./DriverCard";
import Switcher from "./Switcher";
import SwitcherContainer from "./SwitcherContainer";
// import "./styles.css";

const drawerWidth = 300;

const DriverSideBar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          marginTop: "64px",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Switcher /> */}

      <SwitcherContainer />

      <Toolbar />
      <Divider />

      {/* *********************    accept User Orders Component ******************** */}
      <List>
        <DriverCard />
      </List>
    </Drawer>
  );
};

export default DriverSideBar;
