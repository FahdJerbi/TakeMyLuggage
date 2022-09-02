const express = require("express");
const Order = require("../../models/orderModel");
const User = require("../../models/userModel");

module.exports = async (req, res) => {
  try {
    let { start_lat, start_lng, end_lat, end_lng, distance, time } = req.body;
    let { id } = req.params;
    let user = await User.findById(id);

    let order = new Order({
      start_lat,
      start_lng,
      end_lat,
      end_lng,
      distance,
      time,
      // Driver,
      userId: user._id,
    });

    // save the order into the DB
    let newOrder = await order.save();

    res.status(200).json({
      message: "Order saved successfully !",
      data: newOrder,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, message: error });
  }
};
