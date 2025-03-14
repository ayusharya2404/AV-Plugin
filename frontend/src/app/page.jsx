"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Layout, Zap, Shield, Menu, X, Check } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activePlan, setActivePlan] = useState('monthly');

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

  const pricingPlans = {
    weekly: {
      price: "$9.99",
      period: "week",
      features: [
        "Access to all components",
        "Basic email support",
        "Community access",
        "Weekly updates"
      ]
    },
    monthly: {
      price: "$19.99",
      period: "month",
      features: [
        "Everything in Weekly",
        "Priority email support",
        "Premium components",
        "Advanced tutorials"
      ]
    },
    yearly: {
      price: "$99.99",
      period: "year",
      features: [
        "Everything in Monthly",
        "24/7 phone support",
        "Custom component requests",
        "Team collaboration tools",
        "Early access to new features"
      ]
    }
  };

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
                <a href="#features" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Features</a>
                <a href="#pricing" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Pricing</a>
                <a href="#about" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</a>
                <button className="bg-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200">Login</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-500 transition-colors duration-200">Sign Up</button>
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
            <a href="#features" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Features</a>
            <a href="#docs" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Documentation</a>
            <a href="#pricing" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Pricing</a>
            <a href="#about" className="hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</a>
            <button className="w-full text-left hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Login</button>
            <button className="w-full bg-gray-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500 transition-colors duration-200">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-20 transform -skew-y-6"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-40 relative">
          <div className="sm:text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Supercharge your</span>
              <span className="block text-gray-400">Tailwind Projects</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              AV Plugin brings powerful components and utilities to enhance your Tailwind CSS workflow, helping you build beautiful interfaces faster than ever.
            </p>
            <div className="mt-8 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-300 hover:bg-white md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Read Docs
                </a>
              </div>
            </div>
          </div>
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

      {/* Pricing Section */}
      <div id="pricing" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Plans for every workflow
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="bg-gray-800 p-1 rounded-lg flex">
              <button
                onClick={() => setActivePlan('weekly')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activePlan === 'weekly' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setActivePlan('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activePlan === 'monthly' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActivePlan('yearly')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activePlan === 'yearly' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <div 
                key={key}
                className={`relative p-8 bg-gray-800 rounded-lg shadow-md transition-all duration-300 ${
                  activePlan === key ? 'ring-2 ring-gray-400 transform scale-105' : 'hover:scale-105'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-white capitalize">{key}</h3>
                  <p className="mt-4 flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-400">/{plan.period}</span>
                  </p>
                  
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-5 w-5 text-green-400" />
                        </div>
                        <p className="ml-3 text-base text-gray-300">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <button
                      className={`w-full px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black ${
                        activePlan === key ? 'bg-gray-300 hover:bg-white' : 'bg-gray-500 hover:bg-gray-400'
                      } transition-colors duration-200`}
                    >
                      {activePlan === key ? 'Get Started' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Need a custom plan? <a href="#" className="text-white underline">Contact us</a> for enterprise pricing.
            </p>
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

      {/* Testimonial Section */}
      <div className="py-16 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Loved by developers
            </p>
          </div>
          <div className="mt-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative">
                <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg sm:text-xl font-medium text-gray-300">
                  AV Plugin has completely transformed our development workflow. We're building complex UIs in half the time with better results. It's become an essential tool for our entire team.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">JD</div>
                  <div className="text-left">
                    <div className="text-white font-medium">Jane Doe</div>
                    <div className="text-gray-400 text-sm">Lead Developer, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black">
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
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Features</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Releases</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Community</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Tutorials</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">License</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} AV Plugin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;