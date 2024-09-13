import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-6 flex flex-col items-center">
      <h1 className="text-lg font-semibold">©sankitdev 2024</h1>
      <p className="text-sm font-light mb-2">Let's connect on social media!</p>
      <div className="flex gap-4 text-3xl transition-all duration-300">
        <a
          href="https://www.linkedin.com/in/sankitdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
          className="hover:scale-125 hover:text-blue-500 transition-transform duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/sankitdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile"
          className="hover:scale-125 hover:text-gray-800 dark:hover:text-gray-300 transition-transform duration-200"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
