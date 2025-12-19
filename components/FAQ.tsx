import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

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
    <section className="py-28 bg-gradient-to-b from-white via-orange-50/20 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-amber-100/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-br from-rose-100/15 to-orange-100/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-orange-200 shadow-lg shadow-orange-100/50 text-stone-600 text-sm font-display font-semibold mb-6">
            <MessageCircle className="w-4 h-4 text-orange-500" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-stone-900 mb-5 tracking-tight">
            Got Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              We've Got Answers.
            </span>
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            Everything you need to know about AI-powered Instagram DMs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'shadow-xl shadow-orange-500/10 border-2 border-orange-300 ring-4 ring-orange-100'
                  : 'shadow-card border-2 border-stone-100 hover:border-orange-200 hover:shadow-lg'
              }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-display font-bold text-lg pr-4 transition-colors ${
                  openIndex === index ? 'text-orange-600' : 'text-stone-900 group-hover:text-stone-700'
                }`}>
                  {faq.question}
                </span>
                <div className={`relative shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index && (
                    <span className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl blur-lg opacity-40 scale-125" />
                  )}
                  <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-brand'
                      : 'bg-stone-100 text-stone-400 group-hover:bg-orange-50 group-hover:text-orange-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mb-5" />
                  <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-4 font-medium">Still have questions?</p>
          <a
            href="#calendly-section"
            className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-display font-bold text-lg hover:from-orange-700 hover:to-amber-600 transition-all group"
          >
            Book a call and ask me directly
            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
