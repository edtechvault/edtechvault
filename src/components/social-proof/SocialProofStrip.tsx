'use client';

import React from 'react';
import { 
  GraduationCap, 
  Wrench, 
  Globe, 
  Zap, 
  Clock 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrustIndicator {
  icon: React.ElementType;
  text: string;
}

const trustIndicators: TrustIndicator[] = [
  {
    icon: GraduationCap,
    text: "Tongji University, Shanghai",
  },
  {
    icon: Wrench, // Using Wrench as a representative for tools/code as requested
    text: "Figma • Builder.io • AI-Powered",
  },
  {
    icon: Globe,
    text: "Clients worldwide",
  },
  {
    icon: Clock, // Using Clock as a representative for delivery time
    text: "3–7 day delivery",
  },
];

export const SocialProofStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#FDF6F0] border-y border-[#C4785A]/10 py-6 md:py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left group"
              >
                <div className="p-2 rounded-full bg-[#C4785A]/5 group-hover:bg-[#C4785A]/10 transition-colors">
                  <Icon size={24} className="text-[#C4785A]" strokeWidth={2} />
                </div>
                <span className="text-[#6B6B6B] text-sm md:text-base font-medium leading-tight max-w-[180px] md:max-w-none">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
