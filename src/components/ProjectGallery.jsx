import React from 'react';

export default function ProjectGallery() {
  // Demo placeholder array to test layout spacing and rendering
  const projects = [
    { id: 1, title: 'Mountain Custom Home', category: 'Custom Build', span: 'md:col-span-2 md:row-span-2' },
    { id: 2, title: 'Historical Front Range Estate', category: 'Restoration', span: 'col-span-1' },
    { id: 3, title: 'Modern Kitchen Sanctuary', category: 'Remodeling', span: 'col-span-1' },
    { id: 4, title: 'Boulder Eco-Friendly Residence', category: 'Green Building', span: 'col-span-1' },
    { id: 5, title: 'Lafayette Design-Build Expansion', category: 'Remodeling', span: 'md:col-span-2' },
  ];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-accent font-semibold tracking-wider text-xs uppercase">Our Master Craftsmanship</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mt-2">Featured Projects Gallery</h2>
        </div>

        {/* Dynamic Tailwind Responsive Structural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative overflow-hidden rounded-lg group bg-brand-light border border-stone-200 shadow-sm ${project.span}`}
            >
              {/* Asset Box Wrapper */}
              <div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-500 font-mono text-xs">
                [ Optimized WebP Project Asset Image {project.id} ]
                {/* Once assets exist, replace wrapper with actual img tags:
                <img src={`/assets/images/project-${project.id}.webp`} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                */}
              </div>

              {/* Hover Animated Shadow Overlay Grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-1">{project.category}</span>
                <h3 className="text-lg font-serif font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
