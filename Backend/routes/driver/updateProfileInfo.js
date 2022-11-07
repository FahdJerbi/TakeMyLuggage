const Driver = require("../../models/driverModel");

module.exports = async (req, res) => {
  let { Email, Password } = req.body;

  try {
    let { id } = req.params;
    const driver = await Driver.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );

    res.send({
      message: '"Driver Profile Info" route is working !!',
      data: driver,
    });
  } catch (error) {
    if (error) throw error;
    console.log(error);
    res.status(500).send(error);
  }
};
