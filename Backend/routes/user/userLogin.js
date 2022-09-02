const express = require("express");
const app = express();
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN;

module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;
    // check if user email does exists in DB
    const checkLoginEmail = await User.findOne({ email });
    if (!checkLoginEmail) {
      return res
        .status(401)
        .json({ message: "Wrong email, please try again !" });
    }

    // check if user password is correct
    const checkPassword = await bcrypt.compare(
      password,
      checkLoginEmail.password
    );
    if (!checkPassword) {
      return res
        .status(401)
        .json({ message: "Wrong password, please try again !" });
    }

    // create token
    const token = jwt.sign(
      {
        id: checkLoginEmail._id,
        password: checkLoginEmail.password,
        email: checkLoginEmail.email,
        isUser: checkLoginEmail.isUser,
        isAdmin: checkLoginEmail.isAdmin,
      },
      SECRET_TOKEN,
      { expiresIn: "10h" }
    );

    // res.send("logged in successfully !");
    res.status(200).header("auth-token", token).json({
      status: true,
      message: "logged in successfully !",
      token,
      isUser: checkLoginEmail.isUser,
      isAdmin: checkLoginEmail.isAdmin,
      id: checkLoginEmail._id,
    });
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
