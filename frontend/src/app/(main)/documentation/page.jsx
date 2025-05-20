"use client"

import { useState } from "react"

export default function AVPluginDocs() {
  const [activeTab, setActiveTab] = useState("components")
  const [activeSubTab, setActiveSubTab] = useState("overview")
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-neutral-950 overflow-hidden text-gray-200">
      {/* Main content - Fixed top margin (mt-16) to prevent nav bar overlap */}
      <main className="max-w-6xl mx-auto py-8 px-4 md:px-8 mt-16">
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
                          npm install av-plugin{"\n\n"}# Or with yarn{"\n"}
                          yarn add av-plugin
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
                        {`const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('av-plugin'),
  ]
}
`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "usage" && (
              <section>
                <p className="text-gray-400 mb-6">
                  The AV Plugin provides a collection of utility classes that make it easy to create modern, responsive
                  interfaces with Tailwind CSS.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Sidebar */}
                  <aside className="md:col-span-3">
                    <nav className="sticky top-24 bg-gray-900 rounded-lg p-4">
                      <h2 className="text-white text-lg font-medium mb-4">Know More About it</h2>
                      <ul className="space-y-2">
                        <li>
                          <button
                            onClick={() => setActiveSubTab("overview")}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                              activeSubTab === "overview" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                            }`}
                          >
                            Overview
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => setActiveSubTab("comparison")}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                              activeSubTab === "comparison"
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:text-white"
                            }`}
                          >
                            Comparison
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </aside>

                  {/* Content */}
                  <div className="md:col-span-9">
                    {activeSubTab === "overview" && (
                      <section>
                        <h2 className="text-white text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-400 mb-6">
                          The AV Plugin extends Tailwind CSS with a comprehensive set of utility classes and components
                          designed for modern, interactive interfaces. It focuses on providing ready-to-use animations,
                          interactive components, and advanced styling options that work seamlessly with React.
                        </p>

                        <h3 className="text-gray-300 text-xl font-semibold mb-3">Core Concepts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Composable Components</h4>
                            <p className="text-gray-400 text-sm">
                              Each component is built with a modular approach, separating layout from color styling.
                              This allows you to mix and match different layouts with different color schemes.
                            </p>
                          </div>
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Animation-First Design</h4>
                            <p className="text-gray-400 text-sm">
                              Interactive animations are built into components by default, with carefully crafted hover,
                              focus, and active states that enhance user experience.
                            </p>
                          </div>
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Semantic Naming</h4>
                            <p className="text-gray-400 text-sm">
                              Components follow a consistent naming pattern (e.g., btn-layout-1, btn-color-blue) making
                              it intuitive to understand and use the plugin's features.
                            </p>
                          </div>
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">React Integration</h4>
                            <p className="text-gray-400 text-sm">
                              All components are designed with React in mind, working seamlessly with state-based UI
                              changes and component composition patterns.
                            </p>
                          </div>
                        </div>

                        <h3 className="text-gray-300 text-xl font-semibold mb-3">Key Features</h3>
                        <ul className="space-y-2 text-gray-400 mb-6">
                          <li className="flex items-start">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>Interactive buttons with multiple layout and color variants</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>Animated shape cards with hover effects and geometric elements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>Advanced typography system with gradient, outline, and split headings</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>Customizable form elements with focus states and animations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>
                              Progress bars with various styles including gradient, striped, and stepped variants
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-400 mr-2">✓</span>
                            <span>Stat cards with flexible layouts and color schemes</span>
                          </li>
                        </ul>
                      </section>
                    )}

                    {activeSubTab === "comparison" && (
                      <section>
                        <h2 className="text-white text-2xl font-bold mb-4">Comparison with Other Plugins</h2>
                        <p className="text-gray-400 mb-6">
                          The AV Plugin offers several advantages over other popular Tailwind CSS plugins. Here's how it
                          compares:
                        </p>

                        <div className="overflow-x-auto mb-8">
                          <table className="w-full text-sm text-left">
                            <thead className="text-gray-300 border-b border-gray-700">
                              <tr>
                                <th className="px-4 py-3">Feature</th>
                                <th className="px-4 py-3">AV Plugin</th>
                                <th className="px-4 py-3">DaisyUI</th>
                                <th className="px-4 py-3">Animation Plugins</th>
                                <th className="px-4 py-3">Layout Plugins</th>
                                <th className="px-4 py-3">Typography Plugins</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                              <tr className="bg-gray-800">
                                <td className="px-4 py-3 font-medium">Animation Integration</td>
                                <td className="px-4 py-3 text-emerald-400">Built-in with components</td>
                                <td className="px-4 py-3 text-gray-400">Limited</td>
                                <td className="px-4 py-3 text-gray-400">Standalone only</td>
                                <td className="px-4 py-3 text-gray-400">Minimal</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 font-medium">Interactive States</td>
                                <td className="px-4 py-3 text-emerald-400">Comprehensive hover/focus/active</td>
                                <td className="px-4 py-3 text-gray-400">Basic states</td>
                                <td className="px-4 py-3 text-gray-400">Animation-only</td>
                                <td className="px-4 py-3 text-gray-400">Layout-focused</td>
                                <td className="px-4 py-3 text-gray-400">Static only</td>
                              </tr>
                              <tr className="bg-gray-800">
                                <td className="px-4 py-3 font-medium">Component Structure</td>
                                <td className="px-4 py-3 text-emerald-400">Layout/color separation</td>
                                <td className="px-4 py-3 text-gray-400">Monolithic components</td>
                                <td className="px-4 py-3 text-gray-400">Animation utilities only</td>
                                <td className="px-4 py-3 text-gray-400">Grid systems only</td>
                                <td className="px-4 py-3 text-gray-400">Text styling only</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 font-medium">React Integration</td>
                                <td className="px-4 py-3 text-emerald-400">Optimized for React</td>
                                <td className="px-4 py-3 text-gray-400">Framework agnostic</td>
                                <td className="px-4 py-3 text-gray-400">Framework agnostic</td>
                                <td className="px-4 py-3 text-gray-400">Framework agnostic</td>
                                <td className="px-4 py-3 text-gray-400">Framework agnostic</td>
                              </tr>
                              <tr className="bg-gray-800">
                                <td className="px-4 py-3 font-medium">Advanced Typography</td>
                                <td className="px-4 py-3 text-emerald-400">Gradient, outline, split headings</td>
                                <td className="px-4 py-3 text-gray-400">Basic typography</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                                <td className="px-4 py-3 text-gray-400">Standard typography</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 font-medium">Custom Animations</td>
                                <td className="px-4 py-3 text-emerald-400">12+ custom keyframes</td>
                                <td className="px-4 py-3 text-gray-400">Limited animations</td>
                                <td className="px-4 py-3 text-gray-400">Generic animations</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                              </tr>
                              <tr className="bg-gray-800">
                                <td className="px-4 py-3 font-medium">Geometric Shapes</td>
                                <td className="px-4 py-3 text-emerald-400">Built-in shape components</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                                <td className="px-4 py-3 text-gray-400">None</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h3 className="text-gray-300 text-xl font-semibold mb-3">Key Advantages</h3>
                        <div className="space-y-4 mb-6">
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">1. Integrated Animation System</h4>
                            <p className="text-gray-400 text-sm">
                              Unlike standalone animation plugins, AV Plugin integrates animations directly into
                              components, with hover-triggered animations, interactive states, and geometric shape
                              animations that work together seamlessly.
                            </p>
                          </div>
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">2. Separation of Layout and Color</h4>
                            <p className="text-gray-400 text-sm">
                              The plugin's unique approach separates layout (btn-layout-1) from color styling
                              (btn-color-blue), allowing for more flexible component composition than monolithic
                              component libraries like DaisyUI.
                            </p>
                          </div>
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">3. Advanced Typography System</h4>
                            <p className="text-gray-400 text-sm">
                              Goes beyond standard typography plugins with gradient text, outline text, split-colored
                              headings, and specialized text treatments like stylish quotes and elegant lists.
                            </p>
                          </div>
                          <div className="bg-gray-800 p-5 rounded-lg">
                            <h4 className="text-white font-medium mb-2">4. React-Optimized Components</h4>
                            <p className="text-gray-400 text-sm">
                              All components are designed with React's component model in mind, making them easier to
                              integrate with state management and interactive UI patterns common in React applications.
                            </p>
                          </div>
                        </div>
                      </section>
                    )}
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
                              src="/buttons/picture1.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Button Layout 1 Features</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>Smooth scale and rotate effect on hover</li>
                            <li>Subtle scale-down effect on click</li>
                            <li>Custom focus state with ring outline</li>
                            <li>Hover overlay effect with opacity transition</li>
                            <li>Compatible with all button color variants</li>
                          </ul>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Implementation Details</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Padding</td>
                                  <td className="py-2 text-gray-300">theme("spacing.5")</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Border Radius</td>
                                  <td className="py-2 text-gray-300">theme("borderRadius.md")</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Hover Transform</td>
                                  <td className="py-2 text-gray-300">scale(1.05) rotate(1deg)</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">Active Transform</td>
                                  <td className="py-2 text-gray-300">scale(0.95)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Animated Button 2</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/buttons/picture2.png"
                              alt="Animated button 2"
                              className="rounded-md border border-gray-700"
                            />
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Button Layout 2 Features</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>Elegant floating effect on hover</li>
                            <li>Circular design with border animation</li>
                            <li>Scale-down effect on click</li>
                            <li>Custom focus state with ring outline</li>
                            <li>Animated border expansion on hover</li>
                          </ul>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Implementation Details</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Border Style</td>
                                  <td className="py-2 text-gray-300">2px solid</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Border Radius</td>
                                  <td className="py-2 text-gray-300">theme("borderRadius.full")</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Hover Transform</td>
                                  <td className="py-2 text-gray-300">translateY(-0.25rem)</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">Border Animation</td>
                                  <td className="py-2 text-gray-300">scale(1.05) with opacity transition</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Available Button Color Variants</h3>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-color-blue</h4>
                            <p className="text-gray-400 text-sm">Blue background with white text, darkens on hover</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-color-purple</h4>
                            <p className="text-gray-400 text-sm">
                              Purple outline that fills on hover with color change
                            </p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-color-green</h4>
                            <p className="text-gray-400 text-sm">Green to emerald gradient with white text</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-color-red</h4>
                            <p className="text-gray-400 text-sm">Red background with white text, darkens on hover</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-color-emerald</h4>
                            <p className="text-gray-400 text-sm">
                              Black with emerald text that inverts on hover with glow
                            </p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-color-indigo</h4>
                            <p className="text-gray-400 text-sm">
                              Indigo background with white text and hover lightening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Additional Button Layouts</h3>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-layout-3</h4>
                            <p className="text-gray-400 text-sm mb-2">Button with shine animation effect on hover</p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Animated shine effect that moves across the button</li>
                              <li>Push-down effect on click</li>
                              <li>Enhanced shadow on hover</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-layout-4</h4>
                            <p className="text-gray-400 text-sm mb-2">Uppercase button with pulse animation</p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Continuous pulse animation that stops on hover</li>
                              <li>Floating effect on hover</li>
                              <li>Animated dot indicator in corner</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-layout-5</h4>
                            <p className="text-gray-400 text-sm mb-2">Button with border animation on hover</p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Animated border that appears on hover</li>
                              <li>Wider letter spacing for emphasis</li>
                              <li>Shadow appears on hover</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">btn-layout-6</h4>
                            <p className="text-gray-400 text-sm mb-2">Button with ripple effect on click</p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Circular ripple animation on click</li>
                              <li>Smooth color transition</li>
                              <li>Consistent shadow effect</li>
                            </ul>
                          </div>
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
                              src="/inputbox/picture1.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Input Glow Features</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>Elegant glow effect on focus</li>
                            <li>Subtle shadow that enhances on hover</li>
                            <li>Background color transition from gray to white</li>
                            <li>Teal accent color for focus state</li>
                            <li>Placeholder text color changes on focus</li>
                          </ul>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Implementation Details</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Default Background</td>
                                  <td className="py-2 text-gray-300">theme("colors.gray.50")</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Focus Ring</td>
                                  <td className="py-2 text-gray-300">4px teal-300</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Border Radius</td>
                                  <td className="py-2 text-gray-300">theme("borderRadius.lg")</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">Hover Effect</td>
                                  <td className="py-2 text-gray-300">White background with larger shadow</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">Input Box 2</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/inputbox/picture2.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Input Error Features</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>Red-themed error state with visual indicators</li>
                            <li>Pulsing animation to draw attention</li>
                            <li>Animation stops on hover for better usability</li>
                            <li>Red placeholder text for consistent error indication</li>
                            <li>Enhanced focus state with red ring</li>
                          </ul>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Implementation Details</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Border Style</td>
                                  <td className="py-2 text-gray-300">2px solid red-300</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Background</td>
                                  <td className="py-2 text-gray-300">theme("colors.red.50")</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Animation</td>
                                  <td className="py-2 text-gray-300">pulse 2s infinite</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">Focus Ring</td>
                                  <td className="py-2 text-gray-300">2px red-500</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Additional Input Variants</h3>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">input-standard</h4>
                            <p className="text-gray-400 text-sm mb-2">
                              Clean, standard input with subtle hover effects
                            </p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Blue accent color on focus</li>
                              <li>Border color transition on hover</li>
                              <li>Rounded corners with medium radius</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">input-underline</h4>
                            <p className="text-gray-400 text-sm mb-2">Minimalist input with only bottom border</p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Transparent background with subtle hover effect</li>
                              <li>Purple accent color on focus</li>
                              <li>Placeholder text color changes on focus</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">input-search</h4>
                            <p className="text-gray-400 text-sm mb-2">
                              Search-optimized input with left padding for icon
                            </p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Rounded pill design</li>
                              <li>Yellow accent color on focus</li>
                              <li>Shadow effect that enhances on hover</li>
                              <li>Inner shadow on focus for depth</li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">input-expand</h4>
                            <p className="text-gray-400 text-sm mb-2">Input that expands on focus with scale effect</p>
                            <ul className="list-disc list-inside text-gray-400 text-xs">
                              <li>Responsive width that adapts to screen size</li>
                              <li>Subtle scale effect on hover</li>
                              <li>Larger scale and shadow on focus</li>
                              <li>Background color transition from gray to white</li>
                            </ul>
                          </div>
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
                              src="/statcard/picture1.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Primary Stat Card Features</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>Blue-themed design with left border accent</li>
                            <li>Flexible layout with icon container</li>
                            <li>Specialized components for title, value, and change indicators</li>
                            <li>Shadow effect for depth</li>
                            <li>Rounded corners for modern appearance</li>
                          </ul>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Component Structure</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Card Base</td>
                                  <td className="py-2 text-gray-300">statcard-primary</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Title</td>
                                  <td className="py-2 text-gray-300">statcard-title-primary</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Value</td>
                                  <td className="py-2 text-gray-300">statcard-value-primary</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Negative Change</td>
                                  <td className="py-2 text-gray-300">statcard-change-negative-secondary</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">Icon Container</td>
                                  <td className="py-2 text-gray-300">statcard-icon-secondary</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="p-5 border-b border-gray-700">
                          <h3 className="text-white font-semibold">StatCard 2</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/statcard/picture2.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Danger Stat Card with Mixed Components</h4>
                          <p className="text-gray-400 text-sm mb-3">
                            This example demonstrates how you can mix and match different component variants to create
                            custom stat cards.
                          </p>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Mixed Component Structure</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Card Base</td>
                                  <td className="py-2 text-gray-300">statcard-danger (gradient background)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Title</td>
                                  <td className="py-2 text-gray-300">statcard-title-secondary (white text)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Value</td>
                                  <td className="py-2 text-gray-300">statcard-value-warning (amber accent)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">Positive Change</td>
                                  <td className="py-2 text-gray-300">statcard-change-positive-danger (light green)</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">Icon Container</td>
                                  <td className="py-2 text-gray-300">statcard-icon-warning (amber background)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Available Stat Card Variants</h3>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Card Base Variants</h4>
                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                              <li>
                                <span className="text-gray-300">statcard-primary</span>: Blue accent with left border
                              </li>
                              <li>
                                <span className="text-gray-300">statcard-secondary</span>: Purple to indigo gradient
                              </li>
                              <li>
                                <span className="text-gray-300">statcard-secondary</span>: Purple to indigo gradient
                              </li>
                              <li>
                                <span className="text-gray-300">statcard-success</span>: White with hover shadow effect
                              </li>
                              <li>
                                <span className="text-gray-300">statcard-warning</span>: Amber themed with rounded
                                corners
                              </li>
                              <li>
                                <span className="text-gray-300">statcard-danger</span>: Red to pink gradient
                              </li>
                            </ul>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <h4 className="text-white font-medium mb-2">Component Variants</h4>
                            <p className="text-gray-400 text-sm mb-2">
                              Each card base has matching component variants:
                            </p>
                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                              <li>
                                Title components (e.g., <span className="text-gray-300">statcard-title-primary</span>)
                              </li>
                              <li>
                                Value components (e.g., <span className="text-gray-300">statcard-value-primary</span>)
                              </li>
                              <li>Change indicators (positive and negative)</li>
                              <li>Icon containers with matching styles</li>
                            </ul>
                          </div>
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
                              src="/checkbox/picture1.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Checkbox Component Features</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>Four distinct variants with different colors and behaviors</li>
                            <li>Interactive hover effects with smooth transitions</li>
                            <li>Custom focus states with matching ring colors</li>
                            <li>Consistent sizing with responsive scaling</li>
                          </ul>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Checkbox Variants</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">checkbox-primary</td>
                                  <td className="py-2 text-gray-300">Blue accent with scale effect on hover</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">checkbox-success</td>
                                  <td className="py-2 text-gray-300">Green accent with rotate effect on hover</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">checkbox-warning</td>
                                  <td className="py-2 text-gray-300">Yellow accent with brightness filter on hover</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">checkbox-error</td>
                                  <td className="py-2 text-gray-300">Red accent with larger scale effect on hover</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
                              src="/radiobutton/picture1.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Radio Button Features</h4>
                          <p className="text-gray-400 text-sm mb-3">
                            These custom radio buttons use the appearance: none property to completely customize their
                            look and feel.
                          </p>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Radio Button Variants</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">radio-primary</td>
                                  <td className="py-2 text-gray-300">
                                    Blue border with blue fill when checked, scale effect on hover
                                  </td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">radio-success</td>
                                  <td className="py-2 text-gray-300">
                                    Green border with green fill when checked, pulsing animation
                                  </td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">radio-warning</td>
                                  <td className="py-2 text-gray-300">
                                    Yellow border with yellow fill when checked, rotate effect on hover
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">radio-error</td>
                                  <td className="py-2 text-gray-300">
                                    Red border with red fill when checked, scale effect on hover
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-4 bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2 text-sm">Implementation Details</h5>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                              <li>Uses appearance: none to remove default browser styling</li>
                              <li>Custom border and background colors for each variant</li>
                              <li>Conditional styling for :checked state</li>
                              <li>Unique hover effects for each variant</li>
                              <li>Smooth transitions for all interactive states</li>
                            </ul>
                          </div>
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
                              src="/progressbar/picture1.png"
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
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Progress Bar Variants</h4>

                          <div className="space-y-6">
                            <div className="bg-gray-900 rounded-md p-4">
                              <h5 className="text-white font-medium mb-2">1. Gradient Progress Bar</h5>
                              <p className="text-gray-400 text-sm mb-3">
                                Smooth gradient progress bar with rounded corners and inner shadow.
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Blue to purple gradient fill</li>
                                <li>Scale effect on hover</li>
                                <li>Brightness filter on hover</li>
                                <li>Absolute positioned label</li>
                              </ul>
                            </div>

                            <div className="bg-gray-900 rounded-md p-4">
                              <h5 className="text-white font-medium mb-2">2. Striped Progress Bar</h5>
                              <p className="text-gray-400 text-sm mb-3">
                                Progress bar with animated diagonal stripes for active appearance.
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Green background with diagonal stripes</li>
                                <li>Continuous animation of stripes</li>
                                <li>Darkens on hover</li>
                                <li>Centered label with full width</li>
                              </ul>
                            </div>

                            <div className="bg-gray-900 rounded-md p-4">
                              <h5 className="text-white font-medium mb-2">3. Neon Progress Bar</h5>
                              <p className="text-gray-400 text-sm mb-3">
                                Glowing progress bar with pulsing animation effect.
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Cyan glow effect with box-shadow</li>
                                <li>Pulsing animation for emphasis</li>
                                <li>Brighter glow on hover</li>
                                <li>Matching colored label below</li>
                              </ul>
                            </div>

                            <div className="bg-gray-900 rounded-md p-4">
                              <h5 className="text-white font-medium mb-2">4. Stepped Progress Bar</h5>
                              <p className="text-gray-400 text-sm mb-3">
                                Segmented progress bar showing distinct steps in a process.
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Flex layout with equal segments</li>
                                <li>Different states: completed, current, incomplete</li>
                                <li>Current step has pulsing animation</li>
                                <li>Hover effects for each segment</li>
                              </ul>
                            </div>

                            <div className="bg-gray-900 rounded-md p-4">
                              <h5 className="text-white font-medium mb-2">5. Minimal Progress Bar</h5>
                              <p className="text-gray-400 text-sm mb-3">
                                Slim, elegant progress bar with loading animation.
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Very thin height for minimal appearance</li>
                                <li>Indigo fill with smooth transition</li>
                                <li>Animated loading dots effect</li>
                                <li>Subtle label below</li>
                              </ul>
                            </div>
                          </div>
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
                          <h3 className="text-white font-semibold">Classy Font Styles</h3>
                        </div>
                        <div className="p-5 bg-gray-900">
                          <div className="flex justify-center mb-4">
                            <img
                              src="/textstyles/picture1.png"
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
                                  `import React from "react";

const TypographyShowcase = () => {
  return (
    <div className="neo-typography p-10 bg-gray-100 min-h-screen space-y-10">
      
      {/* Display Heading */}
      <h1 className="display-heading text-5xl">
        Welcome to <span className="accent-text">Neo Design</span>
      </h1>
      
      {/* Gradient Heading */}
      <h2 className="gradient-heading text-4xl">
        Stylish Gradient Heading
      </h2>
      
      {/* Split Heading */}
      <h3 className="split-heading text-3xl">
        <span>Modern</span> <span>Look</span>
      </h3>
      
      {/* Outline Heading */}
      <h4 className="outline-heading text-6xl">
        Outlined
      </h4>
      
      {/* Lead Paragraph */}
      <p className="lead-text">
        This is a lead paragraph used to emphasize introductory content and set the tone for the rest of the page.
      </p>
      
      {/* Stylish Quote */}
      <blockquote className="stylish-quote">
        "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
      </blockquote>
      
      {/* Caption Text */}
      <p className="caption-text">
        *This is a caption below an image or diagram.*
      </p>
      
      {/* Code Text */}
      <p>
        To install dependencies, run: <code className="code-text">npm install</code>
      </p>
      
      {/* Highlighted Text */}
      <p>
        Remember to <span className="highlight-text">save your work</span> frequently.
      </p>
      
      {/* Accent Text */}
      <p>
        This sentence includes an <span className="accent-text">accentuated</span> word.
      </p>
      
      {/* Elegant List */}
      <ul className="elegant-list space-y-2">
        <li className="pl-2">Custom font integration</li>
        <li className="pl-2">Flexible utility classes</li>
        <li className="pl-2">Beautiful design tokens</li>
      </ul>
      
      {/* Card Text */}
      <div className="card-text">
        <h2 className="display-heading text-3xl">Inside a Card</h2>
        <p className="lead-text">
          This card uses the custom <code className="code-text">.card-text</code> class to style its content with padding, border, and shadow.
        </p>
      </div>
    </div>
  );
};

export default TypographyShowcase;`,
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
                                  {`import React from "react";

const TypographyShowcase = () => {
  return (
    <div className="neo-typography p-10 bg-gray-100 min-h-screen space-y-10">
      
      {/* Display Heading */}
      <h1 className="display-heading text-5xl">
        Welcome to <span className="accent-text">Neo Design</span>
      </h1>
      
      {/* Gradient Heading */}
      <h2 className="gradient-heading text-4xl">
        Stylish Gradient Heading
      </h2>
      
      {/* Split Heading */}
      <h3 className="split-heading text-3xl">
        <span>Modern</span> <span>Look</span>
      </h3>
      
      {/* Outline Heading */}
      <h4 className="outline-heading text-6xl">
        Outlined
      </h4>
      
      {/* Lead Paragraph */}
      <p className="lead-text">
        This is a lead paragraph used to emphasize introductory content and set the tone for the rest of the page.
      </p>
      
      {/* Stylish Quote */}
      <blockquote className="stylish-quote">
        "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
      </blockquote>
      
      {/* Caption Text */}
      <p className="caption-text">
        *This is a caption below an image or diagram.*
      </p>
      
      {/* Code Text */}
      <p>
        To install dependencies, run: <code className="code-text">npm install</code>
      </p>
      
      {/* Highlighted Text */}
      <p>
        Remember to <span className="highlight-text">save your work</span> frequently.
      </p>
      
      {/* Accent Text */}
      <p>
        This sentence includes an <span className="accent-text">accentuated</span> word.
      </p>
      
      {/* Elegant List */}
      <ul className="elegant-list space-y-2">
        <li className="pl-2">Custom font integration</li>
        <li className="pl-2">Flexible utility classes</li>
        <li className="pl-2">Beautiful design tokens</li>
      </ul>
      
      {/* Card Text */}
      <div className="card-text">
        <h2 className="display-heading text-3xl">Inside a Card</h2>
        <p className="lead-text">
          This card uses the custom <code className="code-text">.card-text</code> class to style its content with padding, border, and shadow.
        </p>
      </div>
    </div>
  );
};

export default TypographyShowcase;`}
                                </code>
                              </pre>
                            </div>
                          )}
                        </div>
                        <div className="p-5 bg-gray-800 border-t border-gray-700">
                          <h4 className="text-white font-semibold mb-3">Typography System Features</h4>

                          <div className="space-y-4">
                            <div>
                              <h5 className="text-white font-medium mb-2 text-sm">Font Family Variables</h5>
                              <p className="text-gray-400 text-sm">
                                The system uses CSS variables to define font families:
                              </p>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mt-2">
                                <li>
                                  <span className="text-gray-200">--heading-font</span>: "Playfair Display", serif
                                </li>
                                <li>
                                  <span className="text-gray-200">--body-font</span>: "Raleway", sans-serif
                                </li>
                                <li>
                                  <span className="text-gray-200">--mono-font</span>: "JetBrains Mono", monospace
                                </li>
                                <li>
                                  <span className="text-gray-200">--accent-font</span>: "Montserrat", sans-serif
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="text-white font-medium mb-2 text-sm">Heading Variants</h5>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>
                                  <span className="text-gray-200">display-heading</span>: Elegant heading with
                                  decorative underline
                                </li>
                                <li>
                                  <span className="text-gray-200">gradient-heading</span>: Text with gradient background
                                </li>
                                <li>
                                  <span className="text-gray-200">split-heading</span>: Dual-color heading with styling
                                </li>
                                <li>
                                  <span className="text-gray-200">outline-heading</span>: Outlined text with shadow
                                  effect
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="text-white font-medium mb-2 text-sm">Text Treatments</h5>
                              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>
                                  <span className="text-gray-200">lead-text</span>: Larger introductory paragraph
                                </li>
                                <li>
                                  <span className="text-gray-200">stylish-quote</span>: Blockquote with border and
                                  gradient
                                </li>
                                <li>
                                  <span className="text-gray-200">caption-text</span>: Small caption text
                                </li>
                                <li>
                                  <span className="text-gray-200">code-text</span>: Monospace code styling
                                </li>
                                <li>
                                  <span className="text-gray-200">highlight-text</span>: Text with background highlight
                                </li>
                                <li>
                                  <span className="text-gray-200">accent-text</span>: Emphasized text with accent color
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeSubTab === "grid" && (
                  <>
                    <h3 className="text-gray-300 text-xl font-semibold mb-3">Custom Animated Components</h3>
                    <p className="text-gray-400 mb-4">
                      Pre-built animated components with interactive effects and responsive designs.
                    </p>

                    <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
                      <div className="p-5 border-b border-gray-700">
                        <h3 className="text-white font-semibold">Animated Shape Cards</h3>
                      </div>
                      <div className="p-5 bg-gray-900">
                        <div className="flex justify-center mb-4">
                          <img
                            src="/customlayout/picture1.png"
                            alt="Animated shape cards screenshot"
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
                      <div className="p-5 bg-gray-800 border-t border-gray-700">
                        <h4 className="text-white font-semibold mb-3">Animated Shape Cards Features</h4>

                        <div className="space-y-6">
                          <div>
                            <h5 className="text-white font-medium mb-2">Card Base Variants</h5>
                            <p className="text-gray-400 text-sm mb-3">
                              Each card variant has a matching color theme and consistent hover animations:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                              <li>
                                <span className="text-gray-200">shape-card-primary</span>: Blue themed card
                              </li>
                              <li>
                                <span className="text-gray-200">shape-card-success</span>: Green themed card
                              </li>
                              <li>
                                <span className="text-gray-200">shape-card-warning</span>: Amber themed card
                              </li>
                              <li>
                                <span className="text-gray-200">shape-card-danger</span>: Red themed card
                              </li>
                              <li>
                                <span className="text-gray-200">shape-card-purple</span>: Purple themed card
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-white font-medium mb-2">Shape Elements</h5>
                            <p className="text-gray-400 text-sm mb-3">
                              Various shape elements that can be placed inside cards:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                              <li>
                                <span className="text-gray-200">shape-circle</span>: Circular shape with float animation
                              </li>
                              <li>
                                <span className="text-gray-200">shape-triangle</span>: Triangle shape with bounce
                                animation
                              </li>
                              <li>
                                <span className="text-gray-200">shape-rectangle</span>: Rectangle with rotation
                                animation
                              </li>
                              <li>
                                <span className="text-gray-200">shape-polygon</span>: Pentagon shape with pulse
                                animation
                              </li>
                              <li>
                                <span className="text-gray-200">shape-dots</span>: Group of dots with slide-in animation
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gray-900 rounded-md p-4">
                            <h5 className="text-white font-medium mb-2">Animation Details</h5>
                            <table className="w-full text-sm">
                              <tbody>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">float</td>
                                  <td className="py-2 text-gray-300">Gentle up and down movement (6s)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">bounce-gentle</td>
                                  <td className="py-2 text-gray-300">Subtle bouncing effect (3s)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">rotate-slow</td>
                                  <td className="py-2 text-gray-300">Continuous rotation (8s)</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                  <td className="py-2 pr-4 text-gray-400">pulse-soft</td>
                                  <td className="py-2 text-gray-300">Gentle scaling pulse (4s)</td>
                                </tr>
                                <tr>
                                  <td className="py-2 pr-4 text-gray-400">slide-in</td>
                                  <td className="py-2 text-gray-300">Quick entrance animation (0.5s)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div>
                            <h5 className="text-white font-medium mb-2">Implementation Notes</h5>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                              <li>All cards have a subtle float effect on hover</li>
                              <li>Background shapes are positioned with absolute positioning</li>
                              <li>Content is kept in z-index above the animated shapes</li>
                              <li>Animations only trigger on hover for better performance</li>
                              <li>Each card has pseudo-elements for additional background shapes</li>
                            </ul>
                          </div>
                        </div>
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
