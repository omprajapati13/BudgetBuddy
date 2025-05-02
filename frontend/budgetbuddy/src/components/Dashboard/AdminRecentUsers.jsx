import React from "react";

const AdminRecentUsers = ({ users = [] }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
      <ul className="space-y-2">
        {users.length === 0 && <p>No recent users.</p>}
        {users.map((user) => (
          <li key={user._id} className="flex justify-between items-center">
            <div>{user.name}</div>
            <div className="text-gray-500 text-sm">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminRecentUsers;
