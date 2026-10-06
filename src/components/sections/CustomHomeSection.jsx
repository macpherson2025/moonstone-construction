export function CustomHomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase font-sans">Design / Build Excellence</span>
          <h2 className="text-4xl font-serif font-bold text-brand-primary mt-2 mb-6">Custom Home Building</h2>
          <p className="text-brand-secondary leading-relaxed font-sans mb-4">
            Since 1990, Moonstone Construction has been translating unique visions into permanent structural realities across the Colorado Front Range. We build to adapt flawlessly to diverse topographical conditions—expertly handling builds on the plains, in complex mountain terrains, and varying ground profiles from soft sand to solid bedrock.
          </p>
          <p className="text-brand-secondary leading-relaxed font-sans">
            Whether collaborating directly with your chosen architect or utilizing our full-scale, in-house technical design capabilities, Brad Pederson maintains an exact, highly discriminating eye for spatial options to fit your lifestyle parameters seamlessly.
          </p>
        </div>
        <div className="bg-brand-light h-96 rounded-lg flex items-center justify-center border border-stone-200">
          {/* Active webp portfolio image rendering goes here */}
          <span className="text-brand-secondary font-mono text-xs">[Portfolio Asset: Custom Home Build]</span>
        </div>
      </div>
    </section>
  );
}
