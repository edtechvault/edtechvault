# EdTechVault_LandingPage_Tier2_Handoff

Generated: 2024-12-28
Source: Component Specification Document v2.1

```json
{
  "metadata": {
    "project_name": "edtechvault.com",
    "client": "Leo Mahé",
    "date_generated": "2024-12-28",
    "framework": "Next.js 14 + TypeScript + Tailwind",
    "tier": "Tier 2",
    "estimated_prompts": 15,
    "total_pages": 3,
    "total_sections": 12,
    "total_components": 15
  },

  "repository_state": {
    "github_url": "https://github.com/edtechvault/edtechvault",
    "main_branch": "main",
    "preview_file": "/preview/preview.html",
    "globals_css": "/src/app/globals.css",
    "agents_md": "/AGENTS.md",
    "fusion_connected": false,
    "verified_build": false
  },

  "environment_variables": {
    "supabase": {
      "NEXT_PUBLIC_SUPABASE_URL": "https://epqxwkhgbwkialyaxwil.supabase.co",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY": "sb_publishable_rq6D8n7Q4IRpCCs6_Ixy6Q_U63-ReNf",
      "SUPABASE_SERVICE_ROLE_KEY": "PLACEHOLDER_GET_FROM_DASHBOARD"
    },
    "calendly": {
      "CALENDLY_EMBED_URL": "https://calendly.com/leo-mahe-professional/30min"
    },
    "contact": {
      "EMAIL": "leo.mahe.professional@gmail.com",
      "LINKEDIN": "https://www.linkedin.com/in/léo-mahé-bb95772b7/"
    }
  },

  "design_tokens": {
    "colors": {
      "primary": "#C4785A",
      "primary_light": "#D89A7F",
      "primary_dark": "#A45C42",
      "primary_foreground": "#FFFFFF",
      "secondary": "#FDF6F0",
      "secondary_dark": "#F5E8DC",
      "secondary_foreground": "#2D2D2D",
      "accent": "#2A6B6B",
      "accent_light": "#3A8585",
      "accent_dark": "#1A5151",
      "accent_foreground": "#FFFFFF",
      "text_primary": "#2D2D2D",
      "text_secondary": "#6B6B6B",
      "background": "#FAFAFA",
      "background_white": "#FFFFFF",
      "success": "#7DB59A",
      "warning": "#F59E0B",
      "error": "#EF4444",
      "border": "#E5E5E5",
      "muted": "#6B6B6B",
      "muted_foreground": "#9CA3AF"
    },
    "typography": {
      "font_heading": "Outfit",
      "font_body": "Inter",
      "font_import_url": "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      "scale": {
        "h1": { "desktop": "56px", "mobile": "36px", "weight": "700", "line_height": "1.1" },
        "h2": { "desktop": "40px", "mobile": "28px", "weight": "600", "line_height": "1.2" },
        "h3": { "desktop": "28px", "mobile": "22px", "weight": "600", "line_height": "1.3" },
        "body": { "desktop": "18px", "mobile": "16px", "weight": "400", "line_height": "1.7" },
        "small": { "desktop": "14px", "mobile": "13px", "weight": "400", "line_height": "1.5" },
        "button": { "desktop": "16px", "mobile": "15px", "weight": "600", "line_height": "1" }
      }
    },
    "spacing": {
      "base_unit": "8px",
      "section_padding_desktop": "96px",
      "section_padding_mobile": "64px",
      "component_gap": "24px",
      "container_max_width": "1200px"
    },
    "borders": {
      "radius_sm": "8px",
      "radius_md": "12px",
      "radius_lg": "16px",
      "radius_xl": "24px",
      "radius_full": "9999px"
    },
    "shadows": {
      "soft": "0 4px 20px rgba(196, 120, 90, 0.08)",
      "medium": "0 8px 30px rgba(196, 120, 90, 0.12)",
      "strong": "0 12px 40px rgba(196, 120, 90, 0.16)"
    },
    "breakpoints": {
      "mobile": "320px",
      "tablet": "768px",
      "desktop": "1024px",
      "wide": "1440px"
    }
  },

  "pages": [
    {
      "name": "Home",
      "path": "/",
      "file": "src/app/page.tsx",
      "sections": [
        { "name": "Hero", "component": "HeroHomepage", "order": 1, "has_h1": true },
        { "name": "Pricing", "component": "PricingTable", "order": 2, "has_h1": false },
        { "name": "Portfolio", "component": "PortfolioInvitation", "order": 3, "has_h1": false },
        { "name": "Social Proof", "component": "SocialProofStrip", "order": 4, "has_h1": false },
        { "name": "Footer", "component": "Footer", "order": 5, "has_h1": false }
      ]
    },
    {
      "name": "About",
      "path": "/about",
      "file": "src/app/about/page.tsx",
      "sections": [
        { "name": "Hero", "component": "HeroAbout", "order": 1, "has_h1": true },
        { "name": "Origin Story", "component": "OriginStory", "order": 2, "has_h1": false },
        { "name": "Process", "component": "ProcessTimeline", "order": 3, "has_h1": false },
        { "name": "Credentials", "component": "CredentialsGrid", "order": 4, "has_h1": false },
        { "name": "Footer", "component": "Footer", "order": 5, "has_h1": false }
      ]
    },
    {
      "name": "Contact",
      "path": "/contact",
      "file": "src/app/contact/page.tsx",
      "sections": [
        { "name": "Header", "component": "ContactHeader", "order": 1, "has_h1": true },
        { "name": "Options", "component": "ContactOptions", "order": 2, "has_h1": false },
        { "name": "Calendly", "component": "CalendlyEmbed", "order": 3, "has_h1": false },
        { "name": "Form", "component": "ContactForm", "order": 4, "has_h1": false },
        { "name": "FAQ", "component": "FAQAccordion", "order": 5, "has_h1": false },
        { "name": "Footer", "component": "Footer", "order": 6, "has_h1": false }
      ]
    }
  ],

  "components": [
    {
      "name": "Button",
      "file_path": "src/components/ui/Button.tsx",
      "category": "ui",
      "props_interface": "ButtonProps",
      "dependencies": [],
      "priority": 5,
      "code": "'use client';\n\nimport React from 'react';\n\ninterface ButtonProps {\n  children: React.ReactNode;\n  variant?: 'solid' | 'outline' | 'ghost';\n  size?: 'small' | 'medium' | 'large';\n  href?: string;\n  onClick?: () => void;\n  disabled?: boolean;\n  loading?: boolean;\n  className?: string;\n  type?: 'button' | 'submit' | 'reset';\n}\n\nexport const Button: React.FC<ButtonProps> = ({\n  children,\n  variant = 'solid',\n  size = 'medium',\n  href,\n  onClick,\n  disabled = false,\n  loading = false,\n  className = '',\n  type = 'button',\n}) => {\n  const baseStyles = `\n    inline-flex items-center justify-center gap-2\n    font-semibold rounded-xl\n    transition-all duration-200\n    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2\n    disabled:opacity-50 disabled:cursor-not-allowed\n  `;\n\n  const variants = {\n    solid: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] hover:shadow-md active:scale-[0.98]',\n    outline: 'border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-white active:scale-[0.98]',\n    ghost: 'text-[var(--accent)] bg-transparent hover:bg-[var(--accent)]/10',\n  };\n\n  const sizes = {\n    small: 'px-4 py-2 text-sm min-h-[36px]',\n    medium: 'px-6 py-3 text-base min-h-[44px]',\n    large: 'px-8 py-4 text-base md:text-lg min-h-[48px] md:min-h-[52px]',\n  };\n\n  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();\n\n  const content = (\n    <>\n      {loading && (\n        <svg className=\"animate-spin h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\">\n          <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\"></circle>\n          <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path>\n        </svg>\n      )}\n      {children}\n    </>\n  );\n\n  if (href && !disabled) {\n    return (\n      <a href={href} className={classes}>\n        {content}\n      </a>\n    );\n  }\n\n  return (\n    <button\n      type={type}\n      onClick={onClick}\n      disabled={disabled || loading}\n      className={classes}\n      aria-busy={loading}\n    >\n      {content}\n    </button>\n  );\n};\n\nexport default Button;"
    },
    {
      "name": "HeroHomepage",
      "file_path": "src/components/hero/HeroHomepage.tsx",
      "category": "hero",
      "props_interface": "HeroHomepageProps",
      "dependencies": ["Button"],
      "priority": 5,
      "code": "'use client';\n\nimport React from 'react';\nimport { Button } from '../ui/Button';\n\ninterface HeroHomepageProps {\n  eyebrow: string;\n  headline: string;\n  subheadline: string;\n  primaryCTA: { text: string; href: string };\n  secondaryCTA: { text: string; href: string };\n  laptopMockup: { src: string; alt: string };\n}\n\nexport const HeroHomepage: React.FC<HeroHomepageProps> = ({\n  eyebrow,\n  headline,\n  subheadline,\n  primaryCTA,\n  secondaryCTA,\n  laptopMockup,\n}) => {\n  const handleScrollTo = (target: string) => {\n    const element = document.querySelector(target);\n    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });\n  };\n\n  return (\n    <section className=\"relative bg-[var(--background)] overflow-hidden\">\n      <div className=\"max-w-[1200px] mx-auto px-6 py-16 md:py-24 lg:py-32\">\n        <div className=\"grid md:grid-cols-12 gap-12 items-start\">\n          {/* Content - Left 60% */}\n          <div className=\"md:col-span-7 space-y-6 md:space-y-8\">\n            <span className=\"inline-block text-[var(--accent)] text-sm font-semibold tracking-wider uppercase\">\n              {eyebrow}\n            </span>\n            \n            <h1 className=\"font-heading font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight text-[var(--text-primary)]\">\n              {headline}\n            </h1>\n            \n            <p className=\"text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-[560px]\">\n              {subheadline}\n            </p>\n            \n            <div className=\"flex flex-col sm:flex-row gap-4 pt-2\">\n              <Button variant=\"solid\" size=\"large\" href={primaryCTA.href}>\n                {primaryCTA.text} →\n              </Button>\n              \n              <Button\n                variant=\"outline\"\n                size=\"large\"\n                onClick={() => handleScrollTo(secondaryCTA.href)}\n              >\n                {secondaryCTA.text} ↓\n              </Button>\n            </div>\n          </div>\n          \n          {/* Laptop Mockup - Right 40% */}\n          <div className=\"md:col-span-5 relative\">\n            <div \n              className=\"relative transform rotate-[2deg] md:rotate-0 lg:-rotate-[2deg] transition-transform hover:rotate-0 duration-500\"\n              style={{ filter: 'drop-shadow(0 20px 40px rgba(196, 120, 90, 0.15))' }}\n            >\n              <img\n                src={laptopMockup.src}\n                alt={laptopMockup.alt}\n                className=\"w-full h-auto\"\n                loading=\"eager\"\n              />\n            </div>\n            \n            {/* Decorative shapes */}\n            <div className=\"absolute -z-10 top-1/4 -right-12 w-32 h-32 bg-[var(--primary-light)]/20 rounded-full blur-3xl\" />\n            <div className=\"absolute -z-10 bottom-1/4 -left-8 w-24 h-24 bg-[var(--accent-light)]/20 rounded-full blur-2xl\" />\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default HeroHomepage;"
    },
    {
      "name": "PricingTable",
      "file_path": "src/components/pricing/PricingTable.tsx",
      "category": "pricing",
      "props_interface": "PricingTableProps",
      "dependencies": ["Button"],
      "priority": 5,
      "code": "'use client';\n\nimport React from 'react';\nimport { Button } from '../ui/Button';\n\ninterface PricingTier {\n  id: string;\n  name: string;\n  price: number;\n  tagline: string;\n  badge?: string;\n  features: string[];\n  cta: { text: string; href: string };\n  featured?: boolean;\n}\n\ninterface PricingTableProps {\n  heading: string;\n  subtext: string;\n  tiers: PricingTier[];\n  disclaimer: string;\n}\n\nexport const PricingTable: React.FC<PricingTableProps> = ({\n  heading,\n  subtext,\n  tiers,\n  disclaimer,\n}) => {\n  return (\n    <section id=\"pricing\" className=\"bg-[var(--background-white)] py-16 md:py-24 lg:py-32\">\n      <div className=\"max-w-[1200px] mx-auto px-6\">\n        {/* Section Header */}\n        <div className=\"text-center mb-12 md:mb-16 space-y-4\">\n          <h2 className=\"font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)]\">\n            {heading}\n          </h2>\n          <p className=\"text-[var(--text-secondary)] text-lg max-w-[600px] mx-auto\">\n            {subtext}\n          </p>\n        </div>\n        \n        {/* Pricing Cards */}\n        <div className=\"grid md:grid-cols-3 gap-8 mb-8\">\n          {tiers.map((tier) => (\n            <div\n              key={tier.id}\n              className={`\n                relative bg-[var(--background-white)] rounded-2xl p-8\n                border-2 transition-all duration-300\n                ${tier.featured \n                  ? 'border-[var(--primary)] shadow-[var(--shadow-strong)] scale-100 md:scale-[1.05] lg:scale-110' \n                  : 'border-gray-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-1'\n                }\n              `}\n            >\n              {/* Featured Badge */}\n              {tier.badge && (\n                <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\">\n                  <span className=\"inline-block bg-[var(--success)] text-white text-sm font-semibold px-4 py-1 rounded-full\">\n                    {tier.badge}\n                  </span>\n                </div>\n              )}\n              \n              <div className=\"space-y-6\">\n                {/* Price */}\n                <div>\n                  <div className=\"text-4xl font-bold text-[var(--text-primary)]\">${tier.price}</div>\n                  <div className=\"text-[var(--text-secondary)] mt-1\">{tier.tagline}</div>\n                </div>\n                \n                {/* Features */}\n                <ul className=\"space-y-3\">\n                  {tier.features.map((feature, index) => (\n                    <li key={index} className=\"flex items-start gap-3 text-[var(--text-secondary)]\">\n                      <svg className=\"w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                        <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M5 13l4 4L19 7\" />\n                      </svg>\n                      <span>{feature}</span>\n                    </li>\n                  ))}\n                </ul>\n                \n                {/* CTA */}\n                <Button\n                  variant={tier.featured ? 'solid' : 'outline'}\n                  size=\"large\"\n                  href={tier.cta.href}\n                  className=\"w-full\"\n                >\n                  {tier.cta.text} →\n                </Button>\n              </div>\n            </div>\n          ))}\n        </div>\n        \n        {/* Disclaimer */}\n        <p className=\"text-center text-sm text-[var(--text-secondary)]\">\n          {disclaimer}\n        </p>\n      </div>\n    </section>\n  );\n};\n\nexport default PricingTable;"
    },
    {
      "name": "ContactForm",
      "file_path": "src/components/contact/ContactForm.tsx",
      "category": "contact",
      "props_interface": "ContactFormProps",
      "dependencies": ["@supabase/supabase-js", "Button"],
      "priority": 5,
      "code": "'use client';\n\nimport React, { useState } from 'react';\nimport { createClient } from '@supabase/supabase-js';\nimport { Button } from '../ui/Button';\n\nconst supabase = createClient(\n  process.env.NEXT_PUBLIC_SUPABASE_URL!,\n  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!\n);\n\ninterface ContactFormProps {\n  heading: string;\n  submitButtonText: string;\n  successMessage: string;\n}\n\nexport const ContactForm: React.FC<ContactFormProps> = ({\n  heading,\n  submitButtonText,\n  successMessage,\n}) => {\n  const [formData, setFormData] = useState<Record<string, string>>({});\n  const [errors, setErrors] = useState<Record<string, string>>({});\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  const [isSuccess, setIsSuccess] = useState(false);\n\n  const validate = () => {\n    const newErrors: Record<string, string> = {};\n    \n    if (!formData.name) newErrors.name = 'Name is required';\n    if (!formData.email) {\n      newErrors.email = 'Email is required';\n    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {\n      newErrors.email = 'Please enter a valid email';\n    }\n    if (!formData.help_with) newErrors.help_with = 'Please select an option';\n    \n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault();\n    if (!validate()) return;\n    \n    setIsSubmitting(true);\n    \n    try {\n      const { error } = await supabase.from('contacts').insert([{\n        name: formData.name,\n        email: formData.email,\n        business_name: formData.business_name || null,\n        current_website: formData.current_website || null,\n        help_with: formData.help_with,\n        message: formData.message || null,\n        created_at: new Date().toISOString(),\n      }]);\n      \n      if (error) throw error;\n      setIsSuccess(true);\n      setFormData({});\n    } catch (error) {\n      console.error('Form submission error:', error);\n      setErrors({ submit: 'Something went wrong. Please try again or email me directly.' });\n    } finally {\n      setIsSubmitting(false);\n    }\n  };\n\n  if (isSuccess) {\n    return (\n      <section id=\"contact-form\" className=\"bg-[var(--background-white)] py-16 md:py-24\">\n        <div className=\"max-w-[600px] mx-auto px-6 text-center space-y-6\">\n          <div className=\"text-6xl\">✅</div>\n          <h2 className=\"font-heading font-semibold text-2xl text-[var(--text-primary)]\">Got it!</h2>\n          <p className=\"text-[var(--text-secondary)] text-lg\">{successMessage}</p>\n        </div>\n      </section>\n    );\n  }\n\n  return (\n    <section id=\"contact-form\" className=\"bg-[var(--background-white)] py-16 md:py-24\">\n      <div className=\"max-w-[700px] mx-auto px-6\">\n        <h2 className=\"font-heading font-semibold text-3xl md:text-4xl text-[var(--text-primary)] mb-12 text-center\">\n          {heading}\n        </h2>\n        \n        <form onSubmit={handleSubmit} className=\"space-y-6\">\n          <div className=\"grid md:grid-cols-2 gap-6\">\n            <div>\n              <label className=\"block text-[var(--text-primary)] font-medium mb-2\">Name *</label>\n              <input\n                type=\"text\"\n                value={formData.name || ''}\n                onChange={(e) => setFormData({ ...formData, name: e.target.value })}\n                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[var(--accent)]'}`}\n                aria-required=\"true\"\n                aria-invalid={!!errors.name}\n              />\n              {errors.name && <p className=\"text-red-500 text-sm mt-1\">{errors.name}</p>}\n            </div>\n            <div>\n              <label className=\"block text-[var(--text-primary)] font-medium mb-2\">Email *</label>\n              <input\n                type=\"email\"\n                value={formData.email || ''}\n                onChange={(e) => setFormData({ ...formData, email: e.target.value })}\n                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[var(--accent)]'}`}\n                aria-required=\"true\"\n                aria-invalid={!!errors.email}\n              />\n              {errors.email && <p className=\"text-red-500 text-sm mt-1\">{errors.email}</p>}\n            </div>\n          </div>\n          \n          <div>\n            <label className=\"block text-[var(--text-primary)] font-medium mb-2\">Business Name</label>\n            <input\n              type=\"text\"\n              value={formData.business_name || ''}\n              onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}\n              className=\"w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--accent)] focus:outline-none transition-colors\"\n            />\n          </div>\n          \n          <div>\n            <label className=\"block text-[var(--text-primary)] font-medium mb-2\">Current Website (if any)</label>\n            <input\n              type=\"text\"\n              value={formData.current_website || ''}\n              onChange={(e) => setFormData({ ...formData, current_website: e.target.value })}\n              placeholder=\"https://...\"\n              className=\"w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--accent)] focus:outline-none transition-colors\"\n            />\n          </div>\n          \n          <div>\n            <label className=\"block text-[var(--text-primary)] font-medium mb-2\">What can I help with? *</label>\n            <select\n              value={formData.help_with || ''}\n              onChange={(e) => setFormData({ ...formData, help_with: e.target.value })}\n              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${errors.help_with ? 'border-red-500' : 'border-gray-200 focus:border-[var(--accent)]'}`}\n              aria-required=\"true\"\n            >\n              <option value=\"\">Select an option...</option>\n              <option value=\"new-website\">I need a new website</option>\n              <option value=\"redesign\">I need a website redesign</option>\n              <option value=\"not-sure\">I'm not sure yet</option>\n              <option value=\"other\">Something else</option>\n            </select>\n            {errors.help_with && <p className=\"text-red-500 text-sm mt-1\">{errors.help_with}</p>}\n          </div>\n          \n          <div>\n            <label className=\"block text-[var(--text-primary)] font-medium mb-2\">Anything else you'd like me to know?</label>\n            <textarea\n              value={formData.message || ''}\n              onChange={(e) => setFormData({ ...formData, message: e.target.value })}\n              rows={4}\n              className=\"w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[var(--accent)] focus:outline-none transition-colors resize-none\"\n            />\n          </div>\n          \n          {errors.submit && (\n            <div className=\"p-4 bg-red-50 border-2 border-red-200 rounded-lg\">\n              <p className=\"text-red-600 text-sm\">{errors.submit}</p>\n            </div>\n          )}\n          \n          <div className=\"text-center pt-4\">\n            <Button variant=\"solid\" size=\"large\" type=\"submit\" disabled={isSubmitting} loading={isSubmitting}>\n              {submitButtonText}\n            </Button>\n            <p className=\"text-[var(--text-secondary)] text-sm mt-4\">* Required</p>\n          </div>\n        </form>\n      </div>\n    </section>\n  );\n};\n\nexport default ContactForm;"
    },
    {
      "name": "ContactOptions",
      "file_path": "src/components/contact/ContactOptions.tsx",
      "category": "contact",
      "props_interface": "ContactOptionsProps",
      "dependencies": ["Button"],
      "priority": 5,
      "code": "'use client';\n\nimport React, { useState } from 'react';\nimport { Button } from '../ui/Button';\n\ninterface ContactOption {\n  id: string;\n  icon: string;\n  label: string;\n  description: string;\n  cta: {\n    text: string;\n    action: 'scroll' | 'copy' | 'link';\n    target: string;\n  };\n}\n\ninterface ContactOptionsProps {\n  options: ContactOption[];\n}\n\nexport const ContactOptions: React.FC<ContactOptionsProps> = ({ options }) => {\n  const [copiedEmail, setCopiedEmail] = useState(false);\n\n  const handleAction = (option: ContactOption) => {\n    if (option.cta.action === 'scroll') {\n      const element = document.querySelector(option.cta.target);\n      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });\n    } else if (option.cta.action === 'copy') {\n      navigator.clipboard.writeText(option.cta.target);\n      setCopiedEmail(true);\n      setTimeout(() => setCopiedEmail(false), 2000);\n    }\n  };\n\n  return (\n    <section className=\"bg-[var(--background-white)] py-16 md:py-24\">\n      <div className=\"max-w-[1200px] mx-auto px-6\">\n        <div className=\"grid md:grid-cols-3 gap-8\">\n          {options.map((option) => (\n            <div\n              key={option.id}\n              className=\"relative bg-[var(--background-white)] rounded-2xl p-8 border-2 border-gray-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300\"\n            >\n              {/* Decorative Plus Icons */}\n              <div className=\"absolute top-4 left-4 text-[var(--primary-light)]/20 text-sm\">+</div>\n              <div className=\"absolute top-4 right-4 text-[var(--primary-light)]/20 text-sm\">+</div>\n              <div className=\"absolute bottom-4 left-4 text-[var(--primary-light)]/20 text-sm\">+</div>\n              <div className=\"absolute bottom-4 right-4 text-[var(--primary-light)]/20 text-sm\">+</div>\n              \n              <div className=\"relative text-center space-y-4\">\n                <div className=\"text-5xl mb-4\">{option.icon}</div>\n                <h3 className=\"font-heading font-semibold text-xl text-[var(--text-primary)]\">{option.label}</h3>\n                <p className=\"text-[var(--text-secondary)] text-sm leading-relaxed whitespace-pre-line\">{option.description}</p>\n                \n                {option.cta.action === 'link' ? (\n                  <Button variant=\"outline\" size=\"medium\" href={option.cta.target} className=\"w-full\">\n                    {option.cta.text}\n                  </Button>\n                ) : (\n                  <Button variant=\"outline\" size=\"medium\" className=\"w-full\" onClick={() => handleAction(option)}>\n                    {option.cta.action === 'copy' && copiedEmail && option.id === 'email' ? '✓ Copied!' : option.cta.text}\n                  </Button>\n                )}\n              </div>\n            </div>\n          ))}\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default ContactOptions;"
    },
    {
      "name": "HeroAbout",
      "file_path": "src/components/hero/HeroAbout.tsx",
      "category": "hero",
      "props_interface": "HeroAboutProps",
      "dependencies": [],
      "priority": 4,
      "code": "'use client';\n\nimport React from 'react';\n\ninterface HeroAboutProps {\n  breadcrumb: { items: Array<{ label: string; href?: string }> };\n  headline: string;\n  intro: string[];\n  photo: { src: string; alt: string };\n}\n\nexport const HeroAbout: React.FC<HeroAboutProps> = ({\n  breadcrumb,\n  headline,\n  intro,\n  photo,\n}) => {\n  return (\n    <section className=\"bg-[var(--background-white)]\">\n      <div className=\"max-w-[1200px] mx-auto px-6 py-16 md:py-24\">\n        {/* Breadcrumb */}\n        <nav className=\"mb-8\" aria-label=\"Breadcrumb\">\n          <ol className=\"flex items-center gap-2 text-sm text-[var(--text-secondary)]\">\n            {breadcrumb.items.map((item, index) => (\n              <li key={index} className=\"flex items-center gap-2\">\n                {item.href ? (\n                  <a href={item.href} className=\"hover:text-[var(--accent)] transition-colors\">{item.label}</a>\n                ) : (\n                  <span className=\"text-[var(--text-primary)]\">{item.label}</span>\n                )}\n                {index < breadcrumb.items.length - 1 && <span>/</span>}\n              </li>\n            ))}\n          </ol>\n        </nav>\n        \n        <div className=\"grid md:grid-cols-12 gap-12 items-start\">\n          {/* Content */}\n          <div className=\"md:col-span-7 space-y-6\">\n            <h1 className=\"font-heading font-bold text-4xl md:text-5xl lg:text-[56px] text-[var(--text-primary)]\">{headline}</h1>\n            <div className=\"space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed\">\n              {intro.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}\n            </div>\n          </div>\n          \n          {/* Photo */}\n          <div className=\"md:col-span-5\">\n            <div className=\"relative\">\n              <img src={photo.src} alt={photo.alt} className=\"w-full h-auto rounded-2xl shadow-[var(--shadow-medium)]\" loading=\"eager\" />\n              <div className=\"absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[var(--primary-light)]/30 rounded-2xl\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nexport default HeroAbout;"
    },
    {
      "name": "PortfolioInvitation",
      "file_path": "src/components/portfolio/PortfolioInvitation.tsx",
      "category": "portfolio",
      "props_interface": "PortfolioInvitationProps",
      "dependencies": ["Button"],
      "priority": 4
    },
    {
      "name": "SocialProofStrip",
      "file_path": "src/components/social-proof/SocialProofStrip.tsx",
      "category": "social-proof",
      "props_interface": "SocialProofStripProps",
      "dependencies": [],
      "priority": 4
    },
    {
      "name": "FAQAccordion",
      "file_path": "src/components/contact/FAQAccordion.tsx",
      "category": "contact",
      "props_interface": "FAQAccordionProps",
      "dependencies": [],
      "priority": 4
    },
    {
      "name": "Footer",
      "file_path": "src/components/layout/Footer.tsx",
      "category": "layout",
      "props_interface": "FooterProps",
      "dependencies": [],
      "priority": 4
    },
    {
      "name": "ContactHeader",
      "file_path": "src/components/contact/ContactHeader.tsx",
      "category": "contact",
      "props_interface": "ContactHeaderProps",
      "dependencies": [],
      "priority": 4
    },
    {
      "name": "CalendlyEmbed",
      "file_path": "src/components/contact/CalendlyEmbed.tsx",
      "category": "contact",
      "props_interface": "CalendlyEmbedProps",
      "dependencies": [],
      "priority": 4
    },
    {
      "name": "OriginStory",
      "file_path": "src/components/about/OriginStory.tsx",
      "category": "about",
      "props_interface": "OriginStoryProps",
      "dependencies": [],
      "priority": 3
    },
    {
      "name": "ProcessTimeline",
      "file_path": "src/components/about/ProcessTimeline.tsx",
      "category": "about",
      "props_interface": "ProcessTimelineProps",
      "dependencies": [],
      "priority": 3
    },
    {
      "name": "CredentialsGrid",
      "file_path": "src/components/about/CredentialsGrid.tsx",
      "category": "about",
      "props_interface": "CredentialsGridProps",
      "dependencies": [],
      "priority": 3
    }
  ],

  "content": {
    "home": {
      "hero": {
        "eyebrow": "FOR TUTORS, COACHES & TEACHING BUSINESSES",
        "headline": "Websites That Attract Students—Built in Days, Not Months",
        "subheadline": "You teach. I build. No tech headaches. No monthly fees. Just a professional online presence that works as hard as you do.",
        "primary_cta": { "text": "See Packages", "href": "/contact" },
        "secondary_cta": { "text": "View Pricing", "href": "#pricing" },
        "laptop_mockup": {
          "src": "https://placehold.co/600x400/FDF6F0/C4785A?text=Laptop+Mockup",
          "alt": "Website dashboard preview on laptop"
        }
      },
      "pricing": {
        "heading": "Three Packages. One Goal: More Students.",
        "subtext": "Pick what fits. Every package includes a working website you own forever.",
        "tiers": [
          {
            "id": "quick-launch",
            "name": "Quick Launch",
            "price": 199,
            "tagline": "Live in 3 days",
            "features": ["Single-page professional site", "Mobile-optimized", "AI-generated hero image", "Contact form", "Basic SEO", "1 revision round"],
            "cta": { "text": "Get Started", "href": "/contact" }
          },
          {
            "id": "local-visibility",
            "name": "Local Visibility",
            "price": 399,
            "tagline": "The complete package",
            "badge": "Most Popular",
            "featured": true,
            "features": ["Multi-section landing page", "Thank you page", "3 custom AI images", "Google Business setup guide", "Email notifications", "2 revision rounds", "7-day support"],
            "cta": { "text": "Get Started", "href": "/contact" }
          },
          {
            "id": "growth-system",
            "name": "Growth System",
            "price": 599,
            "tagline": "Built to scale",
            "features": ["Everything in Local Visibility", "A/B testing variant", "Lead magnet page", "Email sequence templates", "Analytics dashboard", "Conversion audit", "14-day support", "Strategy call included"],
            "cta": { "text": "Get Started", "href": "/contact" }
          }
        ],
        "disclaimer": "All prices in USD. Payment plans available. You own everything—no monthly fees to me."
      },
      "portfolio": {
        "eyebrow": "PORTFOLIO",
        "heading": "This Section Is Waiting for You",
        "body": "I'm not going to fill this with fake mockups or borrowed work.\nInstead, I'm looking for founding clients who want to be featured here.\n\nYou get my full attention. I get a success story to share.",
        "cards": [
          { "id": "1", "placeholderText": "Your Tutoring Business Could Be Here" },
          { "id": "2", "placeholderText": "Your Dance Studio Could Be Here" },
          { "id": "3", "placeholderText": "Your Coaching Practice Could Be Here" }
        ],
        "cta": { "text": "Claim a Founding Spot", "href": "/contact" }
      },
      "social_proof": {
        "items": [
          { "icon": "🎓", "text": "Tongji University" },
          { "icon": "🛠️", "text": "Figma • Builder.io • AI" },
          { "icon": "🌏", "text": "Clients in Australia & Beyond" },
          { "icon": "⚡", "text": "3-7 Day Delivery" }
        ]
      }
    },
    "about": {
      "hero": {
        "breadcrumb": { "items": [{ "label": "Home", "href": "/" }, { "label": "About" }] },
        "headline": "I'm Leo Mahé",
        "intro": [
          "I'm a French designer studying at Tongji University in Shanghai. I spend my days exploring AI-powered design tools and building websites for small businesses.",
          "Before this, I studied design in France and worked on everything from brand identities to spatial installations. But what excites me most is helping independent professionals—tutors, coaches, instructors—get online without the usual headaches."
        ],
        "photo": {
          "src": "https://placehold.co/500x600/FDF6F0/C4785A?text=Leo+Photo",
          "alt": "Leo Mahé portrait"
        }
      },
      "origin_story": {
        "heading": "Why Teaching Businesses?",
        "paragraphs": [
          "A few years ago, I tried to find a Japanese tutor in my city. I Googled, scrolled through results, and clicked on a dozen websites. Most were broken on my phone. Some hadn't been updated since 2018. One just had a phone number and a blurry photo.",
          "I eventually found a great tutor through word of mouth. She'd been teaching for 15 years, had dozens of happy students, and genuinely changed how I approached learning. Her website? A Facebook page with three posts from 2019.",
          "That gap stuck with me. The people who dedicate their lives to teaching others—language tutors, music instructors, fitness coaches, wellness practitioners—often have the worst online presence. Not because they don't care, but because they're too busy actually teaching to figure out Wix.",
          "So I decided to fix that. One teaching business at a time."
        ]
      },
      "process": {
        "heading": "How We'll Work Together",
        "steps": [
          { "number": 1, "title": "Discovery Call", "description": "15 minutes. You share your goals. I ask questions. We see if we're a fit.", "timeline": "Day 0" },
          { "number": 2, "title": "Design Draft", "description": "I create the first version based on our conversation and your content.", "timeline": "Day 1-2" },
          { "number": 3, "title": "Build & Refine", "description": "You review. I adjust. We repeat until you love it.", "timeline": "Day 2-5" },
          { "number": 4, "title": "Launch & Support", "description": "Your site goes live. I stick around to make sure it works.", "timeline": "Day 3-7" }
        ]
      },
      "credentials": {
        "education": [
          { "id": "1", "degree": "Master of Design", "institution": "Tongji University, Shanghai", "location": "China", "period": "2023 – Present", "icon": "🎓" },
          { "id": "2", "degree": "DNSEP", "institution": "National Diploma of Superior Artistic Expression", "location": "France", "period": "Design Specialization", "icon": "🎨" },
          { "id": "3", "degree": "DNA", "institution": "National Art Diploma", "location": "France", "period": "Foundation in Design", "icon": "📐" }
        ],
        "skills": {
          "design": ["Figma", "Builder.io", "Supabase"],
          "ai": ["Stable Diffusion", "ComfyUI", "n8n"],
          "creative": ["Photography", "Blender", "Rhino 7"],
          "languages": [
            { "flag": "🇫🇷", "name": "French", "level": "Native" },
            { "flag": "🇬🇧", "name": "English", "level": "Fluent" }
          ]
        }
      }
    },
    "contact": {
      "header": {
        "breadcrumb": { "items": [{ "label": "Home", "href": "/" }, { "label": "Contact" }] },
        "headline": "Let's Talk",
        "subtext": "Pick whatever works best for you."
      },
      "options": [
        { "id": "call", "icon": "📅", "label": "Book a Discovery Call", "description": "Free 15-minute video chat. No pressure. Just a conversation.", "cta": { "text": "See Available Times ↓", "action": "scroll", "target": "#calendly" } },
        { "id": "message", "icon": "✉️", "label": "Send a Message", "description": "Prefer writing? Use the form below. I reply within 24 hours.", "cta": { "text": "Go to Form ↓", "action": "scroll", "target": "#contact-form" } },
        { "id": "email", "icon": "📧", "label": "Email Directly", "description": "leo@edtechvault.com\n\nShanghai, UTC+8\nUsually same-day reply", "cta": { "text": "Copy Email", "action": "copy", "target": "leo@edtechvault.com" } }
      ],
      "calendly": {
        "heading": "Book a Call",
        "subheading": "Let's discuss your project in a quick 15-minute discovery call.",
        "calendlyUrl": "https://calendly.com/leomahe/15min",
        "height": 700
      },
      "form": {
        "heading": "Send a Message",
        "submitButtonText": "Send Message →",
        "successMessage": "Thanks for reaching out! I'll get back to you within 24 hours."
      },
      "faq": {
        "heading": "Common Questions",
        "items": [
          { "id": "1", "question": "How long does the whole process take?", "answer": "3-7 days from payment to launch, depending on your package. Quick Launch is 3 days, Local Visibility is 5, Growth System is 7. This assumes you provide your content (photos, text) promptly." },
          { "id": "2", "question": "What do I need to provide?", "answer": "Photos of yourself or your business, your logo (if you have one), and the text you want on your site. If you don't have content ready, I can help write it for an additional fee." },
          { "id": "3", "question": "Do I actually own the website?", "answer": "Yes, 100%. You own all files, code, images, and content. There are no monthly fees to me. I'll set everything up on your hosting, and you're free to make changes yourself or hire anyone else in the future." },
          { "id": "4", "question": "What if I don't like the design?", "answer": "Every package includes revision rounds (1-3 depending on tier). We'll work together until you're happy. I've never had a client not love their final result." },
          { "id": "5", "question": "Can you split the payment?", "answer": "Yes. I can split any package into 2-3 payments. Standard is 50% deposit to start, 50% on delivery." },
          { "id": "6", "question": "I'm not in Australia—can you still help?", "answer": "Absolutely. I work with teaching businesses worldwide. Time zones work well with Australia, Europe, UK, and North America." },
          { "id": "7", "question": "What's the catch?", "answer": "No catch. I'm building my portfolio with real clients, so I'm motivated to do great work. The pricing is straightforward, you own everything, and I genuinely want to help teaching professionals succeed online." }
        ]
      }
    },
    "footer": {
      "brand": { "name": "edtechvault", "tagline": "Websites for teaching businesses" },
      "social_links": [
        { "platform": "LinkedIn", "href": "https://linkedin.com/in/leomahe" },
        { "platform": "Instagram", "href": "https://instagram.com/edtechvault" }
      ],
      "page_links": [
        { "href": "/", "label": "Home" },
        { "href": "/about", "label": "About" },
        { "href": "/contact", "label": "Contact" },
        { "href": "/portfolio", "label": "Portfolio", "coming_soon": true }
      ],
      "contact_links": [
        { "href": "/contact", "label": "Book a Call" },
        { "href": "mailto:leo@edtechvault.com", "label": "Email Leo" }
      ],
      "copyright": "© 2024 edtechvault",
      "location": "Made in Shanghai",
      "languages": [
        { "code": "en", "label": "EN", "active": true },
        { "code": "fr", "label": "FR", "active": false, "coming_soon": true }
      ]
    }
  },

  "database": {
    "provider": "Supabase",
    "tables": [
      {
        "name": "contacts",
        "sql": "CREATE TABLE contacts (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name TEXT NOT NULL,\n  email TEXT NOT NULL,\n  business_name TEXT,\n  current_website TEXT,\n  help_with TEXT NOT NULL,\n  message TEXT,\n  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n  status TEXT DEFAULT 'new'\n);"
      }
    ],
    "indexes": [
      "CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);",
      "CREATE INDEX idx_contacts_status ON contacts(status);"
    ],
    "rls_policies": [
      {
        "table": "contacts",
        "sql": "ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY \"Allow public contact form submissions\"\n  ON contacts FOR INSERT\n  TO public\n  WITH CHECK (true);"
      }
    ],
    "setup_instructions": [
      "1. Open Supabase Dashboard (https://supabase.com/dashboard)",
      "2. Select your project (or create a new one)",
      "3. Go to SQL Editor",
      "4. Create a new query",
      "5. Paste and run the following SQL:",
      "",
      "-- Create contacts table",
      "CREATE TABLE contacts (",
      "  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),",
      "  name TEXT NOT NULL,",
      "  email TEXT NOT NULL,",
      "  business_name TEXT,",
      "  current_website TEXT,",
      "  help_with TEXT NOT NULL,",
      "  message TEXT,",
      "  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),",
      "  status TEXT DEFAULT 'new'",
      ");",
      "",
      "-- Create indexes",
      "CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);",
      "CREATE INDEX idx_contacts_status ON contacts(status);",
      "",
      "-- Enable RLS",
      "ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;",
      "",
      "-- Create policy for public inserts",
      "CREATE POLICY \"Allow public contact form submissions\"",
      "  ON contacts FOR INSERT",
      "  TO public",
      "  WITH CHECK (true);",
      "",
      "6. Click 'Run' to execute",
      "7. Verify the 'contacts' table appears in Table Editor",
      "8. Copy your Project URL and anon key from Settings → API"
    ]
  },

  "installation_commands": [
    "npx create-next-app@latest edtechvault --typescript --tailwind --eslint --app --src-dir --import-alias \"@/*\" --yes",
    "cd edtechvault",
    "npm install @supabase/supabase-js",
    "npm install lucide-react"
  ],

  "validation_checklist": {
    "pre_fusion": {
      "build_passes": false,
      "git_pushed": false,
      "preview_validated": true,
      "globals_css_correct": true,
      "agents_md_created": true
    },
    "post_implementation": {
      "all_pages_render": false,
      "all_links_work": false,
      "forms_submit": false,
      "responsive_verified": false,
      "lighthouse_passed": false
    }
  }
}
```

---

## Quick Reference

### Files Generated in Part 1

| File | Location | Status |
|------|----------|--------|
| globals.css | /src/app/globals.css | ✅ Ready |
| preview.html | /preview/preview.html | ✅ Ready |
| AGENTS.md | /AGENTS.md | ✅ Ready |
| .env.local.example | /.env.local.example | ✅ Ready |
| Handoff File | This document | ✅ Ready |

### Next Steps for Part 2

1. **Provide GitHub URL** - Create/use a repository for this project
2. **Run local setup** - Execute installation commands above
3. **Configure Supabase** - Run database setup SQL
4. **Connect Builder.io Fusion** - Link repository to Fusion
5. **Build components** - Use handoff data to create each component
6. **Assemble pages** - Compose pages from components
7. **Test & validate** - Run through checklist

---

**End of Handoff Document**
