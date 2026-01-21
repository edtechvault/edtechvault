'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { BackgroundEllipses } from '../ui/BackgroundEllipses';

interface ContactOption {
  id: string;
  icon: string;
  label: string;
  description: string;
  cta: {
    text: string;
    action: 'scroll' | 'copy' | 'link';
    target: string;
  };
}

interface ContactOptionsProps {
  options: ContactOption[];
}

export const ContactOptions: React.FC<ContactOptionsProps> = ({ options }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleAction = (option: ContactOption) => {
    if (option.cta.action === 'scroll') {
      const element = document.querySelector(option.cta.target);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (option.cta.action === 'copy') {
      navigator.clipboard.writeText(option.cta.target);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section className="relative bg-[var(--background-white)] py-16 md:py-24">
      <BackgroundEllipses sections={['contact-options']} />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option) => (
            <div
              key={option.id}
              className="relative bg-[var(--background-white)] rounded-2xl p-8 border-2 border-[var(--border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative Plus Icons */}
              <div className="absolute top-4 left-4 text-[var(--primary-light)]/20 text-sm">+</div>
              <div className="absolute top-4 right-4 text-[var(--primary-light)]/20 text-sm">+</div>
              <div className="absolute bottom-4 left-4 text-[var(--primary-light)]/20 text-sm">+</div>
              <div className="absolute bottom-4 right-4 text-[var(--primary-light)]/20 text-sm">+</div>
              
              <div className="relative text-center space-y-4">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="font-heading font-semibold text-xl text-[var(--text-primary)]">{option.label}</h3>
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{option.description}</p>
                
                {option.cta.action === 'link' ? (
                  <Button variant="outline" size="medium" href={option.cta.target} className="w-full">
                    {option.cta.text}
                  </Button>
                ) : (
                  <Button variant="outline" size="medium" className="w-full" onClick={() => handleAction(option)}>
                    {option.cta.action === 'copy' && copiedEmail && option.id === 'email' ? '✓ Copied!' : option.cta.text}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
