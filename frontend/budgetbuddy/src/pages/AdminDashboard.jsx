
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import AdminLayout from "../components/layouts/AdminLayout";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import axiosInstance from "../utils/axiosInstance";
// // // // // // import { API_PATHS } from "../utils/apiPaths";
// // // // // // import InfoCard from "../components/Cards/InfoCard";
// // // // // // import { IoMdPeople } from "react-icons/io";
// // // // // // import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
// // // // // // import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

// // // // // // const AdminDashboard = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [usersCount, setUsersCount] = useState(0);
// // // // // //   const [incomeTotal, setIncomeTotal] = useState(0);
// // // // // //   const [expenseTotal, setExpenseTotal] = useState(0);
// // // // // //   const [chartData, setChartData] = useState([]);
// // // // // //   const [users, setUsers] = useState([]); // New state for users list

// // // // // //   useEffect(() => {
// // // // // //     fetchDashboardData();
// // // // // //   }, []);

// // // // // //   const fetchDashboardData = async () => {
// // // // // //     try {
// // // // // //       // Fetch Users
// // // // // //       const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
// // // // // //       if (usersResponse.data.users) {
// // // // // //         setUsers(usersResponse.data.users); // save all users
// // // // // //         setUsersCount(usersResponse.data.users.length);
// // // // // //       }

// // // // // //       // Fetch Incomes
// // // // // //       const incomesResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_INCOME);
// // // // // //       const incomes = incomesResponse.data.incomes || [];
// // // // // //       const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
// // // // // //       setIncomeTotal(totalIncome);

// // // // // //       // Fetch Expenses
// // // // // //       const expensesResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_EXPENSE);
// // // // // //       const expenses = expensesResponse.data.expenses || [];
// // // // // //       const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
// // // // // //       setExpenseTotal(totalExpense);

// // // // // //       // Setup chart data
// // // // // //       setChartData([
// // // // // //         { name: "Income", amount: totalIncome },
// // // // // //         { name: "Expense", amount: totalExpense },
// // // // // //       ]);
// // // // // //     } catch (error) {
// // // // // //       console.error("Failed to fetch dashboard data:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleDeleteUser = async (userId) => {
// // // // // //     if (!window.confirm("Are you sure you want to delete this user?")) return;

// // // // // //     try {
// // // // // //       await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
// // // // // //       alert("User deleted successfully!");
// // // // // //       fetchDashboardData(); // Refresh after deletion
// // // // // //     } catch (error) {
// // // // // //       console.error("Failed to delete user:", error);
// // // // // //       alert("Failed to delete user.");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEditUser = (userId) => {
// // // // // //     navigate(`/admin/users/edit/${userId}`);
// // // // // //   };

