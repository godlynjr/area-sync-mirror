import React, { useState } from "react";
import Infos from "../Data/Manage.js";

const EditUserModal = ({ isOpen, onClose, user }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("user:", editedUser);
    const success = Infos.EditUserById(editedUser);
    console.log("Status: ", success);
    onClose();
    window.location.href = '/UserList';
};

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Edit User</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              &times;
            </button>
          </div>
          <div>
            <div>
              <label className="block mb-4">
                <span className="text-gray-700">Username:</span>
                <input
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email:</span>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Password:</span>
                <input
                  type="text"
                  name="password"
                  value={editedUser.password}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </label>
              <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditUserModal;
