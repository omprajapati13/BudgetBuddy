// // const mongoose = require("mongoose");

// // const ExpenseSchema = new mongoose.Schema({
// //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //     icon: { type: String },
// //     source: { type: String, required: true }, //Ex: Food, rent, groceries, etc..
// //     amount: { type: Number, required: true },
// //     date: { type: Date, default: Date.now },
// // }, { timestamps: true });

// // module.exports = mongoose.model("Expense", ExpenseSchema);
// const mongoose = require("mongoose");

// const expenseSchema = new mongoose.Schema({
//   amount: {
//     type: Number,
//     required: true,
//   },
//   description: String,
//   date: {
//     type: Date,
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// module.exports = mongoose.model("Expense", expenseSchema);
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String },
    source: { type: String, required: true }, //Ex: Food, rent, groceries, etc..
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Expense", ExpenseSchema);