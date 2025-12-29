# EdTechVault - Builder.io Fusion AI Prompts

Ready-to-use prompts for generating each component in Builder.io Fusion.

---

## Design System Context (Paste First)

Before generating components, give Fusion this context:

```
I'm building EdTechVault, a landing page for a web design service targeting tutors, coaches, and teaching businesses.

Design tokens:
- Primary: #C4785A (warm terracotta)
- Primary Light: #D89A7F
- Secondary: #FDF6F0 (warm cream background)
- Accent: #2A6B6B (teal for CTAs)
- Text Primary: #2D2D2D
- Text Secondary: #6B6B6B

Typography:
- Headings: font-family 'Outfit', sans-serif
- Body: font-family 'Inter', sans-serif
- H1: 56px desktop / 36px mobile
- H2: 40px desktop / 28px mobile
- Body: 18px desktop / 16px mobile

Spacing: Section padding 96px desktop / 64px mobile
Border radius: 8px (sm), 12px (md), 16px (lg), 24px (xl)
```

---

## HOME PAGE COMPONENTS

### 1. Hero Homepage

```
Build a hero section for EdTechVault with:

Layout:
- Two-column grid: content left (55%), visual right (45%)
- Stack vertically on mobile
- White background
- Section padding: py-24 desktop, py-16 mobile

Content (left column):
- Eyebrow text: "FOR TUTORS, COACHES & TEACHING BUSINESSES" in primary color (#C4785A), uppercase, letter-spacing wide, text-sm
- H1 headline: "Websites That Attract Students—Built in Days, Not Months" in #2D2D2D
- Subheadline paragraph: "You teach. I build. No tech headaches. No monthly fees. Just a professional online presence that works as hard as you do." in #6B6B6B
- Two CTA buttons side by side:
  - Primary: "See Packages" - solid teal (#2A6B6B) background, white text, links to /contact
  - Secondary: "View Pricing" - outline style with teal border, scrolls to #pricing section

Visual (right column):
- Laptop mockup placeholder image (600x400)
- Decorative shapes: small circles and rounded rectangles in primary color (#C4785A) with 20% opacity, positioned around the image
- Subtle shadow on laptop image

Technical specs:
- Mobile-first responsive with md: breakpoint
- Smooth scroll behavior for pricing link
- Focus states with ring-2 ring-accent ring-offset-2

Export as: HeroHomepage.tsx
```

---

### 2. Pricing Table

```
Build a 3-tier pricing section for EdTechVault with:

Layout:
- Section with cream background (#FDF6F0)
- Centered heading: "Three Packages. Zero Surprises."
- Subheading: "Pick what fits. Pay once. Own it forever."
- 3-column grid of pricing cards, stack on mobile

Card 1 - Quick Launch ($199):
- White card with rounded-xl corners and subtle shadow
- Package name at top
- Price: "$199" large, "one-time" small below
- Tagline: "For new tutors testing the waters"
- Features list with teal checkmarks:
  - 1-page website
  - Mobile responsive
  - Contact form
  - 3-day delivery
  - 1 revision round
- CTA button: "Get Started" outline style

Card 2 - Local Visibility ($399) - FEATURED:
- Slightly larger scale (scale-105) or elevated
- "Most Popular" badge at top in primary color (#C4785A)
- Same structure as Card 1
- Features:
  - 3-page website
  - Local SEO setup
  - Google Business integration
  - Booking calendar
  - 5-day delivery
  - 2 revision rounds
- CTA: "Choose Plan" solid teal background

Card 3 - Growth System ($599):
- Same structure as Card 1
- Features:
  - 5-page website
  - Blog setup
  - Email capture
  - Analytics dashboard
  - Social media links
  - 7-day delivery
  - 3 revision rounds
- CTA: "Get Started" outline style

Technical specs:
- Cards have hover effect (slight lift/shadow increase)
- Responsive: 3 columns on lg, 1 column on mobile
- Featured card centered on mobile
- Add id="pricing" to section for scroll targeting

Export as: PricingTable.tsx
```

