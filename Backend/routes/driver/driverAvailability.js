const Driver = require("../../models/driverModel");

module.exports = async (req, res) => {
  try {
    // let { availability } = req.body; // use this line if you're going to use "PATCH" request method
    let { id } = req.params;
    let driver = await Driver.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );

    res.send({
      message: '"availability" route is working !!',
      data: driver,
    });
  } catch (error) {
    console.log(error);
  }
};
