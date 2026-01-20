'use client';

import React from 'react';

interface Ellipse {
  id: string;
  width: number;
  height: number;
  top: string;
  left?: string;
  right?: string;
  color: string;
  blur: number;
  opacity: number;
  rotation: number;
}

interface BackgroundEllipsesProps {
  sections?: ('hero' | 'origin' | 'process' | 'credentials' | 'contact-header' | 'contact-options' | 'contact-form' | 'faq' | 'floating')[];
  className?: string;
}

const ellipseConfigs: Record<string, Ellipse[]> = {
  hero: [
    // Left side accent
    {
      id: 'hero-1',
      width: 120,
      height: 180,
      top: '12%',
      left: '2%',
      color: '#C4785A',
      blur: 0,
      opacity: 0.22,
      rotation: -18,
    },
    // Right side accent
    {
      id: 'hero-2',
      width: 160,
      height: 110,
      top: '58%',
      right: '4%',
      color: '#2A6B6B',
      blur: 0,
      opacity: 0.20,
      rotation: 28,
    },
    
    // Behind profile photo - large
    {
      id: 'hero-photo-1',
      width: 200,
      height: 260,
      top: '10%',
      left: '63%',
      color: '#D89A7F',
      blur: 0,
      opacity: 0.18,
      rotation: 15,
    },
    // Behind profile photo - medium
    {
      id: 'hero-photo-2',
      width: 140,
      height: 190,
      top: '40%',
      left: '69%',
      color: '#7DB59A',
      blur: 0,
      opacity: 0.15,
      rotation: -25,
    },
    // Behind profile photo - small accent
    {
      id: 'hero-photo-3',
      width: 110,
      height: 150,
      top: '25%',
      left: '72%',
      color: '#3A8585',
      blur: 0,
      opacity: 0.13,
      rotation: 8,
    },
  ],
  origin: [
    {
      id: 'origin-1',
      width: 140,
      height: 190,
      top: '10%',
      right: '3%',
      color: '#D89A7F',
      blur: 0,
      opacity: 0.22,
      rotation: -22,
    },
    {
      id: 'origin-2',
      width: 110,
      height: 170,
      top: '68%',
      left: '1%',
      color: '#3A8585',
      blur: 0,
      opacity: 0.20,
      rotation: 20,
    },
    {
      id: 'origin-3',
      width: 90,
      height: 140,
      top: '42%',
      left: '0%',
      color: '#7DB59A',
      blur: 0,
      opacity: 0.18,
      rotation: -15,
    },
  ],
  process: [
    {
      id: 'process-1',
      width: 115,
      height: 160,
      top: '8%',
      left: '2%',
      color: '#7DB59A',
      blur: 0,
      opacity: 0.20,
      rotation: -16,
    },
    {
      id: 'process-2',
      width: 145,
      height: 105,
      top: '52%',
      right: '3%',
      color: '#C4785A',
      blur: 0,
      opacity: 0.22,
      rotation: 32,
    },
    {
      id: 'process-3',
      width: 125,
      height: 175,
      top: '84%',
      left: '6%',
      color: '#2A6B6B',
      blur: 0,
      opacity: 0.19,
      rotation: -10,
    },
  ],
  credentials: [
    {
      id: 'cred-1',
      width: 135,
      height: 100,
      top: '15%',
      left: '0%',
      color: '#3A8585',
      blur: 0,
      opacity: 0.21,
      rotation: 25,
    },
    {
      id: 'cred-2',
      width: 120,
      height: 180,
      top: '64%',
      right: '2%',
      color: '#D89A7F',
      blur: 0,
      opacity: 0.20,
      rotation: -20,
    },
    {
      id: 'cred-3',
      width: 105,
      height: 145,
      top: '40%',
      left: '1%',
      color: '#7DB59A',
      blur: 0,
      opacity: 0.18,
      rotation: 14,
    },
  ],
  'contact-header': [
    {
      id: 'contact-header-1',
      width: 130,
      height: 170,
      top: '15%',
      left: '2%',
      color: '#C4785A',
      blur: 0,
      opacity: 0.5,
      rotation: -15,
    },
    {
      id: 'contact-header-2',
      width: 110,
      height: 150,
      top: '60%',
      right: '3%',
      color: '#7DB59A',
      blur: 0,
      opacity: 0.5,
      rotation: 20,
    },
  ],
  'contact-options': [
    {
      id: 'contact-opt-1',
      width: 120,
      height: 160,
      top: '10%',
      right: '2%',
      color: '#3A8585',
      blur: 0,
      opacity: 0.5,
      rotation: -18,
    },
    {
      id: 'contact-opt-2',
      width: 100,
      height: 140,
      top: '70%',
      left: '1%',
      color: '#D89A7F',
      blur: 0,
      opacity: 0.5,
      rotation: 22,
    },
  ],
  'contact-form': [
    {
      id: 'contact-form-1',
      width: 135,
      height: 180,
      top: '12%',
      left: '3%',
      color: '#7DB59A',
      blur: 0,
      opacity: 0.5,
      rotation: -20,
    },
    {
      id: 'contact-form-2',
      width: 115,
      height: 155,
      top: '65%',
      right: '4%',
      color: '#C4785A',
      blur: 0,
      opacity: 0.5,
      rotation: 18,
    },
  ],
  faq: [
    {
      id: 'faq-1',
      width: 125,
      height: 165,
      top: '8%',
      right: '1%',
      color: '#2A6B6B',
      blur: 0,
      opacity: 0.5,
      rotation: -12,
    },
    {
      id: 'faq-2',
      width: 105,
      height: 145,
      top: '75%',
      left: '2%',
      color: '#D89A7F',
      blur: 0,
      opacity: 0.5,
      rotation: 25,
    },
  ],
  floating: [],
};

export const BackgroundEllipses: React.FC<BackgroundEllipsesProps> = ({
  sections = ['hero'],
  className = '',
}) => {
  const getEllipses = () => {
    const allEllipses: Ellipse[] = [];
    sections.forEach((section) => {
      if (ellipseConfigs[section]) {
        allEllipses.push(...ellipseConfigs[section]);
      }
    });
    return allEllipses;
  };

  const ellipses = getEllipses();

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} 
      aria-hidden="true" 
      style={{ zIndex: 0 }}
    >
      {ellipses.map((ellipse) => (
        <div
          key={ellipse.id}
          className="absolute"
          style={{
            width: `${ellipse.width}px`,
            height: `${ellipse.height}px`,
            top: ellipse.top,
            left: ellipse.left,
            right: ellipse.right,
            backgroundColor: ellipse.color,
            filter: ellipse.blur > 0 ? `blur(${ellipse.blur}px)` : 'none',
            opacity: ellipse.opacity,
            transform: `rotate(${ellipse.rotation}deg)`,
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEllipses;
