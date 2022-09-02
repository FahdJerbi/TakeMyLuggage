// imports
const mongoose = require("mongoose");
// ------------------------------------------

// DB connection
const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("MongoDB is connected !!"))
    .catch((error) => console.log(error));
};

module.exports = connectDb;
