# EdTechVault Design System Audit

## Design Tokens Reference (from globals.css)

### Spacing
- Section padding: `py-16 md:py-24` (64px mobile / 96px desktop)
- Container max: `max-w-[1200px]`
- Component gap: `gap-6` (24px)
- Container padding: `px-6 md:px-8`

### Typography
- H1: `text-4xl md:text-5xl lg:text-[56px]` (36px → 48px → 56px)
- H2: `text-3xl md:text-4xl` (28px → 40px)
- H3: `text-xl md:text-2xl lg:text-[28px]` (20px → 24px → 28px)
- Body: `text-base md:text-lg` (16px → 18px)
- Small: `text-sm` (14px)
- Font heading: `font-heading` (Outfit)
- Font body: `font-sans` (Inter)

### Colors (CSS variables)
- Primary: `text-[var(--primary)]` / `bg-[var(--primary)]`
- Accent: `text-[var(--accent)]` / `bg-[var(--accent)]`
- Text: `text-[var(--text-primary)]` / `text-[var(--text-secondary)]`
- Background: `bg-[var(--background)]` / `bg-[var(--background-white)]`

### Borders & Shadows
- Border radius: `rounded-xl` (12px) or `rounded-2xl` (16px)
- Shadows: `shadow-[var(--shadow-soft)]` / `shadow-[var(--shadow-medium)]`

### Responsive Breakpoints
- Mobile: default (no prefix)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

### Buttons
- Sizes: `min-h-[44px]` (mobile/tablet) / `min-h-[52px]` (desktop large)
- Padding: `px-6 py-3` (medium) / `px-8 py-4` (large)
- Touch targets: min 44x44px

### Grid Layouts
- Default pattern: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gap: `gap-6 md:gap-8`

---

## Audit Rules

### RULE 1: Section Consistency
Every section component MUST have:
- Container: `max-w-[1200px] mx-auto px-6`
- Padding: `py-16 md:py-24`

### RULE 2: Typography Hierarchy
- Only ONE `<h1>` per page (in hero components only)
- Section headings: `<h2>` with correct classes
- Subsections: `<h3>` with correct classes
- Body text: correct size classes

### RULE 3: Color Usage
- NO hardcoded hex colors
- ALL colors via CSS variables: `var(--color-name)`
- Consistent hover states

### RULE 4: Responsive
- Mobile-first approach
- Grids collapse properly
- Text scales appropriately
- No horizontal scroll at 375px

### RULE 5: Spacing
- Consistent gaps between elements
- Proper padding inside cards/containers
- Visual breathing room

### RULE 6: Accessibility
- All buttons: min 44x44px touch target
- All images: proper alt text
- Proper heading hierarchy
- Focus states visible