import React from 'react';
import aboutImg from "../../assets/images/profile.jpg";
const HomeAbout = () => {
    return (
     <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] py-16" id="about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About Me
        </h2>

        {/* Image with animated border */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-[#FFD700] animate-pulse"></div>
          <img
            src={aboutImg}
            alt="About"
            className="w-full h-full object-cover rounded-full border-4 border-[#FFD700] shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          I'm <span className="font-semibold text-[#AD56C4]">Amena Akter</span>, 
          a passionate <span className="font-semibold text-[#00CFFF]">MERN-Stack Web Developer </span> 
           specializing in <span className="font-semibold text-[#AD56C4]">Frontend Development</span>.  
          I enjoy solving real-world problems through 
          <span className="font-semibold text-[#00CFFF]"> clean</span>, 
          <span className="font-semibold text-[#AD56C4]"> scalable</span>, 
          and <span className="font-semibold text-[#00CFFF]"> intuitive user experiences</span>.
        </p>
      </div>
    </section>
    );
};

export default HomeAbout;