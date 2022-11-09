import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Tooltip,
  IconButton,
  Avatar,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";

// *******************    Profile Photo: Start    ***********************

// *******************    Profile Photo: End    ***********************

const ProfilePhoto = () => {
  // get driver id
  const id = localStorage.getItem("id");

  // state to hold the image URL/String
  const [profileImg, setProfileImg] = useState("");

  // console.log(profileImg);

  // keep track to input image
  const handleImgInputChange = (event) => {
    const file = event.target.files[0];
    // f° to convert Img to String
    Transform(file);
  };

  const Transform = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
    } else {
      setProfileImg("");
    }
  };

  // upload image
  const uploadProfileImage = async () => {
    await axios
      .put(`/api/updateProfilePhoto/${id}`, {
        profileAvatar: profileImg,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log("Profile Photo Changed clicked !");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      {/* -------------  Profile Photo  ------------- */}
      <Box>
        {profileImg ? (
          <img
            src={profileImg}
            alt="profile"
            style={{ width: "200px", margin: "5px" }}
          />
        ) : (
          <>
            <Tooltip style={{ margin: "8px 0 8px 0" }} title="Profile Photo">
              <IconButton sx={{ p: 0 }}>
                <Avatar sx={{ width: 100, height: 100 }} alt="User" />
              </IconButton>
            </Tooltip>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              style={{
                position: "absolute",
                marginLeft: "-25px",
                color: "whitesmoke",
                border: "1px solid #F8F8F8",
                backgroundColor: "gray",
              }}
            >
              <input
                name="image"
                hidden
                accept="image/*"
                type="file"
                onChange={handleImgInputChange}
              />
              <PhotoCamera />
            </IconButton>
          </>
        )}

        {/* ----------------------------------- */}

        <Typography
          style={{
            // textAlign: "center",
            fontFamily: "Roboto Condensed, sans-serif",
            color: "whitesmoke",
          }}
          id="driver-name"
          variant="h6"
        >
          My Name
        </Typography>
      </Box>

      {/* -------------  Upload Button  ------------- */}
      <Button
        type="button"
        startIcon={<CloudUploadIcon />}
        variant="contained"
        sx={{
          height: "20px",
          fontSize: "10.5px",
        }}
        onClick={() => uploadProfileImage()}
      >
        Upload Photo
      </Button>
    </Box>
  );
};

export default ProfilePhoto;
