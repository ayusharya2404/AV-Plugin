"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code, Layout, Zap, Shield, Menu, X, Check } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Simplified Development",
      description: "Build beautiful interfaces with minimal code using our utility-first approach."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Responsive Components",
      description: "Create layouts that work perfectly on every screen size with zero effort."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Blazing fast rendering with our optimized component architecture."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Type Safety",
      description: "Full TypeScript support for better developer experience and fewer bugs."
    }
  ];


  return (
    
   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-300">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="flex items-center font-bold text-xl lg:text-2xl text-gray-300">
                <span className="bg-gray-800 text-white px-2 py-1 rounded mr-1">AV</span>
                Plugin
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="#features" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Features</Link>
                <Link href="/installation" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Installation</Link>
                <Link href="#about" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</Link>
                <button className="bg-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200">
                <Link href='/login'>
                Login
                </Link>
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-500 transition-colors duration-200">
                  <Link href='/signup'>
                  Sign Up
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
            <Link href="#features" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Features</Link>
            <Link href="/installation" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Installation</Link>
            <Link href="/about" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</Link>
            <Link href='/login' className="w-full text-left hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Login</Link>
            <button  className="w-full bg-gray-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500 transition-colors duration-200">
            <Link href='/signup'>
            SignUp
            </Link>
            </button>
          </div>
        </div>
      </nav>
      
{/* Hero Section */}
<div className="relative pt-16">
  <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-20 transform -skew-y-6"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-32 sm:pb-40 relative text-center">

    {/* Animated Heading */}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
  <div className="flex flex-wrap justify-center">
    <motion.span
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="inline-block mx-1 sm:mx-2"
    >
      Supercharge
    </motion.span>
    <motion.span
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="inline-block mx-1 sm:mx-2"
    >
      your
    </motion.span>
  </div>
  <div className="flex flex-wrap justify-center mt-1 sm:mt-2">
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="inline-block text-gray-400 mx-1 sm:mx-2"
    >
      Tailwind
    </motion.span>
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="inline-block text-gray-400 mx-1 sm:mx-2"
    >
      Projects
    </motion.span>
  </div>
</h1>

    {/* Increased Spacing for Subtitle */}
    <motion.p 
      className="mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      AV Plugin brings powerful components and utilities to enhance your Tailwind CSS workflow, helping you build beautiful interfaces faster than ever.
    </motion.p>

    {/* Buttons */}
    <motion.div 
      className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <motion.a
        href="#"
        className="px-8 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-gray-300 hover:bg-white md:py-4 md:px-10 transition-all duration-200 transform hover:scale-105"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.a>
      <motion.a
        href="#"
        className="px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:px-10 transition-all duration-200"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Read Docs
      </motion.a>
    </motion.div>

  </div>
</div>


      {/* Code Preview Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="text-sm text-gray-400 ml-2">Example.jsx</div>
          </div>
          <div className="p-4 sm:p-6 bg-black overflow-x-auto">
            <pre className="text-sm text-gray-300">
              <code>{`import React from 'react';
import { Button, Card } from 'av-plugin/react';

export default function Example() {
  return (
    <Card className="av-animate-fade-in">
      <Card.Header>
        <Card.Title>Welcome to AV Plugin</Card.Title>
        <Card.Description>
          Build beautiful interfaces with ease
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>This is an example of our component library in action.</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="primary">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </Card.Footer>
    </Card>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Everything you need to build amazing UIs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              AV Plugin extends Tailwind CSS with pre-built components and utilities for rapid development.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`relative p-6 bg-gray-900 rounded-lg shadow-md transition-all duration-300 transform ${activeFeature === index ? 'scale-105 ring-2 ring-gray-500' : 'hover:scale-105'}`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-gray-400">Start using AV Plugin today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-300 hover:bg-white transition-colors duration-200"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonial Section */}
<div className="min-h-screen py-24 bg-gradient-to-b from-gray-900 to-neutral-950 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold tracking-wide uppercase text-lg">
          What Developers Say
        </h2>
        <p className="mt-3 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Loved by the community
        </p>
        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-xl text-gray-300">
            Join hundreds of developers who've transformed their workflow with our plugin
          </p>
        </div>
      </motion.div>
    </div>
    
    {/* Interactive Testimonial Carousel with Enhanced Design */}
    <div className="mt-20">
      <motion.div 
        className="relative max-w-4xl mx-auto h-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Testimonials Data */}
        {(() => {
          const testimonials = [
            {
              id: 0,
              initials: "JD",
              name: "Jane Doe",
              role: "Lead Developer, TechCorp",
              text: "AV Plugin has completely transformed our development workflow. We're building complex UIs in half the time with better results. It's become an essential tool for our entire team.",
              image: "/api/placeholder/100/100",
              color: "from-blue-600 to-cyan-400"
            },
            {
              id: 1,
              initials: "MS",
              name: "Mike Smith",
              role: "Frontend Developer, StartupX",
              text: "The component library is incredible. I used to spend hours building custom components, now I can prototype entire interfaces in minutes. The documentation is also top-notch!",
              image: "/api/placeholder/100/100",
              color: "from-purple-600 to-pink-400"
            },
            {
              id: 2,
              initials: "AL",
              name: "Alex Lee",
              role: "CTO, DevStudio",
              text: "We've integrated AV Plugin across all our projects. The consistency and quality it brings to our UI is remarkable. It's streamlined our entire design system implementation.",
              image: "/api/placeholder/100/100",
              color: "from-emerald-600 to-teal-400"
            },
            {
              id: 3,
              initials: "SR",
              name: "Sara Rodriguez",
              role: "UI/UX Designer, DesignLab",
              text: "As a designer, I love how AV Plugin bridges the gap between design and development. The components maintain design fidelity while being incredibly flexible for developers to implement.",
              image: "/api/placeholder/100/100",
              color: "from-amber-600 to-yellow-400"
            }
          ];

          // State for active testimonial
          const [activeIndex, setActiveIndex] = useState(0);
          const [direction, setDirection] = useState(null);
          
          // Auto-rotate testimonials
          useEffect(() => {
            const timer = setTimeout(() => {
              nextTestimonial();
            }, 8000);
            
            return () => clearTimeout(timer);
          }, [activeIndex]);
          
          // Handler for next testimonial
          const nextTestimonial = () => {
            setDirection('right');
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
          };
          
          // Handler for previous testimonial
          const prevTestimonial = () => {
            setDirection('left');
            setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
          };

          // Animation variants
          const variants = {
            enter: (direction) => ({
              x: direction === 'right' ? 300 : -300,
              opacity: 0,
              scale: 0.9,
            }),
            center: {
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 30
              }
            },
            exit: (direction) => ({
              x: direction === 'right' ? -300 : 300,
              opacity: 0,
              scale: 0.9,
              transition: {
                duration: 0.3
              }
            })
          };

          return (
            <>
              {/* Main Testimonial Card with Animation */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-10 md:p-12 border border-gray-700 overflow-hidden"
                >
                  {/* Background Glow Effect */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} opacity-20 blur-3xl`}></div>
                  <div className={`absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-tl ${testimonials[activeIndex].color} opacity-10 blur-3xl`}></div>
                  
                  {/* Quote Mark */}
                  <div className="absolute top-8 left-8 text-gray-700">
                    <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="relative pl-8 pt-8">
                    <motion.p 
                      className="text-2xl font-medium text-gray-200 leading-relaxed mb-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      "{testimonials[activeIndex].text}"
                    </motion.p>
                    
                    {/* Testimonial Author */}
                    <div className="flex items-center mt-8">
                      <motion.div 
                        className={`flex-shrink-0 h-16 w-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        {testimonials[activeIndex].initials}
                      </motion.div>
                      
                      <motion.div 
                        className="ml-5"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <div className="text-white font-semibold text-xl">
                          {testimonials[activeIndex].name}
                        </div>
                        <div className="text-gray-400 text-lg">
                          {testimonials[activeIndex].role}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Star Rating */}
                    <motion.div 
                      className="mt-5 flex"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-7 w-7 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Navigation Controls */}
              <div className="flex justify-between items-center mt-12">
                <motion.button 
                  onClick={prevTestimonial}
                  className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 shadow-lg border border-gray-700"
                  whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                {/* Enhanced Indicator Dots */}
                <div className="flex space-x-4">
                  {testimonials.map((_, i) => (
                    <motion.button 
                      key={i}
                      onClick={() => {
                        setDirection(i > activeIndex ? 'right' : 'left');
                        setActiveIndex(i);
                      }}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        i === activeIndex 
                          ? `w-10 bg-gradient-to-r ${testimonials[i].color}` 
                          : 'w-3 bg-gray-600 hover:bg-gray-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ scale: i === activeIndex ? 1.2 : 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>

                <motion.button 
                  onClick={nextTestimonial}
                  className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-200 shadow-lg border border-gray-700"
                  whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </>
          );
        })()}
      </motion.div>

      {/* Enhanced Testimonial Stats */}
      <div className="mt-32 grid grid-cols-2 gap-6 sm:grid-cols-4 px-4">
        <motion.div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center shadow-xl border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </motion.div>
          <motion.p 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.1
            }}
          >500+</motion.p>
          <p className="text-gray-300 mt-2 text-lg">Happy Developers</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center shadow-xl border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </motion.div>
          <motion.p 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2
            }}
          >250+</motion.p>
          <p className="text-gray-300 mt-2 text-lg">Projects Built</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center shadow-xl border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-600 to-teal-400 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </motion.div>
          <motion.p 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.3
            }}
          >4.9</motion.p>
          <p className="text-gray-300 mt-2 text-lg">Average Rating</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center shadow-xl border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-yellow-400 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </motion.div>
          <motion.p 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.4
            }}
          >98%</motion.p>
          <p className="text-gray-300 mt-2 text-lg">Would Recommend</p>
        </motion.div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-900 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Try AV Plugin Today
        </motion.button>
        <p className="mt-4 text-gray-400">Join our growing community of developers</p>
      </motion.div>
    </div>
  </div>
</div>

      {/* Newsletter Section */}
      <div className="bg-neutral-950">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 bg-gray-800 rounded-lg md:py-12 md:px-12 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Stay up to date with AV Plugin</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-300">
                Get notified about new features, updates, and developer tips.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-black bg-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-300">
                We care about your data. Read our{' '}
                <a href="#" className="text-white font-medium underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
<footer className="bg-gray-900">
  <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center gap-20">
      <a href="#" className="text-base text-gray-400 hover:text-white">Features</a>
      <a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a>
      <a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a>
      <a href="#" className="text-base text-gray-400 hover:text-white">About</a>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-6">
      <p className="text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} AV Plugin. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;