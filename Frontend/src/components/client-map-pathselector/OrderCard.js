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

function OrderCard() {
  const [myOrders, setMyOrders] = useState([]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");
  // console.log(id, token);

  useEffect(() => {
    axios
      .get(`/api/getUserOrders/${id}`)
      .then((res) => setMyOrders(res.data.UserOrders))
      .catch((error) => {
        // console.log(error)
        if (error.response) {
          //do something
          console.log(error.response);
        } else if (error.request) {
          //do something else
          console.log(error.request);
        } else if (error.message) {
          //do something other than the other two
          console.log(error.message);
        }
      });
  }, []);

  console.log(myOrders);

  return (
    <div>
      {myOrders.map((order) => {
        return (
          // console.log(order.distance, order.time);
          <Card
            key={order._id}
            sx={{
              width: 260,
              display: "flex",
              flexDirection: "column",
              margin: "5px",
              border: "1px grey solid",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="first order"
              subheader="Pending..."
            />
            <CardContent>
              <Typography>Distance: {order.distance} km </Typography>
              <Typography>Path Time: {order.time} min </Typography>
              <Typography>Driver: `Big Daddy` </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditLocationAltIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default OrderCard;
