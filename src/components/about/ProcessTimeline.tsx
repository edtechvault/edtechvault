'use client';

import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  timeline: string;
}

interface ProcessTimelineProps {
  heading: string;
  steps: ProcessStep[];
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  heading,
  steps,
}) => {
  return (
    <section className="bg-[var(--background-white)] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] text-center mb-12 md:mb-16">
          {heading}
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary-light)]/30 transform md:-translate-x-1/2" />
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[var(--shadow-medium)]">
                    {step.number}
                  </div>
                </div>
                
                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-[var(--background-white)] rounded-xl p-6 shadow-[var(--shadow-soft)] border border-[var(--border)]">
                    <span className="inline-block text-[var(--accent)] text-sm font-semibold mb-2">
                      {step.timeline}
                    </span>
                    <h3 className="font-heading font-semibold text-xl text-[var(--text-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
