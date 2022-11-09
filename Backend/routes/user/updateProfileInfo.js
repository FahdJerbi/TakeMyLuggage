const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let { email, password } = req.body;

    // hash password:
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Update user email/password:
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: { email, password: hashedPassword },
      },
      { new: true }
    );

    res.send({
      message: "Profile Informations Changed Succeccfully !",
      data: user,
    });
  } catch (error) {
    if (error) throw error;
    console.log(error);
    res.status(500).send(error);
  }
};
