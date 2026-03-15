import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

interface ContactFormProps {
  type: 'contact' | 'volunteer'
}

const contactSchema = z.object({
  name:    z.string().min(2, 'Please enter your full name'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(20, 'Please write at least 20 characters'),
})

const volunteerSchema = z.object({
  name:      z.string().min(2, 'Please enter your full name'),
  email:     z.string().email('Please enter a valid email address'),
  phone:     z.string().optional(),
  interests: z.string().min(1, 'Please select an area of interest'),
  message:   z.string().min(20, 'Tell us a bit about yourself (at least 20 characters)'),
})

const volunteerInterests = [
  'Community Outreach',
  'Fundraising & Events',
  'Communications & Design',
  'Administration & Compliance',
  'Other',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({ type }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: type === 'contact' ? '' : undefined,
      interests: type === 'volunteer' ? '' : undefined,
      message: '',
    },
    onSubmit: async ({ value }) => {
      setStatus('submitting')
      // Simulate form submission — replace with real endpoint
      await new Promise((res) => setTimeout(res, 1200))
      setStatus('success')
    },
  })

  if (status === 'success') {
    return (
      <div className="success-state" role="alert" aria-live="polite">
        <div className="success-line" aria-hidden="true"></div>
        <h3 className="success-heading">
          {type === 'volunteer' ? 'Application received.' : 'Message received.'}
        </h3>
        <p className="success-body">
          {type === 'volunteer'
            ? 'Our team will be in touch within 3 working days to discuss how you can get involved.'
            : 'We aim to respond within 2 working days. Thank you for reaching out.'}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      noValidate
      aria-label={type === 'volunteer' ? 'Volunteer application form' : 'Contact form'}
    >
      <div className="form-grid">

        {/* Name */}
        <form.Field
          name="name"
          validators={{ onChange: ({ value }) => {
            const r = z.string().min(2, 'Please enter your full name').safeParse(value)
            return r.success ? undefined : r.error.errors[0]?.message
          }}}
        >
          {(field) => (
            <div className="field">
              <label htmlFor={field.name} className="field-label">
                Full name <span aria-hidden="true">*</span>
              </label>
              <input
                id={field.name}
                name={field.name}
                type="text"
                value={field.state.value as string}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className={`field-input ${field.state.meta.errors.length ? 'field-input--error' : ''}`}
                aria-required="true"
                aria-describedby={field.state.meta.errors.length ? `${field.name}-error` : undefined}
                autoComplete="name"
              />
              {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                <p id={`${field.name}-error`} className="field-error" role="alert">
                  {String(field.state.meta.errors[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* Email */}
        <form.Field
          name="email"
          validators={{ onChange: ({ value }) => {
            const r = z.string().email('Please enter a valid email address').safeParse(value)
            return r.success ? undefined : r.error.errors[0]?.message
          }}}
        >
          {(field) => (
            <div className="field">
              <label htmlFor={field.name} className="field-label">
                Email address <span aria-hidden="true">*</span>
              </label>
              <input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value as string}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className={`field-input ${field.state.meta.errors.length ? 'field-input--error' : ''}`}
                aria-required="true"
                aria-describedby={field.state.meta.errors.length ? `${field.name}-error` : undefined}
                autoComplete="email"
              />
              {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                <p id={`${field.name}-error`} className="field-error" role="alert">
                  {String(field.state.meta.errors[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* Phone (optional) */}
        <form.Field name="phone">
          {(field) => (
            <div className="field">
              <label htmlFor={field.name} className="field-label">
                Phone <span className="field-label-optional">(optional)</span>
              </label>
              <input
                id={field.name}
                name={field.name}
                type="tel"
                value={field.state.value as string}
                onChange={(e) => field.handleChange(e.target.value)}
                className="field-input"
                autoComplete="tel"
              />
            </div>
          )}
        </form.Field>

        {/* Subject (contact only) or Interests (volunteer only) */}
        {type === 'contact' ? (
          <form.Field
            name="subject"
            validators={{ onChange: ({ value }) => {
              const r = z.string().min(3, 'Please enter a subject').safeParse(value)
              return r.success ? undefined : r.error.errors[0]?.message
            }}}
          >
            {(field) => (
              <div className="field">
                <label htmlFor={field.name} className="field-label">
                  Subject <span aria-hidden="true">*</span>
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  value={field.state.value as string}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className={`field-input ${field.state.meta.errors.length ? 'field-input--error' : ''}`}
                  aria-required="true"
                />
                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                  <p className="field-error" role="alert">{String(field.state.meta.errors[0])}</p>
                )}
              </div>
            )}
          </form.Field>
        ) : (
          <form.Field
            name="interests"
            validators={{ onChange: ({ value }) => {
              const r = z.string().min(1, 'Please select an area of interest').safeParse(value)
              return r.success ? undefined : r.error.errors[0]?.message
            }}}
          >
            {(field) => (
              <div className="field">
                <label htmlFor={field.name} className="field-label">
                  Area of interest <span aria-hidden="true">*</span>
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  value={field.state.value as string}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className={`field-input field-select ${field.state.meta.errors.length ? 'field-input--error' : ''}`}
                  aria-required="true"
                >
                  <option value="">Select an area...</option>
                  {volunteerInterests.map((interest) => (
                    <option key={interest} value={interest}>{interest}</option>
                  ))}
                </select>
                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                  <p className="field-error" role="alert">{String(field.state.meta.errors[0])}</p>
                )}
              </div>
            )}
          </form.Field>
        )}

        {/* Message — full width */}
        <form.Field
          name="message"
          validators={{ onChange: ({ value }) => {
            const min = 20
            const r = z.string().min(min, `Please write at least ${min} characters`).safeParse(value)
            return r.success ? undefined : r.error.errors[0]?.message
          }}}
        >
          {(field) => (
            <div className="field field--full">
              <label htmlFor={field.name} className="field-label">
                {type === 'volunteer' ? 'Tell us about yourself' : 'Message'}
                {' '}<span aria-hidden="true">*</span>
              </label>
              <textarea
                id={field.name}
                name={field.name}
                value={field.state.value as string}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                rows={5}
                className={`field-input field-textarea ${field.state.meta.errors.length ? 'field-input--error' : ''}`}
                aria-required="true"
                aria-describedby={field.state.meta.errors.length ? `${field.name}-error` : undefined}
              />
              {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                <p id={`${field.name}-error`} className="field-error" role="alert">
                  {String(field.state.meta.errors[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

      </div>

      <div className="form-footer">
        <button
          type="submit"
          className="submit-btn"
          disabled={status === 'submitting'}
          aria-live="polite"
        >
          {status === 'submitting' ? 'Sending…' : type === 'volunteer' ? 'Submit Application' : 'Send Message'}
        </button>
        <p className="form-privacy">
          Your information is never shared with third parties.
        </p>
      </div>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
        }

        .field { display: flex; flex-direction: column; gap: 0.5rem; }
        .field--full { grid-column: 1 / -1; }

        .field-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-secondary);
        }

        .field-label-optional {
          font-weight: 400;
          letter-spacing: 0;
          text-transform: none;
          opacity: 0.7;
        }

        .field-input {
          width: 100%;
          padding: 0.875rem 1rem;
          background-color: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: 2px;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          transition: border-color 200ms cubic-bezier(0.25, 1, 0.5, 1);
          outline: none;
          appearance: none;
        }

        .field-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(196, 149, 42, 0.12);
        }

        .field-input--error {
          border-color: var(--color-error);
        }

        .field-textarea { resize: vertical; min-height: 140px; }

        .field-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B5B45' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
          cursor: pointer;
        }

        .field-error {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-error);
        }

        .form-footer {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2rem;
          background-color: var(--color-teal);
          color: var(--color-teal-text);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background-color 200ms cubic-bezier(0.25, 1, 0.5, 1),
                      opacity 200ms;
        }

        .submit-btn:hover { background-color: var(--color-teal-hover); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .form-privacy {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .success-state {
          padding: 3rem 0;
        }

        .success-line {
          width: 3rem;
          height: 1px;
          background-color: var(--color-gold);
          margin-bottom: 1.5rem;
        }

        .success-heading {
          font-family: var(--font-heading);
          font-size: 2rem;
          letter-spacing: -0.02em;
          color: var(--color-text);
          margin-bottom: 1rem;
        }

        .success-body {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          max-width: 32rem;
        }
      `}</style>
    </form>
  )
}
