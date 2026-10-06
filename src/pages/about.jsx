import React from 'react';

export default function About() {
  return (
    <div className="font-sans bg-brand-light">
      
      {/* 1. EDITORIAL PAGE HEADER */}
      <section className="bg-brand-primary text-white py-16 md:py-24 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase font-sans">
            Built on Trust Since 1990
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
            Our Legacy of Craftsmanship
          </h1>
          <p className="text-brand-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            Every contractor expounds the quality of their work and their trustworthiness. At Moonstone Construction and Development, we prove it daily through our structures and deep local relationships.
          </p>
        </div>
      </section>

      {/* 2. THE MOONSTONE PROOF SECTON */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-brand-light border border-stone-200 h-72 md:h-96 rounded-lg flex items-center justify-center text-brand-secondary font-mono text-xs overflow-hidden shadow-inner">
            [ Asset: BBB A+ Accreditation Badge & Commendations ]
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-brand-primary mb-6">
              Quality? Work Well With Others? Trustworthy? Prove It.
            </h2>
            <p className="text-brand-secondary leading-relaxed mb-4">
              We back our reputation with over 30 years' worth of verified client references, formal letters of recommendation, industry awards, and exceptional design commendations. 
            </p>
            <p className="text-brand-secondary leading-relaxed">
              Complementing our long-standing <strong>A+ rating and Accreditation with the Better Business Bureau (BBB)</strong>, it remains our continuous pleasure to bring your complex design concepts to life through a collaborative, creative, and cost-conscious execution model.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE LEADERSHIP BIOGRAPHY */}
      <section className="py-16 bg-brand-light border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-brand-accent font-semibold tracking-wider text-xs uppercase">Leadership Profile</span>
          <h2 className="text-3xl font-serif font-bold text-brand-primary mt-2 mb-6">Meet Brad Pederson</h2>
          <p className="text-brand-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            Our residential clients enjoy full-time, direct communication access to <strong>Brad Pederson</strong>, President of Moonstone Construction and Development Incorporated.
          </p>
          <p className="text-brand-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Brad is a <em>Cum Laude</em> Graduate of the <strong>University of Colorado Boulder - Leeds School of Business</strong>. This strong foundational academic expertise allows Moonstone to merge deep structural artistry with exact fiscal project management, keeping your builds meticulously organized and transparently priced.
          </p>
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded border border-stone-200 shadow-sm text-sm">
            <span className="font-semibold text-brand-primary">Direct Partner Line:</span>
            <a href="tel:3039262625" className="text-brand-accent hover:underline font-bold">(303) 926-2625</a>
          </div>
        </div>
      </section>

      {/* 4. NICHE VALUES & OPERATIONS SLOTS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-primary">Our Core Competencies</h2>
            <p className="text-brand-secondary text-sm mt-2">The pillars that have supported our high-end contracting standards for three decades.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value card 1 */}
            <div className="p-6 bg-brand-light rounded-lg border border-stone-200">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-serif font-bold text-lg text-brand-primary mb-2">Green Building Standards</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                Eco-conscious practices serve as the structural foundation for all of our updates. We implement durable thermal materials and highly sustainable sourcing frameworks.
              </p>
            </div>

            {/* Value card 2 */}
            <div className="p-6 bg-brand-light rounded-lg border border-stone-200">
              <div className="text-2xl mb-3">🏛️</div>
              <h3 className="font-serif font-bold text-lg text-brand-primary mb-2">Historical Preservation</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                Extensive technical background collaborating with city planning boards, state boards, and zoning committees to protect classic Front Range architectural assets.
              </p>
            </div>

            {/* Value card 3 */}
            <div className="p-6 bg-brand-light rounded-lg border border-stone-200">
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="font-serif font-bold text-lg text-brand-primary mb-2">Dedicated Office Ops</h3>
              <p className="text-brand-secondary text-sm leading-relaxed">
                You are never isolated during an active timeline. Our streamlined administrative infrastructure handles all scheduling, permit submissions, and backend details smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
