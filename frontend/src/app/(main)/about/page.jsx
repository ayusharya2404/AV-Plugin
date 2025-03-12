import React from 'react'

const About = () => {
  return (
<div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-16">
  {/* Page Title */}
  <h1 className="text-4xl font-bold text-center">About AV Plugin</h1>
  <p className="mt-4 text-gray-400 text-center max-w-2xl">
    AV Plugin is an all-in-one Tailwind CSS plugin designed to simplify frontend
    development by combining multiple essential features into a single package.
  </p>
  {/* Mission & Vision */}
  <section className="mt-12 max-w-4xl">
    <h2 className="text-3xl font-semibold text-center">
      Our Mission &amp; Vision
    </h2>
    <p className="mt-4 text-gray-400 text-center">
      Our mission is to enhance the Tailwind CSS development experience by
      providing a single, easy-to-use plugin that improves efficiency and
      performance.
    </p>
  </section>
  {/* Why Choose AV Plugin */}
  <section className="mt-12 max-w-4xl">
    <h2 className="text-3xl font-semibold text-center">
      Why Choose AV Plugin?
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 border border-gray-700 rounded-lg">
        <h3 className="text-xl font-medium">Single Plugin Solution</h3>
        <p className="text-gray-400">
          Eliminates the need for multiple Tailwind plugins.
        </p>
      </div>
      <div className="p-6 border border-gray-700 rounded-lg">
        <h3 className="text-xl font-medium">Beginner-Friendly</h3>
        <p className="text-gray-400">Simple setup and easy-to-use features.</p>
      </div>
      <div className="p-6 border border-gray-700 rounded-lg">
        <h3 className="text-xl font-medium">Performance Optimized</h3>
        <p className="text-gray-400">
          Reduces unnecessary CSS load and improves website speed.
        </p>
      </div>
      <div className="p-6 border border-gray-700 rounded-lg">
        <h3 className="text-xl font-medium">Community-Driven</h3>
        <p className="text-gray-400">
          Open-source and constantly evolving based on feedback.
        </p>
      </div>
    </div>
  </section>
  {/* Team Section */}
  <section className="mt-12 max-w-4xl">
    <h2 className="text-3xl font-semibold text-center">Meet the Team</h2>
    <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
      <div className="p-6 border border-gray-700 rounded-lg text-center">
        <h3 className="text-xl font-medium">Ayush Arya</h3>
        <p className="text-gray-400">
          Frontend Developer &amp; Plugin Designer
        </p>
      </div>
      <div className="p-6 border border-gray-700 rounded-lg text-center">
        <h3 className="text-xl font-medium">Vishal Mishra</h3>
        <p className="text-gray-400">UI/UX Designer &amp; Plugin Contributor</p>
      </div>
    </div>
  </section>
  {/* Future Enhancements */}
  <section className="mt-12 max-w-4xl">
    <h2 className="text-3xl font-semibold text-center">Future Enhancements</h2>
    <p className="mt-4 text-gray-400 text-center">
      We plan to add AI-powered design suggestions, more UI components, and
      real-time updates.
    </p>
  </section>
  {/* Call to Action */}
  <section className="mt-12 text-center">
    <h2 className="text-2xl font-semibold">Want to Contribute?</h2>
    <p className="text-gray-400">
      Join us in improving AV Plugin. Check out our GitHub repository.
    </p>
    <a
      href="https://github.com"
      className="mt-4 inline-block px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-300"
    >
      Visit GitHub
    </a>
  </section>
</div>


  )
}

export default About;