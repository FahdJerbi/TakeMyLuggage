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
// -------------------------------------------------------
import axios from "axios";

function OrderDeliveredCard({ _id, distance, time, userId, delivered }) {
  // console.log("delivered:", delivered);

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
          border: "1px yellow solid",
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
            id="delivered"
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

export default OrderDeliveredCard;
