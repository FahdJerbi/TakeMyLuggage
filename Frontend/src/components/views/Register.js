import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// -------------------------------   Material ui   -----------------
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./Register.css";
// --------------------------------------
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

// ********************   Custom TextField   ********************
const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#05E6FA",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    // "& fieldset": {
    //   borderColor: "red",
    // },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#05E6FA",
    },
  },
});

// *******************************    Register component   ******************
export default function SignUp() {
  // make states to store user inputs, error and loading:
  const [userInputs, setUserInputs] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ----------------------------------
  // get role inputs
  const [checkRole, setcheckRole] = useState();
  // ----------------------------------

  // track input changes
  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
    console.log(userInputs);
  };

  // send request inputs
  const handleSubmit = async () => {
    await axios
      .post("/api/register", userInputs)
      .then((res) => {
        navigate("/login");
        console.log(res.data.message);
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="main-container">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="register-page"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "whitesmokes" }}>
              <LockOutlinedIcon sx={{ color: "black" }} />
            </Avatar>
            <Typography
              sx={{
                fontFamily: "Roboto Condensed, sans-serif",
                color: "whitesmoke",
              }}
              component="h1"
              variant="h5"
            >
              Sign up
            </Typography>
            <Box
              component="form"
              onChange={(e) => {
                handleChange(e);
              }}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    sx={{
                      input: {
                        color: "whitesmoke",
                        "&::placeholder": {
                          // <----- Add this.
                          opacity: 0.5,
                        },
                        fontFamily: "Roboto Condensed, sans-serif",
                      },
                      // label: { color: "blue" },
                    }}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    placeholder="Your given name..."
                    // InputProps={{
                    //   startAdornment: <PersonIcon className="sign-in-icons" />,
                    // }}
                  />
                  {/* <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    sx={{
                      input: {
                        color: "whitesmoke",
                        "&::placeholder": {
                          // <----- Add this.
                          opacity: 0.5,
                        },
                        fontFamily: "Roboto Condensed, sans-serif",
                      },
                      // label: { color: "blue" },
                    }}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    required
                    autoComplete="lastName"
                    placeholder="Your last name..."
                    // InputProps={{
                    //   startAdornment: <PersonIcon className="sign-in-icons" />,
                    // }}
                  />
                  {/* <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  /> */}
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    id="email"
                    label="Email Address"
                    name="email"
                    sx={{
                      input: {
                        color: "whitesmoke",
                        "&::placeholder": {
                          // <----- Add this.
                          opacity: 0.5,
                        },
                        fontFamily: "Roboto Condensed, sans-serif",
                      },
                      // label: { color: "blue" },
                    }}
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="email"
                    placeholder="Enter your email here"
                    InputProps={{
                      startAdornment: (
                        <AlternateEmailIcon className="sign-up-icons" />
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    sx={{
                      input: {
                        color: "whitesmoke",
                        "&::placeholder": {
                          opacity: 0.5,
                        },
                        fontFamily: "Roboto Condensed, sans-serif",
                      },
                    }}
                    margin="normal"
                    placeholder="Enter your password here"
                    required
                    fullWidth
                    autoComplete="current-password"
                    InputProps={{
                      startAdornment: <LockIcon className="sign-up-icons" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    sx={{
                      input: {
                        color: "whitesmoke",
                        "&::placeholder": {
                          opacity: 0.5,
                        },
                        fontFamily: "Roboto Condensed, sans-serif",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "whitesmoke",
                      },
                    }}
                    defaultValue=""
                    required
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Role"
                    name="role"
                    value={checkRole}
                    onChange={handleChange}
                    // InputProps={{
                    //   startAdornment: <PersonIcon className="sign-in-icons" />,
                    // }}
                  >
                    {/* <CustomMenuItem>yeah</CustomMenuItem> */}
                    <MenuItem value={1}>User</MenuItem>
                    <MenuItem value={2}>Driver</MenuItem>
                  </CustomTextField>
                  {/* <TextField
                    defaultValue=""
                    required
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Role"
                    name="role"
                    value={checkRole}
                    onChange={handleChange}
                    placeholder="Please select your role !"
                  >
                    <MenuItem value={1}>User</MenuItem>
                    <MenuItem value={2}>Driver</MenuItem>
                  </TextField> */}
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
              <Button
                id="sign-up-btn"
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontFamily: "Roboto Condensed, sans-serif",
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    sx={{
                      color: "#5e5e5e",
                      textDecoration: "none",
                      fontFamily: "Roboto Condensed, sans-serif",
                    }}
                    className="sign-up-footer"
                    href="#"
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
