import React from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">

 <NavLink to="/" className="flex items-center group">
  {/* Logo */}
  <img
    src="https://i.ibb.co.com/TDSyWfY3/portfiologo.png"
    alt="Amena Akter Logo"
    className="h-12 w-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
  />

  {/* Name */}
  <p className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#00CFFF] via-[#FF2DF1] to-[#AD56C4] text-transparent bg-clip-text drop-shadow-md">
    <span className="">A</span>mena{" "}
    <span className="text-[#FF2DF1]">A</span>kter
  </p>
</NavLink>



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
{navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold border-b-2 border-[#00CFFF] pb-1"
                    : "text-gray-200 hover:text-white transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button className="bg-gradient-to-r from-[#00CFFF] to-[#AD56C4] text-white px-4 py-1 rounded-full hover:opacity-90 transition">
              Hire Me
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#2B1E70] rounded-box w-52">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#00CFFF] font-semibold"
                          : "text-gray-300 hover:text-white transition"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <button className="bg-gradient-to-r from-[#00CFFF] to-[#AD56C4] text-white px-3 py-1 rounded-full mt-2">
                    Hire Me
                  </button>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
