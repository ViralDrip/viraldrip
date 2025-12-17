import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  showFloatingIcons?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  headerTitle = 'Instagram',
  headerSubtitle = 'Active now',
  showFloatingIcons = true,
}) => {
  return (
    <div className="relative">
      {/* Phone Frame Wrapper */}
      <div className="relative max-w-[380px] mx-auto">
        {/* Phone Frame */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-200/50 via-transparent to-purple-200/50 pointer-events-none" />

        {/* Inner Content */}
        <div className="relative">
          {/* Dynamic Island / Notch */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-24 h-7 bg-slate-900 rounded-full flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-800 ring-1 ring-slate-700" />
            </div>
          </div>

          {/* Instagram DM Header */}
          <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-3">
            <button className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-3 flex-1">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 text-sm">{headerTitle}</p>
                <p className="text-xs text-green-500 font-medium">{headerSubtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Message Content Area */}
          <div className="p-4 min-h-[400px] bg-gradient-to-b from-white to-slate-50/50">
            {children}
          </div>

          {/* Input Area */}
          <div className="px-4 py-3 border-t border-slate-100 bg-white">
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 flex items-center gap-2">
                <span className="text-slate-400 text-sm">Message...</span>
              </div>
              <button className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-brand hover:shadow-brand-lg transition-shadow">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400 rounded-full" />
      </div>
    </div>
  );
};

export default PhoneMockup;
