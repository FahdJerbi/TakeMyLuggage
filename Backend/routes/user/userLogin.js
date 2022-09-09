const express = require("express");
const app = express();
const User = require("../../models/userModel");
const Driver = require("../../models/driverModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN;

module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;
    // check if user email does exists in DB
    const checkUserLoginEmail = await User.findOne({ email });

    // check if Driver email does exists in DB
    const checkDriverLoginEmail = await Driver.findOne({ email });

    if (!checkUserLoginEmail || !checkDriverLoginEmail) {
      return res
        .status(401)
        .json({ message: "Wrong email, please try again !" });
    }
    // --------------------------------------------------------

    // check if user password is correct
    const checkUserPassword = await bcrypt.compare(
      password,
      checkUserLoginEmail.password
    );

    // check if user password is correct
    const checkDriverPassword = await bcrypt.compare(
      password,
      checkDriverLoginEmail.password
    );

    if (!checkUserPassword || !checkDriverPassword) {
      return res
        .status(401)
        .json({ message: "Wrong password, please try again !" });
    }

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
        },
        SECRET_TOKEN,
        { expiresIn: "10h" }
      );
      res.status(200).header("auth-token", token).json({
        status: true,
        message: "User logged in successfully !",
        token,
        isUser: checkUserLoginEmail.isUser,
        id: checkUserLoginEmail._id,
      });
    } else if (checkDriverPassword) {
      token = jwt.sign(
        {
          id: checkDriverLoginEmail._id,
          password: checkDriverLoginEmail.password,
          email: checkDriverLoginEmail.email,
          isDriver: checkDriverLoginEmail.isDriver,
        },
        SECRET_TOKEN,
        { expiresIn: "10h" }
      );
      res.status(200).header("auth-token", token).json({
        status: true,
        message: "Driver logged in successfully !",
        token,
        isDriver: checkDriverLoginEmail.isDriver,
        id: checkDriverLoginEmail._id,
      });
    }

    // const token = jwt.sign(
    //   {
    //     id: checkUserPassword._id,
    //     password: checkUserPassword.password,
    //     email: checkUserPassword.email,
    //     isAdmin: checkUserPassword.isAdmin,
    //   },
    //   SECRET_TOKEN,
    //   { expiresIn: "10h" }
    // );

    // res.send("logged in successfully !");
    // res.status(200).header("auth-token", token).json({
    //   status: true,
    //   message: "logged in successfully !",
    //   // token,
    //   isDriver: checkDriverLoginEmail.isDriver,
    //   // isAdmin: checkLoginEmail.isAdmin,
    //   id: checkLoginEmail._id,
    // });
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
