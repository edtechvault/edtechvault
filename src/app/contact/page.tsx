import { Hero } from '@/components/ui/hero';
import { MultiStepContactForm } from '@/components/contact/MultiStepContactForm';
import { CalendlyEmbed } from '@/components/contact/CalendlyEmbed';
import { ContactForm } from '@/components/contact/ContactForm';
import { FAQAccordion } from '@/components/contact/FAQAccordion';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

// Content data from handoff
const heroContent = {
  content: {
    title: "Let's Talk",
    description: "Pick whatever works best for you. Whether you prefer a quick call, sending a message, or emailing directly — I'm here to help bring your teaching business online.",
    primaryAction: {
      href: "#calendly",
      text: "Book a Call"
    },
    secondaryAction: {
      href: "#contact-form",
      text: "Send a Message"
    }
  },
  preview: (
    <div className="relative w-full aspect-square max-w-[500px] rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-medium)' }}>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2F05fdee05a33943699b22cfed2becbf2f?format=webp&width=800"
        alt="Learning experience designer planning a project"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
};

const optionsContent = {
  options: [
    { id: "call", icon: "📅", label: "Book a Discovery Call", description: "Free 15-minute video chat. No pressure. Just a conversation.", cta: { text: "See Available Times ↓", action: "scroll" as const, target: "#calendly" } },
    { id: "message", icon: "✉️", label: "Send a Message", description: "Prefer writing? Use the form below. I reply within 24 hours.", cta: { text: "Go to Form ↓", action: "scroll" as const, target: "#contact-form" } },
    { id: "email", icon: "📧", label: "Email Directly", description: "leo@edtechvault.com\n\nShanghai, UTC+8\nUsually same-day reply", cta: { text: "Copy Email", action: "copy" as const, target: "leo@edtechvault.com" } }
  ]
};

const calendlyContent = {
  heading: "Book a Call",
  subheading: "Let's discuss your project in a quick 15-minute discovery call.",
  calendlyUrl: "https://calendly.com/leomahe/15min",
  height: 700
};

const formContent = {
  heading: "Send a Message",
  submitButtonText: "Send Message →",
  successMessage: "Thanks for reaching out! I'll get back to you within 24 hours."
};

const faqContent = {
  heading: "Common Questions",
  items: [
    { id: "1", question: "How long does the whole process take?", answer: "3-7 days from payment to launch, depending on your package. Quick Launch is 3 days, Local Visibility is 5, Growth System is 7. This assumes you provide your content (photos, text) promptly." },
    { id: "2", question: "What do I need to provide?", answer: "Photos of yourself or your business, your logo (if you have one), and the text you want on your site. If you don't have content ready, I can help write it for an additional fee." },
    { id: "3", question: "Do I actually own the website?", answer: "Yes, 100%. You own all files, code, images, and content. There are no monthly fees to me. I'll set everything up on your hosting, and you're free to make changes yourself or hire anyone else in the future." },
    { id: "4", question: "What if I don't like the design?", answer: "Every package includes revision rounds (1-3 depending on tier). We'll work together until you're happy. I've never had a client not love their final result." },
    { id: "5", question: "Can you split the payment?", answer: "Yes. I can split any package into 2-3 payments. Standard is 50% deposit to start, 50% on delivery." },
    { id: "6", question: "I'm not in Australia—can you still help?", answer: "Absolutely. I work with teaching businesses worldwide. Time zones work well with Australia, Europe, UK, and North America." },
    { id: "7", question: "What's the catch?", answer: "No catch. I'm building my portfolio with real clients, so I'm motivated to do great work. The pricing is straightforward, you own everything, and I genuinely want to help teaching professionals succeed online." }
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

export default function ContactPage() {
  return (
    <main>
      <Hero {...heroContent} />
      <MultiStepContactForm />
      <CalendlyEmbed {...calendlyContent} />
      <ContactForm {...formContent} />
      <FAQAccordion {...faqContent} />
      <Footer {...footerContent} />
    </main>
  );
}
