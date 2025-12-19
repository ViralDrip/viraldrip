import React, { useEffect, useRef, useState } from 'react';

interface ProcessSectionProps {
  visualPosition: 'left' | 'right';
  stepNumber: string;
  tagline: string;
  headline: string;
  description: string;
  features?: string[];
  children: React.ReactNode;
  bgVariant?: 'white' | 'cream' | 'gradient';
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  visualPosition,
  stepNumber,
  tagline,
  headline,
  description,
  features,
  children,
  bgVariant = 'white',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20',
    gradient: 'bg-gradient-to-br from-stone-50 via-white to-orange-50/30',
  };

  const contentOrder = visualPosition === 'left' ? 'md:order-2' : 'md:order-1';
  const visualOrder = visualPosition === 'left' ? 'md:order-1' : 'md:order-2';

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 md:py-32 overflow-hidden ${bgClasses[bgVariant]}`}
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orb */}
        <div
          className={`absolute w-72 h-72 rounded-full blur-3xl transition-all duration-1000 ${
            visualPosition === 'left'
              ? 'top-20 -right-20 bg-gradient-to-br from-orange-200/20 to-amber-100/10'
              : 'bottom-20 -left-20 bg-gradient-to-br from-rose-200/15 to-orange-100/10'
          }`}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4d4d8 1px, transparent 0)`,
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 50% 40% at 50% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 50% 40% at 50% 50%, black, transparent)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div
            className={`${contentOrder} ${
              isVisible
                ? visualPosition === 'left'
                  ? 'animate-slide-in-right'
                  : 'animate-slide-in-left'
                : 'opacity-0'
            }`}
          >
            {/* Step Badge - More playful */}
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-40 scale-110" />
                <span className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-brand">
                  {stepNumber}
                </span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-display font-bold text-sm uppercase tracking-widest">
                {tagline}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-stone-900 mb-6 leading-[1.15] tracking-tight">
              {headline}
            </h2>

            {/* Description */}
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features List - Enhanced */}
            {features && features.length > 0 && (
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: `${400 + index * 100}ms`,
                    }}
                  >
                    <span className="relative shrink-0 mt-0.5">
                      <span className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full blur-sm opacity-40 scale-125" />
                      <span className="relative w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-sm">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="text-stone-700 font-medium text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Visual/Mockup */}
          <div
            className={`${visualOrder} ${
              isVisible
                ? visualPosition === 'left'
                  ? 'animate-slide-in-left'
                  : 'animate-slide-in-right'
                : 'opacity-0'
            }`}
          >
            {/* Decorative frame around mockup */}
            <div className="relative">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-3xl blur-2xl scale-105" />
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
