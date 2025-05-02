import React from "react";
import AdminSidebar from "../Sidebar/AdminSidebar"; // we'll create this next
import AdminNavbar from "../Navbar/AdminNavbar";   // we'll create this too

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
