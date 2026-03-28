import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code2, MapPin } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r 
            from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ayush Bangwal
            </h3>
            <p className="text-gray-400 mb-2 text-sm leading-relaxed">
              Aspiring Full Stack Developer passionate about building
              real-world web apps and AI-based projects.
            </p>
            <p className="text-gray-500 text-sm mb-6 flex items-center gap-1.5">
              <MapPin size={13} className="text-blue-400" />
              Srinagar, Uttarakhand, India
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
                    className="p-2.5 bg-white/5 border border-white/10 
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
            <h4 className="font-semibold mb-5 text-white uppercase 
            tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 6 }}
                    className="text-gray-400 hover:text-blue-400 
                    transition-colors duration-300 text-sm 
                    flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 
                    group-hover:bg-blue-400 transition-colors"/>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-5 text-white uppercase 
            tracking-widest text-sm">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm mb-8">
              <a href="mailto:ayushbangwal0@gmail.com"
                className="flex items-center gap-2 text-gray-400 
                hover:text-blue-400 transition-colors">
                <Mail size={14} className="text-blue-400" />
                ayushbangwal0@gmail.com
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} className="text-red-400" />
                Srinagar, Uttarakhand
              </p>
            </div>
            <h4 className="text-sm font-semibold mb-3 text-white 
            uppercase tracking-widest flex items-center gap-2">
              <Code2 size={14} className="text-blue-400" />
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'].map((tech) => (
                <span key={tech}
                  className="text-xs px-2.5 py-1 bg-blue-500/10 
                  border border-blue-500/20 text-blue-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar — centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-6 text-center"
        >
          <p className="text-sm text-gray-400">
            © {currentYear}{' '}
            <span className="text-white font-semibold">Ayush Bangwal</span>
            . All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;