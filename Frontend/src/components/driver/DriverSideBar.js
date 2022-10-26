import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// ---------------------------------------   Material UI imports  -------------
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";
// --------------------------------   my components imports ---------------
import DriverCard from "./DriverCard";
// import "./styles.css";

const drawerWidth = 300;

const DriverSideBar = () => {
  // Driver infos
  const email = localStorage.getItem("mail");
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height: "90%",
          marginTop: "64px",
          boxSizing: "border-box",
          backgroundColor: "#1a1d1d",
          color: "whitesmoke",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* ******************   Avatar: Start  **************** */}
      <Tooltip style={{ margin: "8px 0 8px 0" }} title="Open settings">
        <IconButton sx={{ p: 1 }}>
          <Avatar
            sx={{ width: 70, height: 70 }}
            alt="User"
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Tooltip>
      <Typography
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
        }}
        id="admin-name"
        variant="h5"
      >
        {`${fname} ${lname} `}
      </Typography>
      <Typography
        id="admin-email"
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        {email}
      </Typography>
      {/* ******************   Avatar: End  **************** */}

      <Divider />

      {/* *********************    accept User Orders Component ******************** */}
      <List>
        <DriverCard />
      </List>
    </Drawer>
  );
};

export default DriverSideBar;
