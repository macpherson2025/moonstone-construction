import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-primary text-white py-24 md:py-32 overflow-hidden border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase font-sans bg-brand-accent/10 px-3 py-1.5 rounded-full border border-brand-accent/20">
              Est. 1990 — Boulder County Trusted
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mt-4 mb-6 leading-tight">
              Building What <br />
              <span className="text-brand-accent">You're Thinking.</span>
            </h1>
            <p className="text-brand-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Providing high-quality custom home building, architectural design-build services, and structural historical renovations throughout the Colorado Front Range for over 30 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="bg-brand-accent text-center px-6 py-3.5 rounded text-white hover:bg-amber-700 transition-all font-semibold shadow-lg shadow-brand-accent/20">
                Start Your Project Estimate
              </a>
              <a href="/services" className="border border-brand-secondary text-center px-6 py-3.5 rounded text-white hover:bg-white/5 transition-all font-medium">
                Explore Services
              </a>
            </div>
          </div>
          
          {/* Hero Visual Mockup */}
          <div className="relative bg-stone-900 border border-stone-800 h-80 sm:h-96 rounded-lg flex items-center justify-center text-brand-secondary font-mono text-xs overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent"></div>
            [ Portfolio Highlight Asset: High-End Custom Residential Build ]
          </div>
        </div>
      </section>

      {/* 2. REPUTATION & TRUST METRICS */}
      <section className="bg-white py-12 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-brand-primary">30+</div>
            <div className="text-xs text-brand-secondary font-sans uppercase tracking-wider mt-1">Years of Local Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-brand-primary">A+</div>
            <div className="text-xs text-brand-secondary font-sans uppercase tracking-wider mt-1">BBB Accredited Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-brand-primary">100%</div>
            <div className="text-xs text-brand-secondary font-sans uppercase tracking-wider mt-1">Five-Star References</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-brand-primary">10+</div>
            <div className="text-xs text-brand-secondary font-sans uppercase tracking-wider mt-1">Front Range Cities Served</div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SHOWCASE */}
      <ProjectGallery />

      {/* 4. CALL TO ACTION & CONSULTATION SCHEDULE */}
      <section className="bg-brand-light py-16 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-primary mb-4">Ready to Schedule an On-Site Consultation?</h2>
          <p className="text-brand-secondary max-w-xl mx-auto mb-8 font-sans">
            Have a project concept or blueprint package you'd like us to look at? Book a dedicated site walkthrough window directly with Brad.
          </p>
          
          <div className="inline-block bg-white p-4 rounded-lg shadow-sm border border-stone-200 font-sans">
            <span className="text-sm font-semibold text-brand-secondary block sm:inline sm:mr-3">Next available consultation opening:</span>
            <strong className="text-brand-accent">
              <layout>followupButton(query="""Add this match to my calendar""", label="""Monday, October 12, 2026 at 9:00 AM MDT""", variant=FOLLOWUP_BUTTON_VARIANT_DATE_DROPDOWN)</layout>
            </strong>
          </div>
        </div>
      </section>

    </div>
  );
}
