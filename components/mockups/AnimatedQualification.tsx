import React, { useState, useEffect, useRef } from 'react';
import { Flame, TrendingUp, Target } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const AnimatedQualification: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [score, setScore] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    // Clear previous timers
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
    const timers = timersRef.current;

    // Reset state
    setStage(0);
    setScore(0);
    setTemperature(0);
    setIsFading(false);

    // Stage 1: Initial messages visible
    timers.push(setTimeout(() => setStage(1), 500));

    // Stage 2: Lead responds with budget info
    timers.push(setTimeout(() => setStage(2), 2000));

    // Stage 3: AI qualifying question
    timers.push(setTimeout(() => setStage(3), 4000));

    // Stage 4: Lead responds with pain point
    timers.push(setTimeout(() => setStage(4), 6000));

    // Stage 5: Side panel with tags
    timers.push(setTimeout(() => setStage(5), 7500));

    // Animate score counter
    timers.push(setTimeout(() => {
      let currentScore = 0;
      const scoreInterval = setInterval(() => {
        currentScore += 5;
        setScore(currentScore);
        if (currentScore >= 85) clearInterval(scoreInterval);
      }, 50);
    }, 8000));

    // Animate temperature
    timers.push(setTimeout(() => {
      let temp = 0;
      const tempInterval = setInterval(() => {
        temp += 10;
        setTemperature(temp);
        if (temp >= 100) clearInterval(tempInterval);
      }, 80);
    }, 8500));

    // Stage 6: HOT LEAD badge
    timers.push(setTimeout(() => setStage(6), 10000));

    // Hold for viewing, then fade out
    timers.push(setTimeout(() => setIsFading(true), 14000));

    // Loop: restart animation after fade
    timers.push(setTimeout(() => setLoopKey(k => k + 1), 15000));

    return () => timers.forEach(t => clearTimeout(t));
  }, [loopKey]);

  const getTempColor = () => {
    if (temperature < 40) return 'from-blue-400 to-blue-500';
    if (temperature < 70) return 'from-yellow-400 to-orange-400';
    return 'from-orange-500 to-red-500';
  };

  const getTempLabel = () => {
    if (temperature < 40) return 'COLD';
    if (temperature < 70) return 'WARM';
    return 'HOT';
  };

  return (
    <PhoneMockup headerTitle="Your AI Agent" headerSubtitle="Qualifying leads">
      <div className={`relative h-[360px] transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Messages */}
        <div className="space-y-3 pr-2">
          {/* Previous AI message */}
          {stage >= 1 && (
            <div className="flex items-end gap-2 flex-row-reverse animate-fade-in">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                AI
              </div>
              <div className="relative bg-white border border-slate-100 px-3 py-2 rounded-xl rounded-br-none max-w-[80%] shadow-sm text-xs">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full" />
                <p className="text-slate-700 pl-1.5">What's your current monthly revenue?</p>
              </div>
            </div>
          )}

          {/* Lead budget response */}
          {stage >= 2 && (
            <div className="flex items-end gap-2 animate-slide-up">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0" />
              <div className="bg-slate-100 px-3 py-2 rounded-xl rounded-bl-none max-w-[80%] text-xs">
                <p className="text-slate-700">I'm doing about $8k/mo but I want to hit $25k this quarter</p>
              </div>
            </div>
          )}

          {/* AI qualifying question */}
          {stage >= 3 && (
            <div className="flex items-end gap-2 flex-row-reverse animate-slide-up">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                AI
              </div>
              <div className="relative bg-white border border-slate-100 px-3 py-2 rounded-xl rounded-br-none max-w-[80%] shadow-sm text-xs">
                <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full" />
                <p className="text-slate-700 pl-1.5">That's a solid goal! What's your biggest bottleneck right now?</p>
              </div>
            </div>
          )}

          {/* Lead pain point */}
          {stage >= 4 && (
            <div className="flex items-end gap-2 animate-slide-up">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0" />
              <div className="bg-slate-100 px-3 py-2 rounded-xl rounded-bl-none max-w-[80%] text-xs">
                <p className="text-slate-700">Inconsistent leads. Some months I get 10 calls, others barely 2</p>
              </div>
            </div>
          )}
        </div>

        {/* Qualification Side Panel */}
        {stage >= 5 && (
          <div className="absolute right-0 top-0 bottom-0 w-[140px] animate-slide-in-right">
            <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-3 shadow-lg space-y-3">
              {/* Tags */}
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Interests</p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-[10px] font-medium animate-scale-pop">
                    SCALING
                  </span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-medium animate-scale-pop" style={{ animationDelay: '100ms' }}>
                    COACHING
                  </span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-medium animate-scale-pop" style={{ animationDelay: '200ms' }}>
                    LEAD GEN
                  </span>
                </div>
              </div>

              {/* Temperature Gauge */}
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Temperature</p>
                <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getTempColor()} transition-all duration-300 rounded-full`}
                    style={{ width: `${temperature}%` }}
                  />
                </div>
                <p className={`text-[10px] font-bold mt-1 ${temperature >= 70 ? 'text-orange-600' : temperature >= 40 ? 'text-yellow-600' : 'text-blue-600'}`}>
                  {getTempLabel()}
                </p>
              </div>

              {/* Lead Score */}
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Lead Score</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-slate-900">{score}</span>
                  <span className="text-slate-400 text-xs">/100</span>
                </div>
                <div className="flex items-center gap-1 text-green-600 text-[10px] font-medium">
                  <TrendingUp className="w-3 h-3" />
                  High intent
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HOT LEAD Badge */}
        {stage >= 6 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce-in">
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full shadow-lg">
              <Flame className="w-5 h-5" fill="currentColor" />
              <span className="font-bold">HOT LEAD</span>
              <Target className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </PhoneMockup>
  );
};

export default AnimatedQualification;
