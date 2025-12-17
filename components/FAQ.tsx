import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Will my followers know it's AI?",
      answer: "The AI is trained on YOUR content, voice, and way of explaining things. It doesn't sound like a generic bot because it isn't one. We analyze your past conversations, content style, and how you naturally communicate — then build an agent that speaks exactly like you would on your best day."
    },
    {
      question: "How is this different from ManyChat?",
      answer: "ManyChat uses decision trees and keyword triggers — that's why flows often feel robotic. We build an actual AI agent that understands context, handles objections, and has real conversations. It's the difference between a phone menu ('Press 1 for sales') and talking to someone who actually gets what you need."
    },
    {
      question: "What if a lead asks something complex?",
      answer: "The AI handles 90% of conversations smoothly. For edge cases or high-stakes situations, it gracefully hands off to you with full context — you'll see the entire conversation history and what the lead needs. You stay in control without being stuck in DMs all day."
    },
    {
      question: "How quickly can this be set up?",
      answer: "Most systems are live within 2-3 weeks. We handle the heavy lifting — building your AI agent, integrating with your systems, and testing everything. Your involvement is about 4-5 hours total across that period."
    },
    {
      question: "What results can I actually expect?",
      answer: "Typical results: response times drop from hours to under 30 seconds, qualified conversations increase by 40%+, and booked calls go up 20-30%. But the biggest win? You get hours back every week and never miss a hot lead again."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No lock-in. After the initial setup, it's month-to-month. We believe in earning your business — if the system isn't delivering, you shouldn't be stuck paying for it. Most clients stay because the ROI is obvious."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know before booking your blueprint session.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-orange-200 shadow-lg shadow-orange-100/50'
                  : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg transition-colors ${
                  openIndex === index ? 'text-orange-600' : 'text-slate-900 group-hover:text-slate-700'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === index
                    ? 'bg-orange-500 text-white rotate-180'
                    : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-slate-100 mb-4" />
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="#calendly-section"
            className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
          >
            Book a call and ask me directly
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
