import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-6 font-bold text-2xl border-b border-blue-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link to="/admin/dashboard" className="block hover:bg-blue-800 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/admin/users" className="block hover:bg-blue-800 p-2 rounded">
          Manage Users
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
