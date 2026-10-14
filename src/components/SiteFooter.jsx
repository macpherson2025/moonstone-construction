import React from 'react';
import { footerData } from '../data/siteData';

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-sand bg-brand-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-serif text-xl font-bold text-brand-primary">{footerData.name}</h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-brand-secondary">{footerData.story}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-brand-primary">Area We Serve</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm text-brand-secondary">
            {footerData.serviceAreas.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-brand-primary">Contact</h2>
          <address className="mt-4 space-y-2 font-sans text-sm not-italic text-brand-secondary">
            <p>
              <a className="font-semibold text-brand-primary hover:underline" href={footerData.phoneHref}>
                {footerData.phone}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={`mailto:${footerData.email}`}>
                {footerData.email}
              </a>
            </p>
            <p>
              {footerData.street}
              <br />
              {footerData.locality}
            </p>
            <p>{footerData.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-brand-sand px-4 py-6 text-center font-sans text-xs text-brand-secondary">
        <p>&copy; {new Date().getFullYear()} Moonstone Construction and Development Incorporated.</p>
      </div>
    </footer>
  );
}
