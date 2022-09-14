// imports
const express = require("express");
const router = express.Router();
const verify = require("../../middlewares/verifyToken");
const Order = require("../../models/orderModel");
const User = require("../../models/userModel");
// -----------------------------------------

// ****************************     Order routes      *****************
// get all the orders
router.get("/getOrders", require("./getOrders"));

// get all the order by user
router.get("/getUserOrders/:id", require("./getUserOrders"));

// Create order
router.post("/create/:id", require("./createOrder"));

// Update orders
router.put("/update/:id", require("./updateOrder"));

// delete order
router.delete("/delete/:id", require("./deleteOrder"));

module.exports = router;
