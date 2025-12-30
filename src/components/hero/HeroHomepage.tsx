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
    <section className="relative bg-[var(--background)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Content - Left 60% */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              {eyebrow}
            </span>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight text-[var(--text-primary)]">
              {headline}
            </h1>
            
            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-[560px]">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="solid" size="large" href={primaryCTA.href}>
                {primaryCTA.text} →
              </Button>
              
              <Button
                variant="outline"
                size="large"
                onClick={() => handleScrollTo(secondaryCTA.href)}
              >
                {secondaryCTA.text} ↓
              </Button>
            </div>
          </div>
          
          {/* Laptop Mockup - Right 40% */}
          <div className="md:col-span-5 relative">
            <div 
              className="relative transform rotate-[2deg] md:rotate-0 lg:-rotate-[2deg] transition-transform hover:rotate-0 duration-500"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(196, 120, 90, 0.15))' }}
            >
              <img
                src={laptopMockup.src}
                alt={laptopMockup.alt}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute -z-10 top-1/4 -right-12 w-32 h-32 bg-[var(--primary-light)]/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-1/4 -left-8 w-24 h-24 bg-[var(--accent-light)]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepage;
