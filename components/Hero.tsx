import React from 'react';
import { ArrowRight, Play, Zap, Target, Calendar, Clock, Mic, CheckCircle2, Sparkles } from 'lucide-react';

const features = [
  { icon: Zap, title: "Instant Response", subtitle: "AI replies in seconds, not hours", color: "from-orange-500 to-amber-500" },
  { icon: Mic, title: "Sounds Like You", subtitle: "Trained on your voice and content", color: "from-rose-500 to-orange-500" },
  { icon: Target, title: "Smart Qualifying", subtitle: "Know who's ready to buy", color: "from-violet-500 to-purple-500" },
  { icon: Clock, title: "24/7 Autopilot", subtitle: "Works while you sleep", color: "from-emerald-500 to-teal-500" },
  { icon: Calendar, title: "Hot Lead Routing", subtitle: "Only talk to buyers", color: "from-blue-500 to-cyan-500" },
];

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; subtitle: string; color: string }> = ({ icon: Icon, title, subtitle, color }) => (
  <div className="group flex-shrink-0 w-[300px] p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-card hover:shadow-card-hover hover:-translate-y-2 hover:rotate-1 transition-all duration-500 cursor-pointer text-left flex items-center gap-5 mx-3">
    <div className={`p-4 rounded-2xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0`}>
      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
    </div>
    <div>
      <h3 className="font-display font-bold text-stone-900 text-lg leading-tight">{title}</h3>
      <p className="text-sm text-stone-500 mt-1 font-medium">{subtitle}</p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Warm cream background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white" />

      {/* Animated blob shapes */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-amber-200/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/20 to-orange-200/30 rounded-full blur-3xl animate-blob-slow" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-yellow-100/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 35%, #000 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 35%, #000 20%, transparent 70%)',
        }}
      />

      <div className="relative pt-28 sm:pt-36 pb-12 sm:pb-24 lg:pt-52 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">

        {/* Top Badge - More playful */}
        <div className="animate-fade-in-up [animation-delay:0ms] inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white border-2 border-orange-200 shadow-lg shadow-orange-100/50 mb-6 sm:mb-10 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-200/50 cursor-default group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-stone-700 group-hover:text-orange-700 transition-colors">For Instagram Coaches & Course Creators Making $10k-50k/mo</span>
        </div>

        {/* Main Headline - Bolder, more energetic */}
        <h1 className="animate-fade-in-up [animation-delay:150ms] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-stone-900 mb-5 sm:mb-7 max-w-5xl leading-[1.05]">
          Your Instagram Content Works.{' '}
          <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
              Your DMs Don't.
            </span>
            {/* Playful underline decoration */}
            <svg className="absolute w-full h-3 sm:h-4 -bottom-1 sm:-bottom-2 left-0" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path
                d="M2 8 Q 40 2 80 8 T 160 6 T 198 8"
                stroke="url(#underline-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FDBA74" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up [animation-delay:300ms] text-base sm:text-lg md:text-xl lg:text-2xl text-stone-600 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-medium">
          You're getting DMs, but leads go cold because you can't respond fast enough. Your content is doing its job — <span className="font-bold text-stone-900">your DMs aren't</span>. We fix that.
        </p>

        {/* Statistics Bar - More visual pop */}
        <div className="animate-fade-in-up [animation-delay:450ms] w-full max-w-3xl mb-10 sm:mb-14 relative">
          {/* Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 blur-2xl rounded-3xl scale-105" />

          <div className="relative flex justify-center items-center gap-6 sm:gap-10 md:gap-14 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-2xl shadow-orange-500/10">
            <div className="flex flex-col items-center justify-center group cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-500 group-hover:scale-110 transition-transform">&lt;30s</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-stone-500 uppercase tracking-wider mt-1 sm:mt-2">Response Time</span>
            </div>
            <div className="w-px h-12 sm:h-14 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
            <div className="flex flex-col items-center justify-center group cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-500 group-hover:scale-110 transition-transform">3x</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-stone-500 uppercase tracking-wider mt-1 sm:mt-2">More Conversions</span>
            </div>
            <div className="w-px h-12 sm:h-14 bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
            <div className="flex flex-col items-center justify-center group cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-500 group-hover:scale-110 transition-transform">2+ Hrs</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-stone-500 uppercase tracking-wider mt-1 sm:mt-2">Saved Daily</span>
            </div>
          </div>
        </div>

        {/* CTA Area - More playful buttons */}
        <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-8 sm:mb-20">
          <button
            onClick={scrollToCalendly}
            className="group relative bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:via-orange-600 hover:to-amber-600 text-white text-lg font-display font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-brand-lg hover:shadow-brand-xl hover:-translate-y-1 hover:scale-[1.02] flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Book Your Free DM Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
          </button>

          <button
            onClick={scrollToCalendly}
            className="flex items-center gap-4 px-8 py-5 rounded-full text-stone-700 font-display font-semibold hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-white border-2 border-stone-200 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:border-orange-300 group-hover:shadow-orange-100 transition-all duration-300">
              <Play className="w-5 h-5 text-orange-500 ml-0.5 fill-orange-500" />
            </div>
            <span className="group-hover:text-orange-600 transition-colors">See How It Works</span>
          </button>
        </div>

        {/* Trust Text - Hidden on mobile */}
        <div className="animate-fade-in-up [animation-delay:750ms] hidden sm:flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-stone-500 mb-20 font-medium">
          <span className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-default">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            30 minutes
          </span>
          <span className="text-stone-300">|</span>
          <span className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-default">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            100% free
          </span>
          <span className="text-stone-300">|</span>
          <span className="flex items-center gap-2 hover:text-orange-600 transition-colors cursor-default">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            No pitch
          </span>
        </div>

        {/* Infinite Scrolling Feature Cards - Enhanced */}
        <div className="animate-fade-in-up [animation-delay:900ms] hidden sm:block w-full max-w-[100vw] overflow-hidden relative group/scroller">
          {/* Fade masks */}
          <div
            className="flex w-full"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            }}
          >
            <div className="flex min-w-full shrink-0 gap-6 animate-scroll group-hover/scroller:[animation-play-state:paused] py-6">
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
            <div className="flex min-w-full shrink-0 gap-6 animate-scroll group-hover/scroller:[animation-play-state:paused] py-6" aria-hidden="true">
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
