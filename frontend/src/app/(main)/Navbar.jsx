'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-gray-300 py-3 px-6 sticky top-0 z-50 border-b border-gray-800 transition-all duration-300 shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left Side - Brand Name with animation */}
          <div 
            className="text-2xl font-semibold flex items-center h-10 group"
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          >
            <span className="text-white group-hover:text-gray-300 transition-all duration-300 transform group-hover:scale-110 origin-left">
              AV PLUGIN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`relative px-2 py-1 overflow-hidden transition-all duration-300 group ${
                  activeLink === link.path ? "text-white" : "text-gray-400"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.path);
                }}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="relative z-10 flex items-center h-10 group-hover:text-white transform transition-transform duration-200 group-hover:translate-y-px">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
                {hoveredLink === link.path && (
                  <span className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-10 rounded-md transform scale-50 group-hover:scale-100 transition-all duration-300"></span>
                )}
              </a>
            ))}

            {/* Auth Buttons with hover animations */}
            <a
              href="/login"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center h-10 relative overflow-hidden group"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <span className="relative z-10 transform group-hover:translate-y-px transition-transform duration-200">Login</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/signup"
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center h-10 text-white overflow-hidden relative group"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <span className="relative z-10 group-hover:animate-pulse">Signup</span>
              <span className="absolute inset-0 w-full h-full bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-20"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none relative overflow-hidden p-1 rounded-md transition-colors duration-300 hover:bg-gray-900"
              aria-label="Toggle Menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            {navLinks.map((link, index) => (
              <a
                key={link.path}
                href={link.path}
                className={`px-2 py-3 rounded-md transition-all duration-200 transform ${
                  activeLink === link.path
                    ? "bg-gray-900 text-white translate-x-1"
                    : "hover:bg-gray-900 text-gray-400 hover:text-white hover:translate-x-1"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.path);
                  setIsOpen(false);
                }}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)'
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800" style={{
              transitionDelay: isOpen ? `${navLinks.length * 50 + 50}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(10px)'
            }}>
              <a
                href="/login"
                className="px-2 py-3 hover:bg-gray-900 rounded-md transition-all duration-200 text-gray-400 hover:text-white hover:translate-x-1 transform"
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-md text-center font-medium transition-all duration-300 text-white transform hover:scale-105"
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;