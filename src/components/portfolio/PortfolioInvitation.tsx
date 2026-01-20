'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

interface PortfolioCard {
  id: string;
  placeholderText: string;
}

interface PortfolioInvitationProps {
  eyebrow: string;
  heading: string;
  body: string;
  cards: PortfolioCard[];
  cta: { text: string; href: string };
}

export const PortfolioInvitation: React.FC<PortfolioInvitationProps> = ({
  eyebrow,
  heading,
  body,
  cards,
  cta,
}) => {
  return (
    <section id="portfolio" className="bg-[var(--background-white)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
            {eyebrow}
          </span>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)]">
            {heading}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed">
            {body}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={cn(
                "relative bg-[var(--background-white)] rounded-2xl h-[200px] flex items-center justify-center",
                "border-2 border-dashed border-[var(--primary)]/30",
                "transition-all duration-300 hover:border-solid hover:border-[var(--primary)] hover:shadow-[var(--shadow-soft)] group",
                index === 1 && "lg:rotate-2" // Slight rotation on middle card
              )}
            >
              <p className="text-[var(--text-secondary)] text-center font-medium">
                {card.placeholderText}
              </p>

              {/* Decorative corner elements (L-shapes) */}
              <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-[var(--primary)]/30 group-hover:border-[var(--primary)]/50 transition-colors" />
              <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-[var(--primary)]/30 group-hover:border-[var(--primary)]/50 transition-colors" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-[var(--primary)]/30 group-hover:border-[var(--primary)]/50 transition-colors" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-[var(--primary)]/30 group-hover:border-[var(--primary)]/50 transition-colors" />

              {/* Optional: Small plus sign in center of corners if we wanted but L-shapes are cleaner for this spec */}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Button variant="solid" size="large" href={cta.href}>
            {cta.text}
          </Button>
          <p className="text-[var(--text-secondary)] text-sm font-medium">
            Limited spots &bull; Priority pricing &bull; Featured placement
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioInvitation;
