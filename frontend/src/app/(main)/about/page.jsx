'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Create fallback card components in case the imports aren't available
const CardFallback = ({ className, children }) => (
  <div className={`rounded-lg ${className}`}>{children}</div>
);

const CardHeaderFallback = ({ className, children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitleFallback = ({ className, children }) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

const CardContentFallback = ({ className, children }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

// Try to import from @/components/ui/card, but use fallbacks if not available
let Card, CardHeader, CardTitle, CardContent;
try {
  const cardComponents = require('@/components/ui/card');
  Card = cardComponents.Card;
  CardHeader = cardComponents.CardHeader;
  CardTitle = cardComponents.CardTitle;
  CardContent = cardComponents.CardContent;
} catch (e) {
  Card = CardFallback;
  CardHeader = CardHeaderFallback;
  CardTitle = CardTitleFallback;
  CardContent = CardContentFallback;
}

const About = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [hoveredAdmin, setHoveredAdmin] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Single Plugin Solution',
      description: 'Eliminates the need for multiple Tailwind plugins, reducing bundle size and simplifying your workflow.',
      icon: '🧩'
    },
    {
      title: 'Beginner-Friendly',
      description: 'Simple setup and easy-to-use features that make Tailwind even more accessible to newcomers.',
      icon: '🚀'
    },
    {
      title: 'Performance Optimized',
      description: 'Reduces unnecessary CSS load and improves website speed with intelligent class generation.',
      icon: '⚡'
    },
    {
      title: 'Community-Driven',
      description: 'Open-source and constantly evolving based on feedback from developers like you.',
      icon: '🌐'
    }
  ];

  

  // Optimized text animation variants
  const letterAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  // Function to animate text by letter - optimized to handle spaces better
  const AnimatedText = ({ text, className }) => {
    return (
      <motion.span className={`inline-block ${className}`}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  // Optimized social media icon component
  const SocialIcon = ({ platform }) => {
    const lowerPlatform = platform.toLowerCase();
    
    // Object of SVG paths for better organization
    const iconPaths = {
      github: <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />,
      twitter: <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />,
      linkedin: <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />,
      instagram: <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    };

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        {iconPaths[lowerPlatform] || <text x="8" y="8" textAnchor="middle" dominantBaseline="middle" fontSize="10">{platform[0]}</text>}
      </svg>
    );
  };

  // Limiting the number of animated background elements for performance
  const maxBackgroundElements = 6;

  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col items-center px-6 py-16 relative overflow-hidden">
      {/* Reduced number of animated background elements for performance */}
      {[...Array(maxBackgroundElements)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-300 opacity-10"
          style={{
            width: 100 + (i * 20),
            height: 100 + (i * 20),
            top: `${(i * 20) % 100}%`,
            left: `${(i * 15) % 100}%`,
            zIndex: 0
          }}
          animate={{
            x: [0, (i % 2 === 0 ? 20 : -20)],
            y: [0, (i % 2 === 0 ? -20 : 20)],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Page Title with Enhanced Animation */}
    <motion.div 
  className="relative z-10 mb-8"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
>
  <motion.div className="overflow-visible leading-[1.2]">
    <AnimatedText 
      text="About AV Plugin" 
      className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white block pb-2"
    />
  </motion.div>
  <motion.div 
    className="h-1 w-20 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-2 rounded-full"
    initial={{ width: 0 }}
    animate={{ width: 120 }}
    transition={{ delay: 0.8, duration: 0.8 }}
  />
</motion.div>

<motion.p 
  className="mt-6 text-gray-400 text-center max-w-4xl px-8 relative z-10 leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <motion.span 
    className="relative inline-block"
    whileHover={{ color: "#b5b5b5" }} 
  >
    <span className="text-gray-200 font-semibold">AV Plugin</span> is an 
    <span className="text-white font-medium"> all-in-one Tailwind CSS extension </span>  
    designed to <span className="text-gray-300"> streamline frontend development </span>  
     by integrating multiple <span className="text-gray-200">essential utilities</span> into a single package.  
    It eliminates the need for <span className="text-gray-300"> managing multiple plugins separately</span>,  
    making the development process <span className="text-gray-200">simpler, faster, and more efficient</span>.  
    With a <span className="text-white font-medium">rich collection of prebuilt UI components</span>,  
    <span className="text-gray-300"> dynamic animations</span>,  
    <span className="text-gray-300"> extended form controls</span>, and  
    <span className="text-gray-300"> utility classes</span>, AV Plugin empowers developers to  
    <span className="text-white font-medium"> create visually stunning, fully responsive,  
    and high-performance websites with ease.</span>  
  </motion.span>
</motion.p>

<motion.p 
  className="mt-4 text-gray-400 text-center max-w-4xl px-8 relative z-10 leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <motion.span 
    className="relative inline-block"
    whileHover={{ color: "#b5b5b5" }}
  >
    Built with <span className="text-gray-200">scalability and performance</span> in mind,  
    AV Plugin ensures that every website remains  
    <span className="text-gray-200"> lightweight, optimized, and easy to maintain</span>.  
    Whether you're a <span className="text-gray-300">beginner exploring Tailwind CSS </span>  
    or an <span className="text-white font-medium"> experienced developer </span>  
    working on large-scale applications, this plugin provides a  
    <span className="text-gray-200"> seamless workflow</span> that  
    <span className="text-white font-medium"> enhances both productivity and design flexibility</span>.  
    With <span className="text-gray-200">continuous updates and community-driven improvements</span>,  
    AV Plugin is set to become a <span className="text-white font-medium">must-have tool </span>  
    for anyone looking to <span className="text-gray-300">elevate their Tailwind CSS projects effortlessly.</span>  
  </motion.span>
</motion.p>


      {/* Interactive Mission & Vision - simplified animation */}
      <motion.section 
  className="mt-16 max-w-4xl relative z-10"
  variants={fadeIn}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold text-center block mb-2">Our Mission & Vision</h2>

  {/* Mission Paragraph */}
  <motion.p 
    className="mt-4 text-gray-400 text-center max-w-4xl px-8 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.span className="relative inline-block" whileHover={{ color: "#b5b5b5" }}>
      At <span className="text-gray-200 font-semibold">AV Plugin</span>, our mission is to  
      <span className="text-white font-medium"> redefine Tailwind CSS development </span>  
      by offering a <span className="text-gray-300">unified, powerful, and easy-to-use solution</span>.  
      We aim to <span className="text-gray-200">eliminate repetitive tasks</span>,  
      <span className="text-gray-300"> boost productivity</span>, and  
      <span className="text-gray-200"> empower developers</span> of all skill levels.  
      Our goal is to provide a <span className="text-white font-medium"> seamless,  
      performance-optimized experience</span> while maintaining the  
      <span className="text-gray-300"> flexibility and creativity</span> that make Tailwind CSS so popular.  
    </motion.span>
  </motion.p>

  {/* Vision Paragraph */}
  <motion.p 
    className="mt-4 text-gray-400 text-center max-w-4xl px-8 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.span className="relative inline-block" whileHover={{ color: "#b5b5b5" }}>
      Our vision is to make AV Plugin the <span className="text-white font-medium"> go-to tool </span>  
       for every developer, enabling them to create  
      <span className="text-gray-200"> stunning, responsive, and high-performance </span>  
      web applications effortlessly.  
      We believe in a <span className="text-gray-300">community-driven</span> approach,  
      where developers contribute to innovation and improvements.  
      By continuously evolving, integrating <span className="text-gray-200">modern industry trends</span>,  
      and expanding our feature set, we strive to bridge the gap between  
      <span className="text-white font-medium"> design and development</span>,  
      making UI/UX implementation smoother than ever before.  
    </motion.span>
  </motion.p>


</motion.section>

      {/* Why Choose AV Plugin - Interactive Cards */}
      <motion.section 
        className="mt-16 max-w-4xl relative z-10 w-full"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center block mb-8">Why Choose AV Plugin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`p-6 border border-gray-800 rounded-lg transition-all duration-300 ${activeFeature === index ? 'bg-gray-900 shadow-lg shadow-gray-800/20' : 'hover:bg-gray-900/50'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{feature.icon}</span>
                <h3 className="text-xl font-medium">{feature.title}</h3>
              </div>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Interactive Demo Section */}
      <motion.section 
        className="mt-16 w-full max-w-4xl relative z-10"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center block mb-4">See It In Action</h2>
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg border border-gray-800 overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-gray-400 text-sm overflow-x-auto">
            <code>
              {`// Install AV Plugin
npm install av-plugin

// Add to tailwind.config.js
module.exports = {
  plugins: [
    require('av-plugin')({
      // Your configuration options
      animations: true,
      responsiveness: true,
      darkMode: 'class'
    })
  ]
}`}
            </code>
          </pre>
        </motion.div>
      </motion.section>

         {/* Team/Admin Section - With fixed image handling */}
         <motion.section 
  className="mt-20 mb-16 w-full max-w-4xl relative z-10"
  variants={fadeIn}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold text-center block mb-6">Meet the Team</h2>
  <motion.p 
    className="text-gray-400 text-center mx-auto max-w-2xl mb-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
  >
    AV Plugin was created by a small team passionate about improving developer experiences. 
    Our founders continue to guide the project with community input.
  </motion.p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        name: "Ayush Arya",
        role: "Lead Developer",
        bio: "Experienced full-stack developer with a deep understanding of Tailwind CSS and frontend optimization.",
        image: "/images/ayush.jpg",
        social: [
          { platform: "GitHub", url: "https://github.com/ayush" },
          { platform: "Twitter", url: "https://twitter.com/ayush" },
          { platform: "LinkedIn", url: "https://linkedin.com/in/ayush" },
          { platform: "Instagram", url: "https://instagram.com/ayush" }
        ]
      },
      {
        name: "Vishal Mishra",
        role: "UX Designer ",
        bio: "Passionate about creating intuitive UI/UX designs and enhancing user experiences in web applications.",
        image: "/images/vishal.jpg",
        social: [
          { platform: "GitHub", url: "https://github.com/vishal" },
          { platform: "Twitter", url: "https://twitter.com/vishal" },
          { platform: "LinkedIn", url: "https://linkedin.com/in/vishal" },
          { platform: "Instagram", url: "https://instagram.com/vishal" }
        ]
      }
    ].map((teamMember, index) => (
      <motion.div
        key={index}
        className="bg-gray-900/60 rounded-xl p-6 border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-70" />
            <div className="w-full h-full object-cover rounded-full p-1 relative z-10 bg-black">
              <img 
                src={teamMember.image}
                alt={teamMember.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%23333'/%3E%3Ctext x='75' y='75' font-family='Arial' font-size='30' fill='%23FFF' text-anchor='middle' dominant-baseline='middle'%3E" + teamMember.name.charAt(0) + "%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-200 mb-1">{teamMember.name}</h3>
            <p className="text-gray-400 mb-3">{teamMember.role}</p>
            <p className="text-gray-500 text-sm mb-4">{teamMember.bio}</p>
            
            <div className="flex justify-center sm:justify-start gap-4 mt-auto">
              {teamMember.social.map((platform, i) => (
                <motion.a
                  key={i}
                  href={platform.url}
                  className="text-gray-500 hover:text-gray-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon platform={platform.platform} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* Enhanced Call to Action */}
      <motion.section 
        className="mt-10 text-center relative z-10 mb-10"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="p-8 bg-gradient-to-r from-gray-900/40 to-gray-800/40 rounded-xl border border-gray-700/20"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold block mb-2">Ready to Transform Your Workflow?</h2>
          <p className="text-gray-400 mt-2 max-w-lg mx-auto">
            Join our growing community of developers and contribute to the future of Tailwind development.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="https://github.com"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2">Visit GitHub</span>
              <span>→</span>
            </motion.a>
            <motion.a
              href="#documentation"
              className="px-6 py-3 bg-transparent border border-gray-700 text-white font-medium rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Read Documentation
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;