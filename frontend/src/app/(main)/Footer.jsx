"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Main footer section - simplified to just a logo */}
        <div className="flex justify-center mb-8">
          {/* <h2 className="text-xl font-bold">AV Plugin</h2> */}
        </div>

        {/* Navigation Links - simplified to just the 4 requested links */}
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} AV Plugin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;