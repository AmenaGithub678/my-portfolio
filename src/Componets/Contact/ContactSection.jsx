import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#00CFFF] via-[#2B1E70] to-[#AD56C4] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-lg text-white mt-2">Let's make it happen.</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl p-6 md:p-10 shadow-lg">
          
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#2B1E70]">
              Let’s Create Something Amazing Together
            </h2>
            <p className="text-gray-600">
              Whether you have an idea in mind or need help shaping one,
              I’m here to collaborate and bring your vision to life.
              Let’s connect!
            </p>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-[#AD56C4] text-xl" />
              <span className="text-gray-700">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-[#AD56C4] text-xl" />
              <a href="mailto:akteramena102@gmail.com" className="text-gray-700 hover:text-[#AD56C4]">
                akteramena102@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-[#AD56C4] text-xl" />
              <a href="https://wa.me/8801892494089" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#AD56C4]">
                +880 1892 494 089
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h3 className="text-xl font-semibold text-[#2B1E70] mb-4">Say Hello</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Drop a name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#AD56C4]"
              />
              <input
                type="email"
                placeholder="Wanna hear back? Add your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#AD56C4]"
              />
              <input
                type="text"
                placeholder="Enter your subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#AD56C4]"
              />
              <textarea
                rows="4"
                placeholder="Enter Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#AD56C4]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#AD56C4] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#8f3ca8] transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
