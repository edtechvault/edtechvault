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
  // Personal Info
  name: string;
  email: string;
  phone: string;
  // Professional
  businessName: string;
  role: string;
  industry: string;
  // Website Goals
  websiteGoal: string;
  targetAudience: string;
  currentWebsite: string;
  // Design
  designStyle: string;
  colorPreference: string;
  inspirationUrl: string;
  // Budget
  budget: string;
  // Requirements
  country: string;
  city: string;
  specialFeatures: string[];
  additionalInfo: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  role: '',
  industry: '',
  websiteGoal: '',
  targetAudience: '',
  currentWebsite: '',
  designStyle: '',
  colorPreference: '',
  inspirationUrl: '',
  budget: '',
  country: '',
  city: '',
  specialFeatures: [],
  additionalInfo: ''
};

const steps = [
  { id: 1, title: 'Personal Info', icon: '👤' },
  { id: 2, title: 'Professional', icon: '💼' },
  { id: 3, title: 'Website Goals', icon: '🎯' },
  { id: 4, title: 'Design', icon: '🎨' },
  { id: 5, title: 'Budget', icon: '💰' },
  { id: 6, title: 'Requirements', icon: '📋' }
];

// Type for budget options
interface BudgetOption {
  value: string;
  label: string;
  price: string;
  deposit?: string;
  icon: string;
  features: string[];
}

