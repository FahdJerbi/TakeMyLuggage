const User = require("../../models/userModel");
const { RegisterValidation } = require("../../utils/Validation");
const bcrypt = require("bcryptjs");

// **********************************      Register      **********************
module.exports = async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;

    // check if user is registering with an old email
    const checkUserEmail = await User.findOne({ email });
    if (checkUserEmail) {
      return res
        .status(401)
        .json({ message: "This email is occupied, try another one" });
    }

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

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // save the new user into the database
    const newUSer = await user.save();

    // send finale respond
    res.status(200).json({
      message: "User created successfully",
      newUSer,
    });
  } catch (error) {
    if (error) throw error;
    res.send(400).json({ status: false, error });
  }
};
