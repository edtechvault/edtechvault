'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  tagline: string;
  badge?: string;
  features: string[];
  cta: { text: string; href: string };
  featured?: boolean;
}

interface PricingTableProps {
  heading: string;
  subtext: string;
  tiers: PricingTier[];
  disclaimer: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({
  heading,
  subtext,
  tiers,
  disclaimer,
}) => {
  return (
    <section id="pricing" className="bg-[var(--background-white)] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)]">
            {heading}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-[600px] mx-auto">
            {subtext}
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`
                relative bg-[var(--background-white)] rounded-2xl p-8
                border-2 transition-all duration-300
                ${tier.featured 
                  ? 'border-[var(--primary)] shadow-[var(--shadow-strong)] scale-100 md:scale-[1.05] lg:scale-110' 
                  : 'border-gray-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-1'
                }
              `}
            >
              {/* Featured Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block bg-[var(--success)] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Tier Name */}
                <h3 className="font-heading font-semibold text-xl text-[var(--text-primary)]">
                  {tier.name}
                </h3>
                
                {/* Price */}
                <div>
                  <div className="text-4xl font-bold text-[var(--text-primary)]">${tier.price}</div>
                  <div className="text-[var(--text-secondary)] mt-1">{tier.tagline}</div>
                </div>
                
                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button
                  variant={tier.featured ? 'solid' : 'outline'}
                  size="large"
                  href={tier.cta.href}
                  className="w-full"
                >
                  {tier.cta.text} →
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <p className="text-center text-sm text-[var(--text-secondary)]">
          {disclaimer}
        </p>
      </div>
    </section>
  );
};

export default PricingTable;
