import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { ViralDripLogo } from '../components/Header';

const Terms: React.FC = () => {
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
            <FileText className="w-4 h-4" />
            Legal Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using ViralDrip.ai, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access our services.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              [PLACEHOLDER: Add detailed introduction about the binding nature of these terms and who they apply to.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Description of Services</h2>
            <p className="text-slate-600 leading-relaxed">
              ViralDrip.ai provides AI-powered Instagram DM automation services for coaches and course creators.
              Our services include:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Automated DM response systems]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Lead qualification and scoring]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Calendar booking integration]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: CRM and pipeline management]</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed">
              When using our services, you agree to:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Provide accurate information]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Comply with Instagram's terms of service]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Not use services for spam or harassment]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-slate-600">[PLACEHOLDER: Maintain security of account credentials]</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Describe pricing, payment schedules, refund policies, billing cycles,
              and any free trial terms.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Clarify ownership of content, AI-generated responses, branding, and
              any user-submitted content. Include licensing terms.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Define limits on your liability, including disclaimers about service
              availability, data accuracy, and consequential damages.]
            </p>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm">
                <strong>Important:</strong> [PLACEHOLDER: Key liability disclaimer that users should be aware of]
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Describe conditions under which accounts may be terminated, user's right
              to cancel, data retention after termination, etc.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Dispute Resolution</h2>
            <p className="text-slate-600 leading-relaxed">
              [PLACEHOLDER: Specify how disputes will be handled - arbitration, mediation, jurisdiction,
              governing law, etc.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes via email or through our service.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              [PLACEHOLDER: Add details about how changes will be communicated and when they take effect.]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at:
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

export default Terms;
