"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-3">
        {/* Navigation Links - more compact layout */}
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-2">
          <Link href="/installation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Installation</Link>
          <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Documentation</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contact Us</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">About</Link>
        </div>

        {/* Copyright section - reduced spacing */}
        <div className="border-t border-gray-800 mt-4 pt-3">
          <p className="text-gray-300 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} AV Plugin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;