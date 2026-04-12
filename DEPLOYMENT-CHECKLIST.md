# Deployment Checklist - Straton Rebrand

## ✅ Completed
- [x] Created Delivery Standards page (`/delivery-standards`)
- [x] Created Pricing page (`/pricing`)
- [x] Updated all code references from "Strativa" to "Straton"
- [x] Updated navigation to include new pages
- [x] Updated footer links
- [x] Updated email addresses to hello@straton.com
- [x] Updated package.json
- [x] Updated Sanity config
- [x] Committed and pushed to GitHub
- [x] All TypeScript errors resolved

## 🔄 Next Steps

### 1. Environment Variables
Update on both Netlify and Vercel:
```
NEXT_PUBLIC_SITE_URL=https://straton.com
```

**Netlify:**
1. Go to https://app.netlify.com
2. Select your site
3. Site settings → Environment variables
4. Update NEXT_PUBLIC_SITE_URL

**Vercel:**
1. Go to https://vercel.com
2. Select your project
3. Settings → Environment Variables
4. Update NEXT_PUBLIC_SITE_URL
5. Redeploy after updating

### 2. Local Environment
Update your `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://straton.com
```

### 3. Domain Configuration
- [ ] Purchase/configure straton.com domain
- [ ] Point DNS to Netlify/Vercel
- [ ] Configure SSL certificate
- [ ] Update domain in Netlify/Vercel dashboard

### 4. Sanity CMS Updates
- [ ] Review case studies for "Strativa" references
- [ ] Review insights for "Strativa" references
- [ ] Update any site settings if they exist
- [ ] Update CORS origins if needed (add straton.com)

### 5. Testing After Deployment
Test all pages on live site:
- [ ] Homepage (/)
- [ ] Services (/services)
- [ ] Case Studies (/case-studies)
- [ ] Insights (/insights)
- [ ] About (/about)
- [ ] Delivery Standards (/delivery-standards) **NEW**
- [ ] Pricing (/pricing) **NEW**
- [ ] Contact (/contact)
- [ ] Sanity Studio (/studio)

### 6. SEO & Analytics
- [ ] Update Google Search Console (if configured)
- [ ] Update Google Analytics (if configured)
- [ ] Submit new sitemap
- [ ] Update any social media profiles
- [ ] Update LinkedIn company page

### 7. Email Configuration
- [ ] Set up hello@straton.com email address
- [ ] Update contact form to use new email
- [ ] Test contact form functionality

---

## Quick Deploy Commands

**Check current deployment:**
```bash
# Netlify
netlify status

# Vercel
vercel --prod
```

**Trigger new deployment:**
```bash
git push origin main
```

---

## New Pages Overview

### Delivery Standards
**URL:** /delivery-standards
**Content Sections:**
- Introduction
- How We Work
- What You Can Expect
- Our Standards (Clarity, Structure, Control)
- Risk Management
- Go-Live Approach
- Closure Approach
- Final Statement

### Pricing
**URL:** /pricing
**Pricing Tiers:**
1. **Clarity** - £150 – £300
2. **Control** - £150 – £300/week or £300 – £600/project
3. **Delivery** - £800 – £2,000/project
4. **Website Delivery** - £300 – £1,500

---

## Brand Assets

**Name:** Straton
**Tagline:** Clarity. Structure. Delivery.
**Email:** hello@straton.com
**Website:** straton.com

**Core Message:**
"We do not aim to impress. We aim to bring clarity, create structure, and deliver with control."
