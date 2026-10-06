export function RenovationSection() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center diversion-reverse">
        <div className="bg-white h-96 rounded-lg flex items-center justify-center border border-stone-200 order-2 md:order-1">
          {/* Active webp portfolio image rendering goes here */}
          <span className="text-brand-secondary font-mono text-xs">[Portfolio Asset: Historical Restoration]</span>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase font-sans">Preserving Local Heritage</span>
          <h2 className="text-4xl font-serif font-bold text-brand-primary mt-2 mb-6">Historical Renovations & Remodeling</h2>
          <p className="text-brand-secondary leading-relaxed font-sans mb-4">
            Historical restoration is a precise, technical niche that our specialized team thrives on. Moonstone holds extensive local experience navigating municipal planning boards, state preservation codes, and strict county historical committees to protect the physical integrity of classic structures.
          </p>
          <p className="text-brand-secondary leading-relaxed font-sans">
            For existing homes, we leverage over 30 years of regulatory expertise to design imaginative, high-end design-build interventions. We confidently manage structural limitations to redefine layouts into functional, luxury sanctuaries without stripping original architectural character.
          </p>
        </div>
      </div>
    </section>
  );
}
