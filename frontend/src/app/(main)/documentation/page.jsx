'use client'

import React, { useState } from 'react'

export default function AVPluginDocs() {
  const [activeTab, setActiveTab] = useState('installation')
  const [activeSubTab, setActiveSubTab] = useState('forms')
  const [showCode, setShowCode] = useState({
    installation: false,
    usage: false,
    components: false,
    forms: false,
    animated: false,
    text: false,
    grid: false,
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
                  {activeTab === 'components' && (
                    <ul className="mt-2 ml-4 space-y-1">
                      <li>
                        <button
                          onClick={() => setActiveSubTab('forms')}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === 'forms' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Designed Forms
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab('animated')}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === 'animated' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Animated Components
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab('text')}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === 'text' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Text Styles
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab('grid')}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Grid Layouts
                        </button>
                      </li>
                    </ul>
                  )}
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

                {activeSubTab === 'forms' && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Designed Forms</h3>
                    <p className="text-gray-400 mb-4">
                      Beautiful, accessible form components with built-in validation states and animations.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-input</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                              <input 
                                type="text" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" 
                                placeholder="Enter username"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                              <input 
                                type="password" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" 
                                placeholder="Enter password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <button 
                            onClick={() => toggleCode('forms')}
                            className="text-gray-400 hover:text-white text-sm"
                          >
                            {showCode.forms ? 'Hide' : 'Show'} code
                          </button>
                          {showCode.forms && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div className="av-form-group">
  <label className="av-label">Username</label>
  <input 
    type="text" 
    className="av-input" 
    placeholder="Enter username"
  />
</div>

<div className="av-form-group">
  <label className="av-label">Password</label>
  <input 
    type="password" 
    className="av-input" 
    placeholder="Enter password"
  />
</div>

<!-- Form with validation -->
<div className="av-form-group">
  <label className="av-label">Email</label>
  <input 
    type="email" 
    className="av-input av-input-error" 
    placeholder="Enter email"
  />
  <span className="av-form-error">Please enter a valid email</span>
</div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-form</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-gray-300 text-sm font-medium mb-2">Subscribe to newsletter</label>
                              <div className="flex items-center">
                                <input 
                                  type="checkbox" 
                                  className="h-4 w-4 text-purple-600 rounded focus:ring-purple-600" 
                                />
                                <span className="ml-2 text-gray-400 text-sm">Yes, keep me updated</span>
                              </div>
                            </div>
                            <div>
                              <label className="block text-gray-300 text-sm font-medium mb-2">Account type</label>
                              <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                <option>Personal</option>
                                <option>Business</option>
                                <option>Enterprise</option>
                              </select>
                            </div>
                            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === 'animated' && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Animated Components</h3>
                    <p className="text-gray-400 mb-4">
                      Components with built-in animations for entrances, state changes, and interactions.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-animated-card</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
                            <h4 className="text-white font-medium mb-2">Animated Card</h4>
                            <p className="text-gray-400 text-sm">This card smoothly scales on hover.</p>
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <button 
                            onClick={() => toggleCode('animated')}
                            className="text-gray-400 hover:text-white text-sm"
                          >
                            {showCode.animated ? 'Hide' : 'Show'} code
                          </button>
                          {showCode.animated && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<!-- Simple animation -->
<div className="av-animated-card">
  <h4>Animated Card</h4>
  <p>This card smoothly scales on hover.</p>
</div>

<!-- With entrance animation -->
<div className="av-animated-card av-entrance-fade">
  <h4>Fade In Card</h4>
  <p>This card fades in when loaded.</p>
</div>

<!-- With custom animation -->
<div className="av-animated-card av-animation-pulse">
  <h4>Pulse Animation</h4>
  <p>This card pulses to attract attention.</p>
</div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-animated-button</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex flex-wrap gap-3">
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-md relative overflow-hidden group">
                              <span className="relative z-10">Hover Me</span>
                              <span className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </button>
                            <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors relative">
                              <span className="relative z-10">Click Me</span>
                              <span className="absolute inset-0 rounded-md opacity-0 active:opacity-30 bg-white transition-opacity"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === 'text' && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Text Styles</h3>
                    <p className="text-gray-400 mb-4">
                      Pre-designed text styles for headings, paragraphs, and special text treatments.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-heading</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="space-y-4">
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Gradient Heading</h1>
                            <h2 className="text-2xl font-semibold text-white shadow-sm">Shadow Heading</h2>
                            <h3 className="text-xl font-medium text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-purple-600 after:rounded-full pb-2">Underlined Heading</h3>
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <button 
                            onClick={() => toggleCode('text')}
                            className="text-gray-400 hover:text-white text-sm"
                          >
                            {showCode.text ? 'Hide' : 'Show'} code
                          </button>
                          {showCode.text && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<!-- Gradient heading -->
<h1 className="av-heading-gradient from-purple-400 to-pink-600">
  Gradient Heading
</h1>

<!-- Shadow heading -->
<h2 className="av-heading-shadow">
  Shadow Heading
</h2>

<!-- Underlined heading -->
<h3 className="av-heading-underline">
  Underlined Heading
</h3>

<!-- Animated heading -->
<h2 className="av-heading-animated">
  Animated Heading
</h2>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-text</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                              This is a standard paragraph with comfortable line height and spacing.
                            </p>
                            <p className="text-sm text-gray-400 font-light italic">
                              This is a smaller, lighter text with italics styling.
                            </p>
                            <p className="text-gray-300 font-medium tracking-wide">
                              This text has wider letter spacing for emphasis.
                            </p>
                            <p className="font-mono text-gray-300 text-sm bg-gray-800 p-2 rounded">
                              This is monospaced text for code or technical content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === 'grid' && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Grid Layouts</h3>
                    <p className="text-gray-400 mb-4">
                      Pre-built grid layouts for common UI patterns and responsive designs.
                    </p>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">av-grid-dashboard</h3>
                      </div>
                      <div className="p-5 bg-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Stats</h4>
                            <p className="text-gray-400 text-sm">Content for stats panel</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Users</h4>
                            <p className="text-gray-400 text-sm">Content for users panel</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Activity</h4>
                            <p className="text-gray-400 text-sm">Content for activity panel</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg md:col-span-2">
                            <h4 className="text-white font-medium mb-2">Analytics</h4>
                            <p className="text-gray-400 text-sm">Content for analytics panel (spans 2 columns)</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Settings</h4>
                            <p className="text-gray-400 text-sm">Content for settings panel</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                        <button 
                          onClick={() => toggleCode('grid')}
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          {showCode.grid ? 'Hide' : 'Show'} code
                        </button>
                        {showCode.grid && (
                          <div className="mt-3 overflow-x-auto">
                            <pre className="text-gray-300 text-sm">
                              <code>
                                {`<!-- Dashboard grid layout -->
<div className="av-grid-dashboard">
  <div className="av-grid-item">
    <h4>Stats</h4>
    <p>Content for stats panel</p>
  </div>
  <div className="av-grid-item">
    <h4>Users</h4>
    <p>Content for users panel</p>
  </div>
  <div className="av-grid-item">
    <h4>Activity</h4>
    <p>Content for activity panel</p>
  </div>
  <div className="av-grid-item av-grid-item-wide">
    <h4>Analytics</h4>
    <p>Content for analytics panel (spans 2 columns)</p>
  </div>
  <div className="av-grid-item">
    <h4>Settings</h4>
    <p>Content for settings panel</p>
  </div>
</div>

<!-- Other grid layouts -->
<div className="av-grid-gallery">
  <!-- Image gallery layout -->
</div>

<div className="av-grid-hero">
  <!-- Hero section with sidebar layout -->
</div>

<div className="av-grid-masonry">
  <!-- Pinterest-style masonry layout -->
</div>`}
                              </code>
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">av-grid-featured</h3>
                      </div>
                      <div className="p-5 bg-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="bg-gray-800 p-4 rounded-lg lg:col-span-2 lg:row-span-2">
                            <h4 className="text-white font-medium mb-2">Featured</h4>
                            <p className="text-gray-400 text-sm">Large featured content area spanning multiple grid cells</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Item 1</h4>
                            <p className="text-gray-400 text-sm">Standard item</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Item 2</h4>
                            <p className="text-gray-400 text-sm">Standard item</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Item 3</h4>
                            <p className="text-gray-400 text-sm">
                            Standard item</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Item 4</h4>
                            <p className="text-gray-400 text-sm">Standard item</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">av-grid-cards</h3>
                      </div>
                      <div className="p-5 bg-gray-900">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Card 1</h4>
                            <p className="text-gray-400 text-sm">Responsive card layout</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Card 2</h4>
                            <p className="text-gray-400 text-sm">Responsive card layout</p>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Card 3</h4>
                            <p className="text-gray-400 text-sm">Responsive card layout</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Component modifiers section - visible regardless of subtab */}
                <h3 className="text-gray-300 text-xl font-semibold mb-3 mt-8">Component Modifiers</h3>
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
        forms: {
          enabled: true,   // Enable form components
          variants: ['dark', 'rounded', 'bordered']
        },
        animations: {
          enabled: true,   // Enable animated components
          duration: {
            default: '300ms',
            fast: '150ms',
            slow: '500ms'
          }
        },
        text: {
          enabled: true,   // Enable text style components
          variants: ['gradient', 'shadow', 'underline', 'animated']
        },
        grids: {
          enabled: true,   // Enable grid layout components
          types: ['dashboard', 'featured', 'cards', 'gallery', 'masonry']
        }
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
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-form-{'{element}'}</td>
                        <td className="px-4 py-3 text-gray-400">Form element styling</td>
                        <td className="px-4 py-3 text-gray-400">input, select, checkbox, label, error</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-heading-{'{variant}'}</td>
                        <td className="px-4 py-3 text-gray-400">Heading text styles</td>
                        <td className="px-4 py-3 text-gray-400">gradient, shadow, underline, animated</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-grid-{'{type}'}</td>
                        <td className="px-4 py-3 text-gray-400">Pre-built grid layouts</td>
                        <td className="px-4 py-3 text-gray-400">dashboard, featured, cards, gallery, masonry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-gray-300 text-xl font-semibold mb-3 mt-8">Form Component API</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-4 py-3 border-b border-gray-700 text-gray-300">Class</th>
                        <th className="px-4 py-3 border-b border-gray-700 text-gray-300">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-form</td>
                        <td className="px-4 py-3 text-gray-400">Container for form elements with proper spacing</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-form-group</td>
                        <td className="px-4 py-3 text-gray-400">Wrapper for form label and input with proper spacing</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-input</td>
                        <td className="px-4 py-3 text-gray-400">Styled text input element</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-input-error</td>
                        <td className="px-4 py-3 text-gray-400">Error state for input elements</td>
                      </tr>
                      <tr className="bg-gray-900">
                        <td className="px-4 py-3 text-gray-300 font-medium">av-form-error</td>
                        <td className="px-4 py-3 text-gray-400">Error message styling</td>
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