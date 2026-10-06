import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-primary text-white sticky top-0 z-50 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3">
               <img 
                 src="/assets/images/logo.webp" 
                 alt="Moonstone Construction Logo" 
                 className="h-12 w-auto object-contain mix-blend-multiply" 
             />
             <span className="font-serif text-xl tracking-wide uppercase font-bold text-white">
               Moonstone
             </span>
           </a>
         </div>


          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="/" className="hover:text-brand-accent transition-colors">Home</a>
            <a href="/about" className="hover:text-brand-accent transition-colors">About</a>
            <a href="/services" className="hover:text-brand-accent transition-colors">Services</a>
            <a href="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a>
            <a href="/contact" className="bg-brand-accent px-5 py-2.5 rounded text-white hover:bg-amber-700 transition-all font-semibold">
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-brand-secondary hover:text-white focus:outline-none" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800 px-4 pt-2 pb-6 space-y-3 text-base font-medium">
          <a href="/" className="block py-2 hover:text-brand-accent">Home</a>
          <a href="/about" className="block py-2 hover:text-brand-accent">About</a>
          <a href="/services" className="block py-2 hover:text-brand-accent">Services</a>
          <a href="/portfolio" className="block py-2 hover:text-brand-accent">Portfolio</a>
          <a href="/contact" className="block text-center bg-brand-accent py-3 rounded text-white font-semibold mt-4">
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
