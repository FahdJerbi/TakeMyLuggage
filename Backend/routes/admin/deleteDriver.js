const Driver = require("../../models/driverModel");

module.exports = async (req, res) => {
  try {
    // get user id
    let { id } = req.params;
    // find all the Users
    let deletedDriver = await Driver.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "Driver deleted successfully !",
      data: deletedDriver,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
