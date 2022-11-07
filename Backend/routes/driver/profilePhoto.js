const Driver = require("../../models/driverModel");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    // find all the user resquest related to the Driver by id
    let driver = await Driver.find({ _id: id });
    res.status(200).json({
      message: "Your 'Profile Photo' is here !",
      driver,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
