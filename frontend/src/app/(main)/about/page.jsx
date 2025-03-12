import React from 'react'

const About = () => {
  return (
<div className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <img src="https://i.imgur.com/WbQnbas.png" />
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text">
      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
        About us
      </span>
      <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
        About <span className="text-indigo-600">Our AV PLUGIN</span>
      </h2>
      <p className="text-gray-700">
      Welcome to AV Plugin, your go-to solution for enhancing website functionality with seamless integrations and optimized performance. Our mission is to simplify development by providing powerful, user-friendly tools that streamline workflows and improve user experiences.

At AV Plugin, we prioritize efficiency, innovation, and reliability, ensuring that our solutions are tailored to meet the needs of developers and businesses alike. Whether you're looking to enhance UI elements, boost accessibility, or improve overall site performance, we've got you covered.

Join us on our journey to build a smarter, more efficient web experience. 
      </p>
    </div>
  </div>
</div>

  )
}

export default About;