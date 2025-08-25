import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaLaptopCode, FaReact, FaFigma, FaPencilRuler, FaHtml5 } from "react-icons/fa";

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      icon: <FaFigma className="text-4xl text-[#AD56C4]" />,
      title: "Figma to HTML Conversion",
      description:
        "Transforming your Figma designs into pixel-perfect, fully responsive websites using HTML, CSS, and JavaScript — ensuring 100% client satisfaction.",
    },
    {
      icon: <FaPencilRuler className="text-4xl text-[#AD56C4]" />,
      title: "PSD to HTML Conversion",
      description:
        "Converting PSD designs into clean, responsive, and cross-browser-compatible HTML/CSS/JS websites with professional precision.",
    },
    {
      icon: <FaReact className="text-4xl text-[#AD56C4]" />,
      title: "MERN Stack Development",
      description:
        "Building full-stack, error-free web applications using MongoDB, Express, React, and Node.js with a focus on performance and scalability.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-[#AD56C4]" />,
      title: "Full Web Development",
      description:
        "Designing and developing complete websites from scratch using HTML, CSS, JavaScript, MongoDB, Express, Node, and ReactJS.",
    },
    {
      icon: <FaHtml5 className="text-4xl text-[#AD56C4]" />,
      title: "Front-End Development",
      description:
        "Crafting beautiful, responsive, and user-friendly interfaces using HTML, CSS, Bootstrap, JavaScript, and React.",
    },
    {
      icon: <FaCode className="text-4xl text-[#AD56C4]" />,
      title: "Creative Web Design",
      description:
        "Designing responsive, error-free websites and converting PSD or Figma designs into functional HTML websites.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-white">What I Offer</h1>
          <p className="text-lg text-white mt-2">
            My professional services designed to meet your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#2B1E70] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
