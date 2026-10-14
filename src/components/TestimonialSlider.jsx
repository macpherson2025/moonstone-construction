import React, { useState } from 'react';
import { testimonials } from '../data/siteData';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const review = testimonials[index];
  const total = testimonials.length;

  const show = (nextIndex) => {
    setIndex((nextIndex + total) % total);
  };

  return (
    <section className="border-t border-brand-sand bg-brand-light py-16" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="reviews-heading" className="text-center font-serif text-3xl font-bold text-brand-primary">
          Client reviews
        </h2>
        <p className="mt-2 text-center font-sans text-sm text-brand-secondary">5-star reviews from clients.</p>

        <figure className="mt-10 border border-brand-sand bg-brand-light p-6 sm:p-8" aria-live="polite">
          <div className="font-sans text-sm tracking-widest text-brand-accent" aria-label={`${review.rating} stars`}>
            {'★★★★★'.slice(0, review.rating)}
          </div>
          <blockquote className="mt-4 font-sans text-base leading-relaxed text-brand-primary">
            {review.quote}
          </blockquote>
          <figcaption className="mt-6 font-serif text-lg font-bold text-brand-primary">{review.name}</figcaption>
        </figure>

        <nav className="mt-6 flex items-center justify-between gap-4" aria-label="Review pagination">
          <button
            type="button"
            onClick={() => show(index - 1)}
            className="border border-brand-sand px-4 py-2 font-sans text-sm text-brand-primary hover:border-brand-primary"
          >
            Previous
          </button>
          <ol className="flex items-center gap-2">
            {testimonials.map((item, itemIndex) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => show(itemIndex)}
                  aria-current={itemIndex === index ? 'true' : undefined}
                  aria-label={`Show review ${itemIndex + 1} from ${item.name}`}
                  className={`h-9 w-9 font-sans text-sm ${
                    itemIndex === index
                      ? 'bg-brand-primary text-brand-light'
                      : 'border border-brand-sand text-brand-primary'
                  }`}
                >
                  {itemIndex + 1}
                </button>
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() => show(index + 1)}
            className="border border-brand-sand px-4 py-2 font-sans text-sm text-brand-primary hover:border-brand-primary"
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
