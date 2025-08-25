import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4]
    text-gray-300 py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Text */}
        <p className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} Amena Akter. All Rights Reserved.  
          <span className="block sm:inline"> Built with <span className="text-red-500">❤</span> using React & Tailwind CSS.</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/AmenaGithub678"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amena-akter-0736b52b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