// // // // // //   return (
// // // // // //     <AdminLayout>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //         <InfoCard
// // // // // //           icon={<IoMdPeople />}
// // // // // //           label="Total Users"
// // // // // //           value={usersCount}
// // // // // //           color="bg-blue-600"
// // // // // //         />
// // // // // //         <InfoCard
// // // // // //           icon={<FaMoneyBillWave />}
// // // // // //           label="Total Income"
// // // // // //           value={`${incomeTotal}`}
// // // // // //           color="bg-green-600"
// // // // // //         />
// // // // // //         <InfoCard
// // // // // //           icon={<FaMoneyCheckAlt />}
// // // // // //           label="Total Expenses"
// // // // // //           value={`${expenseTotal}`}
// // // // // //           color="bg-red-600"
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Chart Section */}
// // // // // //       <div className="mt-12">
// // // // // //         <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
// // // // // //         <div className="bg-white p-6 rounded-2xl shadow-md">
// // // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // // //             <LineChart data={chartData}>
// // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // //               <XAxis dataKey="name" />
// // // // // //               <YAxis />
// // // // // //               <Tooltip />
// // // // // //               <Legend />
// // // // // //               <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
// // // // // //             </LineChart>
// // // // // //           </ResponsiveContainer>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Manage Users Section */}
// // // // // //       <div className="mt-12">
// // // // // //         <div className="flex justify-between items-center mb-4">
// // // // // //           <h2 className="text-xl font-semibold">Manage Users</h2>
// // // // // //           <button
// // // // // //             className="bg-primary text-white px-4 py-2 rounded-lg"
// // // // // //             onClick={() => navigate("/admin/users/create")}
// // // // // //           >
// // // // // //             Add New User
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         <div className="overflow-x-auto">
// // // // // //           <table className="min-w-full bg-white rounded-2xl overflow-hidden">
// // // // // //             <thead className="bg-gray-100 text-gray-700">
// // // // // //               <tr>
// // // // // //                 <th className="px-6 py-3 text-left">Name</th>
// // // // // //                 <th className="px-6 py-3 text-left">Email</th>
// // // // // //                 <th className="px-6 py-3 text-left">Actions</th>
// // // // // //               </tr>
// // // // // //             </thead>
// // // // // //             <tbody>
// // // // // //               {users.map((user) => (
// // // // // //                 <tr key={user._id} className="border-t">
// // // // // //                   <td className="px-6 py-4">{user.name}</td>
// // // // // //                   <td className="px-6 py-4">{user.email}</td>
// // // // // //                   <td className="px-6 py-4 flex gap-2">
// // // // // //                     <button
// // // // // //                       onClick={() => handleEditUser(user._id)}
// // // // // //                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
// // // // // //                     >
// // // // // //                       Edit
// // // // // //                     </button>
// // // // // //                     <button
// // // // // //                       onClick={() => handleDeleteUser(user._id)}
// // // // // //                       className="bg-red-500 text-white px-3 py-1 rounded-lg"
// // // // // //                     >
// // // // // //                       Delete
// // // // // //                     </button>
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               ))}
// // // // // //               {users.length === 0 && (
// // // // // //                 <tr>
// // // // // //                   <td colSpan="3" className="text-center py-6 text-gray-400">
// // // // // //                     No users found.
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               )}
// // // // // //             </tbody>
// // // // // //           </table>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </AdminLayout>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminDashboard;
// // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // import AdminLayout from "../components/layouts/AdminLayout";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axiosInstance from "../utils/axiosInstance";
// // // // // import { API_PATHS } from "../utils/apiPaths";
// // // // // import InfoCard from "../components/Cards/InfoCard";
// // // // // import { IoMdPeople } from "react-icons/io";
// // // // // import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
// // // // // import {
// // // // //   LineChart,
// // // // //   Line,
// // // // //   XAxis,
// // // // //   YAxis,
// // // // //   Tooltip,
// // // // //   ResponsiveContainer,
// // // // //   Legend,
// // // // //   CartesianGrid,
// // // // // } from "recharts";
// // // // // import { UserContext } from "../context/userContext";
// // // // // import axios from "axios";

// // // // // const AdminDashboard = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [usersCount, setUsersCount] = useState(0);
// // // // //   const [incomeTotal, setIncomeTotal] = useState(0);
// // // // //   const [expenseTotal, setExpenseTotal] = useState(0);
// // // // //   const [chartData, setChartData] = useState([]);
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const { updateUser } = useContext(UserContext);

// // // // //   useEffect(() => {
// // // // //     fetchDashboardData();
// // // // //   }, []);

// // // // //   const fetchDashboardData = async () => {
// // // // //     try {
// // // // //       const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
// // // // //       if (usersResponse.data.users) {
// // // // //         setUsers(usersResponse.data.users);
// // // // //         setUsersCount(usersResponse.data.users.length);
// // // // //       }

// // // // //       // const incomesResponse = await axios.get(API_PATHS.ADMIN.INCOME);
// // // // //       // const incomes = incomesResponse.data || [];
// // // // //       // const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
// // // // //       // setIncomeTotal(totalIncome);
// // // // //       const incomesResponse = await axios.get(API_PATHS.ADMIN.INCOME);
// // // // //       const incomes = incomesResponse.data.incomes || []; 
// // // // //       const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);


// // // // //       const expensesResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_EXPENSE);
// // // // //       const expenses = expensesResponse.data.expenses || [];
// // // // //       const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
// // // // //       setExpenseTotal(totalExpense);

// // // // //       setChartData([
// // // // //         { name: "Income", amount: totalIncome },
// // // // //         { name: "Expense", amount: totalExpense },
// // // // //       ]);
// // // // //     } catch (error) {
// // // // //       console.error("Failed to fetch dashboard data:", error);
// // // // //     }
// // // // //   };

// // // // //   const handleDeleteUser = async (userId) => {
// // // // //     if (!window.confirm("Are you sure you want to delete this user?")) return;

// // // // //     try {
// // // // //       await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
// // // // //       alert("User deleted successfully!");
// // // // //       fetchDashboardData();
// // // // //     } catch (error) {
// // // // //       console.error("Failed to delete user:", error);
// // // // //       alert("Failed to delete user.");
// // // // //     }
// // // // //   };

// // // // //   const handleEditUser = (userId) => {
// // // // //     navigate(`/admin/users/edit/${userId}`);
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     updateUser(null);
// // // // //     navigate("/admin/login");
// // // // //   };

