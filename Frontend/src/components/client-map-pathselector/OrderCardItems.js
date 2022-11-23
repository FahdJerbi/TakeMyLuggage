import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete"; // delete Icon
import EditIcon from "@mui/icons-material/Edit"; // edit Icon
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt"; // edit location
// -------------------------------------------------------
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./ClientMap.css";
import UpdateOrder from "./update-order/UpdateOrder";

function OrderCardItems(props) {
  //   const [myOrders, setMyOrders] = useState([]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");

  // console.log(_id, distance, time);

  // delete a specific order
  const handleDelete = () => {
    axios
      .delete(`/api/delete/${props._id}`)
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
  };

  // ******************  show/hide Update Order menu: Start  *******************
  const [showMenu, setShowMenu] = useState(false);
  const handleOpen = () => {
    setShowMenu(!showMenu);
  };

  // ******************  show/hide Update Order menu: End  *******************

  return (
    <div>
      <Card
        className="card-item"
        id={props._id ? "active" : ""}
        key={props._id}
        sx={{
          width: 240,
          display: "flex",
          flexDirection: "column",
          margin: "5px",
          border: "1px grey solid",
          backgroundColor: "#202727",
        }}
      >
        {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="first order"
          subheader="Pending..."
        /> */}
        <CardContent style={{ display: "flex" }}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>

          <Box sx={{ flexGrow: 1 }} />
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "whitesmoke",
            }}
          >
            Distance: {props.distance} km
            <br />
            Path Time: {props.time} min
            <br />
            price:
            <br />
            Driver: `Big Daddy`
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <EditLocationAltIcon />
          </IconButton>
        </CardActions>
      </Card>

      {/* update order component */}
      {showMenu ? <UpdateOrder _id={props._id} orderInfo={props} /> : null}

      {/* <div
        style={{
          border: "1px red solid",
          position: "fixed",
          zIndex: "5000",
          marginTop: "-30%",
          marginLeft: "300px",
          width: "280px",
          backgroundColor: "gray",
          border: "1px red solid",
        }}
      >
        {showMenu ? <UpdateOrder /> : null}
      </div> */}
    </div>
  );
}

export default OrderCardItems;
