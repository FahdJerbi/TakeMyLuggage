const express = require("express");
const router = express.Router();

// get all Users
router.get("/getUsers", require("./getUsers"));

// get all Drivers
router.get("/getDrivers", require("./getDrivers"));

// get all orders
router.get("/getOrders", require("./getOrders"));

// export all routers
module.exports = router;
