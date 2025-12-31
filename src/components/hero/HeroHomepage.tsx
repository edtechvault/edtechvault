'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

function createBeam(width: number, height: number, layer: number): Beam {
  const angle = -35 + Math.random() * 10;
  const baseSpeed = 0.2 + layer * 0.2;
  const baseOpacity = 0.08 + layer * 0.05;
  const baseWidth = 10 + layer * 5;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: baseWidth,
    length: height * 2.5,
    angle,
    speed: baseSpeed + Math.random() * 0.2,
    opacity: baseOpacity + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
    layer,
  };
}

interface HeroHomepageProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
  laptopMockup: { src: string; alt: string };
}

export const HeroHomepage: React.FC<HeroHomepageProps> = ({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  laptopMockup,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);

  const LAYERS = 3;
  const BEAMS_PER_LAYER = 8;

  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseRef.current;
    if (!canvas || !noiseCanvas) return;
    const ctx = canvas.getContext("2d");
    const nCtx = noiseCanvas.getContext("2d");
    if (!ctx || !nCtx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      noiseCanvas.width = window.innerWidth * dpr;
      noiseCanvas.height = window.innerHeight * dpr;
      noiseCanvas.style.width = `${window.innerWidth}px`;
      noiseCanvas.style.height = `${window.innerHeight}px`;
      nCtx.setTransform(1, 0, 0, 1, 0, 0);
      nCtx.scale(dpr, dpr);

      beamsRef.current = [];
      for (let layer = 1; layer <= LAYERS; layer++) {
        for (let i = 0; i < BEAMS_PER_LAYER; i++) {
          beamsRef.current.push(createBeam(window.innerWidth, window.innerHeight, layer));
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const generateNoise = () => {
      const imgData = nCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = 8; // Very subtle noise
      }
      nCtx.putImageData(imgData, 0, 0);
    };

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = Math.min(1, beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4));
      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

      // Using Warm Terracotta (196, 120, 90) for the beams
      gradient.addColorStop(0, `rgba(196, 120, 90, 0)`);
      gradient.addColorStop(0.2, `rgba(196, 120, 90, ${pulsingOpacity * 0.4})`);
      gradient.addColorStop(0.5, `rgba(196, 120, 90, ${pulsingOpacity * 0.7})`);
      gradient.addColorStop(0.8, `rgba(196, 120, 90, ${pulsingOpacity * 0.4})`);
      gradient.addColorStop(1, `rgba(196, 120, 90, 0)`);

      ctx.fillStyle = gradient;
      ctx.filter = `blur(${4 + beam.layer * 3}px)`;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      // Using Off-White (#FAFAFA) and Soft Cream (#FDF6F0) for the background
      gradient.addColorStop(0, "#FAFAFA");
      gradient.addColorStop(1, "#FDF6F0");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -50) {
          beam.y = window.innerHeight + 50;
          beam.x = Math.random() * window.innerWidth;
        }
        drawBeam(beam);
      });

      generateNoise();
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleScrollTo = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] min-h-[600px] md:min-h-[800px] flex items-center">
      {/* Background Animation */}
      <canvas ref={noiseRef} className="absolute inset-0 z-0 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Content - Left Column (55%) */}
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            {/* Eyebrow Text */}
            <span className="inline-block text-[var(--primary)] text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>

            {/* Headline */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[var(--text-primary)]">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-lg">
              {subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="solid"
                size="large"
                href={primaryCTA.href}
              >
                {primaryCTA.text}
              </Button>

              <button
                onClick={() => handleScrollTo(secondaryCTA.href)}
                className="inline-flex items-center justify-center h-12 px-8 py-4 text-base md:text-lg font-semibold rounded-xl border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                {secondaryCTA.text}
              </button>
            </div>
          </div>

          {/* Visual - Right Column (45%) */}
          <div className="md:col-span-5 relative h-96 md:h-[550px]">
            <div className="relative h-full flex items-center justify-center md:justify-end">
              <img
                src={laptopMockup.src}
                alt={laptopMockup.alt}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomepage;
