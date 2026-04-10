# Rebrand from Strativa to Straton

## Overview
Complete rebrand from "The Strativa" to "Straton" with new positioning:
- New tagline: "Clarity. Structure. Delivery."
- New focus: Delivery standards and transparent pricing
- New pages: Delivery Standards, Pricing

## Changes Required

### 1. Brand Name Changes
- [ ] Update all instances of "Strativa" to "Straton"
- [ ] Update all instances of "The Strativa" to "Straton"
- [ ] Update tagline to "Clarity. Structure. Delivery."
- [ ] Update metadata and SEO

### 2. New Pages to Create
- [ ] `/delivery-standards` - Straton Delivery Standard page
- [ ] `/pricing` - Pricing page with 4 tiers

### 3. Files to Update
- [ ] `app/layout.tsx` - Metadata and organization schema
- [ ] `app/page.tsx` - Homepage hero and content
- [ ] `components/layout/Nav.tsx` - Navigation links
- [ ] `components/layout/Footer.tsx` - Footer branding
- [ ] `sanity.config.ts` - Sanity project title
- [ ] `package.json` - Project name
- [ ] All content files

### 4. New Content Structure

#### Delivery Standards Page
- Introduction
- How We Work
- What You Can Expect
- Our Standards (Clarity, Structure, Control)
- Risk Management
- Go-Live Approach
- Closure Approach
- Final Statement

#### Pricing Page
- Introduction
- 4 Service Tiers:
  1. Clarity (£150-£300)
  2. Control (£150-£300/week or £300-£600/project)
  3. Delivery (£800-£2,000/project)
  4. Website Delivery (£300-£1,500)
- Final Line

### 5. Navigation Updates
Add new menu items:
- Delivery Standards
- Pricing

### 6. Domain Considerations
- Current: thestrativa.com
- New: Will need to update to straton.com or similar
- Update NEXT_PUBLIC_SITE_URL in environment variables

## Implementation Order

1. Create new pages (Delivery Standards, Pricing)
2. Update brand name throughout codebase
3. Update navigation
4. Update metadata and SEO
5. Update Sanity content
6. Test all pages
7. Deploy

## Notes
- Keep all existing case studies and insights
- Maintain existing services structure
- Update email addresses if needed (hello@straton.com)
