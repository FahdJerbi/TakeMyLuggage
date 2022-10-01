import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// ---------------------------------------------
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import "./ClientMap.css";

// ----------------------------   my components ---------------
import OrderForm from "./OrderForm";
import OrderCard from "./OrderCard";
import { Typography } from "@mui/material";
// import "./styles.css";

const drawerWidth = 300;

const ClientPathSelector = () => {
  // user infos
  const email = localStorage.getItem("mail");
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");

  // make a state to hold data store
  const [showApiRoute, setShowApiRoute] = useState();
  // call the state from store
  const ApiRoute = useSelector((state) =>
    state.routingMachineData.userPaths.at(-1)
  );
  // assign the store state to the Setter to update whenever new Route from api is found
  useEffect(() => {
    setShowApiRoute(ApiRoute);
  }, [ApiRoute]);

  // ************************************* Drawer and list items
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick_1 = (event, index) => {
    setOpen1(!open1);
    setSelectedIndex(index);
  };
  const handleClick_2 = (event, index) => {
    setOpen2(!open2);
    setSelectedIndex(index);
  };
  // console.log(showApiRoute);
  // *******************************************
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          marginTop: "64px",
          boxSizing: "border-box",
          backgroundColor: "#1a1d1d",
          color: "whitesmoke",
          // fontFamily: "Roboto Condensed, sans-serif",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* ******************   Avatar  **************** */}
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

      {/* <Toolbar /> */}
      <Divider style={{ marginTop: "10px", backgroundColor: "#2a3333" }} />

      {/* ***************************   make New Order component  *********************  */}
      {/* <OrderForm {...showApiRoute} /> */}
      <List>
        <Box className="order">
          <ListItemButton
            className="user-drawer-buttons"
            selected={selectedIndex === 1}
            onClick={(event) => handleClick_1(event, 1)}
          >
            <ListItemIcon>
              <AddCircleOutlineIcon className="user-drawer-icons" />
            </ListItemIcon>
            <Typography style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
              Make a Delivery
            </Typography>
            {/* <ListItemText
              sx={{ fontFamily: "Roboto Condensed, sans-serif" }}
              primary="Make a Delivery"
            /> */}
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <ListItem>
              <OrderForm {...showApiRoute} /> {/* comp related to LRM */}
            </ListItem>
          </Collapse>
        </Box>
        {/* *********************     User Orders Component ******************** */}

        <Divider />

        <ListItemButton
          className="user-drawer-buttons"
          //  onClick={handleClick_2}
          selected={selectedIndex === 2}
          onClick={(event) => handleClick_2(event, 2)}
        >
          <ListItemIcon>
            <FormatListBulletedIcon className="user-drawer-icons" />
          </ListItemIcon>
          <Typography style={{ fontFamily: "Roboto Condensed, sans-serif" }}>
            my Orders
          </Typography>
          {/* <ListItemText primary="my Orders" /> */}
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItem>
            <OrderCard /> {/* Orders from Rest Api */}
          </ListItem>
        </Collapse>
      </List>

      {/* <h5>Select your start and End point:</h5>
      <FormControl> */}
      {/* <TextField
          name="firstname"
          placeholder="Pickup location"
          sx={{ m: 1, width: "25ch" }}
          id="standard-basic"
          label="Source"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <MyLocationIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <TextField
          name="lastname"
          placeholder="Delivery Location"
          sx={{ m: 1, width: "25ch" }}
          id="standard-basic"
          label="Destination"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AirlineStopsIcon />
              </InputAdornment>
            )
          }}
        /> */}

      {/* Map over the Api Route data */}
      {/* {showApiRoute
          ? Object.values(showApiRoute).map((data) => console.log(data))
          : // console.log("it's still empty")
            null} */}

      {/* {showApiRoute
          ? Object.values(showApiRoute).map((data) => (
              <TextField
                value={data}
                placeholder="Delivery Location"
                sx={{ m: 1, width: "25ch" }}
                // label="Destination"
              />
            ))
          : null} */}

      {/* <Button startIcon={<CheckCircleOutlineIcon />} variant="contained">
          Confirm
        </Button> */}

      {/* </FormControl> */}
    </Drawer>
  );
};

export default ClientPathSelector;
