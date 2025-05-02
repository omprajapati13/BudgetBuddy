import React from "react";

const AdminFinanceOverview = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Finance Overview</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total Income:</span>
          <span>${totalIncome}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Expenses:</span>
          <span>${totalExpenses}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminFinanceOverview;
