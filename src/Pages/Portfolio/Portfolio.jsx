import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: "01",
    title: "AssignMates",
    image: "https://i.ibb.co.com/ZpYCbkX6/sample1.png",
    description:
      "AssignMates is a full-stack MERN web application designed to simplify group study and assignment management for students and instructors.",
    features: [
      "Create & manage group assignments",
      "User authentication with JWT",
      "Responsive design",
    ],
    techStack: ["Node.js", "React.js", "MongoDB", "Express.js"],
    role: "As a frontend developer, I implemented pagination and fixed unknown bugs.",
    live: "https://my-online-assignment-project.web.app/",
    clientRepo: "https://github.com/AmenaGithub678/assignment-management-client-repo",
    serverRepo: "https://github.com/AmenaGithub678/assignment-management-server-side-repo",
  },
{
  id: "02",
  title: "Freelance Fusion",
  image: "https://i.ibb.co.com/xqbh7S7j/image1.png", 
  description:
    "Freelance Fusion is a full-stack freelance task marketplace where users can post tasks and freelancers can place bids. This platform connects clients with freelancers efficiently.",
  features: [
    "Firebase authentication (Register/Login/Logout)",
    "Add, view, update, and delete freelance tasks",
    "Place bids with dynamic bid count",
    "My Posted Tasks page to manage tasks (Update/Delete/View Bids)",
    "Task filtering and sorting by category or deadline",
    "Alerts for successful actions",
    "Fully responsive design (Mobile & Desktop)"
  ],
  techStack: [
    "React.js",
    "React Router",
    "Firebase Authentication",
    "Tailwind CSS",
    "DaisyUI",
    "React Icons",
    "Node.js",
    "Express.js",
    "MongoDB"
  ],
  role: "Built full-stack application including authentication, task management, bidding system, and responsive UI.",
  live: "https://freelance-application-5ac09.web.app/",       
  clientRepo: "https://github.com/AmenaGithub678/freelancer-platform", 
 serverRepo: " https://github.com/AmenaGithub678/freelancer-server-side",
 
},
  {
    id: "03",
    title: "Builder",
    image: "https://i.ibb.co.com/fzPQXrXQ/sample2.jpg",
    description:
      "Builder is a modern and responsive landing page designed for individuals or agencies offering high-quality web design services.",
    features: [
      "Responsive layout",
      "Modern UI",
      "Optimized performance",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Designed UI components and optimized performance.",
    live: "https://amenagithub678.github.io/Builder-Landing-Page/",
    clientRepo: "https://github.com/AmenaGithub678/Builder-Landing-Page",
    serverRepo: "#",
  },
  {
    id: "04",
    title: "Foodie",
    image: "https://i.ibb.co.com/9mGt8nGR/sample3.jpg",
    description:
      "Foodie is a fully responsive landing page designed for a modern food-related service or restaurant.",
    features: [
      "Responsive design",
      "Bootstrap styling",
      "Interactive UI",
    ],
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    role: "Designed responsive layout and interactive features.",
    live: "https://amenagithub678.github.io/Foodie-Website/",
    clientRepo: "https://github.com/AmenaGithub678/Foodie-Website",
    serverRepo: "#",
  },
  {
    id: "05",
    title: "Natures Platter",
    image: "https://i.ibb.co.com/8gHwQpnT/Sample4.png",
    description:
      "Natures Platter is a clean, modern, and fully responsive landing page website created for showcasing organic, natural, or healthy food-related content. The design uses Tailwind CSS for fast and efficient styling along with subtle animations for a smooth user experience.",
    features: [
      "Smooth animations to enhance user experience",
      "Clean and minimalistic UI using utility-first Tailwind CSS",
      "Mobile-first approach",
    ],
    techStack: ["Html", "Taliwind-css", "JavaScript", "Jquery"],
    role: "Beautiful hero section with call-to-action.",
    live: "https://amenagithub678.github.io/nature-platter-as3/",
    clientRepo: "https://github.com/AmenaGithub678/nature-platter-as3",
    serverRepo: "#",
  },
{
  id: "06",
  title: "TourMates",
  image: "https://i.ibb.co.com/Z1fxcQdr/image2.png",
  description:
    "TourMates is an online platform designed to help travelers explore Bangladesh with ease. It features comprehensive packages, verified tour guides, booking and payment options, user-generated stories, and a full role-based dashboard for Admins, Tourists, and Guides.",
  features: [
    "Responsive Design for mobile, tablet, and desktop views",
    "JWT Authentication with email/password and Google Sign-In",
    "Role-Based Dashboard for Tourists, Tour Guides, and Admins",
    "Randomized Sections using MongoDB $sample for packages, guides, and stories",
    "Secure Booking system with Stripe payment integration and status tracking",
    "Tour Guide Application System with CV and reason input",
    "Dynamic Admin Panel to manage users, guides, packages, and applications",
    "Tour Plan, Image Gallery, and About Tour sections on each Package Details page",
    "User and Guide Stories management with add, edit, delete, and multi-image support",
    "Community Page & About Us for user stories and developer info"
  ],
  techStack: [
    "React",
    "Tailwind CSS",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Stripe",
    "JWT"
  ],
  role: "Full-stack development – implemented authentication, booking system, payments, role-based dashboards, and admin management.",
  live: "https://tourist-management-proje-6c2d2.web.app/",
  clientRepo: "https://github.com/AmenaGithub678/travel-management-system",
  serverRepo: "https://github.com/AmenaGithub678/travel-management-server-side-system"
}



//   {
//     id: "06",
//     title: "ShopSphere",
//     image: "https://i.ibb.co.com/sPp0ZbV/shopsphere.png",
//     description:
//       "ShopSphere is a responsive e-commerce site with cart, wishlist, and Stripe payment integration.",
//     features: [
//       "Cart & wishlist system",
//       "Stripe payment integration",
//       "Responsive design",
//     ],
//     techStack: ["Next.js", "Tailwind CSS", "Stripe"],
//     role: "Developed payment and cart functionality.",
//     live: "#",
//     clientRepo: "#",
//     serverRepo: "#",
//   },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-lg uppercase tracking-widest text-gray-400">
            Selected Works
          </p>
          <h2 className="text-4xl font-bold text-primary">My Portfolio</h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 w-full bg-gradient-to-r from-[#00CFFF] to-[#AD56C4] py-2 rounded-lg text-white font-semibold hover:opacity-90 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-white text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              {/* Modal Content */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold text-primary mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              {/* Features */}
              <h3 className="text-xl font-semibold text-[#00CFFF] mb-2">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <h3 className="text-xl font-semibold text-[#AD56C4] mb-2">
                Tech Stack
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.techStack.join(", ")}
              </p>

              {/* Role */}
              <h3 className="text-xl font-semibold text-[#00CFFF] mb-2">
                Role
              </h3>
              <p className="text-gray-300 mb-4">{selectedProject.role}</p>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#00CFFF] py-2 rounded-lg text-center font-semibold hover:opacity-90"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#AD56C4] py-2 rounded-lg text-center font-semibold hover:opacity-90"
                >
                  Client Repo
                </a>
                <a
                  href={selectedProject.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 py-2 rounded-lg text-center font-semibold hover:opacity-90"
                >
                  Server Repo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
