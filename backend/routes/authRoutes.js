// // const express = require("express");
// // const { protect } = require("../middleware/authMiddleware");

// // const {
// //     registerUser,
// //     loginUser,
// //     getUserInfo,
// // } = require("../controllers/authController");
// // const upload = require("../middleware/uploadMiddleware");

// // const router = express.Router();

// // router.post("/register", registerUser);
// // router.post("/login", loginUser);
// // router.get("/getUser", protect, getUserInfo);

// // router.post("/upload-image", upload.single("image"), (req, res) => {
// //     if (!req.file) {
// //         return res.status(400).json({ message: "No file uploaded" });
// //     }
// //     const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
// //         req.file.filename
// //     }`;
// //     res.status(200).json({ imageUrl });
// // });

// // module.exports = router;

// const express = require("express");
// const { protect } = require("../middleware/authMiddleware");
// const {
//   registerUser,
//   loginUser,
//   getUserInfo,
// } = require("../controllers/authController");
// const upload = require("../middleware/uploadMiddleware");

// const router = express.Router();

// // @route   POST /api/v1/auth/register
// // @desc    Register a new user
// router.post("/register", registerUser);

// // @route   POST /api/v1/auth/login
// // @desc    Authenticate user and return token
// router.post("/login", loginUser);

// // @route   GET /api/v1/auth/getUser
// // @desc    Get authenticated user info
// router.get("/getUser", protect, getUserInfo);

// // @route   POST /api/v1/auth/upload-image
// // @desc    Upload user image
// router.post("/upload-image", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
//   res.status(200).json({ imageUrl });
// });

// module.exports = router;
const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getUserInfo,
    logoutUser,
} = require("../controllers/authController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);
router.post('/logout', logoutUser);


router.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    res.status(200).json({ imageUrl });
});


module.exports = router;