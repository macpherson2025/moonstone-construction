import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Frame UI Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Template Importers
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-light selection:bg-brand-accent/30 text-brand-primary">
        
        {/* Global Structural Header Navbar */}
        <Navbar />

        {/* Dynamic Route Viewport Component Frame */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global SEO-Optimized NAP Footer Module */}
        <Footer />

      </div>
    </Router>
  );
}
