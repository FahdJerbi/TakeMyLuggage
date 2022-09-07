// Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
// port creation
const port = process.env.PORT || 5000;

// ------------------------------------------

// DB connection
connectDB();

// middleware
app.use(express.json());

// user routes
app.use("/api", require("./routes/user/userRoutes"));

// order routes
app.use("/api", require("./routes/order/orderRoute"));

// Driver routes
app.use("/api", require("./routes/driver/driverRoute"));

// init port
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
