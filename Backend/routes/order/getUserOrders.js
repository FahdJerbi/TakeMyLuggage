const Order = require("../../models/orderModel");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    // find all the orders related to the user
    let UserOrders = await Order.find({ userId: id });
    res.status(200).json({
      message: "get User orders is working !",
      UserOrders,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
