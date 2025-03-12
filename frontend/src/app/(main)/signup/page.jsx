import React from 'react'

const Signup = () => {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      {/* AV Plugin Branding */}
      <a href="#">
        <div className="text-foreground font-semibold text-3xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </div>
          AV PLUGIN
        </div>
      </a>
      {/* Signup Form Container */}
      <div className="relative mt-8 w-full max-w-2xl">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter text-center">
              Sign Up
            </h3>
            <p className="mt-1.5 text-sm font-medium text-white/50 text-center">
              Create an account to access AV Plugin features.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form>
              {/* Name Fields */}
              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label className="text-xs font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-3 py-2 bg-transparent border rounded-lg focus:ring-2 focus:ring-sky-300 border-gray-600 text-sm outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-xs font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="block w-full px-3 py-2 bg-transparent border rounded-lg focus:ring-2 focus:ring-sky-300 border-gray-600 text-sm outline-none"
                  />
                </div>
              </div>
              {/* Email Address */}
              <div className="mb-4">
                <label className="text-xs font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="block w-full px-3 py-2 bg-transparent border rounded-lg focus:ring-2 focus:ring-sky-300 border-gray-600 text-sm outline-none"
                />
              </div>
              {/* Password Fields */}
              <div className="mb-4">
                <label className="text-xs font-medium text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="block w-full px-3 py-2 bg-transparent border rounded-lg focus:ring-2 focus:ring-sky-300 border-gray-600 text-sm outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="text-xs font-medium text-gray-400">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="block w-full px-3 py-2 bg-transparent border rounded-lg focus:ring-2 focus:ring-sky-300 border-gray-600 text-sm outline-none"
                />
              </div>
              {/* Terms & Conditions */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-800 border-gray-700 focus:ring-sky-300 text-sky-400 rounded mr-2"
                />
                <span className="text-xs text-gray-400">
                  I agree to the {" "}
                  <a href="#" className="text-sky-400 hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>
              {/* Signup Button */}
              <div className="flex items-center justify-end gap-x-2">
                <a
                  href="/login"
                  className="text-sm font-medium text-foreground underline"
                >
                  Already have an account?
                </a>
                <button
                  type="submit"
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm bg-white text-black h-10 px-4 py-2"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
