const User = require("../../models/userModel");

module.exports = async (req, res) => {
  try {
    // find all the Users
    let allUsers = await User.find();

    res.status(200).json({
      message: "get all Users route !",
      data: allUsers,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error: "bad" });
  }
};
