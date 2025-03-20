"use client"
import React, { useState } from 'react';

const InstallationPage = () => {
  const [copySuccess, setCopySuccess] = useState({
    npm: false,
    yarn: false,
    pnpm: false,
    config: false
  });
  
  const [activeTab, setActiveTab] = useState('npm');
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess({ ...copySuccess, [type]: true });
      setTimeout(() => {
        setCopySuccess({ ...copySuccess, [type]: false });
      }, 2000);
    });
  };

  const installCommands = {
    npm: 'npm install av-plugin',
    yarn: 'yarn add av-plugin',
    pnpm: 'pnpm add av-plugin'
  };

  const configCode = `// tailwind.config.js
module.exports = {
  theme: {
    // ... your theme config
  },
  plugins: [
    require('av-plugin')({
      // plugin options here
    })
  ],
}`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-500 bg-clip-text text-transparent animate-pulse">
              AV Plugin for Tailwind CSS
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A powerful Tailwind CSS plugin that enhances your development workflow with advanced visual components
            </p>
          </div>

          {/* Installation Section */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Installation
            </h2>
            
            <div className="mb-6">
              <div className="flex space-x-1 border-b border-gray-700 mb-4">
                {Object.keys(installCommands).map((cmd) => (
                  <button
                    key={cmd}
                    className={`py-2 px-4 font-medium rounded-t-lg transition-colors duration-200 ${
                      activeTab === cmd 
                        ? 'bg-gray-700 text-blue-400 border-b-2 border-blue-400' 
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                    }`}
                    onClick={() => setActiveTab(cmd)}
                  >
                    {cmd}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto font-mono text-sm">
                  <code>{installCommands[activeTab]}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(installCommands[activeTab], activeTab)}
                  className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-150"
                  aria-label="Copy to clipboard"
                >
                  {copySuccess[activeTab] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Configuration Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Configuration
              </h3>
              <p className="text-gray-400 mb-4">
                Add the plugin to your <code className="text-gray-300 bg-gray-900 px-1 py-0.5 rounded">tailwind.config.js</code> file:
              </p>
              <div className="relative">
                <pre className="bg-gray-950 p-4 rounded-md overflow-x-auto font-mono text-sm">
                  <code>{configCode}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(configCode, 'config')}
                  className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-150"
                  aria-label="Copy to clipboard"
                >
                  {copySuccess.config ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Easy Integration",
                description: "Seamlessly integrates with your existing Tailwind CSS setup",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Customizable",
                description: "Highly configurable to match your project's design system",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: "Performance Optimized",
                description: "Built with performance in mind, minimal impact on bundle size",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-700 mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Next Steps Card */}
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-600/40 rounded-lg p-6 border border-blue-800/50 mt-12">
            <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
            <ul className="space-y-4">
              {[
                "Explore the component library",
                "Check out example implementations",
                "Join our community for support"
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-105">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;