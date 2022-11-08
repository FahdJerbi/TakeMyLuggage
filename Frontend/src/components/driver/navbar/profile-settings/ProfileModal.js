import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Divider,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Modal,
  TextField,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import ProfilePhoto from "./ProfilePhoto";
import axios from "axios";
// import ProfilePhoto from

// *******************    Profile Modal: Start    ***********************

const ProfileModal = () => {
  const id = localStorage.getItem("id");
  //----------- update profile info: Email/Paswword:  Start  --------------------
  const [profileInfo, setProfileInfo] = useState({
    email: "",
  });

  // handleEmailChange
  const handleInfoChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
    console.log(profileInfo);
  };

  // handle the update:
  const handleInfoUpdate = () => {
    axios
      .put(`/api/driver/updateProfileInfo/${id}`, profileInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //----------- update profile info: Email/Paswword:  End  --------------------

  // modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // bgcolor: "#121212",
    bgcolor: "gray",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    // fontFamily:
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
          color: "whitesmoke",
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
          {/* <IconButton sx={{ flexGrow: 2 }}>
              <CloseRoundedIcon /> 
            </IconButton> */}

          {/* <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Profile Modal
          </Typography> */}

          <Typography
            // variant="h6"
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center" }}
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
            <ProfilePhoto />

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

export default ProfileModal;
