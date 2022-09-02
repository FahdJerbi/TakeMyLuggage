// imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//  User Schema:
const UserSchema = new Schema(
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
    isUser: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // isDriver: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
