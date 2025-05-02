import React from "react";

const AdminInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md text-white ${color}`}>
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <div className="text-xl font-bold">{value}</div>
          <div className="text-sm">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfoCard;
