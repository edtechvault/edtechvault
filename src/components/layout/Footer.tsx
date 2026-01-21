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
                    <span className="text-white/60 text-sm flex items-center gap-2">
                      {link.label}
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded">Soon</span>
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
