import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { ViralDripLogo } from '../components/Header';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 text-orange-500 transform group-hover:scale-110 transition-transform duration-300">
              <ViralDripLogo className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              ViralDrip<span className="text-orange-500">.ai</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At ViralDrip.ai, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              [PLACEHOLDER: Add detailed introduction about your commitment to privacy and data protection.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect information about you in various ways, including:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">
                  <strong className="text-slate-900">Personal Data:</strong> [PLACEHOLDER: Name, email, phone number, etc.]
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">
                  <strong className="text-slate-900">Usage Data:</strong> [PLACEHOLDER: How you interact with our service]
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">
                  <strong className="text-slate-900">Communication Data:</strong> [PLACEHOLDER: Information from Calendly bookings, etc.]
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Describe how you use collected information - service delivery, communication,
              improvement of services, marketing (with consent), legal obligations, etc.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing & Third Parties</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: List third-party services you use (Calendly, analytics, etc.) and how data
              may be shared with them. Include any business transfers, legal requirements, etc.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Describe security measures you take to protect user data. Mention encryption,
              secure servers, access controls, etc.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal data:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Right to access your data]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Right to correct inaccurate data]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Right to delete your data]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Right to opt-out of marketing]</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Describe what cookies you use, their purpose, and how users can manage
              cookie preferences.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-slate-700 font-medium">[PLACEHOLDER: Your Company Name]</p>
              <p className="text-slate-600 mt-1">[PLACEHOLDER: Email address]</p>
              <p className="text-slate-600">[PLACEHOLDER: Physical address if applicable]</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} ViralDrip.ai. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
