// // // const jwt = require("jsonwebtoken");
// // // const User = require("../models/User");

// // // exports.protect = async (req, res, next) => {
// // //   let token;
// // //   if (
// // //     req.headers.authorization &&
// // //     req.headers.authorization.startsWith("Bearer")
// // //   ) {
// // //     try {
// // //       token = req.headers.authorization.split(" ")[1];
// // //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // //       req.user = await User.findById(decoded.id).select("-password");
// // //       next();
// // //     } catch (error) {
// // //       return res.status(401).json({ message: "Not authorized, token failed" });
// // //     }
// // //   }

// // //   if (!token) {
// // //     return res.status(401).json({ message: "Not authorized, no token" });
// // //   }
// // // };
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/userModel");

// // exports.protect = async (req, res, next) => {
// //   let token;
// //   if (
// //     req.headers.authorization &&
// //     req.headers.authorization.startsWith("Bearer")
// //   ) {
// //     try {
// //       token = req.headers.authorization.split(" ")[1];
// //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //       req.user = await User.findById(decoded.id).select("-password");
// //       next();
// //     } catch (error) {
// //       return res.status(401).json({ message: "Not authorized, token failed" });
// //     }
// //   }

// //   if (!token) {
// //     return res.status(401).json({ message: "Not authorized, no token" });
// //   }
// // };

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// // Middleware to protect routes
// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.id).select("-password");

//       if (!req.user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       next();
//     } catch (error) {
//       console.error("JWT verification error:", error);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }
// };

// module.exports = { protect };

const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "not authorized, no token"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401).json({ message: "Not authorized, token failed"});
    }
};

exports.adminOnly = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
