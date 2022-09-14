const express = require("express");
const app = express();
const User = require("../../models/userModel");
const Driver = require("../../models/driverModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { $where } = require("../../models/userModel");
const SECRET_TOKEN = process.env.SECRET_TOKEN;

module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;
    // console.log("password:", password);
    // check if user email does exists in DB
    const checkUserLoginEmail = await User.findOne({ email });
    // let checkUserPassword;
    // check if Driver email does exists in DB
    const checkDriverLoginEmail = await Driver.findOne({ email });
    // let checkDriverPassword;
    if (!checkUserLoginEmail && !checkDriverLoginEmail) {
      return res
        .status(401)
        .json({ message: "Wrong email, please try again !" });
    }

    // --------------------------------------------------------

    // check if user password is correct
    // const checkUserPassword = await bcrypt.compare(
    //   password,
    //   checkUserLoginEmail.password
    // );
    let checkUserPassword;

    // check if user password is correct
    // let checkDriverPassword = await bcrypt.compare(
    //   password,
    // );
    // const checkDriverPassword = await bcrypt.compare(
    //   password,
    //   checkDriverLoginEmail.password
    // );
    let checkDriverPassword;

    // -----------------------------  it works --------------------
    {
      checkUserLoginEmail
        ? (checkUserPassword = await bcrypt.compare(
            password,
            checkUserLoginEmail.password
          ))
        : (checkDriverPassword = await bcrypt.compare(
            password,
            checkDriverLoginEmail.password
          ));
      // console.log(checkDriverPassword)
    }

    if (!checkDriverPassword && !checkUserPassword) {
      return res
        .status(401)
        .json({ message: "Wrong password, please try again !" });
    }
    // ------------------------------------------------------------

    // if (checkUserLoginEmail) {
    //   checkUserPassword = await bcrypt.compare(
    //     password,
    //     checkUserLoginEmail.password
    //   );
    //   return res
    //     .status(401)
    //     .json({ message: "Wrong User password, please try again !" });
    // } else if (checkDriverLoginEmail) {
    //   checkDriverPassword = await bcrypt.compare(
    //     password,
    //     checkDriverLoginEmail.password
    //   );
    //   return res
    //     .status(401)
    //     .json({ message: "Wrong Driver password, please try again !" });
    // }

    // --------------------------------------------------------
    // create token
    let token;

    // check if user or driver then send them the token
    if (checkUserPassword) {
      token = jwt.sign(
        {
          id: checkUserLoginEmail._id,
          password: checkUserLoginEmail.password,
          email: checkUserLoginEmail.email,
          isUser: checkUserLoginEmail.isUser,
          isAdmin: checkUserLoginEmail.isAdmin,
        },
        SECRET_TOKEN,
        { expiresIn: "10h" }
      );
      res.status(200).header("auth-token", token).json({
        status: true,
        message: "User logged in successfully !",
        token,
        isUser: checkUserLoginEmail.isUser,
        isAdmin: checkUserLoginEmail.isAdmin,
        id: checkUserLoginEmail._id,
      });
    } else {
      token = jwt.sign(
        {
          id: checkDriverLoginEmail._id,
          password: checkDriverLoginEmail.password,
          email: checkDriverLoginEmail.email,
          isDriver: checkDriverLoginEmail.isDriver,
          isAdmin: checkDriverLoginEmail.isAdmin,
        },
        SECRET_TOKEN,
        { expiresIn: "10h" }
      );
      res.status(200).header("auth-token", token).json({
        status: true,
        message: "Driver logged in successfully !",
        token,
        isDriver: checkDriverLoginEmail.isDriver,
        isAdmin: checkDriverLoginEmail.isAdmin,
        id: checkDriverLoginEmail._id,
      });
    }
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
