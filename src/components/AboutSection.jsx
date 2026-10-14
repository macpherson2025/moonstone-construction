import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../data/siteData';

export default function AboutSection() {
  return (
    <section className="border-t border-brand-sand bg-brand-light py-16" aria-labelledby="about-section-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <h2 id="about-section-heading" className="font-serif text-3xl font-bold text-brand-primary md:text-4xl">
            About Us
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-brand-secondary">{footerData.story}</p>
          <Link to="/about" className="mt-6 inline-block font-sans text-sm font-semibold text-brand-primary underline">
            Read the full company history
          </Link>
        </div>
        <div className="border border-brand-sand p-6">
          <h3 className="font-serif text-2xl font-bold text-brand-primary">Brad Pederson</h3>
          <p className="mt-4 font-sans text-sm leading-relaxed text-brand-secondary">
            Our clients enjoy full-time access to Brad Pederson, President of Moonstone. Brad is a Cum Laude graduate of the CU Leeds School of Business. He works with the client through each step of the project.
          </p>
          <p className="mt-4 font-sans text-sm text-brand-secondary">
            Direct line:{' '}
            <a href={footerData.phoneHref} className="font-semibold text-brand-primary">
              {footerData.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
