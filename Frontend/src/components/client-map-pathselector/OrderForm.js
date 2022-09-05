import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const OrderForm = ({
  start_y,
  start_x,
  end_y,
  end_x,
  pathDistance,
  pathTime,
}) => {
  // console.log(start_y, end_y, pathDistance);

  // store props values in state
  const [formData, setFormData] = useState({
    StartPoint: "",
    EndPoint: "",
    Distance: "",
    Time: "",
  });

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

  const dispatch = useDispatch();

  // get user id and
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("auth-token");

  // send user login inputs to server
  const handleOrder = async () => {
    await axios
      .post(`/api/create/${id}`, {
        start_lat: start_y,
        start_lng: start_x,
        end_lat: end_y,
        end_lng: end_x,
        distance: pathDistance,
        time: pathTime,
      })
      .then((res) => {
        console.log("ok");
        console.log(res);
      })
      .catch((error) => {
        // setError(error);
        console.log(error);
      });
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
        value={formData.Distance} //te5dem
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        name="Distance"
        placeholder="Test Data"
        sx={{ m: 1, width: "25ch" }}
        id="standard-basic"
        label="Test"
        InputProps={{
          endAdornment: <InputAdornment position="end">km</InputAdornment>,
        }}
      />
      <TextField
        value={formData.Time} //te5dem
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
      <Button
        type='button'
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
