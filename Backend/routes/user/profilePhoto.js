const User = require("../../models/userModel");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    // find the User by id
    let user = await User.find({ _id: id });
    res.status(200).json({
      message: "'Client Profile Photo' route is Working !",
      user,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: error });
  }
};
