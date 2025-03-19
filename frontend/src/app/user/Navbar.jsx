'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and brand */}
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">AV</span>
            <span className="hidden md:block text-xl font-semibold">Plugin</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-400 transition duration-300">
              Home
            </Link>
            <Link href="/features" className="text-white hover:text-purple-400 transition duration-300">
              Features
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-purple-400 transition duration-300 flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-10 hidden group-hover:block">
                <Link href="/docs" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  Documentation
                </Link>
                <Link href="/tutorials" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  Tutorials
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-white hover:text-purple-400 py-2 transition duration-300">
                Home
              </Link>
              <Link href="/features" className="text-white hover:text-purple-400 py-2 transition duration-300">
                Features
              </Link>
              <Link href="/pricing" className="text-white hover:text-purple-400 py-2 transition duration-300">
                Pricing
              </Link>
              <div className="py-2">
                <button 
                  className="text-white hover:text-purple-400 flex items-center justify-between w-full"
                  onClick={() => document.getElementById('mobileSubmenu').classList.toggle('hidden')}
                >
                  Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div id="mobileSubmenu" className="hidden mt-2 pl-4 border-l border-gray-700">
                  <Link href="/docs" className="block py-2 text-gray-300 hover:text-white">
                    Documentation
                  </Link>
                  <Link href="/tutorials" className="block py-2 text-gray-300 hover:text-white">
                    Tutorials
                  </Link>
                  <Link href="/blog" className="block py-2 text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;