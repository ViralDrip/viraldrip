import React, { useState, useEffect, useRef } from 'react';
import { Ghost, Sparkles, RefreshCw, DollarSign, TrendingUp, Heart } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const AnimatedReactivation: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [recoveredAmount, setRecoveredAmount] = useState(0);
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
    setRecoveredAmount(0);
    setIsFading(false);

    // Stage 1: Inactive lead profile - hold for reading
    timers.push(setTimeout(() => setStage(1), 500));

    // Stage 2: AI crafts message
    timers.push(setTimeout(() => setStage(2), 3000));

    // Stage 3: Message sent
    timers.push(setTimeout(() => setStage(3), 5000));

    // Stage 4: Lead responds
    timers.push(setTimeout(() => setStage(4), 7500));

    // Stage 5: Reactivated badge - hold to celebrate
    timers.push(setTimeout(() => setStage(5), 10000));

    // Stage 6: Switch to upsell scenario - hold for reading
    timers.push(setTimeout(() => setStage(6), 14000));

    // Stage 7: Upsell message
    timers.push(setTimeout(() => setStage(7), 17000));

    // Stage 8: Revenue counter
    timers.push(setTimeout(() => {
      setStage(8);
      let amount = 0;
      const amountInterval = setInterval(() => {
        amount += 250;
        setRecoveredAmount(amount);
        if (amount >= 2500) clearInterval(amountInterval);
      }, 50);
    }, 19500));

    // Hold for viewing, then fade out
    timers.push(setTimeout(() => setIsFading(true), 24000));

    // Loop: restart animation after fade
    timers.push(setTimeout(() => setLoopKey(k => k + 1), 25000));

    return () => timers.forEach(t => clearTimeout(t));
  }, [loopKey, isInView]);

  return (
    <div ref={containerRef}>
    <PhoneMockup headerTitle="Your AI Agent" headerSubtitle="Win-back mode">
      <div className={`relative h-[360px] transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Inactive Lead Profile */}
        {stage >= 1 && stage < 6 && (
          <div className="animate-fade-in">
            {/* Profile Card */}
            <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                    <Ghost className="w-6 h-6 text-slate-500" />
                  </div>
                  {stage < 5 && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-slate-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">ZZ</span>
                    </div>
                  )}
                  {stage >= 5 && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-scale-pop">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-700">Alex T.</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      stage < 5
                        ? 'bg-slate-200 text-slate-500'
                        : 'bg-green-100 text-green-600 animate-scale-pop'
                    }`}>
                      {stage < 5 ? 'Inactive 14 days' : 'REACTIVATED'}
                    </span>
                  </div>
                </div>
              </div>

              {/* History */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">History</p>
                <div className="space-y-1 text-[11px] text-slate-500">
                  <p>Previously interested in: <span className="text-slate-700 font-medium">Scaling Course</span></p>
                  <p>Budget mentioned: <span className="text-slate-700 font-medium">$3-5k</span></p>
                  <p>Last active: <span className="text-slate-700 font-medium">14 days ago</span></p>
                </div>
              </div>
            </div>

            {/* AI Crafting Message */}
            {stage >= 2 && stage < 3 && (
              <div className="flex items-center justify-center gap-2 text-orange-500 animate-pulse mb-4">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span className="text-sm font-medium">Crafting personalized message...</span>
              </div>
            )}

            {/* AI Outreach Message */}
            {stage >= 3 && (
              <div className="flex items-end gap-2 flex-row-reverse animate-slide-up mb-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                  AI
                </div>
                <div className="relative bg-white border border-slate-100 px-3 py-2.5 rounded-xl rounded-br-none max-w-[85%] shadow-sm">
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full" />
                  <p className="text-xs text-slate-700 pl-2">
                    Hey Alex! You mentioned wanting to scale to $25k/mo. Just launched something that's helped 3 coaches hit that exact goal. Thought of you - want a peek?
                  </p>
                </div>
              </div>
            )}

            {/* Lead Response */}
            {stage >= 4 && (
              <div className="flex items-end gap-2 animate-slide-up">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex-shrink-0" />
                <div className="bg-slate-100 px-3 py-2.5 rounded-xl rounded-bl-none max-w-[85%]">
                  <p className="text-xs text-slate-700">Oh wow, perfect timing! I've actually been thinking about this. Tell me more!</p>
                </div>
              </div>
            )}

            {/* Reactivated Badge */}
            {stage >= 5 && (
              <div className="flex justify-center mt-4 animate-bounce-in">
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold text-sm">LEAD REACTIVATED!</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Upsell Scenario */}
        {stage >= 6 && (
          <div className="animate-fade-in">
            {/* Customer Profile */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-3 mb-4 border border-orange-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" fill="white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">VIP</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-700">Rachel K.</p>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-orange-100 text-orange-600">
                    Existing Customer
                  </span>
                </div>
              </div>

              {/* Purchase History */}
              <div className="mt-3 pt-3 border-t border-orange-100">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Purchase History</p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Starter Course</span>
                    <span className="text-green-600 font-medium">$497</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Templates Pack</span>
                    <span className="text-green-600 font-medium">$97</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upsell Message */}
            {stage >= 7 && (
              <div className="flex items-end gap-2 flex-row-reverse animate-slide-up mb-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                  AI
                </div>
                <div className="relative bg-white border border-slate-100 px-3 py-2.5 rounded-xl rounded-br-none max-w-[85%] shadow-sm">
                  <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full" />
                  <p className="text-xs text-slate-700 pl-2">
                    Hey Rachel! Saw you crushed Module 3. Coaches at your stage usually 10x with our Advanced Program. Since you're already rocking it, I grabbed you $500 off - interested?
                  </p>
                </div>
              </div>
            )}

            {/* Revenue Counter */}
            {stage >= 8 && (
              <div className="absolute bottom-4 left-0 right-0 px-4 animate-bounce-in">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-green-100 font-medium">Revenue Recovered</p>
                        <p className="text-2xl font-bold">${recoveredAmount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-100">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-bold">+340%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </PhoneMockup>
    </div>
  );
};

export default AnimatedReactivation;
