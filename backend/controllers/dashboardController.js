
// const Income = require("../models/Income");
// const Expense = require("../models/Expense");
// const { isValidObjectId, Types } = require("mongoose");

// // Dashboard Data
// exports.getDashboardData = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const userObjectId = new Types.ObjectId(String(userId));

//     // Total Income
//     const totalIncome = await Income.aggregate([
//       { $match: { userId: userObjectId } },
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     // Total Expense
//     const totalExpense = await Expense.aggregate([
//       { $match: { userId: userObjectId } },
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     // Last 60 Days Income Transactions
//     const last60DaysIncomeTransactions = await Income.find({
//       userId: userObjectId,
//       date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
//     }).sort({ date: -1 });

//     const incomeLast60Days = last60DaysIncomeTransactions.reduce(
//       (sum, txn) => sum + txn.amount,
//       0
//     );

//     // ✅ FIXED: Use Expense.find instead of Income.find
//     const last30DaysExpenseTransactions = await Expense.find({
//       userId,
//       date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
//     }).sort({ date: -1 });

//     const expensesLast30Days = last30DaysExpenseTransactions.reduce(
//       (sum, txn) => sum + txn.amount,
//       0
//     );

//     // Recent Transactions
//     const lastTransactions = [
//       ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map((txn) => ({
//         ...txn.toObject(),
//         type: "income",
//       })),
//       ...(await Expense.find({ userId }).sort({ date: -1 }).limit(5)).map((txn) => ({
//         ...txn.toObject(),
//         type: "expense",
//       })),
//     ].sort((a, b) => b.date - a.date);

//     res.json({
//       totalBalance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
//       totalIncome: totalIncome[0]?.total || 0,
//       totalExpenses: totalExpense[0]?.total || 0,
//       last30DaysExpenses: {
//         total: expensesLast30Days,
//         transactions: last30DaysExpenseTransactions,
//       },
//       last60DaysIncome: {
//         total: incomeLast60Days,
//         transactions: last60DaysIncomeTransactions,
//       },
//       recentTransactions: lastTransactions,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// };





const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { Types } = require("mongoose");

exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const userObjectId = new Types.ObjectId(String(userId));

    // Total Income
    const totalIncome = await Income.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // Total Expense
    const totalExpense = await Expense.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // Last 60 Days Income (adjusted to Jan 1, 2025 for testing)

  

    const last60DaysIncomeTransactions = await Income.find({
      userId,
      date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },

    }).sort({ date: -1 });

    


    const incomeLast60Days = last60DaysIncomeTransactions.reduce(
      (sum, txn) => sum + txn.amount,
      0
    );

    console.log("✅ Found income transactions (last 60+ days):", last60DaysIncomeTransactions.length);

    // Last 30 Days Expenses
    const last30DaysExpenseTransactions = await Expense.find({
      userId,
      date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    const expensesLast30Days = last30DaysExpenseTransactions.reduce(
      (sum, txn) => sum + txn.amount,
      0
    );

    // Recent Transactions (latest 5 of each type)
    const lastTransactions = [
      ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map((txn) => ({
        ...txn.toObject(),
        type: "income",
      })),
      ...(await Expense.find({ userId }).sort({ date: -1 }).limit(5)).map((txn) => ({
        ...txn.toObject(),
        type: "expense",
      })),
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json({
      totalBalance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalExpenses: totalExpense[0]?.total || 0,
      last30DaysExpenses: {
        total: expensesLast30Days,
        transactions: last30DaysExpenseTransactions,
      },
      last60DaysIncome: {
        total: incomeLast60Days,
        transactions: last60DaysIncomeTransactions,
      },
      recentTransactions: lastTransactions,
    });
  } catch (error) {
    console.error("❌ Dashboard fetch error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};
