const express = require("express");
const router = express.Router();
// const userRegister = require("./userRegister");

// user register route
router.post("/register", require("./userRegister"));

// user login route
router.post("/login", require("./userLogin"));

// export all routers
module.exports = router;
