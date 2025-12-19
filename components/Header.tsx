import React, { useState, useEffect } from 'react';
import Button from './Button';

// Custom ViralDrip teardrop logo component - Enhanced with gradient
const ViralDripLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Teardrop shape with gradient */}
    <path
      d="M16 2C16 2 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 2 16 2Z"
      fill="url(#logo-gradient)"
    />
    {/* Inner highlight/reflection - water shine effect */}
    <ellipse
      cx="12.5"
      cy="20"
      rx="2.5"
      ry="4"
      fill="white"
      opacity="0.35"
    />
    <ellipse
      cx="11"
      cy="17"
      rx="1.2"
      ry="1.8"
      fill="white"
      opacity="0.6"
    />
  </svg>
);

export { ViralDripLogo };

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-stone-900/5 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2.5 group cursor-pointer">
          {/* Logo Icon - Teardrop with hover animation */}
          <div className="w-9 h-9 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">
            <ViralDripLogo className="w-full h-full" />
          </div>
          <span className="text-xl font-display font-bold text-stone-900 tracking-tight">
            ViralDrip
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">.ai</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={scrollToCalendly}
            className="hidden sm:flex text-sm py-2.5 px-6"
            size="sm"
          >
            Book Free Audit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
