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
  heading: "Bootstrap Compatible Responsive Pricing Tables",
  tiers: [
    {
      id: "basic-pack",
      name: "BasicPack 2020",
      price: "7.99",
      tagline: "Made for starters",
      label: "Fixed Price",
      color: "purple" as const,
      features: [
        { label: "Bandwith", value: "50 GB" },
        { label: "Add-On Domains", value: "10" },
        { label: "SSD Storage", value: "250 GB" },
        { label: "Mail Adresses", value: "25" },
        { label: "Support", value: "Only Mail" }
      ],
      cta: { text: "Get Started", href: "#" }
    },
    {
      id: "extended-pack",
      name: "ExtendedPack 2020",
      price: "9.99",
      tagline: "Made for experienced users",
      label: "Fixed Price",
      color: "turquoise" as const,
      features: [
        { label: "Bandwith", value: "150 GB" },
        { label: "Add-On Domains", value: "25" },
        { label: "SSD Storage", value: "500 GB" },
        { label: "Mail Adresses", value: "50" },
        { label: "Support", value: "Mail/Phone" }
      ],
      cta: { text: "Get Started", href: "#" }
    },
    {
      id: "pros-pack",
      name: "ProsPack 2020",
      price: "12.99",
      tagline: "Made for professionals/agencies",
      label: "Fixed Price",
      color: "red" as const,
      features: [
        { label: "Bandwith", value: "250 GB" },
        { label: "Add-On Domains", value: "50" },
        { label: "SSD Storage", value: "1 TB" },
        { label: "Mail Adresses", value: "75" },
        { label: "Support", value: "7/24" }
      ],
      cta: { text: "Get Started", href: "#" }
    }
  ]
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
