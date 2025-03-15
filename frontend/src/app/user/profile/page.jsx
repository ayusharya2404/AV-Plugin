'use client'

import React, { useState } from 'react';
import { UserCircle, Mail, Phone, MapPin, Link, Calendar, Edit, Camera, Save, X, Plus, Check } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [showAddSkill, setShowAddSkill] = useState(false);
  
  const [userData, setUserData] = useState({
    name: 'Alexander Wright',
    role: 'Senior Developer',
    email: 'alexander@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexwright.dev',
    joined: 'March 2021',
    bio: 'Full-stack developer specializing in React and Node.js with 8+ years of experience building scalable web applications.',
    skills: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'GraphQL', 'AWS'],
    profileImage: '/api/placeholder/300/300',
    stats: [
      { label: 'Projects', value: 32 },
      { label: 'Followers', value: 2400 },
      { label: 'Following', value: 189 }
    ],
    activities: [
      { title: "Updated project documentation", time: "2 hours ago" },
      { title: "Completed a new feature implementation", time: "Yesterday" },
      { title: "Joined a new project team", time: "3 days ago" }
    ]
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setShowAddSkill(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const addNewSkill = () => {
    if (newSkill.trim()) {
      setUserData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
      setShowAddSkill(false);
    }
  };

  const removeSkill = (skillToRemove) => {
    setUserData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="flex flex-col items-center relative">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-gray-700">
                    {userData.profileImage ? (
                      <img 
                        src={userData.profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <UserCircle className="w-full h-full text-gray-500" />
                    )}
                  </div>
                  {isEditing && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                      <Camera className="text-white" />
                    </div>
                  )}
                </div>
                
                <div className="mt-4 text-center">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="text-2xl font-bold text-white bg-gray-700 border border-gray-600 rounded p-1 text-center w-full"
                    />
                  ) : (
                    <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
                  )}
                  
                  {isEditing ? (
                    <input
                      type="text"
                      name="role"
                      value={userData.role}
                      onChange={handleInputChange}
                      className="text-gray-400 bg-gray-700 border border-gray-600 rounded p-1 text-center mt-1 w-full"
                    />
                  ) : (
                    <p className="text-gray-400">{userData.role}</p>
                  )}
                </div>
                
                <button 
                  onClick={handleEditToggle} 
                  className={`mt-4 flex items-center text-sm px-4 py-2 rounded-full ${isEditing ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-700 hover:bg-gray-600'} transition-colors`}
                >
                  {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="bg-gray-700 border border-gray-600 rounded p-1 flex-1"
                    />
                  ) : (
                    <span>{userData.email}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-700 border border-gray-600 rounded p-1 flex-1"
                    />
                  ) : (
                    <span>{userData.phone}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-indigo-400 mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={userData.location}
                      onChange={handleInputChange}
                      className="bg-gray-700 border border-gray-600 rounded p-1 flex-1"
                    />
                  ) : (
                    <span>{userData.location}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Link className="w-5 h-5 text-indigo-400 mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="website"
                      value={userData.website}
                      onChange={handleInputChange}
                      className="bg-gray-700 border border-gray-600 rounded p-1 flex-1"
                    />
                  ) : (
                    <span>{userData.website}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-indigo-400 mr-3" />
                  <span>Joined {userData.joined}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h2 className="text-lg font-semibold text-white mb-4">Profile Stats</h2>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {userData.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                      <div className="text-xl font-bold text-white">{typeof stat.value === 'number' && stat.value >= 1000 ? `${(stat.value / 1000).toFixed(1)}k` : stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-gray-200 p-3 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
                  rows="4"
                />
              ) : (
                <p className="text-gray-300 leading-relaxed">{userData.bio}</p>
              )}
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span key={index} className={`px-3 py-1 bg-gray-700 rounded-full text-sm group flex items-center ${isEditing ? 'pr-2' : 'hover:bg-gray-600'} transition-colors`}>
                    {skill}
                    {isEditing && (
                      <button 
                        onClick={() => removeSkill(skill)}
                        className="ml-1 text-gray-400 hover:text-red-400 rounded-full p-1"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </span>
                ))}
                
                {isEditing && !showAddSkill && (
                  <button 
                    onClick={() => setShowAddSkill(true)}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-400 hover:bg-gray-600 flex items-center transition-colors"
                  >
                    <Plus size={14} className="mr-1" /> Add Skill
                  </button>
                )}
                
                {isEditing && showAddSkill && (
                  <div className="flex items-center bg-gray-700 rounded-full overflow-hidden">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="px-3 py-1 bg-gray-700 border-none focus:outline-none text-sm"
                      placeholder="New skill..."
                      onKeyPress={(e) => e.key === 'Enter' && addNewSkill()}
                    />
                    <button 
                      onClick={addNewSkill}
                      className="p-1 text-green-400 hover:bg-gray-600"
                    >
                      <Check size={16} />
                    </button>
                    <button 
                      onClick={() => setShowAddSkill(false)}
                      className="p-1 text-red-400 hover:bg-gray-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {userData.activities.map((activity, index) => (
                  <div key={index} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-indigo-900 bg-opacity-50 flex items-center justify-center mr-3">
                        <UserCircle className="w-6 h-6 text-indigo-300" />
                      </div>
                      <div>
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;