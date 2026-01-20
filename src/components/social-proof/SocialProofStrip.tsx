'use client';

import React from 'react';
import { MarqueeLogoScroller, Logo } from '@/components/ui/MarqueeLogoScroller';

interface SocialProofStripProps {
  title?: string;
  description?: string;
  logos?: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

// Default logos representing technologies and platforms Leo works with
const defaultLogos: Logo[] = [
  {
    src: 'https://cdn.simpleicons.org/nextdotjs/000000',
    alt: 'Next.js',
    gradient: { from: '#000000', via: '#1a1a1a', to: '#333333' },
  },
  {
    src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    alt: 'Tailwind CSS',
    gradient: { from: '#0ea5e9', via: '#38bdf8', to: '#0ea5e9' },
  },
  {
    src: 'https://cdn.simpleicons.org/supabase/3ECF8E',
    alt: 'Supabase',
    gradient: { from: '#3ecf8e', via: '#1fa871', to: '#3ecf8e' },
  },
  {
    src: 'https://cdn.simpleicons.org/figma/F24E1E',
    alt: 'Figma',
    gradient: { from: '#f24e1e', via: '#a259ff', to: '#1abcfe' },
  },
  {
    src: 'https://cdn.simpleicons.org/typescript/3178C6',
    alt: 'TypeScript',
    gradient: { from: '#3178c6', via: '#5199d8', to: '#3178c6' },
  },
  {
    src: 'https://cdn.simpleicons.org/react/61DAFB',
    alt: 'React',
    gradient: { from: '#61dafb', via: '#149eca', to: '#61dafb' },
  },
  {
    src: 'https://cdn.simpleicons.org/vercel/000000',
    alt: 'Vercel',
    gradient: { from: '#000000', via: '#1a1a1a', to: '#333333' },
  },
  {
    src: 'https://cdn.simpleicons.org/googlechrome/4285F4',
    alt: 'Web Technologies',
    gradient: { from: '#4285f4', via: '#5a95f5', to: '#4285f4' },
  },
];

export const SocialProofStrip: React.FC<SocialProofStripProps> = ({
  title = 'Built with Industry-Leading Tools',
  description = 'Professional websites powered by modern technology and AI-driven design.',
  logos = defaultLogos,
  speed = 'normal',
}) => {
  return (
    <section className="bg-[var(--secondary)] py-16 md:py-24 border-t border-b border-[var(--primary)]/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <MarqueeLogoScroller
          title={title}
          description={description}
          logos={logos}
          speed={speed}
          className="bg-[var(--secondary)] mx-auto"
        />
      </div>
    </section>
  );
};

export default SocialProofStrip;
