const Order = require("../../models/orderModel");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    // find all the user resquest related to the Driver by id
    let UserRequest = await Order.find({ driverId: id });
    res.status(200).json({
      message: "Your Requests are here !!",
      UserRequest,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
