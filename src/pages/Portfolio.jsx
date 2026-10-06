import React from 'react';
import ProjectGallery from '../components/ProjectGallery';

export default function Portfolio() {
  return (
    <div className="font-sans bg-brand-light">
      <section className="bg-brand-primary text-white py-16 md:py-24 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase">
            Selected Work
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
            Project Portfolio
          </h1>
          <p className="text-brand-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Custom homes, historical restorations, and design-build renovations across the Colorado Front Range.
          </p>
        </div>
      </section>
      <ProjectGallery />
    </div>
  );
}
