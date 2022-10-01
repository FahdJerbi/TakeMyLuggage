import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "./Dashboard.css";
import { style } from "@mui/system";

const MyStyle = {
  color: "#f5f5f5",
  fontFamily: "Roboto Condensed, sans-serif",
};

// export const mainListItems = (
//   <div
//   // style={{ border: "1px gray solid" }}
//   >
//     <Tooltip sx={{ flexGrow: 1 }} title="Open settings">
//       <IconButton sx={{ p: 1 }}>
//         <Avatar
//           sx={{ width: 65, height: 65 }}
//           alt="Remy Sharp"
//           src="/static/images/avatar/2.jpg"
//         />
//       </IconButton>
//     </Tooltip>
//     <Typography
//       style={{
//         fontFamily: "Roboto Condensed, sans-serif",
//       }}
//       id="admin-name"
//       variant="h5"
//     >
//       My name
//     </Typography>
//     <Typography
//       id="admin-email"
//       style={{
//         fontFamily: "Roboto Condensed, sans-serif",
//         fontSize: "12px",
//         marginBottom: "10px",
//       }}
//     >
//       Admin@gmail.com
//     </Typography>

//     {/* <Toolbar /> */}

//     <Divider style={{ margin: "20px 0 20px 0 ", backgroundColor: "#474747" }} />

//     {/* ----------------------------------------------     Dashboard   ------------------------ */}
//     <Link
//       to="../admin"
//       style={{
//         textDecoration: "none",
//       }}
//     >
//       <ListItemButton className="title-buttons" selected={{ color: "red" }}>
//         <ListItemIcon>
//           <DashboardIcon className="icons" />
//         </ListItemIcon>
//         <Typography
//           className="list-titles"
//           style={{
//             fontFamily: "Roboto Condensed, sans-serif",
//             color: "#f5f5f5",
//           }}
//           // variant="h7"
//         >
//           Dashboard
//         </Typography>
//       </ListItemButton>
//     </Link>

//     {/* ----------------------------------------------     Users   ------------------------ */}
//     <Link to="users" style={{ textDecoration: "none" }}>
//       <ListItemButton className="title-buttons" selected={false}>
//         <ListItemIcon>
//           <PeopleIcon className="icons" />
//         </ListItemIcon>
//         <Typography
//           className="list-titles"
//           style={{
//             fontFamily: "Roboto Condensed, sans-serif",
//             color: "#f5f5f5",
//           }}
//           // variant="h7"
//         >
//           Users
//         </Typography>
//       </ListItemButton>
//     </Link>

//     {/* ----------------------------------------------     Drivers   ------------------------ */}
//     <Link to="drivers" style={{ textDecoration: "none" }}>
//       <ListItemButton className="title-buttons">
//         <ListItemIcon>
//           <LocalShippingIcon className="icons" />
//         </ListItemIcon>
//         <Typography
//           className="list-titles"
//           style={{
//             fontFamily: "Roboto Condensed, sans-serif",
//             color: "#f5f5f5",
//           }}
//           // variant="h7"
//         >
//           Drivers
//         </Typography>
//       </ListItemButton>
//     </Link>

//     {/* ----------------------------------------------     Orders   ------------------------ */}
//     <Link to="orders" style={{ textDecoration: "none" }}>
//       <ListItemButton className="title-buttons">
//         <ListItemIcon>
//           <ShoppingCartIcon className="icons" />
//         </ListItemIcon>
//         <Typography
//           className="list-titles"
//           style={{
//             fontFamily: "Roboto Condensed, sans-serif",
//             color: "#f5f5f5",
//           }}
//           // variant="h7"
//         >
//           Orders
//         </Typography>
//       </ListItemButton>
//     </Link>
//   </div>
// );

const ListItems = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div
    // style={{ border: "1px gray solid" }}
    >
      <Tooltip sx={{ flexGrow: 1 }} title="Open settings">
        <IconButton sx={{ p: 1 }}>
          <Avatar
            sx={{ width: 65, height: 65 }}
            alt="Remy Sharp"
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
        My name
      </Typography>
      <Typography
        id="admin-email"
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        Admin@gmail.com
      </Typography>

      {/* <Toolbar /> */}

      <Divider
        style={{ margin: "20px 0 20px 0 ", backgroundColor: "#474747" }}
      />

      {/* ----------------------------------------------     Dashboard   ------------------------ */}
      <Link
        to="../admin"
        style={{
          textDecoration: "none",
        }}
      >
        <ListItemButton
          className="title-buttons"
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardIcon className="icons" />
          </ListItemIcon>
          <Typography
            className="list-titles"
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "#f5f5f5",
            }}
            // variant="h7"
          >
            Dashboard
          </Typography>
        </ListItemButton>
      </Link>

      {/* ----------------------------------------------     Users   ------------------------ */}
      <Link to="users" style={{ textDecoration: "none" }}>
        <ListItemButton
          className="title-buttons"
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <PeopleIcon className="icons" />
          </ListItemIcon>
          <Typography
            className="list-titles"
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "#f5f5f5",
            }}
            // variant="h7"
          >
            Users
          </Typography>
        </ListItemButton>
      </Link>

      {/* ----------------------------------------------     Drivers   ------------------------ */}
      <Link to="drivers" style={{ textDecoration: "none" }}>
        <ListItemButton
          className="title-buttons"
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <LocalShippingIcon className="icons" />
          </ListItemIcon>
          <Typography
            className="list-titles"
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "#f5f5f5",
            }}
            // variant="h7"
          >
            Drivers
          </Typography>
        </ListItemButton>
      </Link>

      {/* ----------------------------------------------     Orders   ------------------------ */}
      <Link to="orders" style={{ textDecoration: "none" }}>
        <ListItemButton
          className="title-buttons"
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <ShoppingCartIcon className="icons" />
          </ListItemIcon>
          <Typography
            className="list-titles"
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "#f5f5f5",
            }}
            // variant="h7"
          >
            Orders
          </Typography>
        </ListItemButton>
      </Link>
    </div>
  );
};

export default ListItems;
