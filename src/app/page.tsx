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
    src: "https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2F0fd590c17bae430695ec6e9e02319e6f?format=webp&width=800",
    alt: "Website dashboard preview on laptop"
  }
};

const pricingContent = {
  heading: "Simple, Transparent Pricing",
  tiers: [
    {
      id: "quick-launch",
      name: "Quick Launch Sprint",
      price: "199",
      pricePeriod: "deposit",
      tagline: "For new tutors testing the waters",
      color: "primary" as const,
      features: [
        "1-page website",
        "Mobile responsive",
        "Contact form",
        "3-day delivery",
        "1 revision round"
      ],
      cta: {
        text: "Pay Deposit",
        href: "https://buy.stripe.com/eVqaEXewfaNk1gT0IpgEg04",
        variant: "outline"
      }
    },
    {
      id: "local-visibility",
      name: "Local Visibility Package",
      price: "399",
      pricePeriod: "deposit",
      tagline: "Perfect for established local tutors",
      label: "Most Popular",
      featured: true,
      color: "teal" as const,
      features: [
        "3-page website",
        "Local SEO setup",
        "Google Business integration",
        "Booking calendar",
        "5-day delivery",
        "2 revision rounds"
      ],
      cta: {
        text: "Pay Deposit",
        href: "https://buy.stripe.com/5kQ3cv4VF08G2kX1MtgEg06",
        variant: "solid"
      }
    },
    {
      id: "growth-system",
      name: "Growth System",
      price: "599",
      pricePeriod: "deposit",
      tagline: "Complete digital student acquisition",
      color: "primary" as const,
      features: [
        "5-page website",
        "Blog setup",
        "Email capture",
        "Analytics dashboard",
        "Social media links",
        "7-day delivery",
        "3 revision rounds"
      ],
      cta: {
        text: "Pay Deposit",
        href: "https://buy.stripe.com/00w14nfAjbRobVx1MtgEg05",
        variant: "outline"
      }
    }
  ]
};

const portfolioContent = {
  eyebrow: "PORTFOLIO",
  heading: "This Section Is Waiting for You",
  body: "I'm building my portfolio with real results from real educators. Want to be featured here—with a link to your new site and your success story?",
  cards: [
    { id: "1", placeholderText: "Your Project Here" },
    { id: "2", placeholderText: "Your Project Here" },
    { id: "3", placeholderText: "Your Project Here" }
  ],
  cta: { text: "Become a Founding Client", href: "/contact" }
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
      <SocialProofStrip />
      <Footer {...footerContent} />
    </main>
  );
}
