// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";
// import AdminLogin from "./pages/Auth/AdminLogin";

// import Home from "./pages/Dashboard/Home";
// import Income from "./pages/Dashboard/Income";
// import Expense from "./pages/Dashboard/Expense";

// import AdminDashboard from "./pages/AdminDashboard";
// import ManageUsers from "./pages/ManageUsers";
// import UserForm from "./pages/admin/UserForm";

// import UserProvider from "./context/userContext";
// import { Toaster } from "react-hot-toast";

// // Import the ProtectedAdminRoute
// import AdminUsers from "./pages/admin/AdminUsers";
// import ProtectedAdminRoute from "../../budgetbuddy/src/routes/ProtectedAdminRoute";

// const App = () => {
//   return (
//     <UserProvider>
//       <div>
//         <Router>
//           <Routes>
//             {/* Public and Authentication Routes */}
//             <Route path="/" element={<Root />} />
//             <Route path="/login" exact element={<Login />} />
//             <Route path="/signUp" exact element={<SignUp />} />
//             <Route path="/admin/login" exact element={<AdminLogin />} />


//             {/* User Dashboard Routes */}
//             <Route path="/dashboard" exact element={<Home />} />
//             <Route path="/income" exact element={<Income />} />
//             <Route path="/expense" exact element={<Expense />} />

//             {/* Admin Dashboard Routes */}
//             <Route
//               path="/admin/dashboard"
//               element={
//                 <ProtectedAdminRoute>
//                   <AdminDashboard />
//                 </ProtectedAdminRoute>
//               }
//             />
//             <Route
//               path="/admin/users"
//               element={
//                 <ProtectedAdminRoute>
//                   <ManageUsers />
//                 </ProtectedAdminRoute>
//               }
//             />
//             <Route
//               path="/admin/users/add"
//               element={
//                 <ProtectedAdminRoute>
//                   <UserForm />
//                 </ProtectedAdminRoute>
//               }
//             />
//             <Route path="/admin/users" element={<AdminUsers />} />
//             <Route
//               path="/admin/users/edit/:id"
//               element={
//                 <ProtectedAdminRoute>
//                   <UserForm />
//                 </ProtectedAdminRoute>
//               }
//             />
//           </Routes>
//         </Router>
//       </div>

//       {/* Global Toaster */}
//       <Toaster
//         toastOptions={{
//           className: "",
//           style: {
//             fontSize: "13px",
//           },
//         }}
//       />
//     </UserProvider>
//   );
// };

// const Root = () => {
//   const userToken = localStorage.getItem("token");
//   const adminToken = localStorage.getItem("adminToken");

//   if (adminToken) {
//     return <Navigate to="/admin/dashboard" />;
//   } else if (userToken) {
//     return <Navigate to="/dashboard" />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/signUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from "./context/userContext"; 
import { Toaster } from "react-hot-toast";
import AdminLogin from "./pages/Auth/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";


const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
          </Routes>
        </Router>
      </div>

      <Toaster 
            toastOptions={{
              className: "",
              style: {
                fontSize:'13px'
              },
            }}
      />
    </UserProvider>
  );
};

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
