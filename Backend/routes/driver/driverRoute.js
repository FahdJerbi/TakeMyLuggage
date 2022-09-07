const express = require("express");
const router = express.Router();

// ************************************    Driver Routes    ***************************
// get order request
router.get("/getRequest", require("./getRequest"));

// accept order request
router.post("/confirmRequest", require("./confirmRequest"));

module.exports = router;
