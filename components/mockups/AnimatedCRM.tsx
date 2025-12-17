import React, { useState, useEffect, useRef } from 'react';
import { Database, Users, TrendingUp, Activity, Instagram } from 'lucide-react';

const AnimatedCRM: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [showNewLead, setShowNewLead] = useState(false);
  const [kanbanPosition, setKanbanPosition] = useState(0);
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
    setShowNewLead(false);
    setKanbanPosition(0);
    setIsFading(false);

    // Stage 1: Dashboard frame appears
    timers.push(setTimeout(() => setStage(1), 500));

    // Stage 2: Existing data visible - hold for reading
    timers.push(setTimeout(() => setStage(2), 1500));

    // Stage 3: New lead notification
    timers.push(setTimeout(() => setStage(3), 4000));

    // Stage 4: New lead row animates in
    timers.push(setTimeout(() => {
      setShowNewLead(true);
      setStage(4);
    }, 5000));

    // Stage 5: Lead columns populate - hold for reading
    timers.push(setTimeout(() => setStage(5), 6000));

    // Stage 6: Kanban view - longer hold before switching
    timers.push(setTimeout(() => setStage(6), 9000));

    // Animate kanban card movement - slower for visibility
    timers.push(setTimeout(() => {
      setKanbanPosition(1);
    }, 11000));
    timers.push(setTimeout(() => {
      setKanbanPosition(2);
    }, 13000));

    // Stage 7: Behavior tags
    timers.push(setTimeout(() => setStage(7), 15000));

    // Hold for viewing, then fade out
    timers.push(setTimeout(() => setIsFading(true), 19000));

    // Loop: restart animation after fade
    timers.push(setTimeout(() => setLoopKey(k => k + 1), 20000));

    return () => timers.forEach(t => clearTimeout(t));
  }, [loopKey]);

  const existingLeads = [
    { name: 'Mike R.', score: 72, stage: 'Qualified' },
    { name: 'Emma S.', score: 45, stage: 'Nurturing' },
  ];

  const newLead = {
    name: 'Sarah M.',
    source: 'IG DM',
    interest: 'Coaching',
    score: 85,
    stage: 'HOT',
  };

  return (
    <div className="relative">
      {/* Dashboard Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-w-[420px] mx-auto">
        {/* Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <Database className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 text-sm font-medium">Lead Dashboard</span>
          </div>
        </div>

        {/* Stats Bar - Always rendered to prevent layout shift, fades with content */}
        <div className={`bg-slate-50 px-4 py-3 border-b border-slate-100 grid grid-cols-3 gap-4 transition-opacity duration-700 ${stage >= 1 && !isFading ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">47</p>
            <p className="text-[10px] text-slate-500 font-medium">This Week</p>
          </div>
          <div className="text-center border-x border-slate-200">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-[10px] text-slate-500 font-medium">Hot Leads</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-500">$8.2k</p>
            <p className="text-[10px] text-slate-500 font-medium">Pipeline</p>
          </div>
        </div>

        {/* Main Content - Fixed height to prevent layout shifts */}
        <div className={`p-4 h-[420px] overflow-hidden relative transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {/* Table View */}
          <div className={`absolute inset-4 transition-opacity duration-500 ${stage >= 2 && stage < 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wide pb-2 border-b border-slate-100">
                <span>Name</span>
                <span>Source</span>
                <span>Interest</span>
                <span>Score</span>
                <span>Stage</span>
              </div>

              {/* Existing Rows */}
              <div className="divide-y divide-slate-50">
                {existingLeads.map((lead, i) => (
                  <div key={i} className="grid grid-cols-5 gap-2 py-2.5 text-xs items-center">
                    <span className="font-medium text-slate-700">{lead.name}</span>
                    <span className="text-slate-500">IG DM</span>
                    <span className="text-slate-500">Course</span>
                    <span className={`font-bold ${lead.score >= 70 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {lead.score}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium text-center ${
                      lead.stage === 'Qualified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {lead.stage}
                    </span>
                  </div>
                ))}

                {/* New Lead Row */}
                {showNewLead && (
                  <div className="grid grid-cols-5 gap-2 py-2.5 text-xs items-center bg-orange-50 -mx-4 px-4 animate-slide-up">
                    <span className={`font-medium text-slate-700 ${stage >= 5 ? 'animate-fade-in' : 'opacity-0'}`}>
                      {newLead.name}
                    </span>
                    <span className={`text-slate-500 flex items-center gap-1 ${stage >= 5 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                      <Instagram className="w-3 h-3 text-pink-500" />
                      {newLead.source}
                    </span>
                    <span className={`text-slate-500 ${stage >= 5 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                      {newLead.interest}
                    </span>
                    <span className={`font-bold text-green-600 ${stage >= 5 ? 'animate-count-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                      {newLead.score}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white text-center ${stage >= 5 ? 'animate-scale-pop' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                      {newLead.stage}
                    </span>
                  </div>
                )}
              </div>

              {/* New Lead Notification */}
              {stage >= 3 && stage < 4 && (
                <div className="absolute top-24 left-1/2 -translate-x-1/2 animate-bounce-in z-10">
                  <div className="bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    New lead syncing...
                  </div>
                </div>
              )}
          </div>

          {/* Kanban View */}
          <div className={`absolute inset-4 transition-opacity duration-500 ${stage >= 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-semibold text-slate-700">Pipeline View</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {['New', 'Qualified', 'Booked'].map((column, colIndex) => (
                  <div key={column} className="space-y-2">
                    <div className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${
                      colIndex === 0 ? 'bg-slate-100 text-slate-600' :
                      colIndex === 1 ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {column}
                    </div>

                    {/* Cards */}
                    <div className="space-y-2 min-h-[160px]">
                      {colIndex === 0 && kanbanPosition === 0 && (
                        <div className="bg-white border border-slate-200 rounded-lg p-2 shadow-sm animate-slide-up">
                          <p className="font-medium text-xs text-slate-700">Sarah M.</p>
                          <p className="text-[10px] text-slate-500">Score: 85</p>
                          <div className="mt-1.5 flex items-center gap-1">
                            <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded text-[8px] font-bold">HOT</span>
                          </div>
                        </div>
                      )}
                      {colIndex === 1 && kanbanPosition === 1 && (
                        <div className="bg-white border-2 border-green-300 rounded-lg p-2 shadow-md animate-slide-in-left">
                          <p className="font-medium text-xs text-slate-700">Sarah M.</p>
                          <p className="text-[10px] text-slate-500">Score: 85</p>
                          <div className="mt-1.5 flex items-center gap-1">
                            <span className="px-1.5 py-0.5 bg-green-100 text-green-600 rounded text-[8px] font-bold">QUALIFIED</span>
                          </div>
                        </div>
                      )}
                      {colIndex === 2 && kanbanPosition === 2 && (
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg p-2 shadow-md animate-slide-in-left">
                          <p className="font-medium text-xs text-slate-700">Sarah M.</p>
                          <p className="text-[10px] text-slate-500">Dec 18, 2:00 PM</p>
                          <div className="mt-1.5 flex items-center gap-1">
                            <span className="px-1.5 py-0.5 bg-orange-500 text-white rounded text-[8px] font-bold">BOOKED</span>
                          </div>
                        </div>
                      )}
                      {/* Static cards */}
                      {colIndex === 1 && (
                        <div className="bg-white border border-slate-100 rounded-lg p-2 opacity-60">
                          <p className="font-medium text-xs text-slate-600">Mike R.</p>
                          <p className="text-[10px] text-slate-400">Score: 72</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Behavior Tags */}
              {stage >= 7 && (
                <div className="mt-4 pt-4 border-t border-slate-100 animate-slide-up">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
                    Auto-detected signals
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Engaged', 'Budget: $5k+', 'Timeline: Now', 'Decision Maker'].map((tag, i) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-medium animate-scale-pop"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-orange-400 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-400 rounded-full" />
      </div>
    </div>
  );
};

export default AnimatedCRM;
