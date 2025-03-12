// App.js
import React, { useState } from "react";

// Dummy data for users
const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
];

const App = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Add new user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({ name: "", email: "", role: "" });
    }
  };

  // Edit user
  const handleEditUser = (user) => {
    setIsEditing(true);
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email, role: user.role });
  };

  // Save edited user
  const handleSaveEditedUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? { ...user, ...newUser } : user
    );
    setUsers(updatedUsers);
    setIsEditing(false);
    setNewUser({ name: "", email: "", role: "" });
    setEditingUser(null);
  };

  // Delete user
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-6">
        <div className="container mx-auto px-6 text-3xl font-semibold">
          AV Plugin - User Management
        </div>
      </header>

      {/* User Management Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-6">Manage Users</h2>

          {/* Add New User Form */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Add New User</h3>
            <form onSubmit={isEditing ? handleSaveEditedUser : handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full p-3 bg-white border border-gray-300 rounded-md"
                  placeholder="Enter user name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full p-3 bg-white border border-gray-300 rounded-md"
                  placeholder="Enter user email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full p-3 bg-white border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select a role</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white rounded-md"
                >
                  {isEditing ? "Save Changes" : "Add User"}
                </button>
              </div>
            </form>
          </div>

          {/* Users List */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Users List</h3>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Role</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.role}</td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 text-white py-1 px-3 rounded-md"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6 text-center">
        <p>&copy; 2025 AV Plugin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
