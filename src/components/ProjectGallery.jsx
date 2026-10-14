import React from 'react';
import { demoProjects, projectImageNote } from '../data/siteData';

export default function ProjectGallery() {
  return (
    <section className="bg-brand-light py-16" aria-labelledby="project-gallery-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 id="project-gallery-heading" className="font-serif text-3xl font-bold text-brand-primary md:text-4xl">
            Project work
          </h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-brand-secondary">{projectImageNote}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {demoProjects.map((project) => (
            <article key={project.id} className="flex h-full flex-col border border-brand-sand bg-brand-light">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-serif text-2xl font-bold text-brand-primary">{project.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-brand-secondary">{project.summary}</p>
                <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-brand-sand pt-4 font-sans text-sm">
                  <div>
                    <dt className="text-brand-secondary">Size</dt>
                    <dd className="font-semibold text-brand-primary">{project.sqft.toLocaleString()} sq ft</dd>
                  </div>
                  <div>
                    <dt className="text-brand-secondary">Location</dt>
                    <dd className="font-semibold text-brand-primary">{project.location}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-brand-sand px-2.5 py-1 font-sans text-xs text-brand-primary">
                    {project.town}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
