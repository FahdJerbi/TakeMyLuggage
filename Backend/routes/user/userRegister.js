const User = require("../../models/userModel");
const Driver = require("../../models/driverModel");
const { RegisterValidation } = require("../../utils/Validation");
const bcrypt = require("bcryptjs");

// **********************************      Register      **********************
module.exports = async (req, res) => {
  try {
    let { firstName, lastName, email, password, isUser, isDriver } = req.body;

    //  -----------------------------------------------------
    // check if User is registering with an old email
    const checkUserEmail = await User.findOne({ email });

    // check if Driver is registering with an old email
    const checkDriverEmail = await Driver.findOne({ email });

    if (checkUserEmail && checkDriverEmail) {
      return res
        .status(401)
        .json({ message: "This email is occupied, try another one" });
    }

    // -----------------------------------------------------
    // check user data and validate
    let { error } = RegisterValidation({
      firstName,
      lastName,
      email,
      password,
    });

    if (error) {
      return res.status(401).json({
        status: false,
        messages: error.details[0].message,
      });
    }

    // -----------------------------------------------------
    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // -----------------------------------------------------
    // create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      isUser,
    });

    // create new driver
    const driver = new Driver({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      isDriver,
    });

    // -----------------------------------------------------
    // save the new user into the database
    let newUSer;
    // = await user.save();

    // save the new user into the database
    let newDriver;
    // = await driver.save();

    // check if client is registered as User or Driver
    // {
    //   isUser ? newUSer : newDriver;
    // }

    // if (isUser) {
    //   newUSer = await user.save();
    // } else if (isDriver) {
    //   newDriver = await driver.save();
    // }

    {
      isUser
        ? (newUSer = await user.save())
        : (newDriver = await driver.save());
    }

    // -----------------------------------------------------
    // test if user or driver:

    // send finale respond as user
    res.status(200).json({
      message: "Account created successfully",
      // newUSer,
    });
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
