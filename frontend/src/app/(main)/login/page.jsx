'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Login = () => {
  const [formData, setState] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the login logic
    console.log("Login attempt with:", formData);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-700 rounded-full opacity-20 filter blur-3xl animate-bounce" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800 rounded-full opacity-20 filter blur-3xl animate-bounce" style={{ animationDelay: "2s" }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black border border-gray-700 rounded-lg p-8 w-full max-w-lg shadow-xl"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-5"
        >
          Login
        </motion.h2>
        <p className="text-gray-400 text-center mb-6">
          Welcome back! Please enter your credentials.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-base font-semibold text-gray-300">
              Username
            </label>
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-4 py-2.5 text-white outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-semibold text-gray-300">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-4 py-2.5 text-white outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-600 text-gray-400 focus:ring-gray-700"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Forgot password?
              </motion.a>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full rounded-md bg-gray-300 text-black px-5 py-2.5 font-semibold hover:bg-gray-400 transition"
            >
              Login
            </motion.button>
            <Link href="/signup" passHref legacyBehavior>
              <motion.a className="w-full">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="w-full rounded-md bg-transparent border border-gray-700 text-white px-5 py-2.5 font-semibold hover:bg-gray-900 transition"
                >
                  Register
                </motion.button>
              </motion.a>
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;