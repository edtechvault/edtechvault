'use client';

import React from 'react';

interface OriginStoryProps {
  heading: string;
  paragraphs: string[];
}

export const OriginStory: React.FC<OriginStoryProps> = ({
  heading,
  paragraphs,
}) => {
  return (
    <section id="origin" className="bg-[var(--secondary)] py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-8">
          {heading}
        </h2>
        
        <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? 'text-xl' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
