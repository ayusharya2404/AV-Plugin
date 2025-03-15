'use client'

import React, { useState } from 'react';
import { UserCircle, Mail, Phone, MapPin, Link, Calendar, Edit, Camera, Github, Twitter, Linkedin, Award, Code, Heart } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
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
      { label: 'Projects', value: 32, color: 'bg-purple-600' },
      { label: 'Followers', value: 2.4, color: 'bg-blue-600' },
      { label: 'Following', value: 189, color: 'bg-teal-600' }
    ],
    socialLinks: [
      { name: 'GitHub', icon: Github, color: 'hover:text-purple-400' },
      { name: 'Twitter', icon: Twitter, color: 'hover:text-blue-400' },
      { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-sky-400' }
    ],
    achievements: [
      { title: 'Open Source Contributor', icon: Code, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
      { title: 'Project Lead', icon: Award, color: 'bg-gradient-to-r from-blue-500 to-teal-500' },
      { title: 'Community Builder', icon: Heart, color: 'bg-gradient-to-r from-red-500 to-orange-500' }
    ]
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillAdd = () => {
    const newSkill = prompt('Enter a new skill:');
    if (newSkill) {
      setUserData(prev => ({ 
        ...prev, 
        skills: [...prev.skills, newSkill] 
      }));
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setUserData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const accentGradient = "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600";

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-4 md:p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg transition-all hover:shadow-xl border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
              
              <div className="flex flex-col items-center relative">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-gray-700 ring-2 ring-purple-500">
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
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Camera className="text-white" />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">{userData.name}</h1>
                  <p className="text-gray-400">{userData.role}</p>
                </div>
                
                <button 
                  onClick={handleEditToggle} 
                  className={`mt-4 flex items-center text-sm px-6 py-2 rounded-full transition-all ${
                    isEditing 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  }`}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Mail className="w-5 h-5 text-pink-400 mr-3" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span>{userData.phone}</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Link className="w-5 h-5 text-teal-400 mr-3" />
                  <span>{userData.website}</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5 text-orange-400 mr-3" />
                  <span>Joined {userData.joined}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex justify-center space-x-4 mb-6">
                  {userData.socialLinks.map((link, index) => (
                    <button key={index} className={`p-2 rounded-full bg-gray-700 hover:bg-gray-600 ${link.color}`}>
                      <link.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
                
                <h2 className="text-lg font-semibold text-white mb-4">Profile Stats</h2>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {userData.stats.map((stat, index) => (
                    <div key={index} className={`${stat.color} p-3 rounded-lg transition-transform hover:scale-105 shadow-lg`}>
                      <div className="text-xl font-bold text-white">{typeof stat.value === 'number' && stat.value >= 1000 ? `${(stat.value / 1000).toFixed(1)}k` : stat.value}</div>
                      <div className="text-xs text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8 transition-all hover:shadow-xl border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
              
              {/* Tab navigation */}
              <div className="flex mb-6 border-b border-gray-700">
                <button 
                  onClick={() => setActiveTab('about')} 
                  className={`px-4 py-2 font-medium transition-colors ${activeTab === 'about' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => setActiveTab('skills')} 
                  className={`px-4 py-2 font-medium transition-colors ${activeTab === 'skills' ? 'text-pink-400 border-b-2 border-pink-400' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => setActiveTab('activity')} 
                  className={`px-4 py-2 font-medium transition-colors ${activeTab === 'activity' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  Activity
                </button>
                <button 
                  onClick={() => setActiveTab('achievements')} 
                  className={`px-4 py-2 font-medium transition-colors ${activeTab === 'achievements' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  Achievements
                </button>
              </div>
              
              {activeTab === 'about' && (
                <div className="animate-fadeIn">
                  <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={userData.bio}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 text-gray-200 p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                      rows="4"
                    />
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{userData.bio}</p>
                  )}
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div className="animate-fadeIn">
                  <h2 className="text-xl font-semibold text-white mb-4">Skills & Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <span key={index} className={`px-4 py-2 rounded-full text-sm transition-all ${
                        ['bg-purple-600', 'bg-pink-600', 'bg-blue-600', 'bg-teal-600', 'bg-green-600', 'bg-cyan-600', 'bg-indigo-600'][index % 7]
                      } hover:scale-105 flex items-center`}>
                        {skill}
                        {isEditing && (
                          <button 
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-2 text-gray-300 hover:text-white"
                          >
                            ×
                          </button>
                        )}
                      </span>
                    ))}
                    {isEditing && (
                      <button 
                        onClick={handleSkillAdd}
                        className="px-4 py-2 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                      >
                        + Add Skill
                      </button>
                    )}
                  </div>
                </div>
              )}
              
              {activeTab === 'activity' && (
                <div className="animate-fadeIn">
                  <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Updated project documentation", 
                        time: "2 hours ago",
                        color: "bg-gradient-to-r from-purple-500 to-pink-500"
                      },
                      { 
                        title: "Completed a new feature implementation", 
                        time: "Yesterday",
                        color: "bg-gradient-to-r from-blue-500 to-teal-500"
                      },
                      { 
                        title: "Joined a new project team", 
                        time: "3 days ago",
                        color: "bg-gradient-to-r from-orange-500 to-red-500"
                      }
                    ].map((activity, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all hover:translate-x-1 cursor-pointer"
                      >
                        <div className="flex items-start">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${activity.color}`}>
                            <UserCircle className="w-6 h-6 text-white" />
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
              )}
              
              {activeTab === 'achievements' && (
                <div className="animate-fadeIn">
                  <h2 className="text-xl font-semibold text-white mb-4">Achievements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userData.achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-gray-700 rounded-lg transition-all hover:scale-105 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${achievement.color}`}>
                            <achievement.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-lg font-medium text-white">{achievement.title}</div>
                            <div className="text-xs text-gray-400 mt-1">Awarded in 2023</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;