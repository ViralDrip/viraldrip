import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const StickyBottomCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCalendlyVisible, setIsCalendlyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 600px)
      const shouldShow = window.scrollY > 600;

      // Hide when Calendly section is visible
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg md:hidden transform transition-transform duration-300">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-orange-500" />
          <span className="text-slate-600 font-medium">Limited spots</span>
        </div>
        <button
          onClick={scrollToCalendly}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display font-semibold px-6 py-3 rounded-full shadow-lg shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
        >
          Book Free Audit
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
