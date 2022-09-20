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

// ******************************  Login component    ********************
const theme = createTheme();

// the login component
export default function SignIn() {
  // make two states for holding user inputs and error
  const [userInputs, setUserInputs] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
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
            navigate("/map"),
            console.log(res);
        } else if (res.data.isDriver) {
          localStorage.setItem("auth-token", res.data.token),
            localStorage.setItem("isDriver", res.data.isDriver),
            localStorage.setItem("isAdmin", res.data.isAdmin),
            localStorage.setItem("id", res.data.id),
            navigate("/driver"),
            console.log(res);
        } else if (res.data.isAdmin) {
          localStorage.setItem("auth-token", res.data.token),
            localStorage.setItem("isUser", res.data.isUser),
            localStorage.setItem("isDriver", res.data.isDriver),
            localStorage.setItem("isAdmin", res.data.isAdmin),
            localStorage.setItem("id", res.data.id),
            navigate("/admin"),
            console.log(res);
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 6000);
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onChange={handleChange}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={handleChange}
            />
            <Box fontStyle={{ color: "red", fontSize: "0.8em" }}>{error}</Box>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="button"
              onClick={() => {
                handleLogin();
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
