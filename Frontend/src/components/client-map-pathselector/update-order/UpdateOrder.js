import L from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";

// **********************************************************
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateOrder = () => {
  // **************************   Get Active Drivers : End  *******************

  // store props values in state
  // const [formData, setFormData] = useState({
  //   StartPoint: "",
  //   EndPoint: "",
  //   Distance: "",
  //   Time: "",
  //   Driver: "",
  //   orderDate: "",
  // });

  // console.log(formData);

  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState("");

  // handle change for all the inputs
  // useEffect(() => {
  //   setFormData({
  //     StartPoint: `N${start_y}, E${start_x}`,
  //     EndPoint: `N${end_y}, E${end_x}`,
  //     Distance: pathDistance,
  //     Time: pathTime,
  //   });
  // }, [start_y, start_x, end_y, end_x, pathDistance, pathTime]);

  // get user id and
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");

  // send user login inputs to server
  const handleOrder = async () => {
    // SweetAlert confirmation popup:
    // Swal.fire({
    //   title: `Your delivery will cost you ${pathDistance}$ `,
    //   // text: "You won't be able to revert this!",
    //   text: "Confirm delivery ?",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, confirm it !",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // axios
    //     axios
    //       .post(`/api/create/${id}`, {
    //         start_lat: start_y,
    //         start_lng: start_x,
    //         end_lat: end_y,
    //         end_lng: end_x,
    //         distance: pathDistance,
    //         time: pathTime,
    //         driverId: formData.Driver,
    //         deliveryDate: formData.orderDate,
    //         // console.log(driverId),
    //       })
    //       .then((res) => {
    //         console.log("ok");
    //         console.log(res.data);
    //         setResponseMsg(res.data.message);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         setError(error);
    //       });
    //     Swal.fire(
    //       "Delivery Saved !",
    //       "Your delivery has been added.",
    //       "success"
    //     );
    //   }
    // });
    // // clear form inputs after submitting
    // setFormData({
    //   StartPoint: "",
    //   EndPoint: "",
    //   Distance: "",
    //   Time: "",
    //   Date: "",
    // });
  };

  // track input changes
  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };

  return (
    <Box
      component="form"
      onChange={(e) => {
        handleChange(e);
      }}
      sx={{
        width: "250px",
        height: "200px",
        position: "fixed",
        // boxSizing: "border-box",
        backgroundColor: "#1a1d1d",
        color: "whitesmoke",
        marginTop: "-25%",
        marginLeft: "295px",
        // zIndex: 1500,
      }}
    >
      {/* <TextField
        // value={formData.Distance || ""} //te5dem
        name="Distance"
        placeholder="Test Data"
        sx={{
          m: 1,
          width: "25ch",
          // color: "#90a4ae",
          // fontFamily: "Roboto Condensed, sans-serif",
        }}
        id="standard-basic"
        label="Distance"
        InputProps={{
          endAdornment: <InputAdornment position="end">km</InputAdornment>,
        }}
      /> */}
      {/* <TextField
        // value={formData.Time || ""} //te5dem
        name="Time"
        placeholder="Test Data"
        sx={{ m: 1, width: "25ch" }}
        id="standard-basic"
        label="Time"
        InputProps={{
          endAdornment: <InputAdornment position="end">min</InputAdornment>,
        }}
      /> */}
      <TextField
        name="orderDate"
        type="datetime-local"
        // value={formData.Date || ""} //te5dem
        sx={{ m: 1, width: "25ch" }}
        id="basic"
        label="Delivery Date"
      />
      <TextField
        // defaultValue=""
        // required
        // fullWidth
        sx={{ m: 1, width: "25ch" }}
        id="outlined-select-currency"
        select
        label="Driver"
        name="Driver"
        // value={driverId}
        onChange={handleChange}
        placeholder="Please select your role !"
      >
        {/* {activeDrivers.map((activeDriver) => {
          if (activeDriver.availability === true) {
            return (
              <MenuItem key={activeDriver._id} value={activeDriver._id || ""}>
                {activeDriver.firstName}
              </MenuItem>
            );
          }
        })} */}
        <MenuItem>Driver 1</MenuItem>
      </TextField>

      <Button
        type="button"
        onClick={() => handleOrder()}
        startIcon={<BorderColorTwoToneIcon />}
        variant="contained"
      >
        Update
      </Button>
    </Box>
  );
};

export default UpdateOrder;
