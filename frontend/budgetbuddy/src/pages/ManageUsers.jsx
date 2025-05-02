// import React, { useEffect, useState } from "react";
// import DashboardLayout from "../components/layouts/DashboardLayout";
// import { API_PATHS } from "../utils/apiPaths";
// import axiosInstance from "../utils/axiosInstance";
// import { useNavigate } from "react-router-dom";

// const ManageUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = await axiosInstance.get(API_PATHS.ADMIN.GET_USERS);
//       setUsers(response.data || []);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <DashboardLayout activeMenu="Manage Users">
//       <div className="flex justify-between items-center my-6">
//         <h1 className="text-2xl font-bold">Manage Users</h1>
//         <button
//           className="bg-primary text-white px-4 py-2 rounded-lg"
//           onClick={() => navigate("/admin/users/add")}
//         >
//           Add User
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow-md p-4">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="py-2">Full Name</th>
//               <th className="py-2">Email</th>
//               <th className="py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user._id} className="border-b">
//                 <td className="py-2">{user.fullName}</td>
//                 <td className="py-2">{user.email}</td>
//                 <td className="py-2">
//                   <button
//                     onClick={() => navigate(`/admin/users/edit/${user._id}`)}
//                     className="bg-green-500 text-white px-3 py-1 rounded-md mr-2"
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default ManageUsers;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance';
// import DeleteAlert from '../components/DeleteAlert';
// import Modal from '../components/Modal';
// import UserForm from '../pages/admin/UserForm';

// const ManageUsers = () => {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axiosInstance.get('/admin/users');
//       setUsers(response.data.users);
//     } catch (error) {
//       console.error('Failed to fetch users', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axiosInstance.delete(`/admin/users/${selectedUser._id}`);
//       setShowDeleteModal(false);
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to delete user', error);
//     }
//   };

//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setShowEditModal(true);
//   };

//   const handleUpdateUser = async (updatedData) => {
//     try {
//       await axiosInstance.put(`/admin/users/${selectedUser._id}`, updatedData);
//       setShowEditModal(false);
//       fetchUsers();
//     } catch (error) {
//       console.error('Failed to update user', error);
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700 text-left text-sm uppercase">
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Email</th>
//               <th className="py-3 px-6">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} className="border-b text-sm">
//                 <td className="py-3 px-6">{user.name}</td>
//                 <td className="py-3 px-6">{user.email}</td>
//                 <td className="py-3 px-6 space-x-4">
//                   <button
//                     onClick={() => handleEdit(user)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => {
//                       setSelectedUser(user);
//                       setShowDeleteModal(true);
//                     }}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {users.length === 0 && (
//               <tr>
//                 <td className="py-3 px-6 text-center" colSpan={3}>
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Delete User Modal */}
//       {showDeleteModal && (
//         <DeleteAlert
//           title="Delete User"
//           message={`Are you sure you want to delete ${selectedUser.name}?`}
//           onCancel={() => setShowDeleteModal(false)}
//           onConfirm={handleDelete}
//         />
//       )}

//       {/* Edit User Modal */}
//       {showEditModal && (
//         <Modal onClose={() => setShowEditModal(false)}>
//           <UserForm
//             user={selectedUser}
//             onSubmit={handleUpdateUser}
//             onCancel={() => setShowEditModal(false)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default ManageUsers;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import DeleteAlert from '../components/DeleteAlert';
import Modal from '../components/Modal';
import UserForm from '../pages/admin/UserForm';

const ManageUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('/admin/users');
      if (response.data && response.data.users) {
        setUsers(response.data.users);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error('Failed to fetch users', error);
      setUsers([]);
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/admin/users/${selectedUser._id}`);
      setShowDeleteModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleUpdateUser = async (updatedData) => {
    try {
      await axiosInstance.put(`/admin/users/${selectedUser._id}`, updatedData);
      setShowEditModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Failed to update user', error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left text-sm uppercase">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(users || []).map((user) => (
              <tr key={user._id} className="border-b text-sm">
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6 space-x-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setShowDeleteModal(true);
                    }}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {(users?.length === 0) && (
              <tr>
                <td className="py-3 px-6 text-center" colSpan={3}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete User Modal */}
      {showDeleteModal && (
        <DeleteAlert
          title="Delete User"
          message={`Are you sure you want to delete ${selectedUser.name}?`}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <UserForm
            user={selectedUser}
            onSubmit={handleUpdateUser}
            onCancel={() => setShowEditModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ManageUsers;
