import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./styles.css";

const PathSelector = () => {
  return (
    <div>
      <h5>Select your start and End point:</h5>
      <div className="path-data">
        {/* /////////////////////////////////// */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel>Source</InputLabel>
          <OutlinedInput
            placeholder="Pickup location"
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <MyLocationIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Source"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel>Destination</InputLabel>
          <OutlinedInput
            placeholder="Delivery Location"
            endAdornment={
              <InputAdornment position="end">
                <AirlineStopsIcon />
              </InputAdornment>
            }
            label="Destination"
          />
        </FormControl>
      </div>
      {/* ///////////////////////////////////////// */}
      <br />
      <Button startIcon={<CheckCircleOutlineIcon />} variant="contained">
        Confirm
      </Button>
    </div>
  );
};

export default PathSelector;
