const express = require("express");
const {
    loginAdmin,
    registerAdmin
} = require("../controllers/adminAuthController");
const { getAllExpensesForAdmin } = require("../controllers/adminAuthController");
const { getAllIncome } = require('../controllers/adminAuthController');

const {
    getDashboardData,
    getAllUsers,
    deleteUser
} = require("../controllers/adminUserController");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/register", registerAdmin);
router.get("/dashboard", getDashboardData);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.get("/expenses", getAllExpensesForAdmin);
router.get('/income', getAllIncome); 

module.exports = router;
