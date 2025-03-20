"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on mount
    handleScroll();
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
        <div className="relative h-10 w-35 md:h-16 md:w-24 lg:h-20 lg:w-32">
          <Image 
            src="/logo1.svg" 
            alt="Logo" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#features" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Features</Link>
              <Link href="/documentation" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Documentation</Link>
              <Link href="/installation" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Installation</Link>
              <Link href="/about" className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</Link>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200">
                <Link href='/login'>
                Login
                </Link>
                </button>
              <button type="button" className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-500 transition-colors duration-200">
                <Link href='/signup'>
                Sign Up
                </Link>
                </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
          <Link href="#features" className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Features</Link>
          <Link href="/documentation" className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Documentation</Link>
          <Link href="/installation" className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Installation</Link>
          <Link href="/about" className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</Link>
          <button type="button" className="w-full text-left text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
            <Link href='/login'>
            Login
            </Link>
            </button>
          <button type="button" className="w-full bg-gray-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500 transition-colors duration-200">
          <Link href='/signup'>
          Sign Up
          </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;