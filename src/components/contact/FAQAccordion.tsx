'use client';

import React, { useState } from 'react';
import { BackgroundEllipses } from '../ui/BackgroundEllipses';

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
    <section id="faq" className="relative bg-[var(--background)] py-16 md:py-24">
      <BackgroundEllipses sections={['faq']} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <h2 className="font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-12 text-center">
          {heading}
        </h2>

        <div className="space-y-6">
          {items.map((item) => {
            const isOpen = openItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="border-b border-gray-200 pb-6"
              >
                <button
                  id={`accordion-button-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="relative w-full text-left py-4 px-0 bg-transparent border-none outline-none cursor-pointer transition-colors duration-200 text-[#7288a2] hover:text-[var(--accent)] focus:text-[var(--accent)]"
                  aria-expanded={isOpen}
                >
                  <span className="block pr-10 font-medium text-lg">
                    {item.question}
                  </span>
                  <span 
                    className="absolute top-4 right-0 w-6 h-6 border border-current rounded-full transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-current"></span>
                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-3 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  </span>
                </button>

                <div className={`transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed mt-4 mb-6">
                    {item.answer}
                  </p>
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
