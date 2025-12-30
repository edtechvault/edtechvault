'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface PricingFeature {
  label: string;
  value: string;
}

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
    labelBg: 'bg-[#C4785A]',
    labelText: 'text-white',
    priceText: 'text-[#C4785A]',
    buttonBg: 'bg-[#C4785A] hover:bg-[#A45C42]',
    buttonOutline: 'border-2 border-[#C4785A] text-[#C4785A] hover:bg-[#C4785A] hover:text-white',
  },
  teal: {
    labelBg: 'bg-[#C4785A]', // Most Popular badge usually in primary color
    labelText: 'text-white',
    priceText: 'text-[#2A6B6B]',
    buttonBg: 'bg-[#2A6B6B] hover:bg-[#1A5151]',
    buttonOutline: 'border-2 border-[#2A6B6B] text-[#2A6B6B] hover:bg-[#2A6B6B] hover:text-white',
  },
  accent: {
    labelBg: 'bg-[#7DB59A]',
    labelText: 'text-white',
    priceText: 'text-[#7DB59A]',
    buttonBg: 'bg-[#7DB59A] hover:bg-[#5F927A]',
    buttonOutline: 'border-2 border-[#7DB59A] text-[#7DB59A] hover:bg-[#7DB59A] hover:text-white',
  },
};

export const PricingTable: React.FC<PricingTableProps> = ({
  heading,
  tiers,
}) => {
  return (
    <section id="pricing" className="bg-[#FAFAFA] py-24 md:py-32 px-4 font-body">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        {heading && (
          <div className="mb-16 text-center">
            <h2 className="text-[#2D2D2D] font-heading font-bold text-3xl md:text-4xl">
              {heading}
            </h2>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier) => {
            const variant = colorVariants[tier.color] || colorVariants.primary;

            return (
              <div
                key={tier.id}
                className={cn(
                  "bg-white shadow-soft p-8 md:p-10 rounded-xl transition-all duration-500 hover:shadow-medium hover:-translate-y-2 flex flex-col relative",
                  tier.featured ? "lg:scale-105 z-10 border-2 border-[#C4785A]" : "z-0"
                )}
              >
                {/* Featured Badge */}
                {tier.featured && tier.label && (
                  <div className={cn(
                    "absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-bold uppercase tracking-wider shadow-sm",
                    variant.labelBg,
                    variant.labelText
                  )}>
                    {tier.label}
                  </div>
                )}

                {/* Table Head */}
                <div className="text-center mb-8">
                  <h3 className="text-[#2D2D2D] font-heading font-bold text-2xl mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-[#6B6B6B] text-base font-normal">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className={cn("mb-10 text-center font-bold", variant.priceText)}>
                  <div className="flex items-start justify-center">
                    <span className="text-2xl mt-2">$</span>
                    <span className="text-6xl md:text-7xl tracking-tighter leading-none font-heading">{tier.price}</span>
                  </div>
                  {tier.pricePeriod && (
                    <div className="text-[#6B6B6B] font-medium text-sm mt-1 uppercase tracking-widest">
                      {tier.pricePeriod}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-10 flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="text-base text-[#2D2D2D] flex items-start">
                        <svg className="w-5 h-5 text-[#2A6B6B] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <a
                  href={tier.cta.href}
                  className={cn(
                    "block w-full py-4 rounded-xl text-center font-bold text-base transition-all duration-300",
                    tier.cta.variant === 'outline' ? variant.buttonOutline : variant.buttonBg,
                    tier.cta.variant !== 'outline' && "text-white shadow-sm hover:shadow-md"
                  )}
                >
                  {tier.cta.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
