
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const ExpenseTransactions = ({ transactions = [], onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Expenses</h5>
        <button className="card-btn flex items-center gap-1" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions.length > 0 ? (
          transactions.slice(0, 5).map((expense) => (
            <TransactionInfoCard
              key={expense._id || expense.source}
              title={expense.source}
              icon={expense.icon || "💸"}
              date={moment(expense.date).format("Do MMM YYYY")}
              amount={expense.amount}
              type="expense" // Always marking as expense here
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-sm text-gray-400">No expenses to display.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
