import React from 'react';
import Button from './Button';
import { Sparkles, Clock, Shield } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-display font-bold mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          Stop Leaving Money on the Table
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Turn Your Instagram DMs Into a
          <br />
          <span className="font-accent italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Sales Machine?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Your content is bringing the leads. Let's make sure your DMs convert them.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6">
          <Button
            onClick={scrollToCalendly}
            withArrow
            className="text-lg py-5 px-12 shadow-brand-lg hover:shadow-[0_10px_60px_0_rgba(249,115,22,0.4)] transition-shadow"
          >
            Book Your Free DM Audit
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              30 minutes
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-500" />
              100% free
            </span>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <p className="text-slate-500 text-lg">
            Or keep leaving money in your Instagram DMs. Your call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
