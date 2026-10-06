import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="font-sans bg-brand-light py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Hand Context Card */}
        <div className="space-y-6">
          <div>
            <span className="text-brand-accent font-semibold tracking-wider text-xs uppercase">Project Inquiries</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mt-2 mb-4">
              Let's Build What You're Thinking.
            </h1>
            <p className="text-brand-secondary leading-relaxed">
              Ready to submit blueprints, coordinate an on-site property walkthrough, or request references? Fill out the project details or reach Brad directly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-lg text-brand-primary">Direct Communication</h3>
            <div className="text-sm text-brand-secondary space-y-2">
              <p className="flex items-center gap-2">
                <span>📍</span> <strong>Office Address:</strong> 11240 Billings Avenue, Lafayette, CO 80026
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> <strong>Estimates Line:</strong> (303) 926-2625
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> <strong>General Inbox:</strong> info@moonstoneconstruction.com
              </p>
            </div>
          </div>

          <div className="p-6 bg-stone-900 text-white rounded-lg border border-stone-800">
            <h4 className="font-serif font-bold text-brand-accent mb-2">Next Walkthrough Slot</h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Brad's current local availability window for verified on-site structural estimates:
            </p>
            <div className="inline-block bg-stone-800 px-4 py-2.5 rounded text-xs font-semibold text-white">
              📅 Monday, October 12, 2026 at 9:00 AM MDT
            </div>
          </div>
        </div>

        {/* Right Hand Form Injection Box */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-md">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