// // // // //   return (
// // // // //     <AdminLayout>
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
// // // // //         <button
// // // // //           onClick={handleLogout}
// // // // //           className="bg-red-600 text-white px-4 py-2 rounded-xl"
// // // // //         >
// // // // //           Logout
// // // // //         </button>
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //         <InfoCard
// // // // //           icon={<IoMdPeople />}
// // // // //           label="Total Users"
// // // // //           value={usersCount}
// // // // //           color="bg-blue-600"
// // // // //         />
// // // // //         <InfoCard
// // // // //           icon={<FaMoneyBillWave />}
// // // // //           label="Total Income"
// // // // //           value={`${incomeTotal}`}
// // // // //           color="bg-green-600"
// // // // //         />
// // // // //         <InfoCard
// // // // //           icon={<FaMoneyCheckAlt />}
// // // // //           label="Total Expenses"
// // // // //           value={`${expenseTotal}`}
// // // // //           color="bg-red-600"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Chart Section */}
// // // // //       <div className="mt-12">
// // // // //         <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
// // // // //         <div className="bg-white p-6 rounded-2xl shadow-md">
// // // // //           <ResponsiveContainer width="100%" height={300}>
// // // // //             <LineChart data={chartData}>
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="name" />
// // // // //               <YAxis />
// // // // //               <Tooltip />
// // // // //               <Legend />
// // // // //               <Line
// // // // //                 type="monotone"
// // // // //                 dataKey="amount"
// // // // //                 stroke="#8884d8"
// // // // //                 activeDot={{ r: 8 }}
// // // // //               />
// // // // //             </LineChart>
// // // // //           </ResponsiveContainer>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Manage Users */}
// // // // //       <div className="mt-12">
// // // // //         <div className="flex justify-between items-center mb-4">
// // // // //           <h2 className="text-xl font-semibold">Manage Users</h2>
// // // // //           <button
// // // // //             className="bg-primary text-white px-4 py-2 rounded-lg"
// // // // //             onClick={() => navigate("/admin/users/create")}
// // // // //           >
// // // // //             Add New User
// // // // //           </button>
// // // // //         </div>

// // // // //         <div className="overflow-x-auto">
// // // // //           <table className="min-w-full bg-white rounded-2xl overflow-hidden">
// // // // //             <thead className="bg-gray-100 text-gray-700">
// // // // //               <tr>
// // // // //                 <th className="px-6 py-3 text-left">Name</th>
// // // // //                 <th className="px-6 py-3 text-left">Email</th>
// // // // //                 <th className="px-6 py-3 text-left">Actions</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {users.map((user) => (
// // // // //                 <tr key={user._id} className="border-t">
// // // // //                   <td className="px-6 py-4">{user.fullName}</td>
// // // // //                   <td className="px-6 py-4">{user.email}</td>
// // // // //                   <td className="px-6 py-4 flex gap-2">
// // // // //                     <button
// // // // //                       onClick={() => handleEditUser(user._id)}
// // // // //                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
// // // // //                     >
// // // // //                       Edit
// // // // //                     </button>
// // // // //                     <button
// // // // //                       onClick={() => handleDeleteUser(user._id)}
// // // // //                       className="bg-red-500 text-white px-3 py-1 rounded-lg"
// // // // //                     >
// // // // //                       Delete
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //               {users.length === 0 && (
// // // // //                 <tr>
// // // // //                   <td colSpan="3" className="text-center py-6 text-gray-400">
// // // // //                     No users found.
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               )}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       </div>
// // // // //     </AdminLayout>
// // // // //   );
// // // // // };

// // // // // export default AdminDashboard;
// // // // import React, { useEffect, useState, useContext } from "react";
// // // // import AdminLayout from "../components/layouts/AdminLayout";
// // // // import { useNavigate } from "react-router-dom";
// // // // import axiosInstance from "../utils/axiosInstance";
// // // // import { API_PATHS } from "../utils/apiPaths";
// // // // import InfoCard from "../components/Cards/InfoCard";
// // // // import { IoMdPeople } from "react-icons/io";
// // // // import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
// // // // import {
// // // //   LineChart,
// // // //   Line,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   ResponsiveContainer,
// // // //   Legend,
// // // //   CartesianGrid,
// // // // } from "recharts";
// // // // import { UserContext } from "../context/userContext";
// // // // import axios from "axios";

// // // // const AdminDashboard = () => {
// // // //   const navigate = useNavigate();
// // // //   const [usersCount, setUsersCount] = useState(0);
// // // //   const [incomeTotal, setIncomeTotal] = useState(0);
// // // //   const [expenseTotal, setExpenseTotal] = useState(0);
// // // //   const [chartData, setChartData] = useState([]);
// // // //   const [users, setUsers] = useState([]);
// // // //   const { updateUser } = useContext(UserContext);