---

### 3. Portfolio Invitation

```
Build a portfolio invitation section for EdTechVault with:

Layout:
- White background section
- Centered heading: "This Section Is Waiting for You"
- Subtext paragraph explaining this is for founding clients
- Grid of 3 placeholder cards

Heading content:
- H2: "This Section Is Waiting for You"
- Paragraph: "I'm building my portfolio with real results from real educators. Want to be featured here—with a link to your new site and your success story?"

Placeholder cards (3):
- Dashed border in primary color (#C4785A) at 30% opacity
- Rounded-xl corners
- Height ~200px
- Decorative corner elements (small L-shapes or plus signs)
- Center text: "Your Project Here" in muted color
- Slight offset/rotation on middle card for visual interest

Below cards:
- CTA button: "Become a Founding Client" solid teal
- Small text: "Limited spots • Priority pricing • Featured placement"

Technical specs:
- Cards use aspect-ratio or fixed height
- Responsive: 3 columns on lg, 1 on mobile
- Hover effect on cards (border becomes solid)

Export as: PortfolioInvitation.tsx
```

---

### 4. Social Proof Strip

```
Build a social proof strip for EdTechVault with:

Layout:
- Full-width strip with cream background (#FDF6F0)
- Horizontal row of 4 trust indicators
- Subtle top/bottom border or divider

4 items (icon + text each):
1. Icon: graduation cap or university | Text: "Tongji University, Shanghai"
2. Icon: tools/code | Text: "Figma • Builder.io • AI-Powered"
3. Icon: globe | Text: "Clients worldwide"
4. Icon: clock/lightning | Text: "3–7 day delivery"

Styling:
- Icons in primary color (#C4785A)
- Text in #6B6B6B
- Items evenly spaced with flex justify-between or grid
- On mobile: 2x2 grid or horizontal scroll

Technical specs:
- Use Lucide React icons
- Responsive layout
- Compact padding (py-6 or py-8)

Export as: SocialProofStrip.tsx
```

---

### 5. Footer

```
Build a footer for EdTechVault with:

Layout:
- Dark background: #2D2D2D
- Multi-column layout on desktop, stacked on mobile

Columns:
1. Brand column:
   - Logo/brand name "EdTechVault" in white
   - Tagline: "Websites for educators who'd rather teach than tinker."
   - Social icons: LinkedIn, Instagram (SVG icons, white, hover to primary color)

2. Pages column:
   - Header: "Pages"
   - Links: Home, About, Contact (white text, hover underline)

3. Contact column:
   - Header: "Contact"
   - Email link: leo.mahe.professional@gmail.com
   - Book a call link

4. Language selector (optional):
   - Simple text: "EN | FR"

Bottom bar:
- Copyright: "© 2025 EdTechVault. All rights reserved."
- Small text centered or left-aligned

Technical specs:
- Links use Next.js Link component
- Responsive: 4 columns on lg, 2 on md, 1 on mobile
- Padding: py-16 desktop, py-12 mobile

Export as: Footer.tsx
```

---

## ABOUT PAGE COMPONENTS

### 6. Hero About

```
Build an about page hero for EdTechVault with:

Layout:
- Breadcrumb navigation at top: "Home / About"
- Two-column: content left, photo right
- Cream background (#FDF6F0)

Content (left):
- Breadcrumb: Home link + " / About" text
- H1: "I'm Leo Mahé"
- Two intro paragraphs:
  1. "A designer, developer, and creative strategist based in Shanghai. I help tutors, coaches, and teaching businesses get online—fast."
  2. "After years of building websites for startups and agencies, I realized something: the people who need great websites the most—independent educators—often can't access them. So I built EdTechVault."

Photo (right):
- Professional headshot placeholder (400x500)
- Decorative border: offset rectangle in primary color behind image
- Rounded corners

Technical specs:
- Breadcrumb links to home page
- Responsive: stack on mobile, photo below content
- Photo aspect-ratio maintained

Export as: HeroAbout.tsx
```

