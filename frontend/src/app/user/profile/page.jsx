'use client'

import React, { useState } from 'react';
import { UserCircle, Mail, Phone, MapPin, Link, Calendar, Edit, Camera } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
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
    stats: [
      { label: 'Projects', value: 32 },
      { label: 'Followers', value: 2.4 },
      { label: 'Following', value: 189 }
    ]
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-black min-h-screen text-gray-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="flex flex-col items-center relative">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                    <UserCircle className="w-full h-full text-gray-500" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Camera className="text-white" />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
                  <p className="text-gray-400">{userData.role}</p>
                </div>
                
                <button 
                  onClick={handleEditToggle} 
                  className="mt-4 flex items-center text-sm px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <span>{userData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center">
                  <Link className="w-5 h-5 text-gray-400 mr-3" />
                  <span>{userData.website}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span>Joined {userData.joined}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h2 className="text-lg font-semibold text-white mb-4">Profile Stats</h2>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {userData.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="text-xl font-bold text-white">{typeof stat.value === 'number' && stat.value >= 1000 ? `${(stat.value / 1000).toFixed(1)}k` : stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-8 transition-all hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                  rows="4"
                />
              ) : (
                <p className="text-gray-300 leading-relaxed">{userData.bio}</p>
              )}
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-8 transition-all hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors">
                    {skill}
                  </span>
                ))}
                {isEditing && (
                  <button className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400 hover:bg-gray-700 transition-colors">
                    + Add Skill
                  </button>
                )}
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <UserCircle className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-medium">
                          {index === 0 && "Updated project documentation"}
                          {index === 1 && "Completed a new feature implementation"}
                          {index === 2 && "Joined a new project team"}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {index === 0 && "2 hours ago"}
                          {index === 1 && "Yesterday"}
                          {index === 2 && "3 days ago"}
                        </div>
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


export default Profile