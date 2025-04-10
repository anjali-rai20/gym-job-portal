import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
            JobPortal
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Your ultimate platform for finding your dream job and advancing your
            career with personalized recommendations.
          </p>
          <div className="flex gap-4 mt-6 text-2xl">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:ml-auto"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Career Resources
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:ml-auto"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:ml-auto"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">
            Stay Connected
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest job opportunities
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-gray-800 text-gray-200 rounded-l-md border-gray-700 border focus:outline-none focus:border-purple-500 w-full"
            />
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-r-md transition-all duration-300">
              Join
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="text-center py-6 border-t border-gray-800 text-sm text-gray-500">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