---

### 7. Origin Story

```
Build an origin story section for EdTechVault with:

Layout:
- White background
- Centered or left-aligned content
- Max-width container for readability

Content:
- H2: "Why Teaching Businesses?"
- Multiple paragraphs of story text:

"A few years ago, I helped a Japanese tutor friend create a simple website. She was incredible at what she did—her students loved her—but she was invisible online. Within a month of launching her site, she had doubled her student base.

That's when it clicked. The education space is full of talented people held back by one thing: they don't have a professional online presence. They're stuck on marketplace platforms taking 30% cuts, or relying on word-of-mouth that doesn't scale.

I started EdTechVault to change that. Every package is designed for educators: fast delivery (because you're busy teaching), one-time pricing (because subscriptions add up), and designs that actually convert visitors into students."

Styling:
- Paragraphs with comfortable line-height (1.7 or leading-relaxed)
- Text color #2D2D2D for main, #6B6B6B for supporting
- Decorative quote mark or accent element optional

Export as: OriginStory.tsx
```

---

### 8. Process Timeline

```
Build a 4-step process timeline for EdTechVault with:

Layout:
- Section with alternating background (cream or white)
- H2 centered: "How It Works"
- Vertical timeline with 4 steps

4 Steps:
1. Discovery Call - "We chat for 15 minutes about your teaching business, your students, and your goals."
2. Design Draft - "Within 48 hours, you'll see a first draft of your site. No wireframes—real design."
3. Build & Refine - "I build while you review. We iterate until it's perfect."
4. Launch & Support - "Your site goes live. I stick around for 30 days to fix any issues."

Visual design:
- Numbered circles (1-4) in primary color (#C4785A)
- Vertical line connecting circles
- Alternating left/right content on desktop
- Content cards with step title (bold) and description
- All left-aligned on mobile

Technical specs:
- Responsive timeline layout
- Numbers are prominent (text-2xl or larger)
- Cards have subtle shadow or border

Export as: ProcessTimeline.tsx
```

---

### 9. Credentials Grid

```
Build a credentials/skills section for EdTechVault with:

Layout:
- White background section
- H2: "Background & Skills"
- Two areas: Education cards + Skills grid

Education cards (2-3):
- Card 1: "Master's Degree" - "Digital Design & Innovation, Tongji University"
- Card 2: "DNSEP" - "National Diploma in Visual Expression"
- Card 3: "DNA" - "National Diploma in Applied Arts"

Skills grid (4 categories with tags):
1. Design: UI/UX, Brand Identity, Motion Graphics
2. AI & Automation: Prompt Engineering, AI-assisted Development, No-code Tools
3. Creative: Graphic Design, Typography, Photography
4. Languages: French (native), English (fluent), Mandarin (intermediate)

Styling:
- Education cards: white background, subtle shadow, icon or degree abbreviation
- Skills: category headers with tag pills below
- Tags use primary color background with white text, or outlined style

Technical specs:
- Responsive grid: 2 columns on md+, 1 on mobile
- Tags wrap naturally
- Clean spacing between categories

Export as: CredentialsGrid.tsx
```

---

## CONTACT PAGE COMPONENTS

### 10. Contact Header

```
Build a contact page header for EdTechVault with:

Layout:
- Cream background (#FDF6F0)
- Breadcrumb at top
- Centered content

Content:
- Breadcrumb: "Home / Contact"
- H1: "Let's Talk"
- Subtext: "Whether you're ready to start or just exploring, I'd love to hear about your teaching business."

Styling:
- Centered text alignment
- Comfortable padding (py-16 or py-20)
- H1 in primary text color
- Subtext in secondary color (#6B6B6B)

Export as: ContactHeader.tsx
```

---

### 11. Contact Options

