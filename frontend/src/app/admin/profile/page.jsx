'use client';

import React, { useState } from 'react';
import { Bell, Mail, Settings, User, LogOut, Moon, Sun, ChevronDown } from 'lucide-react';

const Profile = () => {
  const [currentAdmin, setCurrentAdmin] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Mock data for two admins
  const admins = [
    {
      id: 1,
      name: "Ayush Arya",
      role: "Senior Administrator",
      email: "ayusharya358@.com",
      avatar: "/api/placeholder/100/100",
      joinDate: "June 2023",
      lastActive: "2 hours ago",
      stats: {
        projects: 12,
        tasks: 48,
        completedTasks: 36
      }
    },
    {
      id: 2,
      name: "Vishal Mishra",
      role: "System Administrator",
      email: "john.smith@example.com",
      avatar: "/api/placeholder/100/100",
      joinDate: "August 2023",
      lastActive: "5 minutes ago",
      stats: {
        projects: 8,
        tasks: 32,
        completedTasks: 24
      }
    }
  ];

  const currentAdminData = admins[currentAdmin];

  // Recent activity mock data
  const recentActivity = [
    { id: 1, action: "Updated user permissions", time: "10 minutes ago" },
    { id: 2, action: "Deployed new feature", time: "2 hours ago" },
    { id: 3, action: "Resolved ticket #1234", time: "Yesterday" },
    { id: 4, action: "Added new user accounts", time: "2 days ago" },
    { id: 5, action: "System maintenance", time: "1 week ago" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-neutral-900 border-b border-neutral-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-white">AV Admin</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-neutral-800">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-800">
              <Mail size={20} />
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 p-1 rounded-full hover:bg-neutral-800"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img 
                  src={currentAdminData.avatar} 
                  alt="Admin" 
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDown size={16} />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg py-1 z-10">
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-neutral-800"
                    onClick={() => {
                      setCurrentAdmin(currentAdmin === 0 ? 1 : 0);
                      setShowDropdown(false);
                    }}
                  >
                    Switch to {admins[currentAdmin === 0 ? 1 : 0].name}
                  </button>
                  <a href="#settings" className="block px-4 py-2 hover:bg-neutral-800">Settings</a>
                  <a href="#logout" className="block px-4 py-2 hover:bg-neutral-800">Logout</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="bg-neutral-900 rounded-lg shadow-lg p-6 col-span-1">
            <div className="flex flex-col items-center text-center">
              <img 
                src={currentAdminData.avatar} 
                alt="Admin" 
                className="h-24 w-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold text-white">{currentAdminData.name}</h2>
              <p className="text-indigo-400">{currentAdminData.role}</p>
              <p className="text-gray-400 mt-1">{currentAdminData.email}</p>
              
              <div className="border-t border-neutral-800 w-full my-6 pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold text-white">{currentAdminData.stats.projects}</p>
                    <p className="text-gray-400 text-sm">Projects</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{currentAdminData.stats.tasks}</p>
                    <p className="text-gray-400 text-sm">Tasks</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{currentAdminData.stats.completedTasks}</p>
                    <p className="text-gray-400 text-sm">Completed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md flex items-center">
                  <User size={16} className="mr-2" />
                  Profile
                </button>
                <button className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-md flex items-center">
                  <Settings size={16} className="mr-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>
          
          {/* Activity and Stats Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-900 rounded-lg shadow p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400">Member Since</p>
                    <p className="text-xl font-semibold text-white">{currentAdminData.joinDate}</p>
                  </div>
                  <div className="bg-indigo-900 p-3 rounded-lg">
                    <User size={20} className="text-indigo-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900 rounded-lg shadow p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400">Last Active</p>
                    <p className="text-xl font-semibold text-white">{currentAdminData.lastActive}</p>
                  </div>
                  <div className="bg-green-900 p-3 rounded-lg">
                    <Moon size={20} className="text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900 rounded-lg shadow p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400">Completion Rate</p>
                    <p className="text-xl font-semibold text-white">
                      {Math.round((currentAdminData.stats.completedTasks / currentAdminData.stats.tasks) * 100)}%
                    </p>
                  </div>
                  <div className="bg-purple-900 p-3 rounded-lg">
                    <Settings size={20} className="text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-neutral-900 rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Recent Activity</h3>
              <ul className="space-y-4">
                {recentActivity.map(activity => (
                  <li key={activity.id} className="border-b border-neutral-800 pb-3 last:border-0">
                    <div className="flex justify-between">
                      <span className="text-white">{activity.action}</span>
                      <span className="text-gray-400 text-sm">{activity.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <button className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                View All Activity
              </button>
            </div>
            
            {/* Quick Access */}
            <div className="bg-neutral-900 rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4 text-white">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                  <User size={24} className="mb-2 text-indigo-400" />
                  <span className="text-white">Users</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                  <Bell size={24} className="mb-2 text-yellow-400" />
                  <span className="text-white">Alerts</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                  <LogOut size={24} className="mb-2 text-red-400" />
                  <span className="text-white">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;