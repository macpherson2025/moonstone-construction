import React from 'react';

export default function Footer() {
  const serviceAreas = [
    "Boulder", "Lafayette", "Louisville", "Longmont", "Superior", 
    "Thornton", "Broomfield", "Westminster", "Lyons", "Erie"
  ];

  return (
    <footer className="bg-brand-primary text-brand-light pt-16 pb-8 border-t-4 border-brand-accent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Core NAP Details */}
        <div>
          <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-4">Moonstone Construction</h4>
          <p className="text-brand-secondary text-sm leading-relaxed mb-4">
            Providing high-quality custom home building, residential design-build, and historical restorations since 1990.
          </p>
          <address className="not-italic text-sm text-brand-secondary space-y-2">
            <p className="block">📍 11240 Billings Avenue, Lafayette, CO 80026</p>
            <p className="block">📞 (303) 926-2625</p>
            <p className="block">✉️ info@moonstoneconstruction.com</p>
          </address>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="font-serif text-md font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="text-sm text-brand-secondary space-y-3">
            <li><a href="/" className="hover:text-white transition-colors">Home Layout</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">Our Team Credentials</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Design & Contracting Services</a></li>
            <li><a href="/portfolio" className="hover:text-white transition-colors">Project Portfolio Gallery</a></li>
          </ul>
        </div>

        {/* Column 3: Local SEO Geographical Targets */}
        <div>
          <h4 className="font-serif text-md font-bold text-white uppercase tracking-wider mb-4">Colorado Service Areas</h4>
          <p className="text-xs text-brand-secondary mb-3 leading-normal">
            Proudly serving premium custom residential building and structural remodeling across the Front Range:
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="text-xs bg-stone-900 border border-stone-800 text-brand-secondary px-2.5 py-1 rounded-sm hover:text-white hover:border-brand-accent transition-colors">
                {area}, CO
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Footer Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 text-center text-xs text-brand-secondary">
        <p>&copy; {new Date().getFullYear()} Moonstone Construction and Development Incorporated. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