```
Build a contact options section for EdTechVault with:

Layout:
- White background
- 3 option cards in a row

3 Cards:
1. Book a Call:
   - Icon: calendar
   - Title: "Book a Discovery Call"
   - Description: "15 minutes to discuss your project"
   - Button: "Schedule Now" - scrolls to Calendly embed

2. Send a Message:
   - Icon: message/envelope
   - Title: "Send a Message"
   - Description: "I'll respond within 24 hours"
   - Button: "Go to Form" - scrolls to contact form

3. Email Directly:
   - Icon: mail
   - Title: "Email Directly"
   - Description: "leo.mahe.professional@gmail.com"
   - Button: "Copy Email" - copies to clipboard with feedback

Card styling:
- White background, rounded-xl, subtle shadow
- Icon in primary color at top
- Decorative plus symbols in corners (small, muted)
- Hover effect (lift)

Technical specs:
- Smooth scroll to sections
- Copy to clipboard with "Copied!" feedback
- Responsive: 3 columns lg, 1 column mobile

Export as: ContactOptions.tsx
```

---

### 12. Calendly Embed

```
Build a Calendly embed section for EdTechVault with:

Layout:
- Section with id="calendly" for scroll targeting
- Cream background (#FDF6F0)
- Optional heading: "Schedule a Call"
- Calendly inline widget

Calendly config:
- URL: https://calendly.com/leomahe/15min
- Inline embed style (not popup)
- Height: 700px or appropriate for 15-min meeting view
- Hide header/footer if possible

Technical specs:
- Load Calendly widget script dynamically
- Use useEffect to inject script on mount
- Clean up script on unmount
- Show loading state while widget loads

CSP note:
- next.config.js needs headers allowing frame-src calendly.com

Export as: CalendlyEmbed.tsx
```

---

### 13. Contact Form

```
Build a contact form for EdTechVault with Supabase integration:

Layout:
- Section with id="contact-form" for scroll targeting
- White background
- Form card with shadow

Form fields:
1. Name (required) - text input
2. Email (required) - email input with validation
3. Business Name (optional) - text input
4. Current Website (optional) - url input
5. What do you need help with? (required) - select dropdown:
   - "New website from scratch"
   - "Redesign existing site"
   - "Add features to current site"
   - "Not sure yet"
6. Message (optional) - textarea, 4 rows

Submit button:
- "Send Message" solid teal
- Loading spinner while submitting
- Disable during submission

States:
- Validation errors shown below each field in red
- Success state: hide form, show "Thanks! I'll be in touch within 24 hours."
- Error state: show error message, keep form visible

Supabase integration:
- Submit to 'contacts' table
- Fields: name, email, business_name, current_website, help_with, message, created_at

Technical specs:
- Client-side validation before submit
- aria-required and aria-invalid attributes
- Focus ring on inputs
- Responsive: full-width inputs

Export as: ContactForm.tsx
```

---

### 14. FAQ Accordion

```
Build an FAQ accordion for EdTechVault with:

Layout:
- Cream background (#FDF6F0)
- H2: "Frequently Asked Questions"
- Vertical stack of expandable items

7 FAQ items:
1. Q: "How long does it take to build my website?"
   A: "Depending on the package, 3-7 business days from our first call to launch."

2. Q: "What do you need from me to get started?"
   A: "Just your content (text, images, logo if you have one) and 15 minutes for a discovery call."

3. Q: "Do I own my website after it's built?"
   A: "100%. You get full ownership of all code, content, and assets."

4. Q: "What if I need changes after launch?"
   A: "Each package includes revision rounds. After that, I offer support packages or you can edit yourself."

5. Q: "Do you offer payment plans?"
   A: "Yes! Split any package into 2 payments—50% upfront, 50% on launch."

6. Q: "Can you work with clients outside Shanghai?"
   A: "Absolutely. Most of my clients are remote. We'll communicate via email and video calls."

7. Q: "What's the catch?"
   A: "No catch. One-time payment, no subscriptions, no hidden fees. I make money when you're happy enough to refer others."

Accordion behavior:
- Click question to expand/collapse answer
- Only one open at a time (optional, can be all independent)
- Chevron icon rotates on open
- Smooth height transition

Styling:
- Questions in bold, darker text
- Answers in regular weight, slightly smaller
- Divider between items
- Rounded container

Export as: FAQAccordion.tsx
```

