import React from 'react';
import { CustomHomeSection, RenovationSection } from '../components/sections';

export default function Services() {
  return (
    <div className="font-sans bg-brand-light">
      
      {/* Editorial Header */}
      <section className="bg-brand-primary text-white py-16 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase">
            30+ Years of Design/Build Mastery
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
            Our Building Capabilities
          </h1>
          <p className="text-brand-secondary text-base max-w-xl mx-auto">
            From initial zoning regulations and architectural planning to the final luxury finish, we manage your project with elite craftsmanship.
          </p>
        </div>
      </section>

      {/* Main Structural Narrative Sections */}
      <CustomHomeSection />
      <RenovationSection />

      {/* Additional Framework Grid */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-brand-primary text-center mb-12">Residential Remodeling Niche</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-brand-light rounded-lg border border-stone-200">
              <h3 className="font-serif font-bold text-xl mb-3 text-brand-primary">Green Building Core</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                Sustainability is integrated directly into our blueprints. We prioritize high-efficiency insulation, smart ventilation frameworks, and durable local materials to ensure long-term energy savings.
              </p>
            </div>
            <div className="p-8 bg-brand-light rounded-lg border border-stone-200">
              <h3 className="font-serif font-bold text-xl mb-3 text-brand-primary">Architectural Alliances</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                Have existing plans? We regularly collaborate alongside regional architects and structural engineers to ensure technical blueprints translate cleanly and flawlessly in the field.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
