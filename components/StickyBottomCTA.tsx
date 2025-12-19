import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const StickyBottomCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 600;

      const calendlySection = document.getElementById('calendly-section');
      if (calendlySection) {
        const rect = calendlySection.getBoundingClientRect();
        const isCalendlyInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsCalendlyVisible(isCalendlyInView);
      }

      setIsVisible(shouldShow && !isCalendlyVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCalendlyVisible]);

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'
      }`}
    >
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />

      {/* Shadow */}
      <div className="absolute -top-4 left-0 right-0 h-4 bg-gradient-to-t from-stone-900/10 to-transparent" />

      <div className="relative p-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left text */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-brand animate-pulse-slow">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-stone-700 font-display font-semibold text-sm">
              Limited spots available
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToCalendly}
            className="group flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-display font-bold px-5 py-3 rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 active:scale-95"
          >
            Book Free Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
