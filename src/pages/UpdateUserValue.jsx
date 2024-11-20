import React, { useState } from 'react';
import { useUpdateRoleMutation } from '../redux/features/auth/authapi';

const UpdateUserValue = ({ user, onClose, onRoleUpdate }) => {
  const [role, setRole] = useState(user?.role);
  console.log("role", role);

  const [UpdateRole] = useUpdateRoleMutation();

  const handleRole = async () => {
    try {
      // Ensure `user._id` is properly passed and update role
      const res = await UpdateRole({ userId: user._id, role }).unwrap();
      alert(res.message);
      onRoleUpdate(role);  // Update role in the parent component
      onClose();            // Close the modal after updating
    } catch (error) {
      console.error('Failed to update role', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Edit User</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            className="mt-1 w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            value={user?.email}
            readOnly
          />
        </div>

        {/* Role Update */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            className="mt-1 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
            value={role}
            onChange={(e) => setRole(e.target.value)} // Update the state directly
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow hover:bg-gray-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleRole} // Call the handleRole function to update the role
            className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserValue;
