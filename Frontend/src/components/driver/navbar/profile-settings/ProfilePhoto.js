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
  Input,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import axios from "axios";

// *******************    Profile Photo: Start    ***********************

// const ProfilePhoto = () => {
//   const [fileImage, setFileImage] = useState();
//   const [previewImage, setPreviewImage] = useState();

//   // Handle file input change:
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     previewFile(file);
//   };

//   // function to preview image after selecting:
//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewImage(reader.result);
//     };
//   };

//   // upload the image:
//   const handleImageUpload = () => {};

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         marginBottom: "20px",
//       }}
//     >
//       {/* -------------  Profile Photo  ------------- */}
//       <Box>
//         {previewImage ? (
//           <img
//             src={previewImage}
//             alt="profile"
//             style={{ width: "200px", margin: "5px" }}
//           />
//         ) : (
//           <Tooltip style={{ margin: "8px 0 8px 0" }} title="Profile Photo">
//             <IconButton sx={{ p: 0 }}>
//               <Avatar
//                 sx={{ width: 100, height: 100 }}
//                 alt="User"
//                 src="/static/images/avatar/2.jpg"
//               />
//             </IconButton>
//           </Tooltip>
//         )}

//         {/* ----------------------------------- */}

//         <Typography
//           style={{
//             fontFamily: "Roboto Condensed, sans-serif",
//           }}
//           id="driver-name"
//           variant="h6"
//         >
//           My Name
//         </Typography>
//       </Box>

//       {/* -------------  File Input   ------------- */}
//       <input
//         type="file"
//         name="image"
//         onChange={handleFileChange}
//         // value={setFileImage}
//         className="file-input"
//       />

//       {/* -------------  Upload Button  ------------- */}
//       <Button
//         type="button"
//         startIcon={<CloudUploadIcon />}
//         variant="contained"
//         sx={{
//           height: "20px",
//           fontSize: "10.5px",
//         }}
//       >
//         Upload Photo
//       </Button>
//     </Box>
//   );
// };

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
      .put(`/api/driver/updateProfilePhoto/${id}`, {
        profileAvatar: profileImg,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log('"Upload Profile" is working !');
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
          <Tooltip style={{ margin: "8px 0 8px 0" }} title="Profile Photo">
            <IconButton sx={{ p: 0 }}>
              <Avatar sx={{ width: 100, height: 100 }} alt="User" />
            </IconButton>
          </Tooltip>
        )}

        {/* ----------------------------------- */}

        <Typography
          style={{
            fontFamily: "Roboto Condensed, sans-serif",
          }}
          id="driver-name"
          variant="h6"
        >
          My Name
        </Typography>
      </Box>

      {/* -------------  File Input   ------------- */}
      <input
        className="file-input"
        name="image"
        type="file"
        accept="image/"
        onChange={handleImgInputChange}
      />

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
