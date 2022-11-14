// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  Driver Schema:
const DriverSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileAvatar: {
      type: String,
    },
    isDriver: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    availability: {
      type: Boolean,
      default: false,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      // required: true,
    },
    location: [
      {
        type: Schema.Types.Mixed,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", DriverSchema);
