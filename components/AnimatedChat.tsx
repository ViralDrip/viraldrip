import React, { useState, useEffect } from 'react';
import { Zap, Send } from 'lucide-react';

interface Message {
  id: number;
  type: 'lead' | 'response';
  text: string;
}

const AnimatedChat: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showRouted, setShowRouted] = useState(false);

  const messages: Message[] = [
    { id: 1, type: 'lead', text: "Hey! Saw your reel about the masterclass. Is it open?" },
    { id: 2, type: 'response', text: "It is! Quick Q - are you looking to scale this month?" },
    { id: 3, type: 'lead', text: "Yes! Been stuck at $8k/mo for months 😩" },
    { id: 4, type: 'response', text: "I hear you. What's your biggest bottleneck right now?" },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Show first message after short delay
    timers.push(setTimeout(() => setVisibleMessages([1]), 500));

    // Show typing before message 2 (longer pause)
    timers.push(setTimeout(() => setShowTyping(true), 2500));
    timers.push(setTimeout(() => {
      setShowTyping(false);
      setVisibleMessages(prev => [...prev, 2]);
    }, 4000));

    // Show message 3 (longer pause)
    timers.push(setTimeout(() => {
      setVisibleMessages(prev => [...prev, 3]);
    }, 6500));

    // Show typing before message 4
    timers.push(setTimeout(() => setShowTyping(true), 9000));
    timers.push(setTimeout(() => {
      setShowTyping(false);
      setVisibleMessages(prev => [...prev, 4]);
    }, 10500));

    // Show lead score
    timers.push(setTimeout(() => setShowScore(true), 13000));

    // Show routed message
    timers.push(setTimeout(() => setShowRouted(true), 14500));

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="relative z-10 h-[320px] flex flex-col">
      {/* Messages Container - Fixed height to prevent layout shift */}
      <div className="flex-1 space-y-3 overflow-hidden">
        {messages.map((message) => {
          const isVisible = visibleMessages.includes(message.id);

          if (message.type === 'lead') {
            return (
              <div
                key={message.id}
                className={`flex items-end gap-2.5 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 h-0'
                }`}
                style={{ minHeight: isVisible ? 'auto' : 0 }}
              >
                <div className="w-7 h-7 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
                </div>
                <div className="bg-slate-50 border border-slate-100 px-3 py-2.5 rounded-2xl rounded-bl-none text-sm text-slate-700 max-w-[80%]">
                  {message.text}
                </div>
              </div>
            );
          }

          return (
            <div
              key={message.id}
              className={`flex items-end gap-2.5 flex-row-reverse transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 h-0'
              }`}
              style={{ minHeight: isVisible ? 'auto' : 0 }}
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                AI
              </div>
              {/* Response bubble: White with left accent border */}
              <div className="relative bg-white border border-slate-100 px-3 py-2.5 rounded-2xl rounded-br-none text-sm text-slate-700 max-w-[85%] shadow-sm">
                <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
                <span className="pl-2">{message.text}</span>
              </div>
            </div>
          );
        })}

        {/* Typing Indicator - Absolute positioned to prevent layout shift */}
        <div
          className={`flex items-end gap-2.5 flex-row-reverse transition-all duration-300 ease-out ${
            showTyping ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
            AI
          </div>
          <div className="relative bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-br-none shadow-sm">
            <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
            <div className="flex gap-1 pl-2">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Area - Fixed position */}
      <div className="pt-3 space-y-2">
        {/* Lead Score Badge */}
        <div
          className={`flex justify-center transition-all duration-500 ease-out ${
            showScore ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Zap size={11} fill="currentColor" />
            HOT LEAD
          </span>
        </div>

        {/* Routed Message */}
        <div
          className={`flex justify-center transition-all duration-500 ease-out ${
            showRouted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
            <Send size={10} />
            Booking link sent automatically
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedChat;
