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
  tagline: string;
  label: string;
  color: 'purple' | 'turquoise' | 'red';
  features: PricingFeature[];
  cta: { text: string; href: string };
  featured?: boolean;
}

interface PricingTableProps {
  heading: string;
  tiers: PricingTier[];
}

const colorVariants = {
  purple: {
    labelBg: 'bg-[#C4785A]/10',
    labelText: 'text-[#C4785A]',
    priceText: 'text-[#C4785A]',
    buttonBg: 'bg-[#C4785A] hover:bg-[#A45C42]',
  },
  turquoise: {
    labelBg: 'bg-[#2A6B6B]/10',
    labelText: 'text-[#2A6B6B]',
    priceText: 'text-[#2A6B6B]',
    buttonBg: 'bg-[#2A6B6B] hover:bg-[#1A5151]',
  },
  red: {
    labelBg: 'bg-[#7DB59A]/10',
    labelText: 'text-[#7DB59A]',
    priceText: 'text-[#7DB59A]',
    buttonBg: 'bg-[#7DB59A] hover:bg-[#5F927A]',
  },
};

export const PricingTable: React.FC<PricingTableProps> = ({
  heading,
  tiers,
}) => {
  return (
    <section id="pricing" className="bg-[#FAFAFA] py-24 md:py-32 px-4 font-body">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header - Adapting template's 'main-head' to Design System */}
        <div className="mb-12">
          <h2 className="bg-[#C4785A] shadow-soft p-6 mb-0 text-white font-heading font-semibold uppercase rounded-sm text-base md:text-lg tracking-wider">
            {heading}
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const variant = colorVariants[tier.color] || colorVariants.purple;

            return (
              <div
                key={tier.id}
                className="bg-[#FDF6F0] shadow-soft p-8 md:p-10 rounded-lg transition-all duration-300 hover:shadow-medium flex flex-col group"
              >
                {/* Table Head */}
                <div>
                  <div className={cn(
                    "rounded-sm px-3 py-1 mb-4 inline-block text-[12px] font-semibold uppercase tracking-wide",
                    variant.labelBg,
                    variant.labelText
                  )}>
                    {tier.label}
                  </div>
                  <h2 className="text-[#2D2D2D] font-heading font-semibold text-2xl md:text-3xl mb-1 group-hover:text-[#C4785A] transition-colors">
                    {tier.name}
                  </h2>
                  <h5 className="text-[#6B6B6B] text-sm font-normal">
                    {tier.tagline}
                  </h5>
                </div>

                {/* Features */}
                <div className="mt-10 flex-grow">
                  <div className="space-y-4">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="text-[15px] text-[#6B6B6B] flex justify-between items-baseline border-b border-[#E5E5E5]/50 pb-2">
                        <span>{feature.label}</span>
                        <span className="text-[#2D2D2D] font-medium ml-4">{feature.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className={cn("mt-10 text-center font-semibold", variant.priceText)}>
                  <span className="text-2xl align-top mt-2 inline-block">$</span>
                  <span className="text-6xl md:text-7xl tracking-tighter leading-none font-heading">{tier.price}</span>
                  <span className="text-[#2D2D2D] font-medium text-base ml-1">/month</span>
                </div>

                {/* Button */}
                <a
                  href={tier.cta.href}
                  className={cn(
                    "block text-white mt-10 p-4 rounded-md text-center font-semibold text-base transition-all duration-300 hover:no-underline hover:scale-[1.02] active:scale-[0.98]",
                    variant.buttonBg
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
