import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home','about','projects','certificates','stats','contact'];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const id = href.replace('#', '');
    setActiveSection(id);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h1 className="text-xl font-bold bg-gradient-to-r 
            from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ayush Bangwal
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-baseline space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium 
                transition-all duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { href: 'https://github.com/Ayushbangwal', Icon: Github },
              { href: 'https://www.linkedin.com/in/ayush-bangwal-a1412a323/', Icon: Linkedin },
              { href: 'mailto:ayushbangwal0@gmail.com', Icon: Mail }
            ].map(({ href, Icon }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-2 text-gray-400 hover:text-blue-400 
                bg-white/5 hover:bg-blue-500/10 border border-white/10 
                hover:border-blue-500/30 rounded-lg transition-all duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white 
              hover:bg-white/10 border border-white/10 transition-all"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="md:hidden bg-gray-900/95 border border-white/10 
              rounded-xl mt-2 p-4 overflow-hidden"
            >
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg 
                    text-sm font-medium transition-all duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 
              flex justify-center gap-3">
                {[
                  { href: 'https://github.com/Ayushbangwal', Icon: Github },
                  { href: 'https://www.linkedin.com/in/ayush-bangwal-a1412a323/', Icon: Linkedin },
                  { href: 'mailto:ayushbangwal0@gmail.com', Icon: Mail }
                ].map(({ href, Icon }) => (
                  <a key={href} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 hover:text-blue-400 
                    bg-white/5 rounded-lg border border-white/10 
                    transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;