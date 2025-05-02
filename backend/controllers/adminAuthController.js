
// const Admin = require("../models/Admin");
// const jwt = require("jsonwebtoken");

// const generateAdminToken = (id) => {
//   return jwt.sign({ id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
// };

// exports.registerAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ message: "Admin already exists" });
//     }

//     const admin = new Admin({ email, password });
//     await admin.save();

//     res.status(201).json({
//       message: "Admin registered successfully",
//       id: admin._id,
//       token: generateAdminToken(admin._id),
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Error registering admin", error: err.message });
//   }
// };

// exports.loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const admin = await Admin.findOne({ email });

//     if (!admin || !(await admin.comparePassword(password))) {
//       return res.status(400).json({ message: "Invalid admin credentials" });
//     }

//     res.status(200).json({
//       message: "Login successful",
//       id: admin._id,
//       admin,
//       token: generateAdminToken(admin._id),
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Error logging in admin", error: err.message });
//   }
// };

// const Expense = require("../models/Expense");

// exports.getAllExpensesForAdmin = async (req, res) => {
//   try {
//     const expenses = await Expense.find({});
//     res.status(200).json({ expenses });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch expenses", error: error.message });
//   }
// };

// const Income = require('../models/Income');

// const getAllIncome = async (req, res) => {
//   try {
//     const incomeData = await Income.find({});
//     res.status(200).json(incomeData);
//   } catch (error) {
//     console.error('Error fetching income:', error);
//     res.status(500).json({ error: 'Failed to fetch income' });
//   }
// };

// module.exports = {
//   getAllIncome,
// };

const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const Expense = require("../models/Expense");
const Income = require("../models/Income");

const generateAdminToken = (id) => {
  return jwt.sign({ id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const registerAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = new Admin({ email, password });
    await admin.save();

    res.status(201).json({
      message: "Admin registered successfully",
      id: admin._id,
      token: generateAdminToken(admin._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Error registering admin", error: err.message });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid admin credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      id: admin._id,
      admin,
      token: generateAdminToken(admin._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Error logging in admin", error: err.message });
  }
};

const getAllExpensesForAdmin = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses", error: error.message });
  }
};

const getAllIncome = async (req, res) => {
  try {
    const incomeData = await Income.find({});
    res.status(200).json({ incomes: incomeData });
  } catch (error) {
    console.error('Error fetching income:', error);
    res.status(500).json({ error: 'Failed to fetch income' });
  }
};

// ✅ Export all at once
module.exports = {
  registerAdmin,
  loginAdmin,
  getAllExpensesForAdmin,
  getAllIncome,
};
