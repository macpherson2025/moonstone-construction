import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { footerData, logoSrc, navItems } from '../data/siteData';

function itemIsActive(href, location) {
  const [path, hash = ''] = href.split('#');
  if (hash) {
    return location.pathname === path && location.hash === `#${hash}`;
  }
  if (path === '/about') {
    return location.pathname === '/about' && location.hash !== '#team';
  }
  return location.pathname === path;
}

function linkClass(href, location) {
  const active = itemIsActive(href, location);
  return `font-sans tracking-wide transition-colors ${
    active ? 'font-semibold text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
  }`;
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-brand-sand bg-brand-light/80 shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-brand-light'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            {logoFailed ? (
              <span className="font-serif text-xl font-bold text-brand-primary">Moonstone</span>
            ) : (
              <img
                src={logoSrc}
                alt="Moonstone Construction"
                className="h-12 w-auto object-contain"
                onError={() => setLogoFailed(true)}
              />
            )}
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={itemIsActive(item.href, location) ? 'page' : undefined}
                className={`text-sm ${linkClass(item.href, location)}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={footerData.phoneHref}
              className="bg-brand-accent px-3 py-2.5 font-sans text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-brand-light sm:px-4"
            >
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{footerData.phone}</span>
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-brand-primary lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((open) => !open)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <nav id="mobile-nav" className="border-t border-brand-sand bg-brand-light px-4 py-4 lg:hidden" aria-label="Mobile">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={itemIsActive(item.href, location) ? 'page' : undefined}
                    className={`block py-2 text-base ${linkClass(item.href, location)}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={footerData.phoneHref}
              className="mt-4 block bg-brand-accent px-4 py-3 text-center font-sans text-base font-semibold text-brand-primary"
            >
              Call {footerData.phone}
            </a>
          </nav>
        )}
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
