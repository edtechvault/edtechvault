'use client';

import React from 'react';

interface SocialLink {
  platform: string;
  href: string;
}

interface PageLink {
  href: string;
  label: string;
  coming_soon?: boolean;
}

interface Language {
  code: string;
  label: string;
  active: boolean;
  coming_soon?: boolean;
}

interface FooterProps {
  brand: { name: string; tagline: string };
  social_links: SocialLink[];
  page_links: PageLink[];
  contact_links: PageLink[];
  copyright: string;
  location: string;
  languages: Language[];
}

export const Footer: React.FC<FooterProps> = ({
  brand,
  social_links,
  page_links,
  contact_links,
  copyright,
  location,
  languages,
}) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[var(--text-primary)] text-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-heading font-bold text-2xl">{brand.name}</h3>
            <p className="text-white/70 text-sm">{brand.tagline}</p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {social_links.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Pages */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Pages
            </h4>
            <ul className="space-y-3">
              {page_links.map((link) => (
                <li key={link.href}>
                  {link.coming_soon ? (
                    <span className="text-white/40 text-sm flex items-center gap-2">
                      {link.label}
                      <span className="text-xs bg-white/10 px-2 py-0.5 rounded">Soon</span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              {contact_links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>{copyright}</span>
            <span>•</span>
            <span>{location}</span>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`
                  px-3 py-1 rounded text-sm transition-colors
                  ${lang.active 
                    ? 'bg-white/10 text-white' 
                    : lang.coming_soon 
                      ? 'text-white/30 cursor-not-allowed' 
                      : 'text-white/50 hover:text-white'
                  }
                `}
                disabled={lang.coming_soon}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