---

## PAGE ASSEMBLY PROMPTS

### Home Page Assembly

```
Assemble the EdTechVault home page with these sections in order:

1. HeroHomepage - white background
2. PricingTable - cream background, id="pricing"
3. PortfolioInvitation - white background
4. SocialProofStrip - cream background
5. Footer - dark background

Page metadata:
- Title: "EdTechVault | Professional Websites for Tutors & Coaches"
- Description: "Get a professional website for your teaching business in 3-7 days. One-time payment, no subscriptions, 100% ownership."

Ensure:
- Smooth scroll from hero to pricing works
- All sections have proper spacing
- Only one H1 (in hero)
```

---

### About Page Assembly

```
Assemble the EdTechVault about page with these sections:

1. HeroAbout - cream background, breadcrumb to home
2. OriginStory - white background
3. ProcessTimeline - cream background
4. CredentialsGrid - white background
5. Footer - dark background

Page metadata:
- Title: "About | EdTechVault"
- Description: "Meet Leo Mahé, the designer behind EdTechVault. Learn why I build websites for educators."

Ensure:
- Breadcrumb navigation works
- Alternating section backgrounds
- Only one H1 (in hero)
```

---

### Contact Page Assembly

```
Assemble the EdTechVault contact page with these sections:

1. ContactHeader - cream background, breadcrumb
2. ContactOptions - white background
3. CalendlyEmbed - cream background, id="calendly"
4. ContactForm - white background, id="contact-form"
5. FAQAccordion - cream background
6. Footer - dark background

Page metadata:
- Title: "Contact | EdTechVault"
- Description: "Book a discovery call or send a message. Let's talk about your teaching business website."

Ensure:
- Scroll targets work (calendly, contact-form)
- Copy email functionality works
- Form submits to Supabase
- Only one H1 (in header)
```

---

## AGENTS.md FOR PROJECT

```markdown
# AGENTS.md - EdTechVault

## Do
- Use Tailwind CSS utility classes
- Follow design tokens (primary #C4785A, secondary #FDF6F0, accent #2A6B6B)
- Mobile-first responsive design
- Use semantic HTML (section, nav, main, footer)
- One H1 per page only
- Include aria labels on interactive elements
- Use Next.js Link for internal navigation
- Keep components under 200 lines

## Don't
- Hard-code colors (use CSS variables or Tailwind config)
- Use inline styles
- Create components with required props (use defaults)
- Skip accessibility attributes
- Use generic stock photos
- Add unnecessary animations

## Project Structure
- Pages: /src/app/[page]/page.tsx
- Components: /src/components/[category]/[Name].tsx
- Utilities: /src/lib/
- Styles: /src/app/globals.css

## Quality Gates
- Lighthouse Performance ≥85
- Lighthouse Accessibility ≥90
- No TypeScript errors
- Responsive: 390px, 768px, 1024px, 1920px
```

---

## Quick Reference

| Component | Page | Priority | Complexity |
|-----------|------|----------|------------|
| HeroHomepage | Home | 1 | Medium |
| PricingTable | Home | 1 | Medium |
| PortfolioInvitation | Home | 2 | Low |
| SocialProofStrip | Home | 3 | Low |
| HeroAbout | About | 1 | Medium |
| OriginStory | About | 2 | Low |
| ProcessTimeline | About | 2 | Medium |
| CredentialsGrid | About | 2 | Medium |
| ContactHeader | Contact | 1 | Low |
| ContactOptions | Contact | 1 | Medium |
| CalendlyEmbed | Contact | 1 | Medium |
| ContactForm | Contact | 1 | High |
| FAQAccordion | Contact | 2 | Medium |
| Footer | All | 1 | Medium |
| Button | Shared | 1 | Low |
