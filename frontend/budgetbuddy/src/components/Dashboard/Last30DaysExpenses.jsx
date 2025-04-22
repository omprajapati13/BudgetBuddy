// components/Dashboard/Last30DaysExpenses.jsx

import React, { useState, useEffect } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log("📊 Last 30 Days Expenses Data Received:", data);

    if (Array.isArray(data)) {
      const result = prepareExpenseBarChartData(data);
      setChartData(result);
    } else {
      console.warn("Expected array for Last30DaysExpenses, but got:", data);
      setChartData([]);
    }
  }, [data]);

  return (
    <div className="card col-span-1 p-4 shadow-lg rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-800">Last 30 Days Expenses</h5>
      </div>
      <CustomBarChart data={chartData} />
    </div>
  );
};

export default Last30DaysExpenses;
