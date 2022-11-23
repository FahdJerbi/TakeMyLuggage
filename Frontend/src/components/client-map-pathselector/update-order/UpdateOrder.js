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
import { useSelector, useDispatch } from "react-redux";
import { getActiveDrivers } from "../../../redux/userOrderSlice";

const UpdateOrder = (props) => {
  // {
  //   start_lat,
  //   start_lng,
  //   end_lat,
  //   end_lng,
  //   distance,
  //   time,
  //   deliveryDate,
  //   driverId,
  //   _id,
  // }

  // store update values in state
  const [updateData, setUpdateData] = useState({
    // StartPoint: "",
    // EndPoint: "",
    // Distance: "",
    // Time: "",
    Driver: "",
    orderDate: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState("");

  // handle change for all the inputs
  // useEffect(() => {
  //   setUpdateData({
  //     // StartPoint: `N${start_y}, E${start_x}`,
  //     // EndPoint: `N${end_y}, E${end_x}`,
  //     // Distance: pathDistance,
  //     // Time: pathTime,
  //     orderDate: props.deliveryDate,
  //   });
  // }, []);

  // **************************   Get Active Drivers : Start  *******************
  // 1- redux prep:
  const { activeDrivers } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 2- get the active drivers :
  useEffect(() => {
    dispatch(getActiveDrivers());
  }, []);
  // **************************   Get Active Drivers : End  *******************

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
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log(updateData);
  };

  // send updated inputs to server
  const handleUpdate = () => {
    axios
      .put(`/api/update/${_id}`, {
        // driverId: updateData.Driver,
        deliveryDate: updateData.orderDate,
      })
      .then((res) => {
        console.log(res);
        console.log("updated succefully !!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      id={props._id}
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
        defaultValue={oldDate}
        value={oldDate}
        sx={{ m: 1, width: "25ch" }}
        id="basic"
        label="Delivery Date"
      />
      <TextField
        name="Driver"
        select
        defaultValue=""
        // required
        // fullWidth
        sx={{ m: 1, width: "25ch" }}
        id="outlined-select-currency"
        label="Driver"
        // value={driverId}
        onChange={handleChange}
        placeholder="Please select your role !"
      >
        {activeDrivers.map((activeDriver) => {
          if (activeDriver.availability === true) {
            return (
              <MenuItem key={activeDriver._id} value={activeDriver._id || ""}>
                {activeDriver.firstName}
              </MenuItem>
            );
          }
        })}
        {/* <MenuItem value={1}>Driver 1</MenuItem>
        <MenuItem value={2}>Driver 2</MenuItem> */}
      </TextField>

      <Button
        type="button"
        onClick={() => handleUpdate()}
        startIcon={<BorderColorTwoToneIcon />}
        variant="contained"
      >
        Update
      </Button>
    </Box>
  );
};

export default UpdateOrder;
