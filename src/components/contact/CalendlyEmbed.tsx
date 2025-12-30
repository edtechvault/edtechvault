'use client';

import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  heading: string;
  subheading: string;
  calendlyUrl: string;
  height?: number;
}

export const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  heading,
  subheading,
  calendlyUrl,
  height = 700,
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="calendly" className="bg-[var(--secondary)] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            {heading}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            {subheading}
          </p>
        </div>
        
        <div 
          className="bg-[var(--background-white)] rounded-2xl shadow-[var(--shadow-medium)] overflow-hidden"
        >
          <div 
            className="calendly-inline-widget"
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: `${height}px` }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlyEmbed;
