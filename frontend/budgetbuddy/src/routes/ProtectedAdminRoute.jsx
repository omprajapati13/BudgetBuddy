import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");

  if (!adminToken) {
    // If not logged in as admin, redirect to Admin Login page
    return <Navigate to="/admin/login" replace />;
  }

  // If adminToken exists, allow the page to load
  return children;
};

export default ProtectedAdminRoute;
