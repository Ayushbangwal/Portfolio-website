
import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ayushbangwal',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ayush-bangwal-a1412a323/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:ayushbangwal0@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavigation = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111827] border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Ayush Bangwal
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-5">
              Computer Science student interested in web development
              and building practical applications.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
              <MapPin size={15} />
              <span>Srinagar, Uttarakhand, India</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={19} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Get in Touch
            </h4>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Have a question or an opportunity to discuss?
              Feel free to reach out.
            </p>

            <a
              href="mailto:ayushbangwal0@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Mail size={16} />
              ayushbangwal0@gmail.com
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Ayush Bangwal. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
