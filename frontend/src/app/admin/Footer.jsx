"use client";
import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      
        {/* Copyright section */}
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} AV Plugin. All rights reserved.
          </p>
        </div>
    </footer>
    </>
  );
};

export default Footer;