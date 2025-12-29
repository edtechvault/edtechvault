# AGENTS.md - edtechvault.com

## Project Overview
- **Client:** Leo Mahé
- **Domain:** edtechvault.com
- **Tech Stack:** Next.js 14 + TypeScript + Tailwind + Builder.io + Supabase + Calendly
- **Pages:** 3 (Homepage, About, Contact)
- **Components:** 15 custom components

---

## Do ✅

### Design System
- Use design tokens from `:root` CSS variables exclusively
- Reference `/src/app/globals.css` for all color, spacing, and typography values
- Mobile-first responsive design (base → md: → lg:)

### Code Quality
- Semantic HTML5 elements (`<section>`, `<nav>`, `<article>`, `<footer>`)
- ARIA labels on all interactive elements
- Alt text on all images
- Small, focused components (<200 lines)
- TypeScript interfaces for all props

### Performance
- Lazy loading for below-fold images
- Next.js Image component for optimization
- Minimal bundle size

### Layout Reference
- Reference `/preview/preview.html` for approved layout
- Match section spacing, grid columns, and responsive breakpoints

---

## Don't ❌

### Design System
- Hard-code colors (use `var(--primary)`, not `#C4785A`)
- Hard-code spacing values (use design token classes)
- Use inline styles

### Code Quality
- Skip alt text on images
- Create components over 200 lines
- Ignore TypeScript errors

### Critical
- **NEVER add @import statements anywhere EXCEPT LINE 1 of globals.css**
- Deploy without passing validation
- Modify design tokens without approval

---

## ⚠️ CRITICAL CSS RULE

**NEVER add @import anywhere except LINE 1 of src/app/globals.css**

The `@import url('https://fonts.googleapis.com/...')` statement MUST be the first line in globals.css, before `@tailwind` directives.

---

## Design Tokens Reference

### Colors
```css
--primary: #C4785A          /* Warm Terracotta */
--primary-light: #D89A7F
--primary-dark: #A45C42
--secondary: #FDF6F0        /* Soft Cream */
--accent: #2A6B6B           /* Deep Teal */
--accent-light: #3A8585
--accent-dark: #1A5151
--text-primary: #2D2D2D     /* Charcoal */
--text-secondary: #6B6B6B   /* Warm Gray */
--background: #FAFAFA       /* Off-White */
--background-white: #FFFFFF
--success: #7DB59A          /* Sage Green */
```

### Typography
```css
--font-heading: 'Outfit', sans-serif
--font-body: 'Inter', sans-serif
--font-size-h1: 56px (mobile: 36px)
--font-size-h2: 40px (mobile: 28px)
--font-size-h3: 28px (mobile: 22px)
--font-size-body: 18px (mobile: 16px)
```

### Spacing
```css
--container-max: 1200px
--section-padding-y: 96px (mobile: 64px)
--spacing-base: 8px
```

### Borders & Shadows
```css
--radius-sm: 8px    /* inputs */
--radius-md: 12px   /* buttons */
--radius-lg: 16px   /* cards */
--shadow-soft: 0 4px 20px rgba(196, 120, 90, 0.08)
--shadow-medium: 0 8px 30px rgba(196, 120, 90, 0.12)
--shadow-strong: 0 12px 40px rgba(196, 120, 90, 0.16)
```

---

## Component Library (15 Components)

### Priority 5 (Conversion-Critical)
1. `HeroHomepage` - Homepage hero with laptop mockup
2. `PricingTable` - Three-tier pricing cards
3. `Button` - Primary interactive element
4. `ContactForm` - Multi-field form with Supabase
5. `ContactOptions` - Three contact method cards

### Priority 4 (Supporting)
6. `HeroAbout` - About page hero with photo
7. `PortfolioInvitation` - Empty frame placeholders
8. `SocialProofStrip` - Credibility indicators
9. `FAQAccordion` - Expandable Q&A
10. `Footer` - Site-wide navigation
11. `ContactHeader` - Simple page header
12. `CalendlyEmbed` - Booking widget

### Priority 3 (Enhancement)
13. `OriginStory` - Narrative section
14. `ProcessTimeline` - 4-step timeline
15. `CredentialsGrid` - Education + skills

---

## Page Structure

### Homepage (`/`)
```
<HeroHomepage />
<PricingTable />
<PortfolioInvitation />
<SocialProofStrip />
<Footer />
```

### About (`/about`)
```
<HeroAbout />
<OriginStory />
<ProcessTimeline />
<CredentialsGrid />
<Footer />
```

### Contact (`/contact`)
```
<ContactHeader />
<ContactOptions />
<CalendlyEmbed />
<ContactForm />
<FAQAccordion />
<Footer />
```

---

## Preview Reference

The approved layout is in `/preview/preview.html`. Match this layout when building pages:

- Section order and spacing
- Grid column layouts
- Responsive breakpoints
- Typography sizes
- Color usage

---

## Project Structure

```
edtechvault/
├── preview/
│   └── preview.html           ← Approved layout reference
├── src/
│   ├── app/
│   │   ├── globals.css        ← Design tokens (LINE 1 = @import)
│   │   ├── layout.tsx
│   │   ├── page.tsx           ← Homepage
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   └── components/
│       ├── hero/
│       │   ├── HeroHomepage.tsx
│       │   └── HeroAbout.tsx
│       ├── pricing/
│       │   └── PricingTable.tsx
│       ├── portfolio/
│       │   └── PortfolioInvitation.tsx
│       ├── social-proof/
│       │   └── SocialProofStrip.tsx
│       ├── about/
│       │   ├── OriginStory.tsx
│       │   ├── ProcessTimeline.tsx
│       │   └── CredentialsGrid.tsx
│       ├── contact/
│       │   ├── ContactHeader.tsx
│       │   ├── ContactOptions.tsx
│       │   ├── ContactForm.tsx
│       │   ├── CalendlyEmbed.tsx
│       │   └── FAQAccordion.tsx
│       ├── layout/
│       │   └── Footer.tsx
│       └── ui/
│           └── Button.tsx
├── public/
│   └── images/
├── .env.local.example
├── AGENTS.md                  ← This file
└── package.json
```

---

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://epqxwkhgbwkialyaxwil.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_rq6D8n7Q4IRpCCs6_Ixy6Q_U63-ReNf
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_from_dashboard

# Calendly
CALENDLY_EMBED_URL=https://calendly.com/leo-mahe-professional/30min

# Contact Info
NEXT_PUBLIC_EMAIL=leo.mahe.professional@gmail.com
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/léo-mahé-bb95772b7/
```

---

## Validation Checklist

### Pre-Deploy
- [ ] `npm run build` passes
- [ ] All pages render without errors
- [ ] All links work correctly
- [ ] Forms submit to Supabase
- [ ] Calendly embed loads
- [ ] Mobile layout verified (375px)
- [ ] Tablet layout verified (768px)
- [ ] Desktop layout verified (1024px+)

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] H1 present on each page

### Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] LCP < 2.5s
- [ ] FCP < 1.5s
