'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface HeroHomepageProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  laptopMockup: { src: string; alt: string };
}

export const HeroHomepage: React.FC<HeroHomepageProps> = ({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  laptopMockup,
}) => {
  const handleScrollTo = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Content - Left Column (55%) */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            {/* Eyebrow Text */}
            <span className="inline-block text-[var(--primary)] text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>

            {/* Headline */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[var(--text-primary)]">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-lg">
              {subheadline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="solid"
                size="large"
                href={primaryCTA.href}
              >
                {primaryCTA.text}
              </Button>
              
              <button
                onClick={() => handleScrollTo(secondaryCTA.href)}
                className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold rounded-xl border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                {secondaryCTA.text}
              </button>
            </div>
          </div>
          
          {/* Visual - Right Column (45%) */}
          <div className="md:col-span-5 relative h-80 md:h-[340px] mb-2">
            {/* Laptop Mockup Image */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src={laptopMockup.src}
                alt={laptopMockup.alt}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepage;
