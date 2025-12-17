import React, { useState, useEffect, useRef } from 'react';
import { Zap, Check, Clock } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const AnimatedDMResponse: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [showTyping, setShowTyping] = useState(false);
  const [finalTime, setFinalTime] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    // Clear previous timers
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
    const timers = timersRef.current;

    // Reset state at start of each loop
    setStage(0);
    setCountdown(30);
    setShowTyping(false);
    setFinalTime(0);
    setIsFading(false);

    // Stage 0: Initial state
    // Stage 1: Notification pulse
    timers.push(setTimeout(() => setStage(1), 500));

    // Stage 2: Lead message appears
    timers.push(setTimeout(() => setStage(2), 1000));

    // Stage 3: Countdown starts
    timers.push(setTimeout(() => setStage(3), 1800));

    // Countdown animation
    let countdownInterval: NodeJS.Timeout;
    timers.push(setTimeout(() => {
      let count = 30;
      countdownInterval = setInterval(() => {
        count -= 1;
        setCountdown(count);
        if (count <= 23) {
          clearInterval(countdownInterval);
        }
      }, 50);
    }, 2000));

    // Stage 4: AI typing
    timers.push(setTimeout(() => {
      setShowTyping(true);
      setStage(4);
    }, 3500));

    // Stage 5: AI response
    timers.push(setTimeout(() => {
      setShowTyping(false);
      setStage(5);
      setFinalTime(23);
    }, 5000));

    // Stage 6: Success badge
    timers.push(setTimeout(() => setStage(6), 6000));

    // Hold for viewing, then fade out
    timers.push(setTimeout(() => setIsFading(true), 10000));

    // Loop: restart animation after fade
    timers.push(setTimeout(() => {
      setLoopKey(k => k + 1);
    }, 11000));

    return () => {
      timers.forEach(t => clearTimeout(t));
      if (countdownInterval) clearInterval(countdownInterval);
    };
  }, [loopKey]);

  return (
    <PhoneMockup headerTitle="Your AI Agent" headerSubtitle="Responds instantly">
      <div className={`relative h-[360px] flex flex-col transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Notification Badge */}
        {stage >= 1 && stage < 2 && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <div className="relative">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce-in">
                New DM!
              </div>
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping-once opacity-75" />
            </div>
          </div>
        )}

        {/* Messages Container */}
        <div className="flex-1 space-y-4 pt-8">
          {/* Lead Message */}
          {stage >= 2 && (
            <div className="flex items-end gap-2.5 animate-slide-up">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0" />
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-none max-w-[85%]">
                <p className="text-sm text-slate-700">Hey! Just saw your course post, is enrollment still open?</p>
              </div>
            </div>
          )}

          {/* Countdown Timer */}
          {stage >= 3 && stage < 6 && (
            <div className="flex justify-center animate-scale-pop">
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-orange-600 font-bold text-sm">
                  {countdown}s
                </span>
                <span className="text-orange-500 text-xs font-medium">response time</span>
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {showTyping && (
            <div className="flex items-end gap-2.5 flex-row-reverse animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                AI
              </div>
              <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-br-none shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          {/* AI Response */}
          {stage >= 5 && (
            <div className="flex items-end gap-2.5 flex-row-reverse animate-slide-up">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                AI
              </div>
              <div className="relative bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-br-none max-w-[85%] shadow-sm">
                <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full" />
                <p className="text-sm text-slate-700 pl-2">
                  It is! Quick question - are you looking to launch your course this quarter? I want to make sure I point you to the right resources.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Success Badge */}
        {stage >= 6 && (
          <div className="pt-4 space-y-3">
            <div className="flex justify-center animate-bounce-in">
              <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                <Zap className="w-4 h-4" fill="currentColor" />
                <span className="font-bold text-sm">LIGHTNING FAST</span>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Responded in <span className="font-bold text-green-600">{finalTime}s</span></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </PhoneMockup>
  );
};

export default AnimatedDMResponse;
