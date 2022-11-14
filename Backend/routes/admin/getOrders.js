const Order = require("../../models/orderModel");

module.exports = async (req, res) => {
  try {
    // find all the orders
    let allOrders = await Order.find().populate(
      "driverId",
      "_id firstName lastName availability"
    );
    res.status(200).json({
      message: "get orders route !",
      data: allOrders,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error: "bad" });
  }
};
