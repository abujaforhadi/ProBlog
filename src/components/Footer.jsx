import React from "react";

import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white shadow rounded-xl w-full p-6 lg:p-9">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex justify-center sm:justify-between gap-[30px] w-full flex-wrap">
          <a
            href="/#service"
            className="text-[0.9rem] text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            Service
          </a>
          <a
            href="/#features"
            className="text-[0.9rem] text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            Features
          </a>
          <a
            href="/#team"
            className="text-[0.9rem] text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            Our Team
          </a>
          <a
            href="https://abujafor.me/#portfolio"
            className="text-[0.9rem] text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            Portfolio
          </a>
          <a
            href="https://abujafor.me/blog"
            className="text-[0.9rem] text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            Blog
          </a>
          <a
            href="https://abujafor.me/#contact"
            className="text-[0.9rem] text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        <div className="flex items-center flex-wrap gap-[10px] text-gray-700">
          <a
            href="https://github.com/abujaforhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/abujaforhadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-blue-500 transition-all duration-300"
          >
            <BsLinkedin />
          </a>
        </div>

        <div className="border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
          <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">
            © 2025 Md. Abu Jafor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
