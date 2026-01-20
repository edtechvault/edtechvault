'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { trackPurchaseClick } from '@/lib/tracking';

export interface PricingTier {
  id: string;
  name: string;
  price: string | number;
  pricePeriod?: string;
  tagline: string;
  label?: string;
  color: 'primary' | 'teal' | 'accent';
  features: string[];
  cta: { text: string; href: string; variant?: 'outline' | 'solid' };
  featured?: boolean;
}

interface PricingTableProps {
  heading?: string;
  tiers: PricingTier[];
}

const colorVariants = {
  primary: {
    labelBg: 'var(--secondary)',
    labelText: 'var(--primary)',
    priceText: 'var(--primary)',
    buttonBg: 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]',
    buttonOutline: 'border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white',
  },
  teal: {
    labelBg: 'var(--secondary)',
    labelText: 'var(--accent)',
    priceText: 'var(--accent)',
    buttonBg: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)]',
    buttonOutline: 'border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white',
  },
  accent: {
    labelBg: 'var(--secondary)',
    labelText: 'var(--success)',
    priceText: 'var(--success)',
    buttonBg: 'bg-[var(--success)] text-white hover:bg-[var(--accent-dark)]',
    buttonOutline: 'border border-[var(--success)] text-[var(--success)] hover:bg-[var(--success)] hover:text-white',
  },
};

export const PricingTable: React.FC<PricingTableProps> = ({
  heading,
  tiers,
}) => {
  const handlePurchaseClick = async (tier: PricingTier, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only track if it's a Stripe link
    if (tier.cta.href.includes('stripe.com')) {
      // Don't prevent default - let the link work normally
      // Track asynchronously in the background
      trackPurchaseClick({
        packageName: tier.name,
        packageTier: tier.id,
        stripeLink: tier.cta.href,
      }).catch(err => console.error('Failed to track click:', err));
    }
  };

  return (
    <section id="pricing" className="bg-[var(--background)] py-24 md:py-32 px-6 font-body">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        {heading && (
          <div className="mb-16 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
              {heading}
            </h2>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const variant = colorVariants[tier.color] || colorVariants.primary;

            return (
              <div
                key={tier.id}
                className="bg-[var(--background-white)] flex flex-col transition-all duration-300 hover:shadow-[var(--shadow-medium)] rounded-2xl overflow-hidden"
              >
                {/* Pricing Label - Top of card */}
                <div className="px-8 pt-8">
                  <div
                    className="px-3 py-1 text-xs font-medium rounded-md inline-block"
                    style={{
                      backgroundColor: variant.labelBg,
                      color: variant.labelText,
                    }}
                  >
                    {tier.label || 'Fixed Price'}
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-8 pt-6 pb-8 flex flex-col flex-grow">
                  {/* Plan Name */}
                  <h3 className="font-heading font-semibold text-2xl text-[var(--text-primary)] mb-2">
                    {tier.name}
                  </h3>

                  {/* Plan Tagline */}
                  <p className="text-[var(--text-secondary)] text-sm font-normal mb-8">
                    {tier.tagline}
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow">
                    <div className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-[var(--text-secondary)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Section */}
                  <div
                    className="mb-8 text-center font-medium"
                    style={{ color: variant.priceText }}
                  >
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl">$</span>
                      <span className="text-6xl font-heading font-medium tracking-tight">{tier.price}</span>
                    </div>
                    {tier.pricePeriod && (
                      <div className="text-[var(--text-primary)] font-medium text-sm mt-2">
                        {tier.pricePeriod}
                      </div>
                    )}
                  </div>

                  {/* Call-to-Action Button */}
                  <a
                    href={tier.cta.href}
                    onClick={(e) => handlePurchaseClick(tier, e)}
                    className={cn(
                      "block w-full py-3 px-4 rounded-lg text-center font-medium text-sm transition-colors duration-300 no-underline",
                      tier.cta.variant === 'outline' ? variant.buttonOutline : variant.buttonBg
                    )}
                  >
                    {tier.cta.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
