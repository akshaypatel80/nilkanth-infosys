require("dotenv").config();
const jwt = require("jsonwebtoken");
const userAuth = (req, res, next) => {
  const token = req.headers.usertoken;
  if (token) {
    const decode = jwt.verify(token, process.env.userKEY);
    if (decode) {
      const userID = decode.userID;
      next();
    } else {
      res.send({ msg: "Please login First" });
    }
  } else {
    res.send({ msg: "Please login First" });
  }
};
module.exports = userAuth;
