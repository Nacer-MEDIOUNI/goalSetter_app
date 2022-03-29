const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  //Checking for the authorization headers (Matking sure it's a bearer token)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from headers
      token = req.headers.authorization.split(" ")[1];
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      //Calling the next piece of Middleware
      next();
      // if something goes wrong
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not athorized");
    }
  }
  // if there's no token
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
