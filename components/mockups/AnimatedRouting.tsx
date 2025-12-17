import React, { useState, useEffect, useRef } from 'react';
import { Calendar, BookOpen, Gift, ArrowRight, Check, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const AnimatedRouting: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const [loopKey, setLoopKey] = useState(0);

  // Observe when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Don't start animation until in view
    if (!isInView) return;
    // Clear previous timers
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
    const timers = timersRef.current;

    // Reset state
    setStage(0);
    setSelectedPath(null);
    setIsFading(false);

    // Stage 1: Show lead badge
    timers.push(setTimeout(() => setStage(1), 500));

    // Stage 2: Decision tree appears
    timers.push(setTimeout(() => setStage(2), 2000));

    // Stage 3: Paths light up sequentially
    timers.push(setTimeout(() => setStage(3), 3500));

    // Stage 4: High-ticket path selected (for hot lead)
    timers.push(setTimeout(() => {
      setSelectedPath(0);
      setStage(4);
    }, 5500));

    // Stage 5: Calendar UI slides in
    timers.push(setTimeout(() => setStage(5), 7500));

    // Stage 6: Booking confirmation
    timers.push(setTimeout(() => setStage(6), 10000));

    // Hold for viewing, then fade out
    timers.push(setTimeout(() => setIsFading(true), 14000));

    // Loop: restart animation after fade
    timers.push(setTimeout(() => setLoopKey(k => k + 1), 15000));

    return () => timers.forEach(t => clearTimeout(t));
  }, [loopKey, isInView]);

  const paths = [
    { icon: Calendar, label: 'Book Call', color: 'orange', description: 'High-ticket ready' },
    { icon: Gift, label: 'Lead Magnet', color: 'purple', description: 'Needs nurturing' },
    { icon: BookOpen, label: 'Course Offer', color: 'blue', description: 'Product fit' },
  ];

  return (
    <div ref={containerRef}>
    <PhoneMockup headerTitle="Your AI Agent" headerSubtitle="Smart routing">
      <div className={`relative h-[360px] flex flex-col transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Lead Status Badge */}
        {stage >= 1 && (
          <div className="flex justify-center mb-4 animate-scale-pop">
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
              <Sparkles className="w-3 h-3" />
              HOT LEAD DETECTED
            </div>
          </div>
        )}

        {/* Decision Tree */}
        {stage >= 2 && (
          <div className="space-y-4 animate-fade-in">
            {/* Header */}
            <div className="text-center">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                Intelligent Routing
              </p>
              <p className="text-sm font-bold text-slate-700">
                Selecting best path...
              </p>
            </div>

            {/* Paths */}
            <div className="space-y-2">
              {paths.map((path, index) => {
                const Icon = path.icon;
                const isSelected = selectedPath === index;
                const isVisible = stage >= 3;
                const colorClasses = {
                  orange: {
                    bg: 'bg-orange-50 border-orange-200',
                    icon: 'bg-orange-500',
                    text: 'text-orange-700',
                    selected: 'ring-2 ring-orange-500 bg-orange-100',
                  },
                  purple: {
                    bg: 'bg-purple-50 border-purple-200',
                    icon: 'bg-purple-500',
                    text: 'text-purple-700',
                    selected: 'ring-2 ring-purple-500 bg-purple-100',
                  },
                  blue: {
                    bg: 'bg-blue-50 border-blue-200',
                    icon: 'bg-blue-500',
                    text: 'text-blue-700',
                    selected: 'ring-2 ring-blue-500 bg-blue-100',
                  },
                }[path.color];

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    } ${
                      isSelected
                        ? colorClasses.selected
                        : `${colorClasses.bg} ${selectedPath !== null && !isSelected ? 'opacity-40' : ''}`
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-xl ${colorClasses.icon} flex items-center justify-center text-white shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold text-sm ${colorClasses.text}`}>{path.label}</p>
                      <p className="text-[10px] text-slate-500">{path.description}</p>
                    </div>
                    {isSelected && (
                      <div className="animate-scale-pop">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                    )}
                    {!isSelected && selectedPath === null && (
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Calendar UI */}
        {stage >= 5 && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col animate-slide-up">
            <div className="text-center py-3 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-400">ROUTED TO</p>
              <p className="text-lg font-bold text-slate-900">Your Calendar</p>
            </div>

            <div className="flex-1 p-4">
              {/* Mini Calendar */}
              <div className="bg-slate-50 rounded-xl p-3 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-sm text-slate-700">December 2024</span>
                  <div className="flex gap-1">
                    <button className="w-6 h-6 rounded bg-white shadow-sm text-slate-400 flex items-center justify-center text-xs">&lt;</button>
                    <button className="w-6 h-6 rounded bg-white shadow-sm text-slate-400 flex items-center justify-center text-xs">&gt;</button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <span key={i} className="text-slate-400 font-medium py-1">{d}</span>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <button
                      key={i}
                      className={`py-1 rounded ${
                        i + 1 === 18
                          ? 'bg-orange-500 text-white font-bold animate-scale-pop'
                          : i + 1 < 15
                          ? 'text-slate-300'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400">Available slots</p>
                <div className="flex gap-2">
                  {['2:00 PM', '3:30 PM', '5:00 PM'].map((time, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        i === 0
                          ? 'bg-orange-500 text-white shadow-brand animate-scale-pop'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Confirmation */}
        {stage >= 6 && (
          <div className="absolute bottom-4 left-0 right-0 px-4 animate-bounce-in">
            <div className="bg-green-500 text-white rounded-xl p-3 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm">Booking Link Sent!</p>
                <p className="text-xs text-green-100">Dec 18 at 2:00 PM confirmed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PhoneMockup>
    </div>
  );
};

export default AnimatedRouting;
