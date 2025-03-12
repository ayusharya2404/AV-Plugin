import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl font-bold">Enhance Your Tailwind CSS Experience</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          AV Plugin combines multiple essential Tailwind CSS features into one package,
          simplifying development and improving performance.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-5 py-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">Animations</h3>
            <p className="text-gray-400">Prebuilt animations like bounce, fade, and spin.</p>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">Enhanced Forms</h3>
            <p className="text-gray-400">Beautifully styled form elements for a better UI.</p>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">Pre-built UI Components</h3>
            <p className="text-gray-400">Includes buttons, modals, cards, and more.</p>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-medium">Scrollbar Hiding</h3>
            <p className="text-gray-400">Creates a clean and modern look for web pages.</p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-5 py-10 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center">The Problem</h2>
        <p className="mt-4 text-gray-400 text-center max-w-3xl mx-auto">
          Developers struggle with multiple Tailwind plugins, difficult setups, slower websites, and compatibility issues.
          AV Plugin provides a single, easy-to-use solution.
        </p>
      </section>

      {/* Solution Section */}
      <section className="px-5 py-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">How AV Plugin Solves It</h2>
        <p className="mt-4 text-gray-400">
          Our all-in-one Tailwind CSS plugin combines essential features into one, reducing complexity, improving
          performance, and simplifying the development process.
        </p>
      </section>

      {/* Call to Action */}
      <section className="px-5 py-10 text-center">
        <h2 className="text-2xl font-semibold">Get Started Today</h2>
        <p className="text-gray-400">Simplify your Tailwind CSS workflow with AV Plugin.</p>
        <a href="/signup" className="mt-4 inline-block px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-300">Sign Up</a>
      </section>

      {/* Footer */}
      <footer className="p-5 border-t border-gray-700 text-center text-gray-500">
        &copy; 2025 AV Plugin. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
