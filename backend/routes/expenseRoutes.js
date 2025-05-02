// routes/incomeRoutes.js
const express = require("express");
const router = express.Router();
const { getAllExpensesForAdmin } = require("../controllers/expenseController");
const { adminOnly } = require("../middleware/authMiddleware");

const {
    addExpense,
    getAllExpense,
    deleteExpense,
    downloadExpenseExcel
} = require("../controllers/expenseController");

const { protect } = require("../middleware/authMiddleware");

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
router.get("/downloadexcel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);
router.get("/admin/all", protect, adminOnly, getAllExpensesForAdmin);

module.exports = router;