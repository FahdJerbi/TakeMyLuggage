import axios from "axios";
import { useNavigate } from "react-router-dom";
// ------------------------    Material UI imports    ----------------------
import React, { useState, useEffect } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "./Login.css";
// ------------------------

// function to grab css from official site
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

// Custom TextField
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

const theme = createTheme();
// ******************************  Login component    ********************

// the login component
export default function SignIn() {
  // make two states for holding user inputs and error
  const [userInputs, setUserInputs] = useState({});
  const [error, setError] = useState("");

  // toastify notification
  const notify = () => toast.success("Wow so easy !");

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
    // notify();
    // console.log(userInputs);
  };

  const navigate = useNavigate();

  // send User/Driver login inputs to server
  const handleLogin = async () => {
    await axios
      .post(
        "/api/login",
        userInputs
        // { email: "sawssen@gmail.com", password: "123456Sawssen." }
      )
      .then((res) => {
        if (res.data.isUser) {
          localStorage.setItem("auth-token", res.data.token),
            localStorage.setItem("isUser", res.data.isUser),
            localStorage.setItem("isAdmin", res.data.isAdmin),
            localStorage.setItem("id", res.data.id),
            localStorage.setItem("fname", res.data.firstName),
            localStorage.setItem("lname", res.data.lastName),
            localStorage.setItem("mail", res.data.email),
            navigate("/map"),
            console.log(res);
        } else if (res.data.isDriver) {
          localStorage.setItem("auth-token", res.data.token),
            localStorage.setItem("isDriver", res.data.isDriver),
            localStorage.setItem("isAdmin", res.data.isAdmin),
            localStorage.setItem("id", res.data.id),
            localStorage.setItem("fname", res.data.firstName),
            localStorage.setItem("lname", res.data.lastName),
            localStorage.setItem("mail", res.data.email),
            navigate("/driver"),
            console.log(res);
        } else if (res.data.isAdmin) {
          localStorage.setItem("auth-token", res.data.token),
            localStorage.setItem("isUser", res.data.isUser),
            localStorage.setItem("isDriver", res.data.isDriver),
            localStorage.setItem("isAdmin", res.data.isAdmin),
            localStorage.setItem("id", res.data.id),
            localStorage.setItem("fname", res.data.firstName),
            localStorage.setItem("lname", res.data.lastName),
            localStorage.setItem("mail", res.data.email),
            navigate("/admin"),
            console.log(res);
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
    // notify();
    // console.log("notify is here !");
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 6000);
  }, [error]);

  // switch to sign up page
  const switchRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="yeah">
      <ThemeProvider theme={theme}>
        <Container className="login" component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="login-page"
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <div className="login> */}
            <Avatar sx={{ m: 1, bgcolor: "whitesmokes" }}>
              {/* bgcolor: "secondary.main" */}
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
              Sign in
            </Typography>
            <Box
              component="form"
              onChange={handleChange}
              noValidate
              sx={{ mt: 1 }}
            >
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
                  startAdornment: <PersonIcon className="sign-in-icons" />,
                }}
              />
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
                  startAdornment: <LockIcon className="sign-in-icons" />,
                }}
              />
              {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="Enter your email here"
            /> */}
              {/* <TextField
              margin="normal"
              placeholder="Enter your password here"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
              <Box fontStyle={{ color: "red", fontSize: "0.8em" }}>{error}</Box>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                id="sign-in-btn"
                type="button"
                onClick={() => {
                  handleLogin();
                }}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontFamily: "Roboto Condensed, sans-serif",
                }}
              >
                Sign In
              </Button>
              <ToastContainer />
              <Grid container>
                {/* <Grid item xs>
                  <Link
                    sx={{
                      color: "#5e5e5e",
                      textDecoration: "none",
                    }}
                    className="sign-in-footer"
                    href="#"
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link
                    sx={{
                      color: "#5e5e5e",
                      textDecoration: "none",
                      fontFamily: "Roboto Condensed, sans-serif",
                    }}
                    className="sign-in-footer"
                    href="/register"
                    onClick={switchRegisterPage}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            {/* </div> */}
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
