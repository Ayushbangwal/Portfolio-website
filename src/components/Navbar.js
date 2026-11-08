
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Stats', href: '#stats' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    href: 'https://github.com/Ayushbangwal',
    label: 'GitHub',
    Icon: Github
  },
  {
    href: 'https://www.linkedin.com/in/ayush-bangwal-a1412a323/',
    label: 'LinkedIn',
    Icon: Linkedin
  },
  {
    href: 'mailto:ayushbangwal0@gmail.com',
    label: 'Email',
    Icon: Mail
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter(Boolean);

      let currentSection = 'home';

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);

    const section = document.getElementById(href.slice(1));

    if (section) {
      const top =
        section.getBoundingClientRect().top +
        window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      setActiveSection(href.slice(1));
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
      bg-[#111827]/95 backdrop-blur-sm
      border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-xl font-semibold text-white
            tracking-tight hover:text-blue-400
            transition-colors duration-200"
          >
            Ayush Bangwal
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">

            {navItems.map((item) => {
              const isActive =
                activeSection === item.href.slice(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`text-sm font-medium py-2
                  border-b-2 transition-colors duration-200
                  ${
                    isActive
                      ? 'text-white border-blue-400'
                      : 'text-gray-400 border-transparent hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">

            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-gray-400
                hover:text-white transition-colors duration-200"
              >
                <Icon size={19} strokeWidth={1.8} />
              </a>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300
            hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X size={23} />
              : <Menu size={23} />
            }
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">

            <div className="flex flex-col">

              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    aria-current={isActive ? 'location' : undefined}
                    className={`px-3 py-3 text-sm font-medium
                    border-l-2 transition-colors duration-200
                    ${
                      isActive
                        ? 'text-white border-blue-400 bg-white/5'
                        : 'text-gray-400 border-transparent hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-5 mt-4
            pt-4 px-3 border-t border-white/10">

              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white
                  transition-colors duration-200"
                >
                  <Icon size={19} />
                </a>
              ))}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
