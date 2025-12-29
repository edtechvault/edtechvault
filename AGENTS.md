# EdTechVault - Builder.io Agent Instructions

## Project Overview
EdTechVault is a Tier 2 landing page for Leo Mahé's web development service targeting tutors, coaches, and teaching businesses.

## Tech Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS custom properties
- **Database:** Supabase (contact form submissions)
- **Booking:** Calendly embed
- **Fonts:** Outfit (headings), Inter (body)

## Design System

### Colors
```css
--primary: #C4785A          /* Terracotta - main brand color */
--primary-light: #D89A7F    /* Lighter terracotta for hovers */
--primary-dark: #A45C42     /* Darker terracotta for emphasis */
--secondary: #FDF6F0        /* Cream - section backgrounds */
--accent: #2A6B6B           /* Teal - CTAs and interactive elements */
--text-primary: #2D2D2D     /* Main text */
--text-secondary: #6B6B6B   /* Muted text */
```

### Typography
- **Headings:** font-family: 'Outfit', sans-serif
- **Body:** font-family: 'Inter', sans-serif
- **H1:** 56px desktop / 36px mobile, weight 700
- **H2:** 40px desktop / 28px mobile, weight 600
- **Body:** 18px desktop / 16px mobile, weight 400

### Spacing
- **Section padding:** 96px vertical (desktop), 64px (mobile)
- **Container max-width:** 1200px
- **Component gap:** 24px
- **Border radius:** sm=8px, md=12px, lg=16px, xl=24px

## Project Structure
```
src/
├── app/
│   ├── globals.css        # Design tokens and base styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── ui/Button.tsx
│   ├── hero/HeroHomepage.tsx
│   ├── hero/HeroAbout.tsx
│   ├── pricing/PricingTable.tsx
│   ├── portfolio/PortfolioInvitation.tsx
│   ├── social-proof/SocialProofStrip.tsx
│   ├── about/OriginStory.tsx
│   ├── about/ProcessTimeline.tsx
│   ├── about/CredentialsGrid.tsx
│   ├── contact/ContactHeader.tsx
│   ├── contact/ContactOptions.tsx
│   ├── contact/CalendlyEmbed.tsx
│   ├── contact/ContactForm.tsx
│   ├── contact/FAQAccordion.tsx
│   └── layout/Footer.tsx
└── lib/
    └── supabase.ts        # Supabase client
```

## Component Guidelines

### When creating/editing components:
1. Use 'use client' directive for interactive components
2. Use CSS custom properties from globals.css (e.g., `var(--primary)`)
3. Use Tailwind utility classes for layout and spacing
4. Keep one h1 per page (first section only)
5. Include responsive breakpoints: mobile-first with md: and lg: prefixes

### Button component usage:
```tsx
<Button variant="solid" size="medium" href="/contact">
  Primary CTA
</Button>
<Button variant="outline" size="medium" onClick={handleClick}>
  Secondary CTA
</Button>
```

### Forms:
- All forms submit to Supabase 'contacts' table
- Include validation with aria-invalid states
- Show loading spinner during submission
- Display success message after submission

## Pages Overview

### Home (/)
1. HeroHomepage - Main hero with h1, laptop mockup
2. PricingTable - 3 tiers (Quick Launch, Local Visibility, Growth System)
3. PortfolioInvitation - Founding client invitation
4. SocialProofStrip - 4 trust indicators
5. Footer

### About (/about)
1. HeroAbout - Introduction with h1, photo placeholder
2. OriginStory - Japanese tutor anecdote
3. ProcessTimeline - 4-step process
4. CredentialsGrid - Education + skills
5. Footer

### Contact (/contact)
1. ContactHeader - Breadcrumb + h1
2. ContactOptions - 3 ways to connect
3. CalendlyEmbed - Booking widget
4. ContactForm - 6-field Supabase form
5. FAQAccordion - 7 questions
6. Footer

## Environment Variables Required
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Reference Files
- Design reference: `/preview/preview.html`
- Style tokens: `/src/app/globals.css`