export const MultiStepContactForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleFeature = (feature: string) => {
    const currentFeatures = formData.specialFeatures;
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    updateFormData('specialFeatures', newFeatures);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
      if (!formData.industry) newErrors.industry = 'Please select an industry';
    }

    if (step === 3) {
      if (!formData.websiteGoal) newErrors.websiteGoal = 'Please select a website goal';
      if (!formData.targetAudience.trim()) newErrors.targetAudience = 'Please describe your target audience';
    }

    if (step === 4) {
      if (!formData.designStyle) newErrors.designStyle = 'Please select a design style';
    }

    if (step === 5) {
      if (!formData.budget) newErrors.budget = 'Please select a budget';
    }

    if (step === 6) {
      if (!formData.country.trim()) newErrors.country = 'Please enter your country';
      if (!formData.city.trim()) newErrors.city = 'Please enter your city';
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
        phone: formData.phone || null,
        business_name: formData.businessName,
        role: formData.role || null,
        industry: formData.industry,
        website_goal: formData.websiteGoal,
        target_audience: formData.targetAudience,
        current_website: formData.currentWebsite || null,
        design_style: formData.designStyle,
        color_preference: formData.colorPreference || null,
        inspiration_url: formData.inspirationUrl || null,
        budget: formData.budget,
        special_features: formData.specialFeatures.length > 0 ? formData.specialFeatures.join(', ') : null,
        message: formData.additionalInfo || null,
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
      <section id="contact-form" className="bg-[var(--background-white)] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center space-y-6 bg-[var(--secondary)] rounded-3xl p-12 shadow-[var(--shadow-soft)]">
            <div className="text-6xl mb-4">✓</div>
            <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)]">
              Message Sent!
            </h3>
            <p className="text-[var(--text-secondary)] text-lg">
              Thanks for reaching out! I&apos;ll get back to you within 24 hours.
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
    <section id="contact-form" className="bg-[var(--background-white)] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Step Indicators */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center justify-between relative min-w-[800px]">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 -z-10" />
            <div
              className="absolute top-8 left-0 h-1 bg-[var(--primary)] transition-all duration-500 -z-10"
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
                    'mt-2 text-xs md:text-sm font-medium transition-colors text-center',
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
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-[var(--shadow-soft)] border-2 border-gray-100">
          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                Let&apos;s start with your contact details
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

              <div className="form-group">
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Phone Number <span className="text-[var(--text-secondary)] text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          )}

          {/* Step 2: Professional */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                Tell me about your business
              </h3>

              <div className="form-group">
                <label htmlFor="businessName" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Business Name <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent',
                    errors.businessName ? 'border-red-400' : 'border-gray-300'
                  )}
                  placeholder="Your Teaching Business"
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="role" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Your Role <span className="text-[var(--text-secondary)] text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={(e) => updateFormData('role', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="e.g., Founder, Director, Teacher"
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  Industry <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'language-school', label: 'Language School', icon: '🗣️' },
                    { value: 'tutoring', label: 'Tutoring / Private Lessons', icon: '📚' },
                    { value: 'music', label: 'Music Education', icon: '🎵' },
                    { value: 'arts', label: 'Arts & Crafts', icon: '🎨' },
                    { value: 'sports', label: 'Sports & Fitness', icon: '⚽' },
                    { value: 'test-prep', label: 'Test Preparation', icon: '✍️' },
                    { value: 'other', label: 'Other Education', icon: '🎓' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all',
                        formData.industry === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="radio"
                        name="industry"
                        value={option.value}
                        checked={formData.industry === option.value}
                        onChange={(e) => updateFormData('industry', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-[var(--text-primary)]">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Website Goals */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                What do you want your website to achieve?
              </h3>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  Primary Goal <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'attract-students', label: 'Attract New Students', icon: '👥' },
                    { value: 'online-presence', label: 'Establish Online Presence', icon: '🌐' },
                    { value: 'showcase-work', label: 'Showcase My Work', icon: '✨' },
                    { value: 'booking-system', label: 'Online Booking System', icon: '📅' },
                    { value: 'sell-courses', label: 'Sell Courses Online', icon: '💻' },
                    { value: 'build-credibility', label: 'Build Credibility', icon: '🏆' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all',
                        formData.websiteGoal === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="radio"
                        name="websiteGoal"
                        value={option.value}
                        checked={formData.websiteGoal === option.value}
                        onChange={(e) => updateFormData('websiteGoal', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <span className="font-medium text-[var(--text-primary)]">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.websiteGoal && (
                  <p className="mt-1 text-sm text-red-500">{errors.websiteGoal}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="targetAudience" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Who is your target audience? <span className="text-[var(--primary)]">*</span>
                </label>
                <textarea
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => updateFormData('targetAudience', e.target.value)}
                  rows={3}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none',
                    errors.targetAudience ? 'border-red-400' : 'border-gray-300'
                  )}
                  placeholder="e.g., Parents looking for language classes for their kids, professionals seeking career advancement..."
                />
                {errors.targetAudience && (
                  <p className="mt-1 text-sm text-red-500">{errors.targetAudience}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="currentWebsite" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Current Website <span className="text-[var(--text-secondary)] text-xs">(If any)</span>
                </label>
                <input
                  type="url"
                  id="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={(e) => updateFormData('currentWebsite', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="https://..."
                />
              </div>
            </div>
          )}

          {/* Step 4: Design */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                What style appeals to you?
              </h3>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  Design Style <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-3">
                  {[
                    { value: 'modern-minimal', label: 'Modern & Minimal', icon: '⚪', desc: 'Clean, simple, professional' },
                    { value: 'warm-friendly', label: 'Warm & Friendly', icon: '🌟', desc: 'Welcoming, approachable' },
                    { value: 'bold-creative', label: 'Bold & Creative', icon: '🎨', desc: 'Vibrant, eye-catching' },
                    { value: 'classic-elegant', label: 'Classic & Elegant', icon: '✨', desc: 'Timeless, sophisticated' },
                    { value: 'playful-fun', label: 'Playful & Fun', icon: '🎉', desc: 'Energetic, youthful' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all',
                        formData.designStyle === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="radio"
                        name="designStyle"
                        value={option.value}
                        checked={formData.designStyle === option.value}
                        onChange={(e) => updateFormData('designStyle', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <div>
                        <div className="font-medium text-[var(--text-primary)]">{option.label}</div>
                        <div className="text-sm text-[var(--text-secondary)]">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.designStyle && (
                  <p className="mt-1 text-sm text-red-500">{errors.designStyle}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="colorPreference" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Color Preference <span className="text-[var(--text-secondary)] text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="colorPreference"
                  value={formData.colorPreference}
                  onChange={(e) => updateFormData('colorPreference', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="e.g., Blue and white, Warm earth tones, Bright colors..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="inspirationUrl" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Inspiration Website <span className="text-[var(--text-secondary)] text-xs">(Optional)</span>
                </label>
                <input
                  type="url"
                  id="inspirationUrl"
                  value={formData.inspirationUrl}
                  onChange={(e) => updateFormData('inspirationUrl', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="https://example.com (a site you like)"
                />
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Share a website whose design you admire
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Budget */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                What&apos;s your budget?
              </h3>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  Select a Package <span className="text-[var(--primary)]">*</span>
                </label>
                <div className="grid gap-4">
                  {([
                    {
                      value: 'quick-launch',
                      label: 'Quick Launch Sprint',
                      price: '$199',
                      deposit: 'deposit',
                      icon: '⚡',
                      features: ['1-page website', 'Mobile responsive', 'Contact form', '3-day delivery']
                    },
                    {
                      value: 'local-visibility',
                      label: 'Local Visibility Package',
                      price: '$399',
                      deposit: 'deposit',
                      icon: '🚀',
                      features: ['3-page website', 'Local SEO setup', 'Google Business integration', '5-day delivery']
                    },
                    {
                      value: 'growth-system',
                      label: 'Growth System',
                      price: '$599',
                      deposit: 'deposit',
                      icon: '📈',
                      features: ['5-page website', 'Blog setup', 'Email capture', '7-day delivery']
                    },
                    {
                      value: 'custom',
                      label: 'Custom Quote',
                      price: 'Let\'s Discuss',
                      icon: '💬',
                      features: ['Tailored solution', 'Flexible timeline', 'Custom features']
                    }
                  ] as BudgetOption[]).map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all',
                        formData.budget === option.value
                          ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-[var(--shadow-soft)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)] hover:shadow-sm'
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
                      <span className="text-3xl">{option.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-lg text-[var(--text-primary)]">{option.label}</div>
                          <div className="font-bold text-[var(--primary)]">
                            {option.price}
                            {option.deposit && <span className="text-xs font-normal text-[var(--text-secondary)] ml-1">{option.deposit}</span>}
                          </div>
                        </div>
                        <ul className="space-y-1">
                          {option.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                              <span className="text-[var(--primary)]">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 6: Requirements */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-6">
                Final details
              </h3>

              <div className="form-group">
                <label htmlFor="country" className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  Country <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={(e) => updateFormData('country', e.target.value)}
                  placeholder="e.g., United States, France, Australia"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-500">{errors.country}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="city" className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  City <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  placeholder="e.g., New York, Paris, Sydney"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                )}
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                  Special Features <span className="text-[var(--text-secondary)] text-xs">(Select all that apply)</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { value: 'booking', label: 'Online Booking', icon: '📅' },
                    { value: 'payment', label: 'Payment Integration', icon: '💳' },
                    { value: 'blog', label: 'Blog', icon: '📝' },
                    { value: 'gallery', label: 'Photo Gallery', icon: '🖼️' },
                    { value: 'testimonials', label: 'Testimonials', icon: '⭐' },
                    { value: 'multilingual', label: 'Multilingual', icon: '🌍' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all',
                        formData.specialFeatures.includes(option.value)
                          ? 'border-[var(--primary)] bg-[var(--primary-light)]'
                          : 'border-gray-300 hover:border-[var(--primary-light)]'
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={formData.specialFeatures.includes(option.value)}
                        onChange={() => toggleFeature(option.value)}
                        className="sr-only"
                      />
                      <span className="text-xl">{option.icon}</span>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Anything else I should know? <span className="text-[var(--text-secondary)] text-xs">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
                  placeholder="Share any additional details, special requirements, or questions..."
                />
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

            <div className="text-sm text-[var(--text-secondary)]">
              Step {currentStep} of {steps.length}
            </div>

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