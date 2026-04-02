import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Navita Kumari</h3>
          <p>
            I am a Web Developer skilled in HTML, CSS, JavaScript, React and basic MERN stack. I love creating responsive, modern websites.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/navitak217-design" target="_blank" className="hover:text-indigo-500 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/navita-kumari-5b118535b/" target="_blank" className="hover:text-indigo-500 transition">
              <FaLinkedin className="text-2xl" />
            </a>
          
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Naveeta Kumari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;