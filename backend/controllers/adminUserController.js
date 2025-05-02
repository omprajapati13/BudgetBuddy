// // const User = require("../models/User");

// // // Get all users
// // exports.getAllUsers = async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password");
// //     res.status(200).json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching users", error: error.message });
// //   }
// // };


// // // Add a new user
// // exports.addUser = async (req, res) => {
// //   const { fullName, email, password } = req.body;

// //   if (!fullName || !email || !password) {
// //     return res.status(400).json({ message: "All fields are required" });
// //   }

// //   try {
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const user = new User({ fullName, email, password });
// //     await user.save();

// //     res.status(201).json({ message: "User created successfully", user });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error creating user", error: error.message });
// //   }
// // };

// // // Update an existing user
// // exports.updateUser = async (req, res) => {
// //   const { id } = req.params;
// //   const { fullName, email } = req.body;

// //   try {
// //     const user = await User.findById(id);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     if (fullName) user.fullName = fullName;
// //     if (email) user.email = email;

// //     await user.save();

// //     res.status(200).json({ message: "User updated successfully", user });
// //   } catch (error) {
// //     res.status(500).json({ message: "Error updating user", error: error.message });
// //   }
// // };
// // const User = require("../models/User");
// // const Income = require("../models/Income");
// // const Expense = require("../models/Expense");

// // const getDashboardData = async (req, res) => {
// //   try {
// //     const totalUsers = await User.countDocuments();
// //     const totalIncomeData = await Income.aggregate([
// //       { $group: { _id: null, total: { $sum: "$amount" } } }
// //     ]);
// //     const totalExpenseData = await Expense.aggregate([
// //       { $group: { _id: null, total: { $sum: "$amount" } } }
// //     ]);

// //     const totalIncome = totalIncomeData[0]?.total || 0;
// //     const totalExpense = totalExpenseData[0]?.total || 0;

// //     res.status(200).json({
// //       totalUsers,
// //       totalIncome,
// //       totalExpense
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Failed to fetch dashboard data" });
// //   }
// // };

// // const getAllUsers = async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password");
// //     res.status(200).json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching users", error: error.message });
// //   }
// // };

// // module.exports = {
// //   getDashboardData,
// //   getAllUsers,
// // };
// const User = require("../models/User");
// const Income = require("../models/Income");
// const Expense = require("../models/Expense");

// exports.getDashboardData = async (req, res) => {
//   try {
//     const totalUsers = await User.countDocuments();
//     const totalIncomeData = await Income.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
//     const totalExpenseData = await Expense.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);

//     const totalIncome = totalIncomeData[0]?.total || 0;
//     const totalExpense = totalExpenseData[0]?.total || 0;

//     res.status(200).json({ totalUsers, totalIncome, totalExpense });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch dashboard data" });
//   }
// };

// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users", error: error.message });
//   }
// };

const User = require("../models/User");
const Income = require("../models/Income");
const Expense = require("../models/Expense");

exports.getDashboardData = async (req, res) => {
    try {
        const users = await User.find();
        const incomes = await Income.find();
        const expenses = await Expense.find();

        res.status(200).json({
            success: true,
            usersCount: users.length,
            incomes,
            expenses
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch dashboard data", error });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user", error });
    }
};
