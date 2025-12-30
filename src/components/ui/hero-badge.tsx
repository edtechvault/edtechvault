"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroBadgeProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const HeroBadge = ({
  href,
  text,
  icon,
  endIcon,
  variant = "outline",
  size = "md",
  className,
}: HeroBadgeProps) => {
  const badgeClasses = cn(
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium transition-colors",
    variant === "default" && "bg-primary text-primary-foreground",
    variant === "outline" && "border border-input bg-background hover:bg-accent",
    variant === "ghost" && "hover:bg-accent",
    size === "sm" && "px-2 py-0.5 text-xs",
    size === "lg" && "px-4 py-1.5 text-base",
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{text}</span>
      {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={badgeClasses}>
        {content}
      </Link>
    );
  }

  return <div className={badgeClasses}>{content}</div>;
};

export default HeroBadge;
