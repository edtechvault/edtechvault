import { Hero } from '@/components/ui/hero';
import { OriginStory } from '@/components/about/OriginStory';
import { ProcessTimeline } from '@/components/about/ProcessTimeline';
import { CredentialsGrid } from '@/components/about/CredentialsGrid';
import { Footer } from '@/components/layout/Footer';

// Content data from handoff
const heroContent = {
  breadcrumb: { items: [{ label: "Home", href: "/" }, { label: "About" }] },
  headline: "I'm Leo Mahé",
  intro: [
    "I'm a French designer studying at Tongji University in Shanghai. I spend my days exploring AI-powered design tools and building websites for small businesses.",
    "Before this, I studied design in France and worked on everything from brand identities to spatial installations. But what excites me most is helping independent professionals—tutors, coaches, instructors—get online without the usual headaches."
  ],
  photo: {
    src: "https://placehold.co/500x600/FDF6F0/C4785A?text=Leo+Photo",
    alt: "Leo Mahé portrait"
  }
};

const originStoryContent = {
  heading: "Why Teaching Businesses?",
  paragraphs: [
    "A few years ago, I tried to find a Japanese tutor in my city. I Googled, scrolled through results, and clicked on a dozen websites. Most were broken on my phone. Some hadn't been updated since 2018. One just had a phone number and a blurry photo.",
    "I eventually found a great tutor through word of mouth. She'd been teaching for 15 years, had dozens of happy students, and genuinely changed how I approached learning. Her website? A Facebook page with three posts from 2019.",
    "That gap stuck with me. The people who dedicate their lives to teaching others—language tutors, music instructors, fitness coaches, wellness practitioners—often have the worst online presence. Not because they don't care, but because they're too busy actually teaching to figure out Wix.",
    "So I decided to fix that. One teaching business at a time."
  ]
};

const processContent = {
  heading: "How We'll Work Together",
  steps: [
    { number: 1, title: "Discovery Call", description: "15 minutes. You share your goals. I ask questions. We see if we're a fit.", timeline: "Day 0" },
    { number: 2, title: "Design Draft", description: "I create the first version based on our conversation and your content.", timeline: "Day 1-2" },
    { number: 3, title: "Build & Refine", description: "You review. I adjust. We repeat until you love it.", timeline: "Day 2-5" },
    { number: 4, title: "Launch & Support", description: "Your site goes live. I stick around to make sure it works.", timeline: "Day 3-7" }
  ]
};

const credentialsContent = {
  education: [
    { id: "1", degree: "Master of Design", institution: "Tongji University, Shanghai", location: "China", period: "2023 – Present", icon: "🎓" },
    { id: "2", degree: "DNSEP", institution: "National Diploma of Superior Artistic Expression", location: "France", period: "Design Specialization", icon: "🎨" },
    { id: "3", degree: "DNA", institution: "National Art Diploma", location: "France", period: "Foundation in Design", icon: "📐" }
  ],
  skills: {
    design: ["Figma", "Builder.io", "Supabase"],
    ai: ["Stable Diffusion", "ComfyUI", "n8n"],
    creative: ["Photography", "Blender", "Rhino 7"],
    languages: [
      { flag: "🇫🇷", name: "French", level: "Native" },
      { flag: "🇬🇧", name: "English", level: "Fluent" }
    ]
  }
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

export default function AboutPage() {
  const heroContentFormatted = {
    pill: {
      text: "About Me",
      variant: "outline" as const,
    },
    content: {
      title: "I'm",
      titleHighlight: "Leo Mahé",
      description: heroContent.intro.join(" "),
      primaryAction: {
        href: "/contact",
        text: "Get Started",
      },
      secondaryAction: {
        href: "#origin",
        text: "My Story",
      }
    },
    preview: (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={heroContent.photo.src}
          alt={heroContent.photo.alt}
          className="h-full w-full object-cover"
        />
      </div>
    )
  };

  return (
    <main>
      <Hero {...heroContentFormatted} />
      <OriginStory {...originStoryContent} />
      <ProcessTimeline {...processContent} />
      <CredentialsGrid {...credentialsContent} />
      <Footer {...footerContent} />
    </main>
  );
}
