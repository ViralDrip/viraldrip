import React, { useState, useEffect } from 'react';
import Button from './Button';

// Custom ViralDrip teardrop logo component
const ViralDripLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Teardrop shape */}
    <path
      d="M16 2C16 2 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 2 16 2Z"
      fill="currentColor"
    />
    {/* Inner highlight/reflection - water shine effect */}
    <ellipse
      cx="12.5"
      cy="20"
      rx="2.5"
      ry="4"
      fill="white"
      opacity="0.3"
    />
    <ellipse
      cx="11"
      cy="17"
      rx="1"
      ry="1.5"
      fill="white"
      opacity="0.5"
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
            {/* Logo Icon - Teardrop */}
            <div className="w-8 h-8 text-orange-500 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                <ViralDripLogo className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              ViralDrip
              <span className="text-orange-500">.ai</span>
            </span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button onClick={scrollToCalendly} className="hidden sm:flex text-sm py-2 px-5">
            Get Free Blueprint
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;