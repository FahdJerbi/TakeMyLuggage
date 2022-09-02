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

// ----------------------------   my components ---------------
import OrderForm from "./OrderForm";
import OrderCard from "./OrderCard";
// import "./styles.css";

const drawerWidth = 300;

const ClientPathSelector = () => {
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

  const handleClick_1 = () => {
    setOpen1(!open1);
  };
  const handleClick_2 = () => {
    setOpen2(!open2);
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
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Toolbar /> */}

      {/* ***************************   make New Order component  *********************  */}
      {/* <OrderForm {...showApiRoute} /> */}
      <List>
        <Box className="order">
          <ListItemButton onClick={handleClick_1}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Make a Delivery" />
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

        <ListItemButton onClick={handleClick_2}>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>
          <ListItemText primary="my Orders" />
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
