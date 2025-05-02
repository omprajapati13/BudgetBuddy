const express = require("express");
const { getAllUsers, addUser, updateUser } = require("../controllers/adminUserController");
const { protectAdmin } = require("../middleware/adminAuthMiddleware");

const router = express.Router();

// Protect all routes after this middleware
router.use(protectAdmin);

// Get all users
router.get("/users", getAllUsers);

// Add a new user
router.post("/users", addUser);

// Update an existing user
router.put("/users/:id", updateUser);

module.exports = router;
