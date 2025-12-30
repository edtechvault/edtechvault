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
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">
          {heading}
        </h2>

        <div className="accordion">
          {items.map((item) => {
            const isOpen = openItems.includes(item.id);

            return (
              <div
                key={item.id}
                className="accordion-item"
              >
                <button
                  id={`accordion-button-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="accordion-button"
                  aria-expanded={isOpen}
                >
                  <span className="accordion-title">
                    {item.question}
                  </span>
                  <span className="accordion-icon" aria-hidden="true"></span>
                </button>

                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background: var(--background);
          padding: 64px 24px;
        }

        @media (min-width: 768px) {
          .faq-section {
            padding: 96px 24px;
          }
        }

        .faq-container {
          margin: 0 auto;
          max-width: 768px;
        }

        .faq-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 28px;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 48px;
        }

        @media (min-width: 768px) {
          .faq-heading {
            font-size: 40px;
          }
        }

        .accordion-item {
          border-bottom: 1px solid #e5e5e5;
        }

        .accordion-item .accordion-button[aria-expanded='true'] {
          border-bottom: 1px solid var(--accent);
        }

        .accordion-button {
          position: relative;
          display: block;
          text-align: left;
          width: 100%;
          padding: 1em 0;
          color: #7288a2;
          font-size: 1.15rem;
          font-weight: 400;
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          transition: color 200ms ease;
        }

        .accordion-button:hover,
        .accordion-button:focus {
          color: var(--accent);
        }

        .accordion-button .accordion-title {
          display: block;
          padding: 1em 3em 1em 0;
        }

        .accordion-button .accordion-icon {
          display: inline-block;
          position: absolute;
          top: 18px;
          right: 0;
          width: 22px;
          height: 22px;
          border: 1px solid currentColor;
          border-radius: 22px;
          transition: border-color 200ms ease;
        }

        .accordion-button .accordion-icon::before {
          display: block;
          position: absolute;
          content: '';
          top: 9px;
          left: 5px;
          width: 10px;
          height: 2px;
          background: currentColor;
          transition: background-color 200ms ease;
        }

        .accordion-button .accordion-icon::after {
          display: block;
          position: absolute;
          content: '';
          top: 5px;
          left: 9px;
          width: 2px;
          height: 10px;
          background: currentColor;
          transition: width 200ms ease, background-color 200ms ease;
        }

        .accordion-button[aria-expanded='true'] {
          color: var(--accent);
        }

        .accordion-button[aria-expanded='true'] .accordion-icon::after {
          width: 0;
        }

        .accordion-button[aria-expanded='true'] + .accordion-content {
          opacity: 1;
          max-height: 500px;
          transition: opacity 200ms linear, max-height 200ms linear;
          will-change: opacity, max-height;
        }

        .accordion-content {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: opacity 200ms linear, max-height 200ms linear;
          will-change: opacity, max-height;
        }

        .accordion-content p {
          font-size: 1rem;
          font-weight: 300;
          margin: 2em 0;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default FAQAccordion;
