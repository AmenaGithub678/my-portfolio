import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import animationData from "../../assets/lotties/Developer.json"; 

const Banner = () => {
    return (
    <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left Side */}
        <div className="text-white md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-lg font-medium">Hello, My name is</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Amena Akter</h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN Stack Developer",
                "React Developer",
                "Problem Solver"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#00CFFF] to-[#AD56C4] text-white px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-[#2B1E70] transition"
            >
              See Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
    );
};

export default Banner;