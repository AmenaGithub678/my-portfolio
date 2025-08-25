import React from 'react';

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiBootstrap,
  SiFramer,
  SiPython,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React JS", icon: <SiReact className="text-blue-500" /> },
  { name: "Node JS", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "AOS", icon: <MdAnimation className="text-red-500" /> }, 
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },

];

const Skills = () => {
    return (
        <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] py-16" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Title */}
        <p className="text-lg text-gray-400 mb-2">My Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          The <span className="text-[#00CFFF]">Secret</span> Sauce
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-white text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    );
};

export default Skills;