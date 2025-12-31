'use client';

import React from 'react';
import Link from 'next/link';

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
    <section className="bg-[var(--secondary)]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            {breadcrumb.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-[var(--accent)] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[var(--text-primary)]">{item.label}</span>
                )}
                {index < breadcrumb.items.length - 1 && <span>/</span>}
              </li>
            ))}
          </ol>
        </nav>
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Content - Left Column */}
          <div className="md:col-span-7 space-y-6">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] text-[var(--text-primary)] leading-tight">
              {headline}
            </h1>
            <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
              {intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Photo - Right Column */}
          <div className="md:col-span-5">
            <div className="relative max-w-[400px] mx-auto md:ml-auto md:mr-0">
              {/* Decorative border offset behind image */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-4 border-[var(--primary)] rounded-2xl" />
              
              {/* Main photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-medium)]">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
