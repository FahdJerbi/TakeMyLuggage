const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/verifyToken");
// const userRegister = require("./userRegister");

// user register route
router.post("/register", require("./userRegister"));

// user login route
router.post("/login", require("./userLogin"));

// get all Users for admin
router.get("/admin/getUsers", require("./getUsers"));

// export all routers
module.exports = router;
