import React, { useState } from 'react';
import { footerData } from '../data/siteData';

const WORKER_URL = 'https://moonstone-worker.mickens-piercy.workers.dev';

const emptyValues = {
  fullName: '',
  phone: '',
  location: '',
  projectDetails: '',
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Enter your full name.';
  if (values.phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a phone number.';
  if (!values.location.trim()) errors.location = 'Enter the property location or city.';
  if (!values.projectDetails.trim()) errors.projectDetails = 'Enter the project details.';
  return errors;
}

function buildPayload(values) {
  return {
    name: values.fullName.trim(),
    phone: values.phone.trim(),
    location: values.location.trim(),
    details: values.projectDetails.trim(),
  };
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle');

  const updateField = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('idle');
      return;
    }

    const payload = buildPayload(values);
    setSubmitState('loading');

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setSubmitState('error');
        return;
      }

      setValues(emptyValues);
      setErrors({});
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  const statusMessage = {
    loading: 'Sending your project details.',
    success: 'Your project details were sent.',
    error: `The form could not be sent. Call ${footerData.phone}.`,
  }[submitState];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 border border-brand-sand bg-white p-6">
      <h2 className="font-serif text-2xl font-bold text-brand-primary">Project inquiry</h2>

      <Field
        id="full-name"
        label="Full Name"
        error={errors.fullName}
        value={values.fullName}
        onChange={updateField('fullName')}
        autoComplete="name"
      />
      <Field
        id="phone-number"
        label="Phone Number"
        type="tel"
        error={errors.phone}
        value={values.phone}
        onChange={updateField('phone')}
        autoComplete="tel"
      />
      <Field
        id="property-location"
        label="Property Location/City"
        error={errors.location}
        value={values.location}
        onChange={updateField('location')}
        autoComplete="address-level2"
      />

      <div>
        <label htmlFor="project-details" className="font-serif text-brand-primary">
          Project Details
        </label>
        <textarea
          id="project-details"
          name="projectDetails"
          rows="5"
          value={values.projectDetails}
          onChange={updateField('projectDetails')}
          aria-invalid={errors.projectDetails ? 'true' : 'false'}
          aria-describedby={errors.projectDetails ? 'project-details-error' : undefined}
          className="mt-2 w-full border border-brand-sand bg-white px-3 py-2 font-sans text-brand-primary"
        />
        {errors.projectDetails && (
          <p id="project-details-error" className="mt-1 font-sans text-sm text-brand-primary" role="alert">
            {errors.projectDetails}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="bg-brand-primary px-4 py-2.5 font-sans text-sm font-semibold text-brand-light disabled:opacity-60"
      >
        {submitState === 'loading' ? 'Sending' : 'Send project details'}
      </button>

      {statusMessage && (
        <p className="font-sans text-sm text-brand-primary" role={submitState === 'error' ? 'alert' : 'status'}>
          {statusMessage}
        </p>
      )}
    </form>
  );
}

function Field({ id, label, type = 'text', value, onChange, error, autoComplete }) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="font-serif text-brand-primary">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full border border-brand-sand bg-white px-3 py-2 font-sans text-brand-primary"
      />
      {error && (
        <p id={errorId} className="mt-1 font-sans text-sm text-brand-primary" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
