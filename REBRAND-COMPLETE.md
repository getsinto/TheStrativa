# Rebrand Complete: Strativa → Straton

## Overview
Successfully rebranded from "Strativa" to "Straton" across the entire website.

**Reason for rebrand:** Client's partner noted that "Strativa" sounds similar to "Sativa" which could cause issues. "Straton" is the preferred alternative.

**New tagline:** Clarity. Structure. Delivery.

---

## New Pages Created

### 1. Delivery Standards (`/delivery-standards`)
- Full page with all content sections
- Includes: Introduction, How We Work, What You Can Expect, Our Standards, Risk Management, Go-Live Approach, Closure Approach, Final Statement
- Route: `app/delivery-standards/page.tsx`

### 2. Pricing (`/pricing`)
- Four pricing tiers with detailed breakdowns
- **Clarity:** £150 – £300 (for clear understanding)
- **Control:** £150 – £300/week or £300 – £600/project (structured support)
- **Delivery:** £800 – £2,000/project (full support and ownership)
- **Website Delivery:** £300 – £1,500 (high-quality websites)
- Route: `app/pricing/page.tsx`

---

## Brand Updates Applied

### Files Updated:
1. **app/layout.tsx**
   - Changed metadata title from "The Strativa" to "Straton"
   - Updated description references
   - Changed organization schema name
   - Updated URLs from thestrativa.com to straton.com
   - Updated email from hello@thestrativa.com to hello@straton.com

2. **app/page.tsx**
   - Changed hero logo text from "STRATIVA" to "STRATON"
   - Updated metadata description
   - Updated email in footer CTA

3. **components/layout/Nav.tsx**
   - Changed logo text from "STRATIVA" to "STRATON"
   - Added "Delivery Standards" link
   - Added "Pricing" link

4. **components/layout/Footer.tsx**
   - Changed logo text from "STRATIVA" to "STRATON"
   - Updated copyright from "The Strativa · thestrativa.com" to "Straton · straton.com"
   - Updated email from hello@thestrativa.com to hello@straton.com
   - Added "Delivery Standards" and "Pricing" to navigation links

5. **package.json**
   - Changed package name from "thestrativa" to "straton"

6. **sanity.config.ts**
   - Changed name from "thestrativa" to "Straton CMS"
   - Updated title from "The Strativa CMS" to "Straton CMS"

7. **.env.local.example**
   - Updated NEXT_PUBLIC_SITE_URL from https://thestrativa.com to https://straton.com

---

## Navigation Structure (Updated)

### Main Navigation:
- Services
- Case Studies
- Insights
- Delivery Standards *(NEW)*
- Pricing *(NEW)*
- About
- Start a Conversation (CTA button)

### Footer Navigation:
- Home
- About
- Services
- Case Studies
- Insights
- Delivery Standards *(NEW)*
- Pricing *(NEW)*
- Contact

---

## Next Steps

### Required Actions:
1. **Update .env.local file** (not in git)
   - Change NEXT_PUBLIC_SITE_URL to https://straton.com

2. **Update Netlify Environment Variables:**
   - NEXT_PUBLIC_SITE_URL=https://straton.com

3. **Update Vercel Environment Variables:**
   - NEXT_PUBLIC_SITE_URL=https://straton.com

4. **Domain Configuration:**
   - Point straton.com to Netlify/Vercel
   - Update DNS settings
   - Configure SSL certificate

5. **Sanity CMS Updates:**
   - Update any case studies that reference "Strativa"
   - Update any insights that reference "Strativa"
   - Update site settings if they exist

6. **Test All Pages:**
   - Homepage
   - Services
   - Case Studies
   - Insights
   - About
   - Delivery Standards *(NEW)*
   - Pricing *(NEW)*
   - Contact

---

## Brand Identity

**Name:** Straton

**Tagline:** Clarity. Structure. Delivery.

**Email:** hello@straton.com

**Website:** straton.com

**Core Values:**
- Clarity: Everything must be understood
- Structure: Everything must be organised
- Control: Everything must be managed

**Positioning:** We do not aim to impress. We aim to bring clarity, create structure, and deliver with control.

---

## Technical Notes

- All brand references updated in code
- New pages follow existing design system
- Responsive design maintained
- SEO metadata updated
- Structured data (JSON-LD) updated
- All links and navigation updated
