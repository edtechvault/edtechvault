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
      bgColor: "#C4785A",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/about" },
        { label: "Careers", ariaLabel: "About Careers", href: "/about" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#2A6B6B",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#portfolio" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#portfolio" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#7DB59A",
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D2D2D] border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger/Close Menu Button */}
            <button
              onClick={toggleMenu}
              className="hamburger-btn p-2 rounded-lg hover:bg-[#3D3D3D] transition-colors relative w-10 h-10"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                // X Close Icon
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                // Hamburger Icon
                <div className="w-6 h-5 flex flex-col justify-between absolute inset-0 m-auto">
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </div>
              )}
            </button>

            {/* Brand Logo */}
            <Link href="/" className="brand-logo flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2F5f787c1589c7444c8aaa7fc358b2077e?format=webp&width=800"
                alt="EdTechVault Logo"
                className="w-8 h-8"
              />
              <span className="text-white font-semibold text-lg hidden sm:block font-heading">{brandName}</span>
            </Link>

            {/* Get Started CTA */}
            <Link
              href="/contact"
              className="cta-button px-6 py-3 bg-[#2A6B6B] hover:bg-[#3A8585] text-white font-semibold rounded-xl transition-all hover:shadow-lg"
              style={{ fontFamily: 'Inter' }}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Dropdown Menu (appears below header, not full screen) */}
        {isMenuOpen && (
          <div className="menu-dropdown-container bg-[#FDF6F0] border-t border-[#E5E5E5] shadow-2xl">
            <div
              className="menu-dotted-bg py-12"
              style={{
                backgroundImage: 'radial-gradient(circle, #C4785A 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.15
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.label}
                      className="menu-card p-8 min-h-[200px] flex flex-col"
                      style={{
                        backgroundColor: item.bgColor,
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(196, 120, 90, 0.12)',
                      }}
                    >
                      <h3 className="text-white text-2xl font-semibold mb-6" style={{ fontFamily: 'Outfit' }}>
                        {item.label}
                      </h3>
                      
                      <nav className="flex flex-col gap-3">
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href || '#'}
                            aria-label={link.ariaLabel}
                            className="menu-link flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
                            onClick={toggleMenu}
                            style={{ fontFamily: 'Inter' }}
                          >
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 16 16" 
                              fill="none" 
                              className="transition-transform group-hover:translate-x-1"
                            >
                              <path 
                                d="M6 3L11 8L6 13" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-base">{link.label}</span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

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

        .menu-dropdown-container {
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .menu-card {
          transition: transform 0.2s ease;
        }

        .menu-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </>
  );
};
