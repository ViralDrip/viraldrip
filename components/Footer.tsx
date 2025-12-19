import React from 'react';
import { Link } from 'react-router-dom';
import { ViralDripLogo } from './Header';

const Footer: React.FC = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-2 group">
                <div className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform">
                    <ViralDripLogo className="w-full h-full" />
                </div>
                <span className="text-lg font-display font-bold text-white tracking-tight">ViralDrip<span className="text-orange-500">.ai</span></span>
            </Link>
            <p className="text-slate-400 text-sm">AI-powered DM systems for Instagram creators.</p>
          </div>

          <div className="flex space-x-6 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <button onClick={scrollToCalendly} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} ViralDrip.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;