"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HeroBadge from "@/components/ui/hero-badge";

const ease = [0.16, 1, 0.3, 1];

interface HeroContentProps {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
    variant?: "default" | "solid" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  };
  secondaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
    variant?: "default" | "solid" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  };
}

function HeroContent({
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
}: HeroContentProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <motion.h1
        className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[var(--text-primary)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-[var(--primary)]">{titleHighlight}</span>
        )}
      </motion.h1>
      <motion.p
        className="max-w-[42rem] leading-relaxed text-[var(--text-secondary)] text-lg sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease }}
      >
        {primaryAction && (
          <Link
            href={primaryAction.href}
            onClick={(e) => handleSmoothScroll(e, primaryAction.href)}
            className={cn(
              buttonVariants({ variant: primaryAction.variant || "solid", size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center"
            )}
          >
            {primaryAction.icon}
            {primaryAction.text}
          </Link>
        )}
        {secondaryAction && (
          <Link
            href={secondaryAction.href}
            onClick={(e) => handleSmoothScroll(e, secondaryAction.href)}
            className={cn(
              buttonVariants({ variant: secondaryAction.variant || "outline", size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center"
            )}
          >
            {secondaryAction.icon}
            {secondaryAction.text}
          </Link>
        )}
      </motion.div>
    </div>
  );
}

interface HeroProps {
  pill?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
  };
  content: HeroContentProps;
  preview?: React.ReactNode;
}

const Hero = ({ pill, content, preview }: HeroProps) => {
  return (
    <div className="w-full relative overflow-hidden bg-[var(--background-white)]">
      <div className="flex min-h-[calc(100vh-64px)] flex-col lg:flex-row items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 gap-12 lg:gap-16 mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 w-full lg:flex-1">
          {pill && <HeroBadge {...pill} />}
          <HeroContent {...content} />
        </div>
        {preview && (
          <div className="w-full lg:flex-1 flex items-center justify-center mt-12 lg:mt-0">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};

export { Hero };
