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
import { Link } from "react-router-dom";

// *******************    Profile Modal: Start    ***********************

const ProfileModal = () => {
  // modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#121212",
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
            // component="h2"
          >
            Profile Modal
          </Typography> */}

          <Typography
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
            {/* Profile Photo */}
            <Box>
              <Tooltip style={{ margin: "8px 0 8px 0" }} title="Profile Photo">
                <IconButton sx={{ p: 1 }}>
                  <Avatar
                    sx={{ width: 90, height: 90 }}
                    alt="User"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Button
                type="button"
                //   startIcon={<CheckCircleOutlineIcon />}
                variant="contained"
              >
                Upload Photo
              </Button>
            </Box>

            <Typography
              style={{
                fontFamily: "Roboto Condensed, sans-serif",
              }}
              id="driver-name"
              variant="h6"
            >
              My Name
            </Typography>

            {/* Profile Email */}
            <TextField
              name="new-email"
              placeholder="Enter your New Email..."
              sx={{ m: 1, width: "25ch" }}
              id="standard-basic"
              label="New Email"
            />

            {/* Profile Password */}
            <TextField
              name="new-password"
              placeholder="Enter your New Password..."
              sx={{ m: 1, width: "25ch" }}
              id="standard-basic"
              label="New Password"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              //   flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Button
              type="button"
              //   startIcon={<CheckCircleOutlineIcon />}
              variant="contained"
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
