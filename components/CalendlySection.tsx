import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, Zap, MapPin, Target, Lightbulb, Sparkles } from 'lucide-react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CalendlySection: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCalendly = () => {
      if (calendlyRef.current && window.Calendly) {
        calendlyRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/jonas-algowerk/30min-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&text_color=0f172a&primary_color=f97316',
          parentElement: calendlyRef.current,
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);

      return () => clearInterval(checkCalendly);
    }
  }, []);

  const benefits = [
    {
      icon: MapPin,
      title: 'Leak Analysis',
      desc: 'See where leads drop off in your DMs',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Custom DM Strategy',
      desc: 'A clear plan for your Instagram',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Lightbulb,
      title: 'AI Fit Assessment',
      desc: 'See if automation makes sense for you',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="calendly-section" className="relative py-28 overflow-hidden">
      {/* Dark gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/25 to-transparent rounded-full blur-[150px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-amber-500/15 to-transparent rounded-full blur-[120px] animate-blob-slow" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-400 text-sm font-display font-bold mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4" fill="currentColor" />
              Free DM Audit
              <Sparkles className="w-3 h-3 ml-1" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Get Your Free
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-400 to-amber-400">
                Instagram DM Audit
              </span>
            </h2>

            <p className="text-xl text-stone-300 mb-10 leading-relaxed">
              In 30 minutes, I'll show you exactly where leads are falling off in your Instagram DMs — and how to fix it.
            </p>

            {/* What You Get - Enhanced cards */}
            <div className="space-y-4 mb-10">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className={`relative shrink-0`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Clock, text: '30 minutes' },
                { icon: ShieldCheck, text: '100% free' },
              ].map((badge, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-stone-800/80 border border-stone-700/50 text-stone-300 text-sm font-medium backdrop-blur-sm"
                >
                  <badge.icon className="w-4 h-4 text-orange-500" />
                  {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Calendly */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent rounded-[2rem] blur-2xl" />

            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20">
              {/* Calendly Header */}
              <div className="relative bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-6 py-5 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                <h3 className="relative text-white font-display font-bold text-xl">Pick Your Time</h3>
                <p className="relative text-orange-100 text-sm mt-1">Choose a slot that works for you</p>
              </div>

              {/* Calendly Embed */}
              <div
                ref={calendlyRef}
                className="w-full h-[500px] sm:h-[580px] md:h-[650px]"
              />
            </div>

            {/* Steps Below */}
            <div className="mt-8 hidden sm:flex items-center justify-center gap-4 text-sm">
              {['Pick time', 'Confirm', 'Get your audit'].map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-2.5 group">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white text-xs font-display font-bold flex items-center justify-center shadow-brand group-hover:scale-110 transition-transform">
                      {i + 1}
                    </span>
                    <span className="text-stone-400 font-medium group-hover:text-white transition-colors">{step}</span>
                  </div>
                  {i < 2 && <div className="w-10 h-px bg-gradient-to-r from-stone-700 to-stone-600" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
