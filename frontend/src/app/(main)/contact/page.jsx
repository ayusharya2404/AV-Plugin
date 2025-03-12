import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-black border border-white rounded-lg p-10 w-full max-w-xl shadow-lg h-auto min-h-[500px]">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-gray-400 text-center mb-6">
          Get in touch with us – we're here to help and collaborate!
        </p>
        <form action="#" method="POST" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-2 w-full rounded-md border border-white bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-2 w-full rounded-md border border-white bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full rounded-md border border-white bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 w-full rounded-md border border-white bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-white text-black px-4 py-2 font-semibold hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;