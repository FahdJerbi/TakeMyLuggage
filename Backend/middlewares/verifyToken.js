const jwt = require("jsonwebtoken");
require("dotenv").config();
// -----------------------------------

module.exports = async (req, res, next) => {
  try {
    let id = req.header("id");
    let authToken = req.header("auth-token");
    console.log(authToken);
    if (!authToken) {
      return res.status(400).json({
        message: "Sorry, you need to login !!",
      });
    }

    let verifyToken = jwt.verify(authToken, process.env.SECRET_TOKEN);
    console.log(verifyToken);
    req.user = verifyToken;
    next();
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, message: error });
  }
};
