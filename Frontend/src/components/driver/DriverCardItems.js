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

// -------------------------------------------------------
import axios from "axios";

function OrderCardItems({ _id, distance, time, userId }) {
  // console.log(distance, time);

  return (
    <div>
      <Card
        key={_id}
        sx={{
          width: 250,
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
          title={`User id: ${userId}`}
          subheader="Pending..."
        />
        <CardContent>
          {/* <Typography>Source: </Typography>
          <Typography>Destination: </Typography> */}
          <Typography>Distance: {distance} km </Typography>
          <Typography>time Time:{time} min </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button>Accept</Button>

          <Button>Cancel</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default OrderCardItems;
