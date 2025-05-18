"use client"

import { useState } from "react"

export default function AVPluginDocs() {
  const [activeTab, setActiveTab] = useState("components")
  const [activeSubTab, setActiveSubTab] = useState("buttons")
  const [showCode, setShowCode] = useState({
    installation: false,
    usage: false,
    components: false,
    forms: false,
    animated: false,
    text: false,
    grid: false,
    buttons: false,
    inputs: false,
    stats: false,
    checkboxRadio: false,
    progress: false,
    showcase: false,
    "buttons-special": false,
    textarea: false,
    radio: false,
    "animated-button": false,
    "text-styles": false,
    "grid-featured": false,
    "grid-cards": false,
  })
  const [copiedStates, setCopiedStates] = useState({
    gradientButton: false,
    statCard: false,
    formInput: false,
    animatedCard: false,
    buttons: false,
    "buttons-special": false,
    inputs: false,
    textarea: false,
    stats: false,
    checkboxRadio: false,
    radio: false,
    progress: false,
    animated: false,
    "animated-button": false,
    text: false,
    "text-styles": false,
    grid: false,
    "grid-featured": false,
    "grid-cards": false,
  })

  const toggleCode = (section) => {
    setShowCode({
      ...showCode,
      [section]: !showCode[section],
    })
  }

  const copyToClipboard = (text, component) => {
    navigator.clipboard.writeText(text).then(
      () => {
        // Create a new object with all properties set to false
        const newCopiedStates = Object.keys(copiedStates).reduce((acc, key) => {
          acc[key] = false
          return acc
        }, {})

        // Update copied state for this specific component
        setCopiedStates({
          ...newCopiedStates,
          [component]: true,
        })

        // Reset copied state after 2 seconds
        setTimeout(() => {
          setCopiedStates((prevState) => ({
            ...prevState,
            [component]: false,
          }))
        }, 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  // Code snippets for the showcase components
  const codeSnippets = {
    gradientButton: `<button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 transition-all font-medium">
  Gradient Button
</button>`,

    statCard: `<div className="bg-gray-800 rounded-lg p-5">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-gray-300 font-medium">Total Users</h3>
    <div className="bg-purple-500/20 p-2 rounded-md">
      <User className="h-5 w-5 text-purple-500" />
    </div>
  </div>
  <div className="text-3xl font-bold text-white mb-1">24,521</div>
  <div className="flex items-center text-sm">
    <span className="text-green-500 flex items-center">
      <svg
        className="h-3 w-3 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      12.5%
    </span>
    <span className="text-gray-400 ml-2">vs last month</span>
  </div>
</div>`,

    formInput: `<div>
  <label className="block text-gray-300 text-sm font-medium mb-2">Search</label>
  <div className="relative">
    <input
      type="text"
      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
      placeholder="Search..."
    />
    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
  </div>
</div>`,

    animatedCard: `<div className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
  <h4 className="text-white font-medium mb-2">Animated Card</h4>
  <p className="text-gray-400 text-sm">This card smoothly scales on hover.</p>
</div>`,
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
                    onClick={() => setActiveTab("installation")}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === "installation" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Installation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("usage")}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === "usage" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Basic Usage
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("components")}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeTab === "components" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Components
                  </button>
                  {activeTab === "components" && (
                    <ul className="mt-2 ml-4 space-y-1">
                      <li>
                        <button
                          onClick={() => setActiveSubTab("buttons")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "buttons" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Buttons
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("inputs")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "inputs" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Text Inputs
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("stats")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "stats" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Stat Cards
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("checkboxRadio")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "checkboxRadio"
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Checkbox
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("radio")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "radio" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Radio
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("progress")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "progress" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Progress Bars
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("text")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "text" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Text Styles
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveSubTab("grid")}
                          className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                            activeSubTab === "grid" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Custom Animated Components
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="md:col-span-9">
            {activeTab === "installation" && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">Installation</h2>
                <p className="text-gray-400 mb-6">
                  Getting started with the AV Plugin for Tailwind CSS is easy. Follow these steps to install and
                  configure the plugin in your project.
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
                    <button onClick={() => toggleCode("installation")} className="text-gray-400 hover:text-white">
                      {showCode.installation ? "Hide" : "Show"} code
                    </button>
                  </div>
                  {showCode.installation && (
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-gray-300">
                        <code>
                          # Install with npm{"\n"}
                          npm install avplugin-tailwindcss{"\n\n"}# Or with yarn{"\n"}
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

            {activeTab === "usage" && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">Basic Usage</h2>
                <p className="text-gray-400 mb-6">
                  The AV Plugin provides a collection of utility classes that make it easy to create modern, responsive
                  interfaces with Tailwind CSS.
                </p>

                <h3 className="text-gray-300 text-xl font-semibold mb-3">Core Concepts</h3>
                <p className="text-gray-400 mb-6">
                  The plugin extends Tailwind's functionality with specialized utilities for advanced visual effects,
                  animations, and interactive components.
                </p>

                <div className="bg-gray-800 rounded-lg mb-6">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">Example</span>
                    <button onClick={() => toggleCode("usage")} className="text-gray-400 hover:text-white">
                      {showCode.usage ? "Hide" : "Show"} code
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

            {activeTab === "components" && (
              <section>
                <h2 className="text-white text-2xl font-bold mb-4">Components</h2>
                <p className="text-gray-400 mb-6">
                  The AV Plugin includes a set of predefined component classes that you can use to quickly build common
                  UI elements.
                </p>

                {activeSubTab === "buttons" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Buttons</h3>
                    <p className="text-gray-400 mb-4">
                      Versatile button components with various styles, states, and animations.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Animated Button 1</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/buttons/Picture1.png"
                              alt="Animated buttons screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("buttons")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.buttons ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<button className='btn-layout-1 btn-color-green'>Press Me</button>`,
                                  "buttons",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.buttons ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.buttons && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div>
<button className='btn-layout-1 btn-color-green'>
Press Me
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
                          <h3 className="text-white font-semibold">Animated Button 2</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img src="/buttons/Picture2.png" className="rounded-md border border-gray-700" />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("buttons-special")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode["buttons-special"] ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div>
        <button className='btn-layout-2 btn-color-indigo'>Press Me</button>
    </div>`,
                                  "buttons-special",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates["buttons-special"] ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode["buttons-special"] && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div>
<button className='btn-layout-2 btn-color-indigo'>
Press Me
</button>
</div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "inputs" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Text Inputs</h3>
                    <p className="text-gray-400 mb-4">
                      Stylish and functional text input components for various use cases.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Input Box 1</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/inputbox/Picture1.png"
                              alt="Text inputs screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("inputs")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.inputs ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div>
      <label className='p-2 text-s'>First-Name</label>
    <input type="text" className='w-24 h-8 text-lg px-2 py-1 input-glow' />

    <label className='p-2 text-s'>Last-Name</label>
    <input type="text" className='w-24 h-8 text-lg px-2 py-1 input-glow' />
    </div>`,
                                  "inputs",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.inputs ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.inputs && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div>
      <label className='p-2 text-s'>First-Name</label>
    <input type="text" className='w-24 h-8 text-lg px-2 py-1 input-glow' />

    <label className='p-2 text-s'>Last-Name</label>
    <input type="text" className='w-24 h-8 text-lg px-2 py-1 input-glow' />
    </div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Input Box 2</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/inputbox/Picture2.png"
                              alt="Textarea inputs screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("textarea")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.textarea ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div>
    <label className='p-2 text-lg'>Password</label>
    <input type="password" className='w-25 h-8 text-lg px-2 py-1 input-error' />
    </div>`,
                                  "textarea",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.textarea ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.textarea && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div>
    <label className='p-2 text-lg'>Password</label>
    <input type="password" className='w-25 h-8 text-lg px-2 py-1 input-error' />
    </div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "stats" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Stat Cards</h3>
                    <p className="text-gray-400 mb-4">
                      Visually appealing cards for displaying statistics and metrics.
                    </p>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">StatCard 1</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/statcard/Picture1.png"
                              alt="Stat cards screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("stats")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.stats ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div className='p-20 bg-yellow-50'>
      <div className="p-5 w-[50%] statcard-primary">
  <div>
    <div className="statcard-title-primary">Revenue</div>
    <div className="statcard-value-primary">$9,300</div>
    <div className="statcard-change-negative-secondary">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
      </svg>
      -8%
    </div>
  </div>
  <div className="statcard-icon-secondary">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
    </svg>
  </div>
</div>
    </div>`,
                                  "stats",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.stats ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.stats && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div className='p-20 bg-yellow-50'>
      <div className="p-5 w-[50%] statcard-primary">
  <div>
    <div className="statcard-title-primary">Revenue</div>
    <div className="statcard-value-primary">$9,300</div>
    <div className="statcard-change-negative-secondary">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
      </svg>
      -8%
    </div>
  </div>
  <div className="statcard-icon-secondary">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
    </svg>
  </div>
</div>
    </div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">StatCard 1</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/statcard/Picture2.png"
                              alt="Stat cards screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("stats")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.stats ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div className='p-20 bg-purple-200'>
      <div className="p-5 w-[50%] statcard-danger">
  <div>
    <div className="statcard-title-secondary text-xl">Company Sales</div>
    <div className="statcard-value-warning text-3xl">$200,000</div>
    <div className="statcard-change-positive-danger">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
      </svg>
      +25%
    </div>
  </div>
  <div className="statcard-icon-warning">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
    </svg>
  </div>
</div>
    </div>`,
                                  "stats",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.stats ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.stats && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div className='p-20 bg-purple-200'>
      <div className="p-5 w-[50%] statcard-danger">
  <div>
    <div className="statcard-title-secondary text-xl">Company Sales</div>
    <div className="statcard-value-warning text-3xl">$200,000</div>
    <div className="statcard-change-positive-danger">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
      </svg>
      +25%
    </div>
  </div>
  <div className="statcard-icon-warning">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
    </svg>
  </div>
</div>
    </div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "checkboxRadio" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Checkbox</h3>
                    <p className="text-gray-400 mb-4">Stylish checkbox components with various designs.</p>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">av-checkbox</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/checkbox/Picture1.png"
                              alt="Checkbox components screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("checkboxRadio")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.checkboxRadio ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div className="m-20 space-y-4">
      <h2 className="text-2xl font-bold">Select the desired Box</h2>
    <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-primary" />
    <span>Primary Checkbox</span>
  </label>

  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-success" />
    <span>Success Checkbox</span>
  </label>

  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-warning" />
    <span>Warning Checkbox</span>
  </label>

  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-error" />
    <span>Error Checkbox</span>
  </label>
      </div>`,
                                  "checkboxRadio",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.checkboxRadio ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.checkboxRadio && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div className="m-20 space-y-4">
      <h2 className="text-2xl font-bold">Select the desired Box</h2>
    <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-primary" />
    <span>Primary Checkbox</span>
  </label>

  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-success" />
    <span>Success Checkbox</span>
  </label>

  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-warning" />
    <span>Warning Checkbox</span>
  </label>

  <label className="flex items-center gap-2">
    <input type="checkbox" className="checkbox-error" />
    <span>Error Checkbox</span>
  </label>
      </div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "radio" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Radio Buttons</h3>
                    <p className="text-gray-400 mb-4">Stylish radio button components with various designs.</p>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Custom Radio Buttons</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/radiobutton/Picture1.png"
                              alt="Radio button components screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("radio")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.radio ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<div className="m-20 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Choose an option:</h2>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="primary"
          className="radio-primary"
        />
        <span>Primary</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="success"
          className="radio-success"
        />
        <span>Success</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="warning"
          className="radio-warning"
        />
        <span>Warning</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="error"
          className="radio-error"
        />
        <span>Error</span>
      </label>
    </div>`,
                                  "radio",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.radio ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.radio && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<div className="m-20 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Choose an option:</h2>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="primary"
          className="radio-primary"
        />
        <span>Primary</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="success"
          className="radio-success"
        />
        <span>Success</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="warning"
          className="radio-warning"
        />
        <span>Warning</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value="error"
          className="radio-error"
        />
        <span>Error</span>
      </label>
    </div>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "progress" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Progress Bars</h3>
                    <p className="text-gray-400 mb-4">Customizable progress indicators for various use cases.</p>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Animated Progress Bar</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/progressbar/Picture1.png"
                              alt="Progress bars screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("progress")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.progress ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `const ProgressBar = () => {
  return (
    <div className="bg-red-100 p-10 space-y-10 max-w-2xl mx-auto">
      {/* 1. Gradient Progress Bar */}
      <div className="progress-gradient">
        <div className="progress-gradient-bar" style={{ width: "50%" }}></div>
        <div className="progress-gradient-label">50%</div>
      </div>

      {/* 2. Striped Progress Bar */}
      <div className="progress-striped">
        <div className="progress-striped-bar" style={{ width: "50%" }}></div>
        <div className="progress-striped-label">50%</div>
      </div>

      {/* 3. Neon Progress Bar */}
      <div className="progress-neon">
        <div className="progress-neon-bar" style={{ width: "50%" }}></div>
      </div>
      <div className="progress-neon-label">50% Complete</div>

      {/* 4. Stepped Progress Bar */}
      <div className="progress-stepped">
        <div className="progress-stepped-segment-completed flex-1"></div>
        <div className="progress-stepped-segment-completed flex-1"></div>
        <div className="progress-stepped-segment-current flex-1"></div>
        <div className="progress-stepped-segment-incomplete flex-1"></div>
        <div className="progress-stepped-segment-incomplete flex-1"></div>
      </div>

      {/* 5. Minimal Progress Bar */}
      <div>
        <div className="progress-minimal">
          <div className="progress-minimal-bar" style={{ width: "50%" }}></div>
          <div className="progress-minimal-loading" style={{ left: "50%" }}></div>
        </div>
        <div className="progress-minimal-label">50% loaded</div>
      </div>
    </div>
  )
}

export default ProgressBar`,
                                  "progress",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.progress ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode.progress && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`const ProgressBar = () => {
  return (
    <div className="bg-red-100 p-10 space-y-10 max-w-2xl mx-auto">
      {/* 1. Gradient Progress Bar */}
      <div className="progress-gradient">
        <div className="progress-gradient-bar" style={{ width: "50%" }}></div>
        <div className="progress-gradient-label">50%</div>
      </div>

      {/* 2. Striped Progress Bar */}
      <div className="progress-striped">
        <div className="progress-striped-bar" style={{ width: "50%" }}></div>
        <div className="progress-striped-label">50%</div>
      </div>

      {/* 3. Neon Progress Bar */}
      <div className="progress-neon">
        <div className="progress-neon-bar" style={{ width: "50%" }}></div>
      </div>
      <div className="progress-neon-label">50% Complete</div>

      {/* 4. Stepped Progress Bar */}
      <div className="progress-stepped">
        <div className="progress-stepped-segment-completed flex-1"></div>
        <div className="progress-stepped-segment-completed flex-1"></div>
        <div className="progress-stepped-segment-current flex-1"></div>
        <div className="progress-stepped-segment-incomplete flex-1"></div>
        <div className="progress-stepped-segment-incomplete flex-1"></div>
      </div>

      {/* 5. Minimal Progress Bar */}
      <div>
        <div className="progress-minimal">
          <div className="progress-minimal-bar" style={{ width: "50%" }}></div>
          <div className="progress-minimal-loading" style={{ left: "50%" }}></div>
        </div>
        <div className="progress-minimal-label">50% loaded</div>
      </div>
    </div>
  )
}

export default ProgressBar`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "text" && (
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
                          <div className="flex justify-center mb-4">
                            <img
                              src="/placeholder.svg?height=200&width=400"
                              alt="Heading styles screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("text")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode.text ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<!-- Gradient heading -->
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
</h2>`,
                                  "text",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates.text ? "Copied!" : "Copy"}
                            </button>
                          </div>
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
                          <div className="flex justify-center mb-4">
                            <img
                              src="/placeholder.svg?height=200&width=400"
                              alt="Text styles screenshot"
                              className="rounded-md border border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <button
                              onClick={() => toggleCode("text-styles")}
                              className="text-gray-400 hover:text-white text-sm"
                            >
                              {showCode["text-styles"] ? "Hide" : "Show"} code
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  `<!-- Standard paragraph -->
<p className="av-text">
  This is a standard paragraph with comfortable line height and spacing.
</p>

<!-- Small text -->
<p className="av-text-small av-text-light av-text-italic">
  This is a smaller, lighter text with italics styling.
</p>

<!-- Wide tracking text -->
<p className="av-text av-text-medium av-text-wide">
  This text has wider letter spacing for emphasis.
</p>

<!-- Monospace text -->
<p className="av-text-mono av-text-code">
  This is monospaced text for code or technical content.
</p>`,
                                  "text-styles",
                                )
                              }
                              className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                            >
                              {copiedStates["text-styles"] ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          {showCode["text-styles"] && (
                            <div className="mt-3 overflow-x-auto">
                              <pre className="text-gray-300 text-sm">
                                <code>
                                  {`<!-- Standard paragraph -->
<p className="av-text">
  This is a standard paragraph with comfortable line height and spacing.
</p>

<!-- Small text -->
<p className="av-text-small av-text-light av-text-italic">
  This is a smaller, lighter text with italics styling.
</p>

<!-- Wide tracking text -->
<p className="av-text av-text-medium av-text-wide">
  This text has wider letter spacing for emphasis.
</p>

<!-- Monospace text -->
<p className="av-text-mono av-text-code">
  This is monospaced text for code or technical content.
</p>`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "grid" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Grid Layouts</h3>
                    <p className="text-gray-400 mb-4">
                      Pre-built grid layouts for common UI patterns and responsive designs.
                    </p>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Custom Animated Components</h3>
                      </div>
                      <div className="p-5 bg-gray-900">
                        <div className="flex justify-center mb-4">
                          <img
                            src="/customlayout/Picture1.png"
                            alt="Dashboard grid layout screenshot"
                            className="rounded-md border border-gray-700"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-900 px-5 py-3 border-t border-gray-700">
                        <div className="flex justify-between items-center">
                          <button onClick={() => toggleCode("grid")} className="text-gray-400 hover:text-white text-sm">
                            {showCode.grid ? "Hide" : "Show"} code
                          </button>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                `"use client"
// Main component with all card variants
export default function AnimatedShapeCards() {
  return (
    <div className="p-8 bg-gray-400 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Animated Shape Cards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Primary Card */}
        <div className="shape-card-primary">
          <div
            className="shape-circle bg-blue-200"
            style={{ top: "20%", left: "15%", width: "40px", height: "40px" }}
          ></div>
          <div
            className="shape-rectangle bg-blue-200"
            style={{ bottom: "15%", right: "10%", width: "50px", height: "30px" }}
          ></div>
          <div className="shape-dots" style={{ bottom: "10%", right: "30%" }}>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
          </div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Primary Card</h3>
            <p className="text-sm">This blue card has animated shapes that move when you hover over it.</p>
          </div>
        </div>

        {/* Success Card */}
        <div className="shape-card-success">
          <div
            className="shape-triangle bg-green-200"
            style={{ top: "15%", left: "20%", width: "40px", height: "40px" }}
          ></div>
          <div
            className="shape-polygon bg-green-200"
            style={{ bottom: "20%", right: "15%", width: "50px", height: "50px" }}
          ></div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Success Card</h3>
            <p className="text-sm">This green card indicates success with playful animated shapes.</p>
          </div>
        </div>

        {/* Warning Card */}
        <div className="shape-card-warning">
          <div
            className="shape-circle bg-amber-200"
            style={{ top: "25%", right: "20%", width: "35px", height: "35px" }}
          ></div>
          <div
            className="shape-rectangle bg-amber-200"
            style={{ bottom: "25%", left: "15%", width: "45px", height: "25px" }}
          ></div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Warning Card</h3>
            <p className="text-sm">This amber card provides warnings with animated shape elements.</p>
          </div>
        </div>

        {/* Danger Card */}
        <div className="shape-card-danger">
          <div
            className="shape-polygon bg-red-200"
            style={{ top: "15%", left: "15%", width: "45px", height: "45px" }}
          ></div>
          <div
            className="shape-circle bg-red-200"
            style={{ bottom: "20%", right: "20%", width: "30px", height: "30px" }}
          ></div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Danger Card</h3>
            <p className="text-sm">This red card indicates danger with animated geometric shapes.</p>
          </div>
        </div>

        {/* Purple Card */}
        <div className="shape-card-purple">
          <div
            className="shape-rectangle bg-purple-200"
            style={{ top: "20%", left: "20%", width: "40px", height: "30px" }}
          ></div>
          <div
            className="shape-triangle bg-purple-200"
            style={{ bottom: "15%", right: "15%", width: "35px", height: "35px" }}
          ></div>
          <div className="shape-dots" style={{ top: "15%", right: "25%" }}>
            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
          </div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Purple Card</h3>
            <p className="text-sm">This purple card has multiple animated shapes for visual interest.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
`,
                                "grid",
                              )
                            }
                            className="text-gray-400 hover:text-white text-sm bg-gray-800 px-3 py-1 rounded-md"
                          >
                            {copiedStates.grid ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        {showCode.grid && (
                          <div className="mt-3 overflow-x-auto">
                            <pre className="text-gray-300 text-sm">
                              <code>
                                {`"use client"
// Main component with all card variants
export default function AnimatedShapeCards() {
  return (
    <div className="p-8 bg-gray-400 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Animated Shape Cards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Primary Card */}
        <div className="shape-card-primary">
          <div
            className="shape-circle bg-blue-200"
            style={{ top: "20%", left: "15%", width: "40px", height: "40px" }}
          ></div>
          <div
            className="shape-rectangle bg-blue-200"
            style={{ bottom: "15%", right: "10%", width: "50px", height: "30px" }}
          ></div>
          <div className="shape-dots" style={{ bottom: "10%", right: "30%" }}>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
          </div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Primary Card</h3>
            <p className="text-sm">This blue card has animated shapes that move when you hover over it.</p>
          </div>
        </div>

        {/* Success Card */}
        <div className="shape-card-success">
          <div
            className="shape-triangle bg-green-200"
            style={{ top: "15%", left: "20%", width: "40px", height: "40px" }}
          ></div>
          <div
            className="shape-polygon bg-green-200"
            style={{ bottom: "20%", right: "15%", width: "50px", height: "50px" }}
          ></div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Success Card</h3>
            <p className="text-sm">This green card indicates success with playful animated shapes.</p>
          </div>
        </div>

        {/* Warning Card */}
        <div className="shape-card-warning">
          <div
            className="shape-circle bg-amber-200"
            style={{ top: "25%", right: "20%", width: "35px", height: "35px" }}
          ></div>
          <div
            className="shape-rectangle bg-amber-200"
            style={{ bottom: "25%", left: "15%", width: "45px", height: "25px" }}
          ></div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Warning Card</h3>
            <p className="text-sm">This amber card provides warnings with animated shape elements.</p>
          </div>
        </div>

        {/* Danger Card */}
        <div className="shape-card-danger">
          <div
            className="shape-polygon bg-red-200"
            style={{ top: "15%", left: "15%", width: "45px", height: "45px" }}
          ></div>
          <div
            className="shape-circle bg-red-200"
            style={{ bottom: "20%", right: "20%", width: "30px", height: "30px" }}
          ></div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Danger Card</h3>
            <p className="text-sm">This red card indicates danger with animated geometric shapes.</p>
          </div>
        </div>

        {/* Purple Card */}
        <div className="shape-card-purple">
          <div
            className="shape-rectangle bg-purple-200"
            style={{ top: "20%", left: "20%", width: "40px", height: "30px" }}
          ></div>
          <div
            className="shape-triangle bg-purple-200"
            style={{ bottom: "15%", right: "15%", width: "35px", height: "35px" }}
          ></div>
          <div className="shape-dots" style={{ top: "15%", right: "25%" }}>
            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
          </div>
          <div className="shape-card-content">
            <h3 className="text-lg font-semibold mb-2">Purple Card</h3>
            <p className="text-sm">This purple card has multiple animated shapes for visual interest.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
`}
                              </code>
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                    
                  </>
                )}
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
