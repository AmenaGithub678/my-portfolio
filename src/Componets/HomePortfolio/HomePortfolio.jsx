import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
const projects = [
  {
    id: "01",
    title: "AssignMates",
    image: "https://i.ibb.co.com/ZpYCbkX6/sample1.png",
    description: "AssignMates is a full-stack MERN web application designed to simplify group study and assignment management for students and instructors.",
  },
  {
    id: "02",
    title: "Builder",
    image: "https://i.ibb.co.com/fzPQXrXQ/sample2.jpg",
    description: "Builder is a modern and responsive landing page designed for individuals or agencies offering high-quality web design services.",
  },
  {
    id: "03",
    title: "Foodie",
    image: "https://i.ibb.co.com/9mGt8nGR/sample3.jpg",
    description: "Foodie is a fully responsive landing page designed for a modern food-related service or restaurant. The layout is optimized for all devices and built using semantic HTML, custom CSS, Bootstrap, and a touch of JavaScript for interactivity.",
  },
];

const HomePortfolio = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top
      );
      const index = offsets.findIndex((top) => top > window.innerHeight * 0.25);
      setActiveIndex(index === -1 ? projects.length - 1 : Math.max(index - 1, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] text-white py-16 relative">
      <div className="px-6 md:px-12 mb-12">
        <p className="text-lg uppercase tracking-widest text-[#2B1E70]">
          Selected Works
        </p>
        <h2 className="text-4xl text-[#AD56C4] md:text-5xl font-bold">My Portfolio</h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Left-side number (sticky) */}
        <motion.h1
          className="hidden md:block text-[8rem] font-bold text-gray-500 sticky top-24 left-0"
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {projects[activeIndex].id}
        </motion.h1>

        {/* Projects list */}
        <div className="space-y-32 md:ml-32">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <motion.div
                className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] p-1 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full object-cover h-64"
                />
              </motion.div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-[#00CFFF]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See All Projects Button */}
      <div className="flex justify-center mt-16">
        <Link to='/portfolio'>
<button className="bg-gradient-to-r from-[#00CFFF] to-[#AD56C4] px-6 py-2 rounded-full hover:opacity-90 transition">
          See All Projects
        </button>

        </Link>
        
      </div>
    </section>
    );
};

export default HomePortfolio;