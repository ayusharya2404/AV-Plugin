'use client';

import React, { useState } from 'react';
import { Search, Users, Bell, Settings, Menu, X, Edit, Trash, UserPlus, Filter, ChevronDown } from 'lucide-react';

const ManageUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '5 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor', status: 'Active', lastLogin: '3 hours ago' },
    { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Viewer', status: 'Pending', lastLogin: 'Never' },
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setSelectedUsers(selectedUsers.filter(id => id !== userId));
  };

  // This function would integrate with the av plugin
  const handleAvPluginAction = (action, userId) => {
    console.log(`Av plugin ${action} triggered for user ${userId}`);
    // Implementation would depend on the av plugin's API
  };

  // Filter users based on search term and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-900 md:flex-row">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800 shadow-md md:hidden">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-400 rounded-md hover:bg-gray-700"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <h1 className="text-xl font-semibold text-white">User Admin</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 rounded-full hover:bg-gray-700">
            <Bell className="w-5 h-5" />
          </button>
          <img
            src="/api/placeholder/32/32"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} w-full md:block md:w-64 bg-gray-800 shadow-md flex-shrink-0 fixed md:relative inset-0 z-10 md:z-0 md:h-screen overflow-y-auto`}>
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold text-white">User Admin</h1>
        </div>
        <div className="p-4">
          <nav className="space-y-2">
            <a href="#" className="flex items-center p-2 text-white bg-gray-700 rounded-md hover:bg-gray-600">
              <Users className="w-5 h-5 mr-3 text-gray-400" />
              <span>Users</span>
            </a>
            <a href="#" className="flex items-center p-2 text-gray-400 rounded-md hover:bg-gray-700">
              <Settings className="w-5 h-5 mr-3 text-gray-500" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Desktop Top Bar */}
        <div className="hidden items-center justify-between p-4 bg-gray-800 shadow-md md:flex">
          <div className="flex items-center px-2 py-1 bg-gray-700 rounded-md w-64">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full px-2 py-1 bg-transparent border-none focus:outline-none text-gray-300 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 rounded-full hover:bg-gray-700">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-white">User</span>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-4 md:hidden">
          <div className="flex items-center px-2 py-2 bg-gray-700 rounded-md">
            <Search className="w-4 h-4 text-gray-400 ml-1" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full px-2 py-1 bg-transparent border-none focus:outline-none text-gray-300 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Page Header */}
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-0">User Management</h2>
            <button 
              className="flex items-center justify-center px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-600"
              onClick={() => handleAvPluginAction('create-user')}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center mb-6 space-y-3 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <Filter className="w-4 h-4 mr-2 text-gray-400" />
              <span className="mr-2 text-sm text-gray-400">Role:</span>
              <select 
                className="px-2 py-1 text-sm bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-400">Status:</span>
              <select 
                className="px-2 py-1 text-sm bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="md:ml-auto">
              <button 
                className={`px-3 py-1 text-sm rounded-md ${
                  selectedUsers.length > 0 ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
                disabled={selectedUsers.length === 0}
                onClick={() => {
                  if (selectedUsers.length > 0) {
                    setUsers(users.filter(user => !selectedUsers.includes(user.id)));
                    setSelectedUsers([]);
                  }
                }}
              >
                Delete Selected
              </button>
            </div>
          </div>

          {/* Users Table - Desktop */}
          <div className="hidden md:block overflow-hidden bg-gray-800 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-gray-600 bg-gray-600 border-gray-600 rounded focus:ring-gray-500"
                        checked={selectedUsers.length === users.length && users.length > 0}
                        onChange={toggleSelectAll}
                      />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Name</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Email</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Role</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Last Login</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-gray-600 bg-gray-600 border-gray-600 rounded focus:ring-gray-500"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => toggleSelectUser(user.id)}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={`/api/placeholder/32/32`}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-400">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Active' ? 'bg-green-900 text-green-300' : 
                        user.status === 'Inactive' ? 'bg-red-900 text-red-300' : 
                        'bg-gray-700 text-gray-300'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button 
                        className="mr-2 text-gray-400 hover:text-gray-300"
                        onClick={() => handleAvPluginAction('edit', user.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-gray-300"
                        onClick={() => deleteUser(user.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredUsers.length === 0 && (
              <div className="flex flex-col items-center justify-center p-6">
                <p className="text-gray-400">No users found</p>
              </div>
            )}
          </div>

          {/* Users Cards - Mobile */}
          <div className="md:hidden space-y-4">
            {filteredUsers.map(user => (
              <div key={user.id} className="bg-gray-800 rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-gray-600 bg-gray-600 border-gray-600 rounded focus:ring-gray-500 mr-3"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                    />
                    <img
                      src={`/api/placeholder/32/32`}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-white">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <div className="text-xs text-gray-500">Role</div>
                    <div className="text-sm text-gray-400">{user.role}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Status</div>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-900 text-green-300' : 
                      user.status === 'Inactive' ? 'bg-red-900 text-red-300' : 
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Last Login</div>
                    <div className="text-sm text-gray-400">{user.lastLogin}</div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button 
                    className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-md"
                    onClick={() => handleAvPluginAction('edit', user.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-md"
                    onClick={() => deleteUser(user.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            {filteredUsers.length === 0 && (
              <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md">
                <p className="text-gray-400">No users found</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between py-3 mt-4">
            <div className="flex justify-between flex-1 sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-400 bg-gray-700 border border-gray-600 rounded-md hover:bg-gray-600">
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
                  <span className="font-medium">{filteredUsers.length}</span> results
                </p>
              </div>
              <div>
                <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-600 hover:bg-gray-700 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <ChevronDown className="w-5 h-5 rotate-90" />
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gray-700 focus:outline-offset-0">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-600 hover:bg-gray-700 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <ChevronDown className="w-5 h-5 -rotate-90" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;