
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility, {
      passive: true
    });

    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-8 right-8 z-40
      p-3.5 bg-blue-600 text-white rounded-full
      border border-blue-500/30
      hover:bg-blue-700
      transition-colors duration-200
      focus:outline-none focus:ring-2
      focus:ring-blue-400 focus:ring-offset-2
      focus:ring-offset-gray-900"
    >
      <ArrowUp size={21} strokeWidth={2} />
    </button>
  );
};

export default BackToTop;
