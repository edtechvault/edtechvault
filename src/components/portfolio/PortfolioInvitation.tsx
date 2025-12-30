'use client';

import React from 'react';
import { Button } from '../ui/Button';

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
    <section className="bg-[var(--secondary)] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              {eyebrow}
            </span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)]">
              {heading}
            </h2>
            <div className="text-[var(--text-secondary)] text-lg leading-relaxed whitespace-pre-line">
              {body}
            </div>
            <Button variant="solid" size="large" href={cta.href}>
              {cta.text} →
            </Button>
          </div>
          
          {/* Portfolio Cards */}
          <div className="grid gap-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`
                  relative bg-[var(--background-white)] rounded-xl p-8 
                  border-2 border-dashed border-[var(--primary-light)]/40
                  transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[var(--shadow-soft)]
                  ${index === 1 ? 'lg:translate-x-8' : ''}
                `}
              >
                <div className="flex items-center justify-center min-h-[100px]">
                  <p className="text-[var(--text-secondary)] text-center font-medium">
                    {card.placeholderText}
                  </p>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--primary-light)]/30 rounded-tl" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[var(--primary-light)]/30 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[var(--primary-light)]/30 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--primary-light)]/30 rounded-br" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioInvitation;
