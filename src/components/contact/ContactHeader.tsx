'use client';

import React from 'react';

interface ContactHeaderProps {
  breadcrumb: { items: Array<{ label: string; href?: string }> };
  headline: string;
  subtext: string;
}

export const ContactHeader: React.FC<ContactHeaderProps> = ({
  breadcrumb,
  headline,
  subtext,
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
                  <a href={item.href} className="hover:text-[var(--accent)] transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-[var(--text-primary)]">{item.label}</span>
                )}
                {index < breadcrumb.items.length - 1 && <span>/</span>}
              </li>
            ))}
          </ol>
        </nav>
        
        <div className="text-center max-w-[600px] mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[56px] text-[var(--text-primary)] mb-4">
            {headline}
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
