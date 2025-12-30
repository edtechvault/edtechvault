'use client';

import React from 'react';
import { Button } from '../ui/Button';
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
    labelBg: 'bg-[#cad2ff]',
    labelText: 'text-[#627afe]',
    priceText: 'text-[#627afe]',
    buttonBg: 'bg-[#627afe] hover:bg-[#546dfe]',
  },
  turquoise: {
    labelBg: 'bg-[#b9edee]',
    labelText: 'text-[#44cdd2]',
    priceText: 'text-[#44cdd2]',
    buttonBg: 'bg-[#44cdd2] hover:bg-[#2dbcc4]',
  },
  red: {
    labelBg: 'bg-[#ffc4c4]',
    labelText: 'text-[#ff5e5e]',
    priceText: 'text-[#ff5e5e]',
    buttonBg: 'bg-[#ff5e5e] hover:bg-[#f23c3c]',
  },
};

export const PricingTable: React.FC<PricingTableProps> = ({
  heading,
  tiers,
}) => {
  return (
    <section id="pricing" className="bg-[#e6e6e6] py-20 px-4 font-rubik">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="bg-[#0D1440] shadow-[0px_1px_10px_-6px_rgba(0,0,0,0.15)] p-4 mb-0 text-white font-medium uppercase rounded text-base tracking-wide">
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
                className="bg-white shadow-[0px_1px_10px_-6px_rgba(0,0,0,0.15)] p-8 rounded transition-all duration-300 hover:shadow-[0px_1px_10px_-4px_rgba(0,0,0,0.15)] flex flex-col"
              >
                {/* Table Head */}
                <div>
                  <div className={cn(
                    "rounded-[2px] px-2 py-1 mb-4 inline-block text-[12px] font-medium uppercase",
                    variant.labelBg,
                    variant.labelText
                  )}>
                    {tier.label}
                  </div>
                  <h2 className="text-[#3b3b3b] text-2xl font-medium mb-1">
                    {tier.name}
                  </h2>
                  <h5 className="text-[#B3B3B3] text-sm font-normal">
                    {tier.tagline}
                  </h5>
                </div>
                
                {/* Features */}
                <div className="mt-8 flex-grow">
                  <div className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="text-sm text-[#B3B3B3] flex justify-between items-center">
                        <span>{feature.label}</span>
                        <span className="text-[#3b3b3b] font-medium">{feature.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price */}
                <div className={cn("mt-8 text-center font-medium", variant.priceText)}>
                  <span className="text-2xl mr-1">$</span>
                  <span className="text-[64px] tracking-[-2px] leading-none">{tier.price}</span>
                  <span className="text-[#3b3b3b] font-medium text-base ml-1">/month</span>
                </div>
                
                {/* Button */}
                <a
                  href={tier.cta.href}
                  className={cn(
                    "block text-white mt-8 p-3 rounded-[2px] text-center font-medium transition-all duration-300 hover:no-underline",
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