// // // //   useEffect(() => {
// // // //     fetchDashboardData();
// // // //   }, []);

// // // //   const fetchDashboardData = async () => {
// // // //     try {
// // // //       // Get all users
// // // //       const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
// // // //       if (usersResponse.data.users) {
// // // //         setUsers(usersResponse.data.users);
// // // //         setUsersCount(usersResponse.data.users.length);
// // // //       }

// // // //       // Get all income (for admin)
// // // //       const incomesResponse = await axiosInstance.get(API_PATHS.ADMIN.INCOME);
// // // //       const incomes = incomesResponse.data.incomes || [];
// // // //       const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
// // // //       setIncomeTotal(totalIncome);

// // // //       // ✅ Get all expenses (admin view)
// // // //       const adminToken = localStorage.getItem("token");
// // // //       const expensesResponse = await axios.get(API_PATHS.ADMIN.GET_EXPENSE, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${adminToken}`,
// // // //         },
// // // //       });


// // // //       // Chart data
// // // //       setChartData([
// // // //         { name: "Income", amount: totalIncome },
// // // //         { name: "Expense", amount: totalExpense },
// // // //       ]);
// // // //     } catch (error) {
// // // //       console.error("Failed to fetch dashboard data:", error);
// // // //     }
// // // //   };

// // // //   const handleDeleteUser = async (userId) => {
// // // //     if (!window.confirm("Are you sure you want to delete this user?")) return;

// // // //     try {
// // // //       await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
// // // //       alert("User deleted successfully!");
// // // //       fetchDashboardData();
// // // //     } catch (error) {
// // // //       console.error("Failed to delete user:", error);
// // // //       alert("Failed to delete user.");
// // // //     }
// // // //   };

// // // //   const handleEditUser = (userId) => {
// // // //     navigate(`/admin/users/edit/${userId}`);
// // // //   };

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     updateUser(null);
// // // //     navigate("/admin/login");
// // // //   };

// // // //   return (
// // // //     <AdminLayout>
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
// // // //         <button
// // // //           onClick={handleLogout}
// // // //           className="bg-red-600 text-white px-4 py-2 rounded-xl"
// // // //         >
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         <InfoCard
// // // //           icon={<IoMdPeople />}
// // // //           label="Total Users"
// // // //           value={usersCount}
// // // //           color="bg-blue-600"
// // // //         />
// // // //         <InfoCard
// // // //           icon={<FaMoneyBillWave />}
// // // //           label="Total Income"
// // // //           value={`${incomeTotal}`}
// // // //           color="bg-green-600"
// // // //         />
// // // //         <InfoCard
// // // //           icon={<FaMoneyCheckAlt />}
// // // //           label="Total Expenses"
// // // //           value={`${expenseTotal}`}
// // // //           color="bg-red-600"
// // // //         />
// // // //       </div>

// // // //       {/* Chart Section */}
// // // //       <div className="mt-12">
// // // //         <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
// // // //         <div className="bg-white p-6 rounded-2xl shadow-md">
// // // //           <ResponsiveContainer width="100%" height={300}>
// // // //             <LineChart data={chartData}>
// // // //               <CartesianGrid strokeDasharray="3 3" />
// // // //               <XAxis dataKey="name" />
// // // //               <YAxis />
// // // //               <Tooltip />
// // // //               <Legend />
// // // //               <Line
// // // //                 type="monotone"
// // // //                 dataKey="amount"
// // // //                 stroke="#8884d8"
// // // //                 activeDot={{ r: 8 }}
// // // //               />
// // // //             </LineChart>
// // // //           </ResponsiveContainer>
// // // //         </div>
// // // //       </div>

// // // //       {/* Manage Users */}
// // // //       <div className="mt-12">
// // // //         <div className="flex justify-between items-center mb-4">
// // // //           <h2 className="text-xl font-semibold">Manage Users</h2>
// // // //           <button
// // // //             className="bg-primary text-white px-4 py-2 rounded-lg"
// // // //             onClick={() => navigate("/admin/users/create")}
// // // //           >
// // // //             Add New User
// // // //           </button>
// // // //         </div>

