'use client'
import React from "react";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70 animate-pulse" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-700 rounded-full opacity-20 filter blur-3xl animate-bounce" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800 rounded-full opacity-20 filter blur-3xl animate-bounce animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black border border-gray-700 rounded-lg p-10 w-full max-w-xl shadow-lg"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-4"
        >
          Create an Account
        </motion.h2>
        <p className="text-gray-400 text-center mb-6">
          Join us today and start your journey!
        </p>
        <form action="#" method="POST" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
                First Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                id="first-name"
                className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-300">
                Last Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                id="last-name"
                className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              id="email"
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300">
              Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="password"
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-300">
              Confirm Password
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="password"
              id="confirm-password"
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div className="flex items-center">
            <motion.input
              whileHover={{ scale: 1.1 }}
              type="checkbox"
              id="terms"
              className="mr-2 h-4 w-4 border-gray-700 rounded text-gray-400 focus:ring-gray-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I agree to the <span className="text-gray-200 underline cursor-pointer">Terms and Conditions</span>
            </label>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full rounded-md bg-gray-700 text-white px-4 py-2 font-semibold hover:bg-gray-600 transition"
          >
            Create Account
          </motion.button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-gray-200 underline cursor-pointer"
            >
              Log in
            </motion.span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;