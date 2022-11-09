// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ---------------------------------------

const schemaDetails = {
  type: Number,
  required: true,
};

const OrderSchema = new Schema(
  {
    start_lat: schemaDetails,
    start_lng: schemaDetails,
    end_lat: schemaDetails,
    end_lng: schemaDetails,
    distance: schemaDetails,
    time: schemaDetails,
    deliveryDate: {
      type: Date, 
      required: true,
    }, // zid thabet
    // Price: schemaDetails, // zid thabet
    delivered: {
      type: Boolean,
      default: false,
    },
    // // assign the driver
    driverId: {
      type: Schema.Types.ObjectId,
      required: true,
      // ref: "Driver",
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
