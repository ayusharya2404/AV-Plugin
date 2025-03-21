'use client'

import React, { useState } from 'react'

export default function AVPluginDocs() {
  const [activeTab, setActiveTab] = useState('installation')
  const [showCode, setShowCode] = useState({
    installation: false,
    usage: false,
    components: false,
    api: false,
  })

  const toggleCode = (section) => {
    setShowCode({
      ...showCode,
      [section]: !showCode[section],
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-neutral-950 overflow-hidden text-gray-200">
      {/* Main content - Added top margin (mt-16) to prevent nav bar overlap */}
      <main className="max-w-6xl mx-auto py-8 px-4 md:px-8 mt-13">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <nav className="sticky top-24 bg-gray-900 rounded-lg p-4">
              <h2 className="text-white text-lg font-medium mb-4">Documentation</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('installation')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === 'installation' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Installation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('usage')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === 'usage' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Basic Usage
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('components')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === 'components' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Components
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('api')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === 'api' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    API Reference
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="md:col-span-9">
            {activeTab === 'installation' && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">Installation</h2>
                <p className="text-gray-400 mb-6">
                  Getting started with the AV Plugin for Tailwind CSS is easy. Follow these steps to install and configure the plugin in your project.
                </p>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
                  <li>Tailwind CSS v3.0 or newer</li>
                  <li>Node.js 14.0+</li>
                  <li>npm or yarn</li>
                </ul>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Installation Steps</h3>
                <div className="bg-gray-800 rounded-lg mb-6">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">npm</span>
                    <button 
                      onClick={() => toggleCode('installation')}
                      className="text-gray-400 hover:text-white"
                    >
                      {showCode.installation ? 'Hide' : 'Show'} code
                    </button>
                  </div>
                  {showCode.installation && (
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>
                          # Install with npm{'\n'}
                          npm install avplugin-tailwindcss{'\n\n'}
                          # Or with yarn{'\n'}
                          yarn add avplugin-tailwindcss
                        </code>
                      </pre>
                    </div>
                  )}
                </div>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Configuration</h3>
                <p className="text-gray-400 mb-4">
                  After installation, add the plugin to your tailwind.config.js file:
                </p>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">tailwind.config.js</span>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>
                        {`module.exports = {
  // ...other config
  plugins: [
    require('avplugin-tailwindcss')({
      // Optional configuration options
      theme: 'dark',
      responsive: true,
    }),
    // ...other plugins
  ],
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'usage' && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">Basic Usage</h2>
                <p className="text-gray-400 mb-6">
                  The AV Plugin provides a collection of utility classes that make it easy to create modern, responsive interfaces with Tailwind CSS.
                </p>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Core Concepts</h3>
                <p className="text-gray-400 mb-6">
                  The plugin extends Tailwind's functionality with specialized utilities for advanced visual effects, animations, and interactive components.
                </p>

                <div className="bg-gray-800 rounded-lg mb-6">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">Example</span>
                    <button 
                      onClick={() => toggleCode('usage')}
                      className="text-gray-400 hover:text-white"
                    >
                      {showCode.usage ? 'Hide' : 'Show'} code
                    </button>
                  </div>
                  {showCode.usage && (
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>
                          {`<div className="av-card av-shadow-lg av-hover:scale-105">
  <h3 className="av-text-gradient from-purple-400 to-pink-600">
    Dynamic Card
  </h3>
  <p className="av-blur-sm av-hover:blur-none transition-all">
    This content reveals on hover
  </p>
</div>`}
                        </code>
                      </pre>
                    </div>
                  )}
                </div>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Available Utilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">av-text-gradient</h4>
                    <p className="text-gray-400 text-sm">Creates beautiful text gradients with customizable colors</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">av-shadow</h4>
                    <p className="text-gray-400 text-sm">Enhanced shadow utilities with glow effects</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">av-animation</h4>
                    <p className="text-gray-400 text-sm">Predefined animation sequences for common interactions</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">av-transform</h4>
                    <p className="text-gray-400 text-sm">Extended transform utilities with advanced options</p>
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'components' && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">Components</h2>
                <p className="text-gray-400 mb-6">
                  The AV Plugin includes a set of predefined component classes that you can use to quickly build common UI elements.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-5 border-b border-gray-700">
                      <h3 className="text-white font-semibold">av-card</h3>
                    </div>
                    <div className="p-5">
                      <div className="bg-gray-900 p-4 rounded-md av-card">
                        <h4 className="text-white font-medium mb-2">Card Title</h4>
                        <p className="text-gray-400 text-sm">This is a sample card component using the av-card class.</p>
                        <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors">
                          Action
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                      <button 
                        onClick={() => toggleCode('components')}
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {showCode.components ? 'Hide' : 'Show'} code
                      </button>
                      {showCode.components && (
                        <div className="mt-3 overflow-x-auto">
                          <pre className="text-gray-300 text-sm">
                            <code>
                              {`<div className="av-card">
  <h4 className="text-white font-medium mb-2">Card Title</h4>
  <p className="text-gray-400 text-sm">This is a sample card component...</p>
  <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md text-sm">
    Action
  </button>
</div>`}
                            </code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="p-5 border-b border-gray-700">
                      <h3 className="text-white font-semibold">av-button</h3>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors">
                          Primary
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-md text-sm hover:bg-gray-600 transition-colors">
                          Secondary
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-purple-600 text-purple-600 rounded-md text-sm hover:bg-purple-600 hover:text-white transition-colors">
                          Outline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Component Modifiers</h3>
                <p className="text-gray-400 mb-4">
                  Each component can be customized using modifier classes:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-400">
                    <li><span className="text-gray-300 font-medium">av-{'{component}'}-rounded</span> - Applies rounded corners</li>
                    <li><span className="text-gray-300 font-medium">av-{'{component}'}-shadow</span> - Adds shadow effects</li>
                    <li><span className="text-gray-300 font-medium">av-{'{component}'}-hover</span> - Defines hover states</li>
                    <li><span className="text-gray-300 font-medium">av-{'{component}'}-dark</span> - Applies dark theme variant</li>
                  </ul>
                </div>
              </section>
            )}

            {activeTab === 'api' && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">API Reference</h2>
                <p className="text-gray-400 mb-6">
                  Complete reference for the AV Plugin configuration options and utility classes.
                </p>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Configuration Options</h3>
                <div className="bg-gray-800 rounded-lg mb-6">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">Options</span>
                    <button 
                      onClick={() => toggleCode('api')}
                      className="text-gray-400 hover:text-white"
                    >
                      {showCode.api ? 'Hide' : 'Show'} code
                    </button>
                  </div>
                  {showCode.api && (
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>
                          {`// Full configuration options
module.exports = {
  plugins: [
    require('avplugin-tailwindcss')({
      // General settings
      prefix: 'av-',       // Default prefix for all utilities
      theme: 'dark',       // 'light' or 'dark'
      responsive: true,    // Enable responsive variants
      
      // Component settings
      components: {
        enabled: true,     // Enable component classes
        prefix: 'av-',     // Prefix for component classes
      },
      
      // Animation settings
      animation: {
        enabled: true,     // Enable animation utilities
        duration: {
          default: '300ms',
          fast: '150ms',
          slow: '500ms',
        },
        easing: {
          default: 'ease-in-out',
          // Add custom easing functions
        },
      },
      
      // Effect settings
      effects: {
        gradient: true,    // Enable gradient utilities
        shadow: true,      // Enable shadow utilities
        blur: true,        // Enable blur utilities
        // ... other effects
      },
    }),
  ],
}`}
                        </code>
                      </pre>
                    </div>
                  )}
                </div>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Utility Classes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-4 py-3 border-b border-gray-700 text-gray-300">Class</th>
                        <th className="px-4 py-3 border-b border-gray-700 text-gray-300">Description</th>
                        <th className="px-4 py-3 border-b border-gray-700 text-gray-300">Parameters</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-text-gradient</td>
                        <td className="px-4 py-3 text-gray-400">Creates a text gradient effect</td>
                        <td className="px-4 py-3 text-gray-400">from-{'{color}'}, to-{'{color}'}</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-shadow-{'{size}'}</td>
                        <td className="px-4 py-3 text-gray-400">Applies customized shadow effects</td>
                        <td className="px-4 py-3 text-gray-400">sm, md, lg, xl, 2xl</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-animation-{'{type}'}</td>
                        <td className="px-4 py-3 text-gray-400">Applies predefined animations</td>
                        <td className="px-4 py-3 text-gray-400">fade, slide, bounce, pulse</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-blur-{'{amount}'}</td>
                        <td className="px-4 py-3 text-gray-400">Applies blur effect with varying intensity</td>
                        <td className="px-4 py-3 text-gray-400">sm, md, lg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}