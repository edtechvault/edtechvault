'use client';

import React from 'react';

interface Ellipse {
  id: string;
  width: number;
  height: number;
  top: string;
  left: string;
  color: string;
  blur: number;
  opacity: number;
  rotation: number;
}

interface DecorativeEllipsesProps {
  variant?: 'hero' | 'origin' | 'process' | 'credentials';
  className?: string;
}

const ellipseConfigs: Record<string, Ellipse[]> = {
  hero: [
    {
      id: 'hero-1',
      width: 180,
      height: 280,
      top: '10%',
      left: '-5%',
      color: 'var(--primary)',
      blur: 40,
      opacity: 0.12,
      rotation: -15,
    },
    {
      id: 'hero-2',
      width: 220,
      height: 160,
      top: '60%',
      left: '85%',
      color: 'var(--accent)',
      blur: 35,
      opacity: 0.10,
      rotation: 25,
    },
    {
      id: 'hero-3',
      width: 140,
      height: 200,
      top: '35%',
      left: '92%',
      color: 'var(--success)',
      blur: 38,
      opacity: 0.08,
      rotation: -8,
    },
  ],
  origin: [
    {
      id: 'origin-1',
      width: 200,
      height: 300,
      top: '15%',
      left: '90%',
      color: 'var(--primary-light)',
      blur: 45,
      opacity: 0.15,
      rotation: -20,
    },
    {
      id: 'origin-2',
      width: 160,
      height: 240,
      top: '70%',
      left: '-8%',
      color: 'var(--accent-light)',
      blur: 38,
      opacity: 0.12,
      rotation: 18,
    },
    {
      id: 'origin-3',
      width: 120,
      height: 180,
      top: '45%',
      left: '5%',
      color: 'var(--success)',
      blur: 35,
      opacity: 0.10,
      rotation: -12,
    },
  ],
  process: [
    {
      id: 'process-1',
      width: 150,
      height: 220,
      top: '5%',
      left: '5%',
      color: 'var(--success)',
      blur: 42,
      opacity: 0.11,
      rotation: -12,
    },
    {
      id: 'process-2',
      width: 190,
      height: 140,
      top: '50%',
      left: '88%',
      color: 'var(--primary)',
      blur: 36,
      opacity: 0.13,
      rotation: 30,
    },
    {
      id: 'process-3',
      width: 170,
      height: 250,
      top: '85%',
      left: '10%',
      color: 'var(--accent)',
      blur: 40,
      opacity: 0.10,
      rotation: -8,
    },
  ],
  credentials: [
    {
      id: 'cred-1',
      width: 210,
      height: 150,
      top: '20%',
      left: '-6%',
      color: 'var(--accent-light)',
      blur: 44,
      opacity: 0.14,
      rotation: 22,
    },
    {
      id: 'cred-2',
      width: 180,
      height: 270,
      top: '65%',
      left: '92%',
      color: 'var(--primary-light)',
      blur: 38,
      opacity: 0.11,
      rotation: -18,
    },
    {
      id: 'cred-3',
      width: 130,
      height: 190,
      top: '40%',
      left: '3%',
      color: 'var(--success)',
      blur: 40,
      opacity: 0.09,
      rotation: 15,
    },
  ],
};

export const DecorativeEllipses: React.FC<DecorativeEllipsesProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const ellipses = ellipseConfigs[variant] || ellipseConfigs.hero;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {ellipses.map((ellipse) => (
        <div
          key={ellipse.id}
          className="absolute"
          style={{
            width: `${ellipse.width}px`,
            height: `${ellipse.height}px`,
            top: ellipse.top,
            left: ellipse.left,
            backgroundColor: ellipse.color,
            filter: `blur(${ellipse.blur}px)`,
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

export default DecorativeEllipses;