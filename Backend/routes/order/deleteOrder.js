const Order = require("../../models/orderModel");

// ************************************   Delete Order    **********************
module.exports = async (req, res) => {
  try {
    // get order id
    let { id } = req.params;
    // check if the order does exist in the DB
    let order = await Order.findByIdAndRemove(id);

    // send a successful response
    res.status(200).json({
      data: order,
      message: "Order removed successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
