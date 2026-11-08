
import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowUpRight
} from 'lucide-react';

import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center
      bg-gray-900 text-white px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col
      items-center text-center">

        {/* Profile Image */}
        <div className="mb-8">
          <img
            src={profile}
            alt="Ayush Bangwal"
            className="w-36 h-36 sm:w-40 sm:h-40
            rounded-full object-cover
            border border-gray-700"
          />
        </div>

        {/* Introduction */}
        <p className="text-sm font-medium tracking-widest
        uppercase text-blue-400 mb-4">
          B.Tech CSE Student · Web Developer
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl
        font-bold tracking-tight mb-5">
          Hi, I'm Ayush Bangwal.
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg
        leading-8 text-gray-400 mb-8">
          I build web applications using React and JavaScript,
          and work with backend technologies and databases.
          I enjoy learning new technologies and improving my
          development skills through practical projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row
        items-center justify-center gap-3 mb-10">

          <a
            href="#projects"
            className="inline-flex items-center justify-center
            gap-2 px-7 py-3 rounded-md
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition-colors duration-200"
          >
            View Projects
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center
            gap-2 px-7 py-3 rounded-md
            border border-gray-600 text-gray-200 font-medium
            hover:border-gray-400 hover:text-white
            transition-colors duration-200"
          >
            Contact Me
            <Mail size={18} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center
            gap-2 px-7 py-3 rounded-md
            border border-gray-700 text-gray-300 font-medium
            hover:bg-gray-800 hover:text-white
            transition-colors duration-200"
          >
            Download CV
            <Download size={18} />
          </a>

        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-7">

          <a
            href="https://github.com/Ayushbangwal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white
            transition-colors duration-200"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/ayush-bangwal-a1412a323/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white
            transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:ayushbangwal0@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white
            transition-colors duration-200"
          >
            <Mail size={22} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;
