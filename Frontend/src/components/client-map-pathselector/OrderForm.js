import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Toolbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getActiveDrivers } from "../../redux/userOrderSlice";
import axios from "axios";
import "./ClientMap.css";
import Swal from "sweetalert2";

const OrderForm = ({
  start_y,
  start_x,
  end_y,
  end_x,
  pathDistance,
  pathTime,
}) => {
  // console.log(start_y, end_y, pathDistance);

  // **************************   Get Active Drivers: Start  *******************

  // 1- redux prep
  // 2- get the drivers
  // 3- map through drivers in the from below

  // 1- redux prep:
  const { activeDrivers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const

  // 2- get the drivers:
  useEffect(() => {
    dispatch(getActiveDrivers());
  }, []);

  // 3- map through drivers in the from below

  // 4- get driver id
  // const [driverId, setDriverId] = useState({
  //   Driver: "",
  // });

  // console.log("driverID:", driverId);

  // **************************   Get Active Drivers : End  *******************

  // store props values in state
  const [formData, setFormData] = useState({
    StartPoint: "",
    EndPoint: "",
    Distance: "",
    Time: "",
  });

  // console.log(formData);

  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState("");

  // handle change for all the inputs
  useEffect(() => {
    setFormData({
      StartPoint: `N${start_y}, E${start_x}`,
      EndPoint: `N${end_y}, E${end_x}`,
      Distance: pathDistance,
      Time: pathTime,
    });
  }, [start_y, start_x, end_y, end_x, pathDistance, pathTime]);

  // get user id and
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");

  // send user login inputs to server
  const handleOrder = async () => {
    // SweetAlert confirmation popup:
    Swal.fire({
      title: `Your delivery will cost you ${pathDistance}$ `,
      // text: "You won't be able to revert this!",
      text: "Confirm delivery ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it !",
    }).then((result) => {
      if (result.isConfirmed) {
        // axios
        axios
          .post(`/api/create/${id}`, {
            start_lat: start_y,
            start_lng: start_x,
            end_lat: end_y,
            end_lng: end_x,
            distance: pathDistance,
            time: pathTime,
            // driverId: driverId,
          })
          .then((res) => {
            console.log("ok");
            setResponseMsg(res.data.message);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
        Swal.fire(
          "Delivery Saved !",
          "Your delivery has been added.",
          "success"
        );
      }
    });

    // clear form inputs after submitting
    // setFormData({
    //   StartPoint: "",
    //   EndPoint: "",
    //   Distance: "",
    //   Time: "",
    // });
  };

  return (
    <Box component="form">
      {/* <Toolbar /> */}
      {/* <TextField
        value={start_y && start_x ? formData.StartPoint : ""}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        name="StartPoint"
        placeholder="Test Data"
        sx={{ m: 1, width: "25ch" }}
        id="standard-basic"
        label="Test"
      />
      <TextField
        value={end_y && end_x ? formData.EndPoint : ""} 
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        name="EndPoint"
        placeholder="Test Data"
        sx={{ m: 1, width: "25ch" }}
        id="standard-basic"
        label="Test"
      /> */}
      <TextField
        value={formData.Distance || ""} //te5dem
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        name="Distance"
        placeholder="Test Data"
        sx={{
          m: 1,
          width: "25ch",
          // color: "#90a4ae",
          // fontFamily: "Roboto Condensed, sans-serif",
        }}
        id="standard-basic"
        label="Test"
        InputProps={{
          endAdornment: <InputAdornment position="end">km</InputAdornment>,
        }}
      />
      <TextField
        value={formData.Time || ""} //te5dem
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        name="Time"
        placeholder="Test Data"
        sx={{ m: 1, width: "25ch" }}
        id="standard-basic"
        label="Time"
        InputProps={{
          endAdornment: <InputAdornment position="end">min</InputAdornment>,
        }}
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
        // onChange={handleChange}
        // onChange={(e) => {
        //   // setDriverId(formData.Driver);
        //   // setFormData({ ...formData, [e.target.name]: e.target.value });
        //   setDriverId({ ...driverId, [e.target.name]: e.target.value });
        // }}
        placeholder="Please select your role !"
      >
        {activeDrivers.map((activeDriver) => {
          if (activeDriver.availability == true) {
            return (
              <MenuItem key={activeDriver._id} value={activeDriver._id || ""}>
                {activeDriver.firstName}
              </MenuItem>
            );
          }
        })}

        {/* <MenuItem
        // value={1}
        >
          Driver 1
        </MenuItem>
        <MenuItem
        // value={2}
        >
          Driver 2
        </MenuItem>
        <MenuItem
        // value={2}
        >
          Driver 3
        </MenuItem> */}
      </TextField>

      {/* Order confirmation message */}
      {/* {handleOrder ? Error : responseMsg} */}

      <Button
        type="button"
        onClick={() => handleOrder()}
        startIcon={<CheckCircleOutlineIcon />}
        variant="contained"
      >
        Add Order
      </Button>
    </Box>
  );
};

export default OrderForm;
