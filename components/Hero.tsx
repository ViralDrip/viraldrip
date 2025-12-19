import React from 'react';
import { ArrowRight, Play, Zap, Target, Calendar, Clock, Mic, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: Zap, title: "Instant Response", subtitle: "AI replies in seconds, not hours", color: "text-orange-500" },
  { icon: Mic, title: "Sounds Like You", subtitle: "Trained on your voice and content", color: "text-amber-500" },
  { icon: Target, title: "Smart Qualifying", subtitle: "Know who's ready to buy", color: "text-purple-500" },
  { icon: Clock, title: "24/7 Autopilot", subtitle: "Works while you sleep", color: "text-emerald-500" },
  { icon: Calendar, title: "Hot Lead Routing", subtitle: "Only talk to buyers", color: "text-blue-500" },
];

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; subtitle: string; color: string }> = ({ icon: Icon, title, subtitle, color }) => (
  <div className="group flex-shrink-0 w-[280px] p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left flex items-center gap-4 mx-2">
    <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-orange-50 transition-colors shrink-0">
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <div>
      <h3 className="font-display font-bold text-slate-900 text-base leading-tight">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* White background base */}
      <div className="absolute inset-0 bg-white" />

      {/* Background Decor - Soft Line Grid (centered on content) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #e8eaed 1px, transparent 1px), linear-gradient(to bottom, #e8eaed 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 50% 50% at 50% 40%, #000 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 40%, #000 30%, transparent 70%)',
        }}
      />

      <div className="relative pt-24 sm:pt-32 pb-8 sm:pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">

        {/* Top Badge */}
        <div className="animate-fade-in-up [animation-delay:0ms] inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-5 sm:mb-8 transition-colors hover:border-orange-200 hover:bg-orange-50/50 cursor-default group">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-orange-700">For Instagram Coaches & Course Creators Making $10k-50k/mo</span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in-up [animation-delay:200ms] font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 max-w-4xl leading-[1.1]">
          Your Instagram Content Works. <br className="hidden md:block" />
          <span className="font-accent italic text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 relative inline-block">
            Your DMs Don't.
            {/* Underline decoration */}
            <svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up [animation-delay:400ms] text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-10 max-w-2xl leading-relaxed">
          You're getting DMs, but leads go cold because you can't respond fast enough. Your content is doing its job — <span className="font-semibold text-slate-900">your DMs aren't</span>. We fix that.
        </p>

        {/* Statistics Bar - Compact on mobile */}
        <div className="animate-fade-in-up [animation-delay:600ms] w-full max-w-3xl mb-8 sm:mb-12 relative">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative z-10">
            <div className="flex flex-col items-center justify-center">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">&lt;30s</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide mt-0.5 sm:mt-1">Response Time</span>
            </div>
            <div className="w-px h-8 sm:h-10 bg-slate-200" />
            <div className="flex flex-col items-center justify-center">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">3x</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide mt-0.5 sm:mt-1">More Conversions</span>
            </div>
            <div className="w-px h-8 sm:h-10 bg-slate-200" />
            <div className="flex flex-col items-center justify-center">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">2+ Hrs</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide mt-0.5 sm:mt-1">Saved Daily</span>
            </div>
          </div>
        </div>

        {/* CTA Area */}
        <div className="animate-fade-in-up [animation-delay:800ms] flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-16">
          <button
            onClick={scrollToCalendly}
            className="group relative font-display bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-full transition-all shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.6)] hover:-translate-y-1 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free DM Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </button>

          <button
            onClick={scrollToCalendly}
            className="flex items-center gap-3 px-6 py-4 rounded-full text-slate-700 font-display font-semibold hover:bg-slate-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-orange-500 ml-0.5 fill-orange-500" />
            </div>
            See How It Works
          </button>
        </div>

        {/* Trust Text - Hidden on mobile */}
        <div className="animate-fade-in-up [animation-delay:900ms] hidden sm:flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-16">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-500" /> 30 minutes
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-500" /> 100% free
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-orange-500" /> No pitch
          </span>
        </div>

        {/* Infinite Scrolling Feature Cards - Hidden on mobile */}
        <div className="animate-fade-in-up [animation-delay:1000ms] hidden sm:block w-full max-w-[100vw] overflow-hidden relative group/scroller">
          {/* This mask does the fading effect on the content */}
          <div
            className="flex w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="flex min-w-full shrink-0 gap-4 animate-scroll group-hover/scroller:[animation-play-state:paused] py-4">
              {[...features, ...features, ...features].map((feature, idx) => (
                <FeatureCard
                  key={`scroll-1-${idx}`}
                  icon={feature.icon}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  color={feature.color}
                />
              ))}
            </div>
            <div className="flex min-w-full shrink-0 gap-4 animate-scroll group-hover/scroller:[animation-play-state:paused] py-4" aria-hidden="true">
              {[...features, ...features, ...features].map((feature, idx) => (
                <FeatureCard
                  key={`scroll-2-${idx}`}
                  icon={feature.icon}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  color={feature.color}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
