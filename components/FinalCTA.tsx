import React from 'react';
import Button from './Button';
import { Sparkles, Clock, Shield, ArrowRight, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Rich dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-[150px] animate-blob" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-[100px] animate-blob-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 text-sm font-display font-bold mb-10 backdrop-blur-sm animate-fade-in-up">
          <Sparkles className="w-4 h-4" fill="currentColor" />
          Stop Leaving Money on the Table
          <Zap className="w-4 h-4" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in-up [animation-delay:150ms]">
          Ready to Turn Your Instagram DMs Into a
          <br className="hidden sm:block" />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400">
              Sales Machine?
            </span>
            {/* Decorative underline */}
            <svg className="absolute w-full h-3 -bottom-2 left-0" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path
                d="M2 8 Q 50 2 100 8 T 198 6"
                stroke="url(#cta-underline)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="cta-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FB923C" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FB923C" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:300ms]">
          Your content is bringing the leads. Let's make sure your DMs convert them.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-8 animate-fade-in-up [animation-delay:450ms]">
          <button
            onClick={scrollToCalendly}
            className="group relative bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-400 hover:via-orange-500 hover:to-amber-400 text-white text-xl font-display font-bold py-6 px-14 rounded-full transition-all duration-300 shadow-brand-xl hover:shadow-glow hover:-translate-y-1 hover:scale-[1.02] flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              <Sparkles className="w-6 h-6" />
              Book Your Free DM Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-stone-400 text-sm font-medium">
            <span className="flex items-center gap-2.5 hover:text-white transition-colors cursor-default">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              30 minutes
            </span>
            <span className="flex items-center gap-2.5 hover:text-white transition-colors cursor-default">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              100% free
            </span>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 pt-12 border-t border-stone-800 animate-fade-in-up [animation-delay:600ms]">
          <p className="text-stone-500 text-lg italic font-medium">
            "Or keep leaving money in your Instagram DMs. Your call."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
