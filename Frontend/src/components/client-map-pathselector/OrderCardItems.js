import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
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

function OrderCardItems({ distance, time, _id }) {
  //   const [myOrders, setMyOrders] = useState([]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");

  console.log(_id, distance, time);

  // delete a specific order
  const handleDelete = () => {
    axios
      .delete(`/api/delete/${_id}`)
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
  };

  //   console.log(myOrders);

  return (
    <div>
      <Card
        className="card-item"
        id={_id ? "active" : ""}
        key={_id}
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
        <CardContent>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "whitesmoke",
            }}
          >
            Distance: ${distance} km
            <br />
            Path Time: {time} min
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
          <IconButton>
            <EditLocationAltIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default OrderCardItems;
