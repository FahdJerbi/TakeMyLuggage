import React from "react";
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

function OrderCard() {
  return (
    <Card sx={{ width: 260 }}>
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
        <Typography>Distance: `147 km` </Typography>
        <Typography>Path Time: `2h 8min ` </Typography>
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
}

export default OrderCard;
