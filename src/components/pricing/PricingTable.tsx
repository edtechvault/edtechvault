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
    labelBg: '#E8C7B6',
    labelText: '#C4785A',
    priceText: '#C4785A',
    buttonBg: 'bg-[#C4785A] text-white hover:bg-[#A45C42]',
    buttonOutline: 'border border-[#C4785A] text-[#C4785A] hover:bg-[#C4785A] hover:text-white',
  },
  teal: {
    labelBg: '#C4D3D3',
    labelText: '#2A6B6B',
    priceText: '#2A6B6B',
    buttonBg: 'bg-[#2A6B6B] text-white hover:bg-[#1A5151]',
    buttonOutline: 'border border-[#2A6B6B] text-[#2A6B6B] hover:bg-[#2A6B6B] hover:text-white',
  },
  accent: {
    labelBg: '#D7E4DB',
    labelText: '#7DB59A',
    priceText: '#7DB59A',
    buttonBg: 'bg-[#7DB59A] text-white hover:bg-[#5F927A]',
    buttonOutline: 'border border-[#7DB59A] text-[#7DB59A] hover:bg-[#7DB59A] hover:text-white',
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
    <section id="pricing" className="bg-[#FAFAFA] py-24 md:py-32 px-4 font-body">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        {heading && (
          <div className="mb-20 text-center">
            <h2 className="text-[#2D2D2D] font-heading font-bold text-3xl md:text-4xl mb-4">
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
                className="bg-white flex flex-col transition-all duration-300 hover:shadow-medium"
                style={{ boxShadow: '0px 1px 10px -6px rgba(0, 0, 0, .15)' }}
              >
                {/* Pricing Label - Top of card */}
                <div className="px-8 pt-8">
                  <div
                    className="px-2 py-1 text-xs font-medium rounded inline-block"
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
                  <h3 className="text-[#3b3b3b] font-heading font-medium text-2xl mb-2">
                    {tier.name}
                  </h3>

                  {/* Plan Tagline */}
                  <p className="text-[#B3B3B3] text-sm font-normal mb-8">
                    {tier.tagline}
                  </p>

                  {/* Features List */}
                  <div className="mb-8 flex-grow">
                    <div className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-[#B3B3B3]">{feature}</span>
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
                      <div className="text-[#3b3b3b] font-medium text-sm mt-2">
                        {tier.pricePeriod}
                      </div>
                    )}
                  </div>

                  {/* Call-to-Action Button */}
                  <a
                    href={tier.cta.href}
                    onClick={(e) => handlePurchaseClick(tier, e)}
                    className={cn(
                      "block w-full py-3 px-4 rounded text-center font-medium text-sm transition-colors duration-300 no-underline",
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
