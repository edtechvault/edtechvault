'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '../ui/Button';
import { BackgroundEllipses } from '../ui/BackgroundEllipses';

interface ContactFormProps {
  heading: string;
  submitButtonText: string;
  successMessage: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  heading,
  submitButtonText,
  successMessage,
}) => {
  console.log('ContactForm rendering with BackgroundEllipses');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.help_with) newErrors.help_with = 'Please select an option';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('contacts').insert([{
        name: formData.name,
        email: formData.email,
        business_name: formData.business_name || null,
        current_website: formData.current_website || null,
        help_with: formData.help_with,
        message: formData.message || null,
        created_at: new Date().toISOString(),
      }]);
      
      if (error) throw error;
      setIsSuccess(true);
      setFormData({});
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact-form" className="relative bg-[var(--background-white)] py-16 md:py-24">
        <BackgroundEllipses sections={['contact-form']} />
        <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center space-y-6">
          <div className="text-6xl">✅</div>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-[var(--text-primary)]">Got it!</h2>
          <p className="text-[var(--text-secondary)] text-lg">{successMessage}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="relative bg-[var(--background-white)] py-16 md:py-24">
      <BackgroundEllipses sections={['contact-form']} />
      <div className="relative z-10 max-w-[700px] mx-auto px-6">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-12 text-center">
          {heading}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[var(--text-primary)] font-medium mb-2">Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${errors.name ? 'border-red-500' : 'border-[var(--border)] focus:border-[var(--accent)]'}`}
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-[var(--text-primary)] font-medium mb-2">Email *</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${errors.email ? 'border-red-500' : 'border-[var(--border)] focus:border-[var(--accent)]'}`}
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-[var(--text-primary)] font-medium mb-2">Business Name</label>
            <input
              type="text"
              value={formData.business_name || ''}
              onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-[var(--border)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-[var(--text-primary)] font-medium mb-2">Current Website (if any)</label>
            <input
              type="text"
              value={formData.current_website || ''}
              onChange={(e) => setFormData({ ...formData, current_website: e.target.value })}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-lg border-2 border-[var(--border)] focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-[var(--text-primary)] font-medium mb-2">What can I help with? *</label>
            <select
              value={formData.help_with || ''}
              onChange={(e) => setFormData({ ...formData, help_with: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${errors.help_with ? 'border-red-500' : 'border-[var(--border)] focus:border-[var(--accent)]'}`}
              aria-required="true"
            >
              <option value="">Select an option...</option>
              <option value="new-website">I need a new website</option>
              <option value="redesign">I need a website redesign</option>
              <option value="not-sure">I'm not sure yet</option>
              <option value="other">Something else</option>
            </select>
            {errors.help_with && <p className="text-red-500 text-sm mt-1">{errors.help_with}</p>}
          </div>
          
          <div>
            <label className="block text-[var(--text-primary)] font-medium mb-2">Anything else you'd like me to know?</label>
            <textarea
              value={formData.message || ''}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-[var(--border)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
            />
          </div>
          
          {errors.submit && (
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{errors.submit}</p>
            </div>
          )}
          
          <div className="text-center pt-4">
            <Button variant="solid" size="large" type="submit" disabled={isSubmitting} loading={isSubmitting}>
              {submitButtonText}
            </Button>
            <p className="text-[var(--text-secondary)] text-sm mt-4">* Required</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
