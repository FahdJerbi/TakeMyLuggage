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
// app.use(express.json());
// increased limite to accept request with larger size, especially with Cloudinary
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

// user routes
app.use("/api", require("./routes/user/userRoutes"));

// order routes
app.use("/api", require("./routes/order/orderRoute"));

// Driver routes
app.use("/api/driver", require("./routes/driver/driverRoute"));

// Admin routes
app.use("/api/admin", require("./routes/admin/adminRoutes"));

// init port
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
