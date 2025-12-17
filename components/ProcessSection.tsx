import React, { useEffect, useRef, useState } from 'react';

interface ProcessSectionProps {
  visualPosition: 'left' | 'right';
  stepNumber: string;
  tagline: string;
  headline: string;
  description: string;
  features?: string[];
  children: React.ReactNode;
  bgVariant?: 'white' | 'slate' | 'gradient';
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClasses = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    gradient: 'bg-gradient-to-br from-slate-50 to-white',
  };

  const contentOrder = visualPosition === 'left' ? 'md:order-2' : 'md:order-1';
  const visualOrder = visualPosition === 'left' ? 'md:order-1' : 'md:order-2';

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 md:py-28 overflow-hidden ${bgClasses[bgVariant]}`}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            {/* Step Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-brand">
                {stepNumber}
              </span>
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
                {tagline}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {headline}
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            {features && features.length > 0 && (
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
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
                    <span className="text-slate-700 font-medium">{feature}</span>
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
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
