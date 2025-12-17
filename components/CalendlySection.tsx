import React from 'react';
import { ShieldCheck, Clock, Zap, MapPin, Target, Lightbulb } from 'lucide-react';

const CalendlySection: React.FC = () => {
  return (
    <section id="calendly-section" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-bold mb-6">
              <Zap className="w-4 h-4 mr-2" fill="currentColor" />
              Free Strategy Session
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Get Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                DM System Blueprint
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              In 30 minutes, you'll walk away with a complete roadmap for turning your Instagram DMs into a 24/7 sales machine.
            </p>

            {/* What You Get */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: MapPin,
                  title: 'Leak Analysis',
                  desc: 'See exactly where leads are falling off in your current flow',
                },
                {
                  icon: Target,
                  title: 'Custom Strategy',
                  desc: 'Get a personalized plan tailored to your offer and audience',
                },
                {
                  icon: Lightbulb,
                  title: 'Clear Next Steps',
                  desc: 'Walk away with actionable items you can implement today',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Clock, text: '30 minutes' },
                { icon: ShieldCheck, text: 'No sales pitch' },
              ].map((badge, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium"
                >
                  <badge.icon className="w-4 h-4 text-orange-500" />
                  {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Calendly */}
          <div className="relative">
            {/* Card Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-2xl" />

            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Calendly Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 sm:px-6 py-4">
                <h3 className="text-white font-bold text-lg">Pick Your Time</h3>
                <p className="text-orange-100 text-sm">Choose a slot that works for you</p>
              </div>

              {/* Calendly Embed - Responsive height */}
              <div
                className="calendly-inline-widget w-full h-[500px] sm:h-[580px] md:h-[650px]"
                data-url="https://calendly.com/jonas-algowerk/30min-meeting-clone?hide_event_type_details=1&hide_gdpr_banner=1&text_color=0f172a&primary_color=f97316"
              />
            </div>

            {/* Steps Below - Hidden on mobile for cleaner look */}
            <div className="mt-6 hidden sm:flex items-center justify-center gap-4 text-sm">
              {['Pick time', 'Confirm', 'Get blueprint'].map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-slate-400 font-medium">{step}</span>
                  </div>
                  {i < 2 && <div className="w-8 h-px bg-slate-700" />}
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
