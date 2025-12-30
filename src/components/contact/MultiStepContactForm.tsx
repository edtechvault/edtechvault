'use client';

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface FormData {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  projectType: '',
  timeline: '',
  budget: '',
  message: ''
};

const steps = [
  { id: 1, title: 'About You', icon: '👤' },
  { id: 2, title: 'Your Project', icon: '📋' },
  { id: 3, title: 'Details', icon: '✨' }
];

export const MultiStepContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = 'Please select a project type';
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    }

    if (step === 3) {
      if (!formData.budget) newErrors.budget = 'Please select a budget';
      if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contacts').insert([{
        name: formData.name,
        email: formData.email,
        project_type: formData.projectType,
        timeline: formData.timeline,
        budget: formData.budget,
        message: formData.message,
        created_at: new Date().toISOString(),
      }]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData(INITIAL_FORM_DATA);
      setCurrentStep(1);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or email leo@edtechvault.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="bg-[var(--background-white)] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center space-y-6 bg-[var(--secondary)] rounded-3xl p-12 shadow-[var(--shadow-soft)]">
            <div className="text-6xl mb-4">✓</div>
            <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)]">
              Message Sent!
            </h3>
            <p className="text-[var(--text-secondary)] text-lg">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
            <Button
              variant="outline"
              size="medium"
              onClick={() => setIsSuccess(false)}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--background-white)] py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Step Indicators */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-[var(--primary)] -translate-y-1/2 transition-all duration-500 -z-10"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 bg-white border-4',
                    currentStep >= step.id
                      ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                      : 'border-gray-300 bg-white'
                  )}
                >
                  {step.icon}
                </div>
                <p
                  className={cn(
                    'mt-2 text-sm font-medium transition-colors',
                    currentStep >= step.id
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)]'
                  )}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)] border-2 border-gray-100">
          {/* Step 1: About You */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                Let's start with the basics
              </h3>

              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Your Name <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent',
                    errors.name ? 'border-red-400' : 'border-gray-300'
                  )}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Email Address <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent',
                    errors.email ? 'border-red-400' : 'border-gray-300'
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Your Project */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                Tell me about your project
              </h3>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  What type of website do you need? <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'quick-launch', label: 'Quick Launch (Single Page)', icon: '🚀' },
                    { value: 'local-visibility', label: 'Local Visibility (Multi-Page)', icon: '📍' },
                    { value: 'growth-system', label: 'Growth System (Full Suite)', icon: '📈' },
                    { value: 'not-sure', label: 'Not Sure Yet', icon: '🤔' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all',
                        formData.projectType === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={option.value}
                        checked={formData.projectType === option.value}
                        onChange={(e) => updateFormData('projectType', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-[var(--text-primary)]">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>
                )}
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  When do you need it? <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'asap', label: 'ASAP (Within 1 week)', icon: '⚡' },
                    { value: '2-4-weeks', label: '2-4 Weeks', icon: '📅' },
                    { value: 'flexible', label: 'Flexible Timeline', icon: '🕐' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all',
                        formData.timeline === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.value}
                        checked={formData.timeline === option.value}
                        onChange={(e) => updateFormData('timeline', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-[var(--text-primary)]">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.timeline && (
                  <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                Final details
              </h3>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  What's your budget? <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'tier1', label: 'Quick Launch ($800)', icon: '💰' },
                    { value: 'tier2', label: 'Local Visibility ($1,800)', icon: '💰💰' },
                    { value: 'tier3', label: 'Growth System ($3,200)', icon: '💰💰💰' },
                    { value: 'discuss\', label: \'Let\'s Discuss\', icon: \'💬' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all',
                        formData.budget === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option.value}
                        checked={formData.budget === option.value}
                        onChange={(e) => updateFormData('budget', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-[var(--text-primary)]">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Tell me about your project <span className="text-[var(--primary)]">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  rows={5}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none',
                    errors.message ? 'border-red-400' : 'border-gray-300'
                  )}
                  placeholder="What are you looking to achieve with your website? Any specific features or requirements?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t-2 border-gray-100">
            {currentStep > 1 ? (
              <Button
                variant="outline"
                size="medium"
                onClick={handleBack}
                disabled={isSubmitting}
              >
                ← Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < steps.length ? (
              <Button
                variant="primary"
                size="medium"
                onClick={handleNext}
              >
                Next →
              </Button>
            ) : (
              <Button
                variant="primary"
                size="medium"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepContactForm;
