import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all required fields.');
      return;
    }
    // Form action logic goes here (e.g., Netlify Forms, Formspree, or custom API)
    setStatus('Thank you! Your message has been sent to info@moonstoneconstruction.com.');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form max-w-lg mx-auto p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Get In Touch With Brad</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Name *</label>
        <input type="text" required className="w-full border p-2 rounded" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Email *</label>
        <input type="email" required className="w-full border p-2 rounded" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Phone</label>
        <input type="tel" className="w-full border p-2 rounded" 
          onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Project Details *</label>
        <textarea required rows="4" className="w-full border p-2 rounded" 
          onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
      </div>

      <button type="submit" className="bg-stone-800 text-white px-4 py-2 rounded hover:bg-stone-700">
        Submit Request
      </button>

      {status && <p className="mt-4 text-sm font-medium text-amber-700">{status}</p>}
    </form>
  );
}
