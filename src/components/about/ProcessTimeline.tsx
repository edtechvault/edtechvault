'use client';

import React, { useState } from 'react';
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperNav,
  StepperPanel,
  StepperContent,
} from '@/components/ui/stepper';
import { Check, ChevronDown, Sparkles } from 'lucide-react';
import { BackgroundEllipses } from '../ui/BackgroundEllipses';

interface ProcessStep {
  day: string;
  title: string;
  description: string;
  details: string;
}

interface Package {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  duration: string;
  badge?: string;
  steps: ProcessStep[];
}

const packages: Package[] = [
  {
    id: 'quick-launch',
    name: 'Quick Launch Sprint',
    subtitle: 'For new tutors testing the waters',
    price: 199,
    duration: '3 days',
    steps: [
      {
        day: 'Day 0',
        title: 'Discovery Call',
        description: '15-minute chat to understand your tutoring focus',
        details: 'We discuss your target students, subjects, and what makes your teaching unique. No tech talk—just getting to know your goals.',
      },
      {
        day: 'Day 1',
        title: 'You Send Content → I Design',
        description: 'Share your bio, photos, and pricing',
        details: 'I create a clean 1-page design showcasing your expertise. Mobile-responsive, professional, ready to attract students.',
      },
      {
        day: 'Day 2',
        title: 'Feedback & Build',
        description: 'One revision round, then I build the site',
        details: 'You review the design, request changes, and I build the working website with your contact form connected.',
      },
      {
        day: 'Day 3',
        title: 'Launch & Handoff',
        description: 'Site goes live, you get full access',
        details: 'I send you login credentials, a quick tutorial video, and your site is live. Students can find you immediately.',
      },
    ],
  },
  {
    id: 'local-visibility',
    name: 'Local Visibility Package',
    subtitle: 'Perfect for established local tutors',
    price: 399,
    duration: '5 days',
    badge: 'Most Popular',
    steps: [
      {
        day: 'Day 0',
        title: 'Discovery Call',
        description: '20-minute strategy session',
        details: 'We map out your local student acquisition goals, discuss your unique teaching approach, and plan your 3-page website structure.',
      },
      {
        day: 'Day 1-2',
        title: 'Design & SEO Setup',
        description: 'Multi-page design + Google Business optimization',
        details: 'I design your Home, About, and Contact pages. Plus, I prepare your Google Business Profile optimization guide so local students find you first.',
      },
      {
        day: 'Day 3',
        title: 'Build & Integrate Calendar',
        description: 'Website development + booking system',
        details: 'Your site comes to life with a working booking calendar (Calendly integration). Students can schedule trial lessons instantly.',
      },
      {
        day: 'Day 4',
        title: 'Review & Refine',
        description: '2 revision rounds included',
        details: "You test the site, request changes. I refine until it's perfect. We make sure the booking flow works smoothly.",
      },
      {
        day: 'Day 5',
        title: 'Launch + 7-Day Support',
        description: 'Go live with ongoing assistance',
        details: "Your site launches, students can book you immediately. I'm available for 7 days for any tweaks or questions.",
      },
    ],
  },
  {
    id: 'growth-system',
    name: 'Growth System',
    subtitle: 'Complete digital student acquisition',
    price: 599,
    duration: '7 days',
    steps: [
      {
        day: 'Day 0',
        title: 'Strategy Call',
        description: '30-minute growth planning session',
        details: 'We design your complete digital presence: website structure, blog strategy, email capture approach, and student journey mapping.',
      },
      {
        day: 'Day 1-2',
        title: 'Full Site Design + Blog Setup',
        description: '5-page website with content system',
        details: 'I design your Home, About, Services, Blog, and Contact pages. Blog setup lets you share teaching tips to attract organic traffic.',
      },
      {
        day: 'Day 3-4',
        title: 'Build + Email & Analytics',
        description: 'Development with growth tools',
        details: "Website built with email capture forms, analytics dashboard setup, and social media integration. You'll track inquiries and conversions.",
      },
      {
        day: 'Day 5',
        title: 'Testing & Optimization',
        description: 'Full system quality check',
        details: 'I test every page, form, link, and integration. Analytics verified. Email sequences tested. Everything works perfectly.',
      },
      {
        day: 'Day 6',
        title: 'Review & Polish',
        description: '3 revision rounds included',
        details: "You review the complete system. Request changes. I refine until it's flawless. We ensure your student funnel flows smoothly.",
      },
      {
        day: 'Day 7',
        title: 'Launch + Strategy Call',
        description: 'Go live with 14-day support + growth consultation',
        details: 'Your growth system launches. We have a final strategy call to discuss how to maximize student inquiries. 14-day support included.',
      },
    ],
  },
];

