const express = require("express");
const router = express.Router();

// ************************************    Driver Routes    ***************************
// get order request
router.get("/getRequest/:id", require("./getRequest"));

// accept order request
router.patch("/confirmRequest/:id", require("./confirmRequest"));

// change availability:
router.put("/availability/:id", require("./driverAvailability"));

// driver location:
router.put("/location/:id", require("./driverLocation"));

module.exports = router;
