'use client';

import React from 'react';

interface HeroAboutProps {
  breadcrumb: { items: Array<{ label: string; href?: string }> };
  headline: string;
  intro: string[];
  photo: { src: string; alt: string };
}

export const HeroAbout: React.FC<HeroAboutProps> = ({
  breadcrumb,
  headline,
  intro,
  photo,
}) => {
  return (
    <section className="bg-[var(--background-white)]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            {breadcrumb.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.href ? (
                  <a href={item.href} className="hover:text-[var(--accent)] transition-colors">{item.label}</a>
                ) : (
                  <span className="text-[var(--text-primary)]">{item.label}</span>
                )}
                {index < breadcrumb.items.length - 1 && <span>/</span>}
              </li>
            ))}
          </ol>
        </nav>
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Content */}
          <div className="md:col-span-7 space-y-6">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] text-[var(--text-primary)]">{headline}</h1>
            <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
              {intro.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
            </div>
          </div>
          
          {/* Photo */}
          <div className="md:col-span-5">
            <div className="relative">
              <img src={photo.src} alt={photo.alt} className="w-full h-auto rounded-2xl shadow-[var(--shadow-medium)]" loading="eager" />
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[var(--primary-light)]/30 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
