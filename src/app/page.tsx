import { HeroHomepage } from '@/components/hero/HeroHomepage';
import { PricingTable } from '@/components/pricing/PricingTable';
import { PortfolioInvitation } from '@/components/portfolio/PortfolioInvitation';
import { SocialProofStrip } from '@/components/social-proof/SocialProofStrip';
import { Footer } from '@/components/layout/Footer';

// Content data from handoff
const heroContent = {
  eyebrow: "FOR TUTORS, COACHES & TEACHING BUSINESSES",
  headline: "Websites That Attract Students—Built in Days, Not Months",
  subheadline: "You teach. I build. No tech headaches. No monthly fees. Just a professional online presence that works as hard as you do.",
  primaryCTA: { text: "See Packages", href: "/contact" },
  secondaryCTA: { text: "View Pricing", href: "#pricing" },
  laptopMockup: {
    src: "https://placehold.co/600x400/FDF6F0/C4785A?text=Laptop+Mockup",
    alt: "Website dashboard preview on laptop"
  }
};

const pricingContent = {
  heading: "Three Packages. One Goal: More Students.",
  subtext: "Pick what fits. Every package includes a working website you own forever.",
  tiers: [
    {
      id: "quick-launch",
      name: "Quick Launch",
      price: 199,
      tagline: "Live in 3 days",
      features: ["Single-page professional site", "Mobile-optimized", "AI-generated hero image", "Contact form", "Basic SEO", "1 revision round"],
      cta: { text: "Get Started", href: "/contact" }
    },
    {
      id: "local-visibility",
      name: "Local Visibility",
      price: 399,
      tagline: "The complete package",
      badge: "Most Popular",
      featured: true,
      features: ["Multi-section landing page", "Thank you page", "3 custom AI images", "Google Business setup guide", "Email notifications", "2 revision rounds", "7-day support"],
      cta: { text: "Get Started", href: "/contact" }
    },
    {
      id: "growth-system",
      name: "Growth System",
      price: 599,
      tagline: "Built to scale",
      features: ["Everything in Local Visibility", "A/B testing variant", "Lead magnet page", "Email sequence templates", "Analytics dashboard", "Conversion audit", "14-day support", "Strategy call included"],
      cta: { text: "Get Started", href: "/contact" }
    }
  ],
  disclaimer: "All prices in USD. Payment plans available. You own everything—no monthly fees to me."
};

const portfolioContent = {
  eyebrow: "PORTFOLIO",
  heading: "This Section Is Waiting for You",
  body: "I'm not going to fill this with fake mockups or borrowed work.\nInstead, I'm looking for founding clients who want to be featured here.\n\nYou get my full attention. I get a success story to share.",
  cards: [
    { id: "1", placeholderText: "Your Tutoring Business Could Be Here" },
    { id: "2", placeholderText: "Your Dance Studio Could Be Here" },
    { id: "3", placeholderText: "Your Coaching Practice Could Be Here" }
  ],
  cta: { text: "Claim a Founding Spot", href: "/contact" }
};

const socialProofContent = {
  items: [
    { icon: "🎓", text: "Tongji University" },
    { icon: "🛠️", text: "Figma • Builder.io • AI" },
    { icon: "🌍", text: "Clients in Australia & Beyond" },
    { icon: "⚡", text: "3-7 Day Delivery" }
  ]
};

const footerContent = {
  brand: { name: "edtechvault", tagline: "Websites for teaching businesses" },
  social_links: [
    { platform: "LinkedIn", href: "https://linkedin.com/in/leomahe" },
    { platform: "Instagram", href: "https://instagram.com/edtechvault" }
  ],
  page_links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/portfolio", label: "Portfolio", coming_soon: true }
  ],
  contact_links: [
    { href: "/contact", label: "Book a Call" },
    { href: "mailto:leo@edtechvault.com", label: "Email Leo" }
  ],
  copyright: "© 2024 edtechvault",
  location: "Made in Shanghai",
  languages: [
    { code: "en", label: "EN", active: true },
    { code: "fr", label: "FR", active: false, coming_soon: true }
  ]
};

export default function Home() {
  return (
    <main>
      <HeroHomepage {...heroContent} />
      <PricingTable {...pricingContent} />
      <PortfolioInvitation {...portfolioContent} />
      <SocialProofStrip {...socialProofContent} />
      <Footer {...footerContent} />
    </main>
  );
}
