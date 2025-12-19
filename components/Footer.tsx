import React from 'react';
import { Link } from 'react-router-dom';
import { ViralDripLogo } from './Header';

const Footer: React.FC = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-950 py-16 overflow-hidden">
      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent" />

      {/* Very subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-orange-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center space-x-2.5 mb-3 group">
              <div className="w-7 h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <ViralDripLogo className="w-full h-full" />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-tight">
                ViralDrip
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">.ai</span>
              </span>
            </Link>
            <p className="text-stone-500 text-sm">
              AI-powered DM systems for Instagram creators.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 text-sm font-medium">
            <Link
              to="/privacy"
              className="text-stone-500 hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-stone-500 hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <button
              onClick={scrollToCalendly}
              className="text-stone-500 hover:text-orange-400 transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-stone-800/50">
          <p className="text-center text-xs text-stone-600">
            &copy; {new Date().getFullYear()} ViralDrip.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
