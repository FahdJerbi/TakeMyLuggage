const Driver = require("../../models/driverModel");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let { email, password } = req.body;

    // hash password:
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Update user email/password:
    const driver = await Driver.findByIdAndUpdate(
      id,
      {
        $set: { email, password: hashedPassword },
      },
      { new: true }
    );

    res.send({
      message: "Profile Informations Changed Succeccfully !",
      data: driver,
    });
  } catch (error) {
    if (error) throw error;
    console.log(error);
    res.status(500).send(error);
  }
};
