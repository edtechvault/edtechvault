'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  heading: string;
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  heading,
  items,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="bg-[var(--background)] py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] text-center mb-12">
          {heading}
        </h2>
        
        <div className="space-y-4">
          {items.map((item) => {
            const isOpen = openItems.includes(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-[var(--background-white)] rounded-xl border border-[var(--border)] overflow-hidden shadow-[var(--shadow-soft)]"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--secondary)]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--text-primary)] pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-[var(--text-secondary)] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
