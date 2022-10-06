const express = require("express");
const router = express.Router();

// ************************************    Driver Routes    ***************************
// get order request
router.get("/getRequest/:id", require("./getRequest"));

// accept order request
router.post("/confirmRequest", require("./confirmRequest"));

// change availability:
router.put("/availability/:id", require("./driverAvailability"));

module.exports = router;
