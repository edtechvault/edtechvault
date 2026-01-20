import { HeroAbout } from '@/components/hero/HeroAbout';
import { OriginStory } from '@/components/about/OriginStory';
import { ProcessTimeline } from '@/components/about/ProcessTimeline';
import { CredentialsGrid } from '@/components/about/CredentialsGrid';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  // Hero content
  const heroContent = {
    breadcrumb: { items: [{ label: "Home", href: "/" }, { label: "About" }] },
    headline: "I'm Leo Mahé",
    intro: [
      "I'm a French designer studying at Tongji University in Shanghai. I spend my days exploring AI-powered design tools and building websites for small businesses.",
      "Before this, I studied design in France and worked on everything from brand identities to spatial installations. But what excites me most is helping independent professionals—tutors, coaches, instructors—get online without the usual headaches."
    ],
    photo: {
      src: "https://cdn.builder.io/api/v1/image/assets%2F5c54bbd5552f4317a44934808ff452e6%2F49305038341a477383aa7f1b5ff5d5d9?format=webp&width=800",
      alt: "Leo Mahé portrait"
    }
  };

  // Origin story content
  const originStoryContent = {
    heading: "Why Teaching Businesses?",
    paragraphs: [
      "A few years ago, I tried to find a Muay Thai coach in my city. I Googled, scrolled through results, and clicked on a dozen websites. Most were broken on my phone. Some hadn't been updated since 2018. One just had an address and a blurry photo.",
      "I eventually found a great coach through word of mouth. He'd been teaching for 15 years, had dozens of loyal students, and genuinely changed how I approached training. His website? An old Facebook page with a few posts from years ago.",
      "That gap stuck with me. The people who dedicate their lives to teaching others—coaches, trainers, instructors—often have the worst online presence. Not because they don't care, but because they're too busy actually teaching to figure out websites, SEO, or visibility.",
      "So I decided to fix that. One teaching business at a time."
    ]
  };

  // Process content
  const processContent = {
    heading: "How We'll Work Together",
    steps: [
      { number: 1, title: "Discovery Call", description: "15 minutes. You share your goals. I ask questions. We see if we're a fit.", timeline: "Day 0" },
      { number: 2, title: "Design Draft", description: "I create the first version based on our conversation and your content.", timeline: "Day 1-2" },
      { number: 3, title: "Build & Refine", description: "You review. I adjust. We repeat until you love it.", timeline: "Day 2-5" },
      { number: 4, title: "Launch & Support", description: "Your site goes live. I stick around to make sure it works.", timeline: "Day 3-7" }
    ]
  };

  // Credentials content - NEW FORMAT
  const credentialsContent = {
    education: [
      { 
        id: "1", 
        degree: "Master of Design", 
        institution: "Tongji University, Shanghai", 
        location: "China", 
        period: "2023 – Present", 
        icon: "🎓",
        description: "Advanced Media & Communication specialization, exploring AI-powered design tools and digital education transformation.",
        achievements: [
          "Thesis on digital education for teaching businesses",
          "Developed EdTechVault service framework"
        ]
      },
      { 
        id: "2", 
        degree: "DNSEP", 
        institution: "National Diploma of Superior Artistic Expression", 
        location: "France", 
        period: "Design Specialization", 
        icon: "🎨",
        description: "Comprehensive design education covering brand identity, spatial design, and interactive media.",
        achievements: [
          "Graduated with honors",
          "Specialized in user experience design"
        ]
      },
      { 
        id: "3", 
        degree: "DNA", 
        institution: "National Art Diploma", 
        location: "France", 
        period: "Foundation in Design", 
        icon: "📐",
        description: "Foundation studies in design principles, visual communication, and creative methodologies."
      }
    ],
    skills: {
      design: [
        { name: "Figma", icon: "🎨", category: "design" },
        { name: "Builder.io", icon: "🏗️", category: "design" },
        { name: "Supabase", icon: "⚡", category: "design" },
        { name: "Next.js", icon: "▲", category: "design" },
        { name: "Tailwind CSS", icon: "🎨", category: "design" }
      ],
      ai: [
        { name: "Stable Diffusion", icon: "🖼️", category: "ai" },
        { name: "ComfyUI", icon: "🔮", category: "ai" },
        { name: "n8n", icon: "🤖", category: "ai" },
        { name: "Claude AI", icon: "💬", category: "ai" }
      ],
      creative: [
        { name: "Photography", icon: "📸", category: "creative" },
        { name: "Blender", icon: "🎭", category: "creative" },
        { name: "Rhino 7", icon: "🦏", category: "creative" },
        { name: "Video Editing", icon: "🎬", category: "creative" }
      ]
    },
    languages: [
      { flag: "🇫🇷", name: "French", level: "Native" },
      { flag: "🇬🇧", name: "English", level: "Fluent" }
    ]
  };

  // Footer content
  const footerContent = {
    brand: { name: "edtechvault", tagline: "Websites for teaching businesses" },
    social_links: [
      { platform: "LinkedIn", href: "https://linkedin.com/in/leomahe" },
    ],
    page_links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/portfolio", label: "Portfolio", coming_soon: true }
    ],
    contact_links: [
      { href: "/contact", label: "Book a Call" },
      { href: "mailto:leo.mahe.professional@gmail.com", label: "Email Leo" }
    ],
    copyright: "© 2024 edtechvault",
    location: "Made in Shanghai",
    languages: [
      { code: "en", label: "EN", active: true },
      { code: "fr", label: "FR", active: false, coming_soon: true }
    ]
  };

  return (
    <>
      <div className="relative">
        <main>
          <HeroAbout
            breadcrumb={heroContent.breadcrumb}
            headline={heroContent.headline}
            intro={heroContent.intro}
            photo={heroContent.photo}
          />
          <OriginStory {...originStoryContent} />
          <section id="process" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {processContent.heading}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Simple, transparent, designed for busy professionals
                </p>
              </div>
              <ProcessTimeline />
            </div>
          </section>
          <CredentialsGrid {...credentialsContent} />
          <Footer {...footerContent} />
        </main>
      </div>
    </>
  );
}
