const Driver = require("../../models/driverModel");

module.exports = async (req, res) => {
  try {
    // find all the Drivers
    let allDrivers = await Driver.find();

    res.status(200).json({
      message: "get all Drivers route !",
      data: allDrivers,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error: "bad" });
  }
};
