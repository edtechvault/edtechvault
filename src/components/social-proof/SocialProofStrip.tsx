'use client';

import React from 'react';

interface SocialProofItem {
  icon: string;
  text: string;
}

interface SocialProofStripProps {
  items: SocialProofItem[];
}

export const SocialProofStrip: React.FC<SocialProofStripProps> = ({ items }) => {
  return (
    <section className="bg-[var(--background-white)] border-y border-[var(--border)] py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[var(--text-secondary)]"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm md:text-base font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