export const ProcessTimeline: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package>(packages[1]); // Default to Local Visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  // Reset active step when package changes
  React.useEffect(() => {
    setActiveStep(1);
  }, [selectedPackage.id]);

  return (
    <section className="relative bg-[var(--background)] py-16 md:py-24 lg:py-32">
      <BackgroundEllipses sections={['process']} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header Removed as requested */}

        {/* Beautiful Package Selector Dropdown */}
        <div className="max-w-[600px] mx-auto mb-12">
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-3">
            Select Your Package
          </label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[var(--background-white)] border-2 border-[var(--border)] rounded-xl px-6 py-4 flex items-center justify-between hover:border-[var(--primary)] transition-all duration-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--primary)]/10">
                  <Sparkles className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[var(--text-primary)] text-lg">
                      {selectedPackage.name}
                    </span>
                    {selectedPackage.badge && (
                      <span className="text-xs bg-[var(--success)] text-white px-2 py-0.5 rounded-full font-medium">
                        {selectedPackage.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">
                    ${selectedPackage.price} • {selectedPackage.duration}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[var(--text-secondary)] transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Options */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-2 bg-[var(--background-white)] border-2 border-[var(--border)] rounded-xl shadow-[var(--shadow-strong)] overflow-hidden">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-[var(--secondary)] transition-colors border-b border-[var(--border)] last:border-b-0 ${
                      selectedPackage.id === pkg.id ? 'bg-[var(--secondary)]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--primary)]/10">
                      <Sparkles className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[var(--text-primary)]">
                          {pkg.name}
                        </span>
                        {pkg.badge && (
                          <span className="text-xs bg-[var(--success)] text-white px-2 py-0.5 rounded-full font-medium">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {pkg.subtitle}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-[var(--primary)]">
                      ${pkg.price}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stepper Timeline */}
        <div className="max-w-[900px] mx-auto">
          <Stepper
            value={activeStep}
            onValueChange={setActiveStep}
            orientation="horizontal"
            className="md:orientation-horizontal"
            indicators={{
              completed: <Check className="w-4 h-4" />,
            }}
          >
            {/* Desktop: Horizontal | Mobile: Vertical */}
            <StepperNav className="mb-8 md:mb-12 flex-col md:flex-row gap-0">
              {selectedPackage.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <StepperItem
                    step={index + 1}
                    completed={activeStep > index + 1}
                    className="w-full md:w-auto"
                  >
                    <StepperTrigger className="w-full md:w-auto py-4 md:py-0 px-0">
                      <div className="flex items-start md:items-center md:flex-col gap-3 md:gap-2 w-full">
                        <StepperIndicator className="shrink-0 mt-1 md:mt-0">
                          {index + 1}
                        </StepperIndicator>
                        <div className="flex-1 md:flex-none text-left md:text-center">
                          <StepperTitle className="mb-1">{step.title}</StepperTitle>
                          <div className="text-xs font-medium text-[var(--accent)]">
                            {step.day}
                          </div>
                        </div>
                      </div>
                    </StepperTrigger>
                  </StepperItem>

                  {index < selectedPackage.steps.length - 1 && (
                    <div className="hidden md:flex items-center px-2">
                      <StepperSeparator />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </StepperNav>

            {/* Step Content Panels */}
            <StepperPanel className="mt-8">
              {selectedPackage.steps.map((step, index) => (
                <StepperContent key={index} value={index + 1}>
                  <div className="bg-[var(--background-white)] rounded-2xl p-6 md:p-8 border-2 border-[var(--primary)]/20 shadow-[var(--shadow-soft)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--primary)] text-white font-bold text-lg shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <span className="text-sm font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full">
                            {step.day}
                          </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-base md:text-lg font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="pl-16 md:pl-16">
                      <div className="bg-[var(--secondary)] rounded-xl p-4 md:p-6 border-l-4 border-[var(--primary)]">
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-6 pl-16">
                      <button
                        onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                        disabled={activeStep === 1}
                        className="text-[var(--text-secondary)] hover:text-[var(--primary)] font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={() =>
                          setActiveStep(Math.min(selectedPackage.steps.length, activeStep + 1))
                        }
                        disabled={activeStep === selectedPackage.steps.length}
                        className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </StepperContent>
              ))}
            </StepperPanel>
          </Stepper>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-[var(--secondary)] rounded-2xl p-8 md:p-10 shadow-[var(--shadow-medium)]">
            <p className="text-[var(--text-secondary)] text-lg mb-4">
              Ready to get started with <strong className="text-[var(--text-primary)]">{selectedPackage.name}</strong>?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--accent-dark)] transition-all duration-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-0.5"
            >
              Book Discovery Call →
            </a>
            <p className="text-sm text-[var(--text-secondary)] mt-3">
              Free 15-20 minute consultation • No pressure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
