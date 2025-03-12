import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-3 px-6 flex justify-between items-center border-b border-gray-700">
      {/* Left Side - Brand Name */}
      <div className="text-2xl font-semibold flex items-center h-10">AV PLUGIN</div>

      {/* Right Side - Navigation Links */}
      <div className="flex items-center gap-6">
        <a href="/" className="hover:text-gray-400 h-10 flex items-center">Home</a>
        <a href="/docs" className="hover:text-gray-400 h-10 flex items-center">Docs</a>
        <a href="/about" className="hover:text-gray-400 h-10 flex items-center">About Us</a>
        <a href="/contact" className="hover:text-gray-400 h-10 flex items-center">Contact</a>
        <a href="/login" className="hover:text-gray-400 h-10 flex items-center">Login</a>
        <a href="/signup" className="hover:bg-white hover:text-black px-4 py-2 rounded-md bg-gray-800 transition h-10 flex items-center">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
