import React, { useEffect, useState } from "react";
import { Typography, Button, Box, Modal, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
// import ProfilePhoto from "./ProfilePhoto";
import axios from "axios";

const UpdateModal = () => {
  const id = localStorage.getItem("id");
  //----------- update profile info: Email/Paswword:  Start  --------------------
  const [profileInfo, setProfileInfo] = useState({
    email: "",
    password: "",
  });

  // handleEmailChange
  const handleInfoChange = (e) => {
    // setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
    // console.log(profileInfo);
  };

  // handle the update:
  const handleInfoUpdate = () => {
    console.log("ok");
  };

  //----------- update profile info: Email/Paswword:  End  --------------------

  // modal style
  const style = {
    // position: "absolute",
    top: "50%",
    left: "50%",
    // transform: "translate(-50%, -50%)",
    // width: 200,
    // bgcolor: "#121212",
    // border: "2px solid #000",
    // boxShadow: 24,
    // p: 4,
    // -----------------
    width: "250px",
    height: "200px",
    position: "absolute",
    boxSizing: "border-box",
    backgroundColor: "#1a1d1d",
    color: "whitesmoke",
    // marginTop: "200px",
    // marginLeft: "310px",
    // zIndex: 1500,
  };

  // modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        onClick={handleOpen}
        color="inherit"
        style={{
          fontFamily: "Roboto Condensed, sans-serif",
          textDecoration: "none",
          color: "red",
          marginTop: "200px",
        }}
        endIcon={<SettingsIcon />}
      >
        Settings
      </Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{
              marginBottom: "20px",
              fontFamily: "Roboto Condensed, sans-serif",
              textAlign: "center",
              color: "whitesmoke",
            }}
            id="modal-modal-description"
            variant="h5"
          >
            Profile Settings
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* ---------------- Profile Photo component ----------- */}
            {/* <ProfilePhoto /> */}

            {/* Profile Email */}
            <TextField
              name="email"
              placeholder="Enter your New Email..."
              sx={{ m: 1, width: "25ch" }}
              id="standard-basic"
              label="New Email"
              onChange={(e) => handleInfoChange(e)}
            />

            {/* Profile Password */}
            <TextField
              name="password"
              placeholder="Enter your New Password..."
              sx={{ m: 1, width: "25ch" }}
              id="standard-basic"
              label="New Password"
              onChange={(e) => handleInfoChange(e)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              //   flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <Button
              type="button"
              //   startIcon={<CheckCircleOutlineIcon />}
              variant="contained"
              onClick={handleInfoUpdate}
            >
              Save
            </Button>
            <Button type="button" onClick={handleClose} variant="contained">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

// *******************    Profile Modal: End    ***********************

export default UpdateModal;
