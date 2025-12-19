import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Home page component with all the landing page sections
const HomePage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-stone-900 bg-white min-h-screen">
      <Header />

      <main>
        {/* 1. Hero - Bold value proposition */}
        <Hero />

        {/* 2. Process Section A: Instant DM Response (Visual LEFT) */}
        <ProcessSection
          visualPosition="left"
          stepNumber="01"
          tagline="Instant Response"
          headline="DM Comes In. AI Replies in Seconds. In Your Voice."
          description="Speed matters — leads go cold in hours, not days. Your AI responds to every Instagram DM instantly, 24/7. And because it's trained on YOUR content, followers can't tell it's not you."
          features={[
            "Instant response to every DM — day or night",
            "Trained on your content, your tone, your way of talking",
            "Followers can't tell it's not you"
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
          description="This isn't a robotic flow-based bot. Your AI has real conversations, asks smart questions, and figures out who's serious vs. who's just curious. It identifies buying readiness through natural dialogue — not rigid scripts."
          features={[
            "Real conversations, not robotic scripts",
            "Identifies budget, timeline, and intent",
            "Separates hot leads from tire-kickers automatically"
          ]}
          bgVariant="cream"
        >
          <AnimatedQualification />
        </ProcessSection>

        {/* 4. Process Section C: Smart Routing (Visual LEFT) */}
        <ProcessSection
          visualPosition="left"
          stepNumber="03"
          tagline="Intelligent Routing"
          headline="Every Lead Gets Routed to the Right Path"
          description="Hot leads go directly to you (or to book a call). Warm leads get nurtured automatically. Cold leads are filtered out — no more wasted time. Smart routing based on lead score means you only talk to people ready to buy."
          features={[
            "Hot leads → Book a call or direct to offer",
            "Warm leads → Automated nurture sequence",
            "You only talk to people ready to buy"
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
          description="See every lead, their score, and status in one place. Know exactly who to prioritize. Track conversations and conversions. Full visibility without the chaos."
          features={[
            "Every lead tracked with buying-readiness score",
            "See conversation history at a glance",
            "No leads falling through the cracks"
          ]}
          bgVariant="gradient"
        >
          <AnimatedCRM />
        </ProcessSection>

        {/* 6. Process Section E: Reactivation & Upsell (Visual LEFT) */}
        <ProcessSection
          visualPosition="left"
          stepNumber="05"
          tagline="Revenue Recovery"
          headline="Reactivate Dormant Leads. Upsell Happy Customers."
          description="Don't let old leads die — your AI re-engages them with perfect timing. Past customers get personalized follow-ups. Turn one-time buyers into repeat customers. Automated but personal."
          features={[
            "Re-engage leads who went quiet",
            "Upsell sequences for past customers",
            "Automated follow-up that feels personal"
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

// Main App with routing
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
