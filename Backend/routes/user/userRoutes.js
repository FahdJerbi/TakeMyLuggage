const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/verifyToken");
// const userRegister = require("./userRegister");

// user register route
router.post("/register", require("./userRegister"));

// user login route
router.post("/login", require("./userLogin"));

// ---------  Client Profile Settings:   -------------
// update Client Profile Photo
router.put("/updateProfilePhoto/:id", require("./updateProfilePhoto"));

// get Client Profile Photo
router.get("/profilePhoto/:id", require("./profilePhoto"));

// update Client Profile email/password
// router.put("/updateProfileInfo/:id", require("./updateProfileInfo"));
router.put("/updateProfileInfo/:id", require("./updateProfileInfo"));

// export all routers
module.exports = router;
