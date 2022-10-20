const Order = require("../../models/orderModel");

module.exports = async (req, res) => {
  try {
    let { delivered } = req.body; // use this line if you're going to use "PATCH" request method
    let { id } = req.params;
    let order = await Order.findByIdAndUpdate(
      id,
      {
        $set: { delivered },
      },
      { new: true }
    );
    res.send({
      message: '"confirm Delivery" route is working !!',
      data: order,
    });
  } catch (error) {
    console.log(error);
  }
};
