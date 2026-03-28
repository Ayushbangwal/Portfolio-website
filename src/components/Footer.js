import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ayushbangwal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ayush-bangwal-a1412a323/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:ayushbangwal0@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900/80 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r 
            from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ayush Bangwal
            </h3>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Aspiring software developer passionate about creating 
              innovative solutions and learning new technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                    className="p-2 bg-white/5 border border-white/10 
                    rounded-lg text-gray-400 hover:text-blue-400 
                    hover:border-blue-500/40 hover:bg-blue-500/10
                    transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4 text-gray-400 
            uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-blue-400 
                    transition-colors duration-300 text-sm 
                    flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4 text-gray-400 
            uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <span className="text-gray-300 font-medium">Email: </span>
                <a href="mailto:ayushbangwal0@gmail.com"
                  className="hover:text-blue-400 transition-colors">
                  ayushbangwal0@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-300 font-medium">Location: </span>
                Srinagar, Uttarakhand
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 mt-10 pt-6"
        >
          <div className="flex flex-col items-center justify-center 
          text-center gap-1">
            <p className="text-sm text-gray-400 tracking-wide">
              © {currentYear}{' '}
              <span className="text-white font-semibold">Ayush Bangwal</span>
              . All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              Built with React, Tailwind CSS, and lots of
              <Heart size={11} className="text-red-500" fill="currentColor" />
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;