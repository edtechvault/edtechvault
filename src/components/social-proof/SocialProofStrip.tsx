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
    src: 'https://cdn.builder.io/api/v1/image/assets%2Fplugins%2F1%2Fe86f07eeb4eb4c0faee2d4819ac0ad88',
    alt: 'Next.js',
    gradient: { from: '#000000', via: '#1a1a1a', to: '#000000' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2F3e8c2f6e8f8e4f0f8e8c2f6e8f8e4f0f',
    alt: 'Tailwind CSS',
    gradient: { from: '#0ea5e9', via: '#38bdf8', to: '#0ea5e9' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2Fsupabase-logo',
    alt: 'Supabase',
    gradient: { from: '#3ecf8e', via: '#1fa871', to: '#3ecf8e' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2Ffigma-logo',
    alt: 'Figma',
    gradient: { from: '#f24e1e', via: '#a259ff', to: '#1abcfe' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2Fbuilder-logo',
    alt: 'Builder.io',
    gradient: { from: '#6b46c1', via: '#8b5cf6', to: '#6b46c1' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2Ftypescript-logo',
    alt: 'TypeScript',
    gradient: { from: '#3178c6', via: '#5199d8', to: '#3178c6' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2Freact-logo',
    alt: 'React',
    gradient: { from: '#61dafb', via: '#149eca', to: '#61dafb' },
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2Fcalendly-logo',
    alt: 'Calendly',
    gradient: { from: '#006bff', via: '#0099ff', to: '#006bff' },
  },
];

export const SocialProofStrip: React.FC<SocialProofStripProps> = ({
  title = 'Built with Industry-Leading Tools',
  description = 'Professional websites powered by modern technology and AI-driven design.',
  logos = defaultLogos,
  speed = 'normal',
}) => {
  return (
    <MarqueeLogoScroller
      title={title}
      description={description}
      logos={logos}
      speed={speed}
      className="bg-[var(--secondary)] border-y border-[var(--primary)]/10 mx-auto max-w-[1200px] my-24 md:my-32"
    />
  );
};

export default SocialProofStrip;
