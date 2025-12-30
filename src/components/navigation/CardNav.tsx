'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  label: string;
  ariaLabel: string;
  href?: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

interface CardNavProps {
  theme?: 'dark' | 'light';
  items?: NavItem[];
  logo?: string;
  brandName?: string;
}

export const CardNav: React.FC<CardNavProps> = ({ 
  theme = 'dark',
  brandName = 'EdTechVault',
  items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/about" },
        { label: "Careers", ariaLabel: "About Careers", href: "/about" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#portfolio" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#portfolio" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "/contact" },
        { label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com" }
      ]
    }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F] border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="hamburger-btn p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`hamburger-line ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>

            {/* Brand Logo */}
            <Link href="/" className="brand-logo flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L4 9V23L16 30L28 23V9L16 2Z" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-semibold text-lg hidden sm:block">{brandName}</span>
            </Link>

            {/* Get Started CTA */}
            <Link
              href="/contact"
              className="cta-button px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>
          
          <div className="mobile-menu fixed top-16 left-0 right-0 z-40 bg-[#0A0A0F] border-b border-gray-800 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {items.map((item) => (
                <div key={item.label} className="mb-4">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="menu-section-btn w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all hover:bg-gray-800"
                    style={{
                      backgroundColor: openDropdown === item.label ? item.bgColor : 'transparent',
                      color: item.textColor,
                    }}
                  >
                    <span className="font-medium text-base">{item.label}</span>
                    <span 
                      className={`text-xs transition-transform duration-300 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {openDropdown === item.label && (
                    <div className="menu-dropdown mt-2 ml-4 space-y-1 animate-slideDown">
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href || '#'}
                          aria-label={link.ariaLabel}
                          className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all text-sm"
                          onClick={toggleMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>

      <style jsx>{`
        .hamburger-line {
          display: block;
          width: 100%;
          height: 2px;
          background-color: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};
