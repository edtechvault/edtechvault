'use client';

import { useState } from 'react';

interface NavLink {
  label: string;
  ariaLabel: string;
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
}

export const CardNav: React.FC<CardNavProps> = ({ 
  theme = 'dark',
  items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ]
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-start">
        {items.map((item) => (
          <div key={item.label} className="relative">
            <button
              onClick={() => toggleDropdown(item.label)}
              aria-expanded={openDropdown === item.label}
              className="px-6 py-3 rounded-lg font-medium text-base cursor-pointer transition-all duration-300 flex items-center gap-2 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
            >
              {item.label}
              <span 
                className={`text-xs inline-block transition-transform duration-300 ${
                  openDropdown === item.label ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            {openDropdown === item.label && (
              <div 
                className="absolute top-full left-0 min-w-[200px] rounded-lg py-2 mt-2 shadow-lg z-50 animate-slideDown"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    aria-label={link.ariaLabel}
                    className="block px-6 py-3 transition-all duration-200 hover:opacity-80 hover:pl-8"
                    style={{ color: item.textColor }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
