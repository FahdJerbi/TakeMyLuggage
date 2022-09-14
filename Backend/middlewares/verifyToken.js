const jwt = require("jsonwebtoken");
require("dotenv").config();
// --------------------------------------------
module.exports = async (req, res, next) => {
  try {
    let token = await req.header("auth-token");
    // console.log("token:", token);
    let id = await req.params.id;
    // console.log("id:", id);

    if (!token && !id) {
      return res.status(401).json({
        status: false,
        message: "Access denied, you have to login",
      });
    }
    let verifiedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    console.log("verifiedToken:", verifiedToken);
    req.user = verifiedToken;
    next();
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