// // // //         <div className="overflow-x-auto">
// // // //           <table className="min-w-full bg-white rounded-2xl overflow-hidden">
// // // //             <thead className="bg-gray-100 text-gray-700">
// // // //               <tr>
// // // //                 <th className="px-6 py-3 text-left">Name</th>
// // // //                 <th className="px-6 py-3 text-left">Email</th>
// // // //                 <th className="px-6 py-3 text-left">Actions</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {users.map((user) => (
// // // //                 <tr key={user._id} className="border-t">
// // // //                   <td className="px-6 py-4">{user.fullName}</td>
// // // //                   <td className="px-6 py-4">{user.email}</td>
// // // //                   <td className="px-6 py-4 flex gap-2">
// // // //                     <button
// // // //                       onClick={() => handleEditUser(user._id)}
// // // //                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
// // // //                     >
// // // //                       Edit
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={() => handleDeleteUser(user._id)}
// // // //                       className="bg-red-500 text-white px-3 py-1 rounded-lg"
// // // //                     >
// // // //                       Delete
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //               {users.length === 0 && (
// // // //                 <tr>
// // // //                   <td colSpan="3" className="text-center py-6 text-gray-400">
// // // //                     No users found.
// // // //                   </td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </div>
// // // //     </AdminLayout>
// // // //   );
// // // // };

// // // // export default AdminDashboard;
// // // import React, { useEffect, useState, useContext } from "react";
// // // import AdminLayout from "../components/layouts/AdminLayout";
// // // import { useNavigate } from "react-router-dom";
// // // import axiosInstance from "../utils/axiosInstance";
// // // import { API_PATHS } from "../utils/apiPaths";
// // // import InfoCard from "../components/Cards/InfoCard";
// // // import { IoMdPeople } from "react-icons/io";
// // // import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
// // // import {
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   ResponsiveContainer,
// // //   Legend,
// // //   CartesianGrid,
// // // } from "recharts";
// // // import { UserContext } from "../context/userContext";
// // // import axios from "axios";

// // // const AdminDashboard = () => {
// // //   const navigate = useNavigate();
// // //   const [usersCount, setUsersCount] = useState(0);
// // //   const [incomeTotal, setIncomeTotal] = useState(0);
// // //   const [expenseTotal, setExpenseTotal] = useState(0);
// // //   const [chartData, setChartData] = useState([]);
// // //   const [users, setUsers] = useState([]);
// // //   const { updateUser } = useContext(UserContext);

// // //   useEffect(() => {
// // //     fetchDashboardData();
// // //   }, []);

// // //   const fetchDashboardData = async () => {
// // //     try {
// // //       // Get all users
// // //       const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
// // //       if (usersResponse.data.users) {
// // //         setUsers(usersResponse.data.users);
// // //         setUsersCount(usersResponse.data.users.length);
// // //       }

// // //       // Get all income (for admin)
// // //       const incomesResponse = await axiosInstance.get(API_PATHS.ADMIN.INCOME);
// // //       const incomes = incomesResponse.data.incomes || [];
// // //       const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
// // //       setIncomeTotal(totalIncome);

// // //       // ✅ Get all expenses (for admin)
// // //       const adminToken = localStorage.getItem("token");
// // //       const expensesResponse = await axios.get(API_PATHS.ADMIN.GET_EXPENSE, {
// // //         headers: {
// // //           Authorization: `Bearer ${adminToken}`,
// // //         },
// // //       });
// // //       const expenses = expensesResponse.data.expenses || [];
// // //       const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
// // //       setExpenseTotal(totalExpense);

// // //       // Set chart data
// // //       setChartData([
// // //         { name: "Income", amount: totalIncome },
// // //         { name: "Expense", amount: totalExpense },
// // //       ]);
// // //     } catch (error) {
// // //       console.error("Failed to fetch dashboard data:", error);
// // //     }
// // //   };

// // //   const handleDeleteUser = async (userId) => {
// // //     if (!window.confirm("Are you sure you want to delete this user?")) return;

// // //     try {
// // //       await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
// // //       alert("User deleted successfully!");
// // //       fetchDashboardData();
// // //     } catch (error) {
// // //       console.error("Failed to delete user:", error);
// // //       alert("Failed to delete user.");
// // //     }
// // //   };

// // //   const handleEditUser = (userId) => {
// // //     navigate(`/admin/users/edit/${userId}`);
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     updateUser(null);
// // //     navigate("/admin/login");
// // //   };

// // //   return (
// // //     <AdminLayout>
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
// // //         <button
// // //           onClick={handleLogout}
// // //           className="bg-red-600 text-white px-4 py-2 rounded-xl"
// // //         >
// // //           Logout
// // //         </button>
// // //       </div>

// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         <InfoCard
// // //           icon={<IoMdPeople />}
// // //           label="Total Users"
// // //           value={usersCount}
// // //           color="bg-blue-600"
// // //         />
// // //         <InfoCard
// // //           icon={<FaMoneyBillWave />}
// // //           label="Total Income"
// // //           value={`${incomeTotal}`}
// // //           color="bg-green-600"
// // //         />
// // //         <InfoCard
// // //           icon={<FaMoneyCheckAlt />}
// // //           label="Total Expenses"
// // //           value={`${expenseTotal}`}
// // //           color="bg-red-600"
// // //         />
// // //       </div>

// // //       {/* Chart Section */}
// // //       <div className="mt-12">
// // //         <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
// // //         <div className="bg-white p-6 rounded-2xl shadow-md">
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <LineChart data={chartData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Legend />
// // //               <Line
// // //                 type="monotone"
// // //                 dataKey="amount"
// // //                 stroke="#8884d8"
// // //                 activeDot={{ r: 8 }}
// // //               />
// // //             </LineChart>
// // //           </ResponsiveContainer>
// // //         </div>
// // //       </div>

// // //       {/* Manage Users */}
// // //       <div className="mt-12">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="text-xl font-semibold">Manage Users</h2>
// // //           <button
// // //             className="bg-primary text-white px-4 py-2 rounded-lg"
// // //             onClick={() => navigate("/admin/users/create")}
// // //           >
// // //             Add New User
// // //           </button>
// // //         </div>

// // //         <div className="overflow-x-auto">
// // //           <table className="min-w-full bg-white rounded-2xl overflow-hidden">
// // //             <thead className="bg-gray-100 text-gray-700">
// // //               <tr>
// // //                 <th className="px-6 py-3 text-left">Name</th>
// // //                 <th className="px-6 py-3 text-left">Email</th>
// // //                 <th className="px-6 py-3 text-left">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {users.map((user) => (
// // //                 <tr key={user._id} className="border-t">
// // //                   <td className="px-6 py-4">{user.fullName}</td>
// // //                   <td className="px-6 py-4">{user.email}</td>
// // //                   <td className="px-6 py-4 flex gap-2">
// // //                     <button
// // //                       onClick={() => handleEditUser(user._id)}
// // //                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                     <button
// // //                       onClick={() => handleDeleteUser(user._id)}
// // //                       className="bg-red-500 text-white px-3 py-1 rounded-lg"
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //               {users.length === 0 && (
// // //                 <tr>
// // //                   <td colSpan="3" className="text-center py-6 text-gray-400">
// // //                     No users found.
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </AdminLayout>
// // //   );
// // // };

// // // export default AdminDashboard;
// // import React, { useEffect, useState, useContext } from "react";
// // import AdminLayout from "../components/layouts/AdminLayout";
// // import { useNavigate } from "react-router-dom";
// // import axiosInstance from "../utils/axiosInstance";
// // import { API_PATHS } from "../utils/apiPaths";
// // import InfoCard from "../components/Cards/InfoCard";
// // import { IoMdPeople } from "react-icons/io";
// // import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// //   Legend,
// //   CartesianGrid,
// // } from "recharts";
// // import { UserContext } from "../context/userContext";

// // const AdminDashboard = () => {
// //   const navigate = useNavigate();
// //   const [usersCount, setUsersCount] = useState(0);
// //   const [incomeTotal, setIncomeTotal] = useState(0);
// //   const [expenseTotal, setExpenseTotal] = useState(0);
// //   const [chartData, setChartData] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const { updateUser } = useContext(UserContext);

// //   useEffect(() => {
// //     fetchDashboardData();
// //   }, []);

// //   const fetchDashboardData = async () => {
// //     try {
// //       // Get all users
// //       const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
// //       if (usersResponse.data.users) {
// //         setUsers(usersResponse.data.users);
// //         setUsersCount(usersResponse.data.users.length);
// //       }

// //       // Get all income (for admin)
// //       const incomes = incomesResponse.data.incomes || [];
// //       const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
// //       setIncomeTotal(totalIncome);

// //       // ✅ Get all expenses (for admin)
// //       const expensesResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_EXPENSE);
// //       const expenses = expensesResponse.data.expenses || [];
// //       const totalExpense = expenses.reduce((acc, exp) => acc + exp.amount, 0);
// //       setExpenseTotal(totalExpense);

// //       // Set chart data
// //       setChartData([
// //         { name: "Income", amount: totalIncome },
// //         { name: "Expense", amount: totalExpense },
// //       ]);
// //     } catch (error) {
// //       console.error("Failed to fetch dashboard data:", error);
// //     }
// //   };

// //   const handleDeleteUser = async (userId) => {
// //     if (!window.confirm("Are you sure you want to delete this user?")) return;

// //     try {
// //       await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
// //       alert("User deleted successfully!");
// //       fetchDashboardData();
// //     } catch (error) {
// //       console.error("Failed to delete user:", error);
// //       alert("Failed to delete user.");
// //     }
// //   };

// //   const handleEditUser = (userId) => {
// //     navigate(`/admin/users/edit/${userId}`);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     updateUser(null);
// //     navigate("/admin/login");
// //   };

// //   return (
// //     <AdminLayout>
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
// //         <button
// //           onClick={handleLogout}
// //           className="bg-red-600 text-white px-4 py-2 rounded-xl"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <InfoCard
// //           icon={<IoMdPeople />}
// //           label="Total Users"
// //           value={usersCount}
// //           color="bg-blue-600"
// //         />
// //         <InfoCard
// //           icon={<FaMoneyBillWave />}
// //           label="Total Income"
// //           value={`${incomeTotal}`}
// //           color="bg-green-600"
// //         />
// //         <InfoCard
// //           icon={<FaMoneyCheckAlt />}
// //           label="Total Expenses"
// //           value={`${expenseTotal}`}
// //           color="bg-red-600"
// //         />
// //       </div>

// //       {/* Chart Section */}
// //       <div className="mt-12">
// //         <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
// //         <div className="bg-white p-6 rounded-2xl shadow-md">
// //           <ResponsiveContainer width="100%" height={300}>
// //             <LineChart data={chartData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <Tooltip />
// //               <Legend />
// //               <Line
// //                 type="monotone"
// //                 dataKey="amount"
// //                 stroke="#8884d8"
// //                 activeDot={{ r: 8 }}
// //               />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>

// //       {/* Manage Users */}
// //       <div className="mt-12">
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-semibold">Manage Users</h2>
// //           <button
// //             className="bg-primary text-white px-4 py-2 rounded-lg"
// //             onClick={() => navigate("/admin/users/create")}
// //           >
// //             Add New User
// //           </button>
// //         </div>

// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white rounded-2xl overflow-hidden">
// //             <thead className="bg-gray-100 text-gray-700">
// //               <tr>
// //                 <th className="px-6 py-3 text-left">Name</th>
// //                 <th className="px-6 py-3 text-left">Email</th>
// //                 <th className="px-6 py-3 text-left">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {users.map((user) => (
// //                 <tr key={user._id} className="border-t">
// //                   <td className="px-6 py-4">{user.fullName}</td>
// //                   <td className="px-6 py-4">{user.email}</td>
// //                   <td className="px-6 py-4 flex gap-2">
// //                     <button
// //                       onClick={() => handleEditUser(user._id)}
// //                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
// //                     >
// //                       Edit
// //                     </button>
// //                     <button
// //                       onClick={() => handleDeleteUser(user._id)}
// //                       className="bg-red-500 text-white px-3 py-1 rounded-lg"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //               {users.length === 0 && (
// //                 <tr>
// //                   <td colSpan="3" className="text-center py-6 text-gray-400">
// //                     No users found.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </AdminLayout>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useEffect, useState, useContext } from "react";
// import AdminLayout from "../components/layouts/AdminLayout";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../utils/axiosInstance";
// import axios from "axios"; // Needed for manual axios.get with headers
// import { API_PATHS, BASE_URL } from "../utils/apiPaths";
// import InfoCard from "../components/Cards/InfoCard";
// import { IoMdPeople } from "react-icons/io";
// import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   CartesianGrid,
// } from "recharts";
// import { UserContext } from "../context/userContext";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [usersCount, setUsersCount] = useState(0);
//   const [incomeTotal, setIncomeTotal] = useState(0);
//   const [expenseTotal, setExpenseTotal] = useState(0);
//   const [chartData, setChartData] = useState([]);
//   const [users, setUsers] = useState([]);
//   const { updateUser } = useContext(UserContext);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       // Get all users
//       const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
//       if (usersResponse.data.users) {
//         setUsers(usersResponse.data.users);
//         setUsersCount(usersResponse.data.users.length);
//       }

//       // ✅ Get all income (admin)
//       const adminToken = localStorage.getItem("adminToken");
//       const incomesResponse = await axios.get(
//         BASE_URL + API_PATHS.ADMIN.GET_ALL_INCOME,
//         {
//           headers: {
//             Authorization: `Bearer ${adminToken}`,
//           },
//         }
//       );
//       const incomes = incomesResponse.data.incomes || [];
//       const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
//       setIncomeTotal(totalIncome);

//       // ✅ Get all expenses (admin)
//       const expensesResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_EXPENSE);
//       const expenses = expensesResponse.data.expenses || [];
//       const totalExpense = expenses.reduce((acc, exp) => acc + exp.amount, 0);
//       setExpenseTotal(totalExpense);

//       // ✅ Set chart data
//       setChartData([
//         { name: "Income", amount: totalIncome },
//         { name: "Expense", amount: totalExpense },
//       ]);
//     } catch (error) {
//       console.error("Failed to fetch dashboard data:", error);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
//       alert("User deleted successfully!");
//       fetchDashboardData();
//     } catch (error) {
//       console.error("Failed to delete user:", error);
//       alert("Failed to delete user.");
//     }
//   };

//   const handleEditUser = (userId) => {
//     navigate(`/admin/users/edit/${userId}`);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("adminToken");
//     updateUser(null);
//     navigate("/admin/login");
//   };

//   return (
//     <AdminLayout>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-4 py-2 rounded-xl"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <InfoCard
//           icon={<IoMdPeople />}
//           label="Total Users"
//           value={usersCount}
//           color="bg-blue-600"
//         />
//         <InfoCard
//           icon={<FaMoneyBillWave />}
//           label="Total Income"
//           value={`${incomeTotal}`}
//           color="bg-green-600"
//         />
//         <InfoCard
//           icon={<FaMoneyCheckAlt />}
//           label="Total Expenses"
//           value={`${expenseTotal}`}
//           color="bg-red-600"
//         />
//       </div>

//       {/* Chart Section */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="amount"
//                 stroke="#8884d8"
//                 activeDot={{ r: 8 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Manage Users */}
//       <div className="mt-12">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Manage Users</h2>
//           <button
//             className="bg-primary text-white px-4 py-2 rounded-lg"
//             onClick={() => navigate("/admin/users/create")}
//           >
//             Add New User
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-2xl overflow-hidden">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="px-6 py-3 text-left">Name</th>
//                 <th className="px-6 py-3 text-left">Email</th>
//                 <th className="px-6 py-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id} className="border-t">
//                   <td className="px-6 py-4">{user.fullName}</td>
//                   <td className="px-6 py-4">{user.email}</td>
//                   <td className="px-6 py-4 flex gap-2">
//                     <button
//                       onClick={() => handleEditUser(user._id)}
//                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteUser(user._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-lg"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {users.length === 0 && (
//                 <tr>
//                   <td colSpan="3" className="text-center py-6 text-gray-400">
//                     No users found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../components/layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import InfoCard from "../components/Cards/InfoCard";
import { IoMdPeople } from "react-icons/io";
import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { UserContext } from "../context/userContext";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [usersCount, setUsersCount] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [users, setUsers] = useState([]);
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Get all users
      const usersResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
      if (usersResponse.data.users) {
        setUsers(usersResponse.data.users);
        setUsersCount(usersResponse.data.users.length);
      }

      // ✅ Use fetch() to get all income (admin)
      const incomeResponse = await fetch("http://localhost:5000/api/v1/admin/income", {
        method: "GET",
        credentials: "include",
      });
      const incomeData = await incomeResponse.json();
      const incomes = incomeData.incomes || [];
      const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
      setIncomeTotal(totalIncome);

      // ✅ Get all expenses
      const expensesResponse = await axiosInstance.get(API_PATHS.ADMIN.GET_EXPENSE);
      const expenses = expensesResponse.data.expenses || [];
      const totalExpense = expenses.reduce((acc, exp) => acc + exp.amount, 0);
      setExpenseTotal(totalExpense);

      // ✅ Set chart data
      setChartData([
        { name: "Income", amount: totalIncome },
        { name: "Expense", amount: totalExpense },
      ]);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axiosInstance.delete(`${API_PATHS.ADMIN.DELETE_USER}/${userId}`);
      alert("User deleted successfully!");
      fetchDashboardData();
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user.");
    }
  };

  const handleEditUser = (userId) => {
    navigate(`/admin/users/edit/${userId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
    updateUser(null);
    navigate("/admin/login");
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard
          icon={<IoMdPeople />}
          label="Total Users"
          value={usersCount}
          color="bg-blue-600"
        />
        <InfoCard
          icon={<FaMoneyBillWave />}
          label="Total Income"
          value={`${incomeTotal}`}
          color="bg-green-600"
        />
        <InfoCard
          icon={<FaMoneyCheckAlt />}
          label="Total Expenses"
          value={`${expenseTotal}`}
          color="bg-red-600"
        />
      </div>

      {/* Chart Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Income vs Expenses</h2>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Manage Users */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Manage Users</h2>
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg"
            onClick={() => navigate("/admin/users/create")}
          >
            Add New User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-6 py-4">{user.fullName}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => handleEditUser(user._id)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
