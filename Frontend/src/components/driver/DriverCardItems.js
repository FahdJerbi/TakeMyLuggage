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
import Button from "@mui/material/Button";
import "./DriverMap.css";
import { useDispatch, useSelector } from "react-redux";
import { orderDelivered } from "../../redux/driverSlice";
// -------------------------------------------------------
import axios from "axios";

function OrderCardItems({ _id, distance, time, userId, delivered }) {
  // console.log("delivered:", delivered);
  console.log("_id:", _id);

  // redux prep :
  const { delivery } = useSelector((state) => state.driver);
  const dispatch = useDispatch();

  const [orderDelivery, setOrderDelivery] = useState(false);
  // console.log("orderDelivery:", orderDelivery);

  // handle delivery
  const handleDelivery = () => {
    {
      orderDelivery ? setOrderDelivery(false) : setOrderDelivery(true);
    }
    dispatch(orderDelivered(_id, { delivered: orderDelivery }));
    // axios.patch(`/api/driver/confirmRequest/${_id}`, {
    //   delivered: orderDelivery,
    // }); // it's working !!
    console.log("handleDelivery is working !!");
  };

  // send the order delivery status upon calling the function "handleDelivery":
  // useEffect(() => {
  // axios.patch(`/api/driver/confirmRequest/${_id}`, {
  //   delivered: orderDelivery,
  // });
  //   dispatch(orderDelivered(_id, { delivered: orderDelivery }));
  // }, []);

  return (
    <div>
      <Card
        key={_id}
        // sx={{
        //   width: 250,
        //   display: "flex",
        //   flexDirection: "column",
        //   margin: "5px",
        //   border: "1px grey solid",
        // }}
        sx={{
          width: 240,
          display: "flex",
          flexDirection: "column",
          margin: "5px",
          border: "1px grey solid",
          backgroundColor: "#202727",
        }}
      >
        <CardHeader
          // avatar={
          //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //     R
          //   </Avatar>
          // }
          // title={`User id: ${userId}`}
          subheader={`User id: ${userId}`}
        />
        <CardContent>
          {/* <Typography>Source: </Typography>
          <Typography>Destination: </Typography> */}
          <Typography>Distance: {distance} km </Typography>
          <Typography>time Time:{time} min </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <Button>Accept</Button> */}

          <Button
            id="successfully-delivered"
            onClick={handleDelivery}
            // style={{
            //   border: "1px red solid",
            // }}
          >
            Delivered
          </Button>
          {/* <Button>Cancel</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default OrderCardItems;
