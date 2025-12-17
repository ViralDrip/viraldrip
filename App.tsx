import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import AnimatedDMResponse from './components/mockups/AnimatedDMResponse';
import AnimatedQualification from './components/mockups/AnimatedQualification';
import AnimatedRouting from './components/mockups/AnimatedRouting';
import AnimatedCRM from './components/mockups/AnimatedCRM';
import AnimatedReactivation from './components/mockups/AnimatedReactivation';
import CalendlySection from './components/CalendlySection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyBottomCTA from './components/StickyBottomCTA';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white min-h-screen">
      <Header />

      <main>
        {/* 1. Hero - Bold value proposition */}
        <Hero />

        {/* 2. Process Section A: Instant DM Response (Visual LEFT) */}
        <ProcessSection
          visualPosition="left"
          stepNumber="01"
          tagline="Instant Response"
          headline="DM Comes In. AI Replies in Seconds."
          description="When a lead messages you at 2am or while you're on a client call, your AI agent responds instantly — in your voice, with your personality. No more 'sorry I missed your message' moments."
          features={[
            "Under 30-second response time, 24/7",
            "Trained on your content and communication style",
            "Handles inquiries while you focus on what matters"
          ]}
          bgVariant="white"
        >
          <AnimatedDMResponse />
        </ProcessSection>

        {/* 3. Process Section B: Lead Qualification (Visual RIGHT) */}
        <ProcessSection
          visualPosition="right"
          stepNumber="02"
          tagline="Smart Qualifying"
          headline="Natural Conversations That Qualify Every Lead"
          description="Your AI doesn't just respond — it builds rapport. Through genuine conversation, it discovers what each lead needs, their budget, timeline, and readiness to buy. No robotic questionnaires."
          features={[
            "Behavioral scoring based on engagement",
            "Interest tags detected automatically",
            "Hot, warm, and cold leads identified instantly"
          ]}
          bgVariant="slate"
        >
          <AnimatedQualification />
        </ProcessSection>

        {/* 4. Process Section C: Smart Routing (Visual LEFT) */}
        <ProcessSection
          visualPosition="left"
          stepNumber="03"
          tagline="Intelligent Routing"
          headline="Every Lead Gets the Perfect Next Step"
          description="High-ticket ready? Straight to your calendar. Need more info? Your best lead magnet. Not ready yet? Into your nurture sequence. Every lead lands exactly where they should."
          features={[
            "Hot leads routed directly to booking",
            "Product recommendations based on fit",
            "Automatic nurture for cold leads"
          ]}
          bgVariant="white"
        >
          <AnimatedRouting />
        </ProcessSection>

        {/* 5. Process Section D: CRM Dashboard (Visual RIGHT) */}
        <ProcessSection
          visualPosition="right"
          stepNumber="04"
          tagline="Full Visibility"
          headline="Your Entire Pipeline, One Dashboard"
          description="Watch leads flow in real-time. See every conversation, score, and stage at a glance. Know exactly who's hot, who needs follow-up, and where your revenue is coming from."
          features={[
            "Real-time lead syncing from Instagram",
            "Visual pipeline with drag-and-drop stages",
            "Behavior tracking and engagement signals"
          ]}
          bgVariant="slate"
        >
          <AnimatedCRM />
        </ProcessSection>

        {/* 6. Process Section E: Reactivation & Upsell (Visual LEFT) */}
        <ProcessSection
          visualPosition="left"
          stepNumber="05"
          tagline="Revenue Recovery"
          headline="Reactivate Dormant Leads. Upsell Happy Customers."
          description="Your AI remembers everyone. It reaches back out to cold leads with perfect timing and personalized messages. It spots upsell opportunities with existing customers. Money you'd otherwise leave behind."
          features={[
            "Automated win-back campaigns for inactive leads",
            "Personalized upsells based on purchase history",
            "Recover revenue you didn't know you were missing"
          ]}
          bgVariant="white"
        >
          <AnimatedReactivation />
        </ProcessSection>

        {/* 7. Calendly - DM System Blueprint booking */}
        <CalendlySection />

        {/* 8. FAQ - Address objections */}
        <FAQ />

        {/* 9. Final CTA - Strong close */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <StickyBottomCTA />
    </div>
  );
};

export default App;
