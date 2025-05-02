

const xlsx = require("xlsx");
const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  const userId = req.user._id;
  try {
    const { icon, category, amount, date, source } = req.body;
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({
      userId,
      icon,
      category,
      source,
      amount,
      date: new Date(date),
    });

    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    console.error("Add expense error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllExpense = async (req, res) => {
  const userId = req.user._id;
  try {
    const expenses = await Expense.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ error: "Error fetching expenses" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllExpensesForAdmin = async (req, res) => {
    try {
      const expenses = await Expense.find({})
        .sort({ createdAt: -1 })
        .populate("userId", "name email");
  
      res.status(200).json({ expenses });
    } catch (error) {
      console.error("Admin expense fetch error:", error);
      res.status(500).json({ message: "Failed to fetch expense data" });
    }
  };
  

exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user._id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    const data = expense.map((item) => ({
      Source: item.source,
      Category: item.category,
      Amount: item.amount,
      Date: item.date,
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "expense");
    xlsx.writeFile(wb, "expense_details.xlsx");
    res.download("expense_details.xlsx");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
