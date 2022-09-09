// *************   Schema details   ****************
// start_lat {type: number , required}
// start_lng {type: number , required}
// end_lat {type: number , required}
// end_lng {type: number , required}
// distance
// time
// Driver
// timestamps

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
    time: schemaDetails, // zid thabet
    // // assign the driver
    driverId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
