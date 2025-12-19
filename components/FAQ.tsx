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
      question: "Is the audit actually free?",
      answer: "Yes, 100% free. No credit card, no commitment. You'll get real insights whether we work together or not. If there's a fit, I'll mention it. If not, you still walk away with actionable fixes."
    },
    {
      question: "How is this different from ManyChat?",
      answer: "ManyChat is the delivery system — it sends messages. But flow-based bots follow rigid scripts that break on unexpected questions. We build an AI agent with YOUR knowledge base that actually understands your offer and can have real conversations. That's the difference between robotic and real."
    },
    {
      question: "Will the AI actually sound like me?",
      answer: "Yes — that's the whole point. We train it on YOUR content, YOUR voice, YOUR way of explaining things. We study your posts, captions, and how you talk. Your followers won't be able to tell it's not you."
    },
    {
      question: "What if the AI says something wrong?",
      answer: "We test extensively before going live and set up guardrails for sensitive topics. Plus, we monitor conversations and optimize continuously. A well-trained AI is actually more consistent than a tired human at 11pm."
    },
    {
      question: "How long until my system is live?",
      answer: "4 weeks from kickoff. Your time investment is about 4-5 hours total — one kickoff call, some async Q&A, and a final review."
    },
    {
      question: "What results can I expect?",
      answer: "Most creators save 2+ hours per day on DM management. Response times drop from hours to seconds. And because leads are qualified automatically, you only spend time on people actually ready to buy."
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-display font-semibold mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Common Questions
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Got Questions? <span className="font-accent italic">We've Got Answers.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about AI-powered Instagram DMs.
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
                <span className={`font-display font-bold text-lg transition-colors ${
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
