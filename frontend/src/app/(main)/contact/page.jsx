'use client'
import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'
import axios from "axios";
import { toast } from "react-hot-toast";

const contactSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required('First name is required'),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string()
    .required('Message is required')
});

const ContactUs = () => {
  const contactForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
            console.log('Form submitted:', values);

            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/submit`,values)
            
            .then((result) => {
              console.log(result.data);
              localStorage.setItem('user',result.data.token);
              toast.success("login Successful");
              
            }).catch((err) => {
              console.log(err);
              toast.error("login failed.PLease check your credentials"); 
            });
            // Here you would typically handle authentication
            // e.g., call an API to verify credentials
        },
  });

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4 pt-20 relative overflow-hidden">
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
          Contact Us
        </motion.h2>
        <p className="text-gray-400 text-center mb-6">
          Get in touch with us – we're here to help and collaborate!
        </p>
        <form 
          action="#" 
          method="POST"
          onSubmit={contactForm.handleSubmit} 
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-semibold text-gray-300">
                First Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                id="firstname"
                name="firstname"
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                value={contactForm.values.firstname}
                className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
              />
              {contactForm.touched.firstname && contactForm.errors.firstname && (
                <div className="text-red-500 text-sm mt-1">{contactForm.errors.firstname}</div>
              )}
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-semibold text-gray-300">
                Last Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="text"
                id="lastname"
                name="lastname"
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                value={contactForm.values.lastname}
                className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
              />
              {contactForm.touched.lastname && contactForm.errors.lastname && (
                <div className="text-red-500 text-sm mt-1">{contactForm.errors.lastname}</div>
              )}
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
              name="email"
              onChange={contactForm.handleChange}
              onBlur={contactForm.handleBlur}
              value={contactForm.values.email}
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
            />
            {contactForm.touched.email && contactForm.errors.email && (
              <div className="text-red-500 text-sm mt-1">{contactForm.errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              id="message"
              name="message"
              onChange={contactForm.handleChange}
              onBlur={contactForm.handleBlur}
              value={contactForm.values.message}
              rows="4"
              className="mt-2 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-gray-500"
            ></motion.textarea>
            {contactForm.touched.message && contactForm.errors.message && (
              <div className="text-red-500 text-sm mt-1">{contactForm.errors.message}</div>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full rounded-md bg-gray-800 text-white border border-gray-700 px-4 py-2 font-semibold hover:bg-gray-700 transition"
          >
            {
              contactForm.isSubmitting ? (
                // Default values shown
                <Spiral
                  size="25"
                  speed="0.9"
                  color="black" 
                />) : 'Submit Form'
            }
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;