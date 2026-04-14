'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  'bot-field': string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    'bot-field': '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isLoading) return;

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== undefined)) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError('Something went wrong. Please email us directly at hello@thestrativa.com');
      }
    } catch (err) {
      setError('Something went wrong. Please email us directly at hello@thestrativa.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        {/* Checkmark SVG with animation */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-6"
          aria-hidden="true"
        >
          <circle
            cx="18"
            cy="18"
            r="17"
            stroke="#2F5D62"
            strokeWidth="2"
          />
          <path
            d="M10 18L15 23L26 12"
            stroke="#2F5D62"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 24,
              strokeDashoffset: 24,
              animation: 'drawCheck 0.6s ease forwards',
            }}
          />
        </svg>
        <h3 className="font-display text-[28px] text-[#0F1113] mb-4">
          Message received.
        </h3>
        <p className="text-[15px] text-[#525250] leading-[1.7]">
          We'll be in touch within 24 hours. Thank you for reaching out.
        </p>
        <style jsx>{`
          @keyframes drawCheck {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-[28px] text-[#0F1113] mb-3">
        Send us a message
      </h2>
      <p className="text-[15px] text-[#525250] mb-8">
        We aim to respond within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Honeypot field */}
        <input
          type="text"
          name="bot-field"
          value={formData['bot-field']}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-[12px] text-[#525250] uppercase tracking-[0.08em] mb-1.5"
          >
            Full name <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full bg-white border px-4 py-3.5 text-[16px] text-[#0F1113] outline-none transition-all duration-200 focus:border-[#2F5D62] focus:shadow-[0_0_0_3px_rgba(47,93,98,0.08)] ${
              errors.name ? 'border-[#C0392B]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-[13px] text-[#C0392B] mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-[12px] text-[#525250] uppercase tracking-[0.08em] mb-1.5"
          >
            Email address <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full bg-white border px-4 py-3.5 text-[16px] text-[#0F1113] outline-none transition-all duration-200 focus:border-[#2F5D62] focus:shadow-[0_0_0_3px_rgba(47,93,98,0.08)] ${
              errors.email ? 'border-[#C0392B]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-[13px] text-[#C0392B] mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="block text-[12px] text-[#525250] uppercase tracking-[0.08em] mb-1.5"
          >
            Your message <span aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            rows={6}
            className={`w-full bg-white border px-4 py-3.5 text-[16px] text-[#0F1113] outline-none resize-none transition-all duration-200 focus:border-[#2F5D62] focus:shadow-[0_0_0_3px_rgba(47,93,98,0.08)] ${
              errors.message ? 'border-[#C0392B]' : 'border-[#E8E6E1]'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-[13px] text-[#C0392B] mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit button - McKinsey Style */}
        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="w-full bg-[#2F5D62] text-white px-8 py-4 text-[16px] font-semibold transition-all duration-200 hover:bg-[#1E3D40] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2F5D62] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <span
                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              />
              Sending...
            </>
          ) : (
            'Send message'
          )}
        </button>

        {/* Error message */}
        {error && (
          <p className="text-[14px] text-[#C0392B] mt-4" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
