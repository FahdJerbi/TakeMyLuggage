const User = require("../../models/userModel");

module.exports = async (req, res) => {
  try {
    // get user id
    let { id } = req.params;
    // find all the Users
    let deletedUser = await User.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "User deleted successfully !",
      data: deletedUser,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
