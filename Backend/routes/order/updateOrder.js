const Order = require("../../models/orderModel");

// *********************************       Update order     ********************
module.exports = async (req, res) => {
  try {
    // get order id:
    let { id } = req.params;
    // console.log(id);
    // find order in the DB and update it
    let order = await Order.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    // add a validation condition for the id using "if"

    // send a succeddful response
    res.status(200).json({
      message: "Order updated successfully !",
      data: order,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ message: error });
  }
};
