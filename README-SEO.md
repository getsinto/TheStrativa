# SEO Infrastructure for The Strativa

This document outlines the complete SEO setup for The Strativa website.

## Files Overview

### 1. `app/sitemap.ts`
Generates dynamic XML sitemap including:
- Static pages (home, about, services, case studies index, insights index, contact)
- Dynamic case study pages
- Dynamic insight pages
- Proper priorities and change frequencies
- Fallback to static slugs if Sanity fetch fails

### 2. `app/robots.ts`
Configures search engine crawling:
- Allows all pages except `/studio/`
- Points to sitemap at `https://thestrativa.com/sitemap.xml`

### 3. `components/JsonLd.tsx`
Reusable component for adding JSON-LD structured data to pages.

Usage:
```tsx
import { JsonLd } from '@/components/JsonLd';

<JsonLd data={articleSchema} />
```

### 4. `lib/seo.ts`
Helper functions for generating structured data:
- `getOrganizationSchema()` - Organization markup
- `getArticleSchema()` - Article markup for case studies/insights
- `getWebPageSchema()` - WebPage markup
- `getBreadcrumbSchema()` - Breadcrumb navigation markup

### 5. `public/og-image.png`
Open Graph image (1200×630px) - **needs to be created manually**

See `public/generate-og.js` for design specifications.

## Implementation Checklist

### ✅ Already Implemented

1. **Root Layout** (`app/layout.tsx`)
   - Complete metadata with OpenGraph and Twitter cards
   - Organization schema in head
   - Proper title template

2. **Page Metadata**
   - All pages have proper title and description
   - generateMetadata for dynamic pages

3. **Sitemap & Robots**
   - Dynamic sitemap generation
   - Robots.txt configuration

### 🔲 To Implement

1. **Add JSON-LD to Case Study Pages**

In `app/case-studies/[slug]/page.tsx`, add:

```tsx
import { JsonLd } from '@/components/JsonLd';
import { getArticleSchema } from '@/lib/seo';

// Inside the component, before return:
const articleSchema = getArticleSchema(
  caseStudy.title,
  caseStudy.challenge,
  caseStudy.publishedAt
);

// In the JSX:
<>
  <JsonLd data={articleSchema} />
  {/* rest of page */}
</>
```

2. **Add JSON-LD to Insight Pages**

In `app/insights/[slug]/page.tsx`, add:

```tsx
import { JsonLd } from '@/components/JsonLd';
import { getArticleSchema } from '@/lib/seo';

const articleSchema = getArticleSchema(
  insight.title,
  insight.summary,
  insight.publishedAt
);

<>
  <JsonLd data={articleSchema} />
  {/* rest of page */}
</>
```

3. **Create OG Image**

Create `public/og-image.png` using:
- Canva (easiest)
- Figma (for designers)
- @vercel/og (programmatic)

Specifications in `public/generate-og.js`

4. **Add Breadcrumb Schema** (Optional)

For case studies and insights detail pages:

```tsx
import { getBreadcrumbSchema } from '@/lib/seo';

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://thestrativa.com' },
  { name: 'Case Studies', url: 'https://thestrativa.com/case-studies' },
  { name: caseStudy.title, url: `https://thestrativa.com/case-studies/${slug}` },
]);

<JsonLd data={breadcrumbSchema} />
```

## Testing SEO

### Tools to Use

1. **Google Search Console**
   - Submit sitemap: `https://thestrativa.com/sitemap.xml`
   - Monitor indexing status
   - Check for errors

2. **Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test structured data markup

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Check Core Web Vitals

4. **Social Media Debuggers**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/post-inspector/

### Manual Checks

```bash
# View sitemap
curl https://thestrativa.com/sitemap.xml

# View robots.txt
curl https://thestrativa.com/robots.txt

# Check meta tags
curl -s https://thestrativa.com | grep -i "meta"
```

## SEO Best Practices Implemented

✅ Semantic HTML structure
✅ Proper heading hierarchy (h1 → h2 → h3)
✅ Descriptive alt text for images (when images are added)
✅ Fast page loads (Next.js optimization)
✅ Mobile responsive design
✅ HTTPS (via Netlify)
✅ Clean URLs (no query parameters)
✅ Internal linking structure
✅ Structured data (JSON-LD)
✅ XML sitemap
✅ Robots.txt
✅ OpenGraph tags
✅ Twitter Card tags
✅ Canonical URLs

## Performance Optimization

The website is optimized for Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
  - Next.js Image optimization
  - Font preloading
  - Critical CSS inlined

- **FID (First Input Delay)**: < 100ms
  - Minimal JavaScript
  - Code splitting
  - Lazy loading

- **CLS (Cumulative Layout Shift)**: < 0.1
  - Fixed dimensions for images
  - Font display: swap
  - No layout shifts

## Monitoring

Set up monitoring for:
1. Google Search Console (search performance)
2. Google Analytics 4 (user behavior)
3. Netlify Analytics (traffic overview)
4. Uptime monitoring (e.g., UptimeRobot)

## Next Steps

1. Create `public/og-image.png`
2. Add JSON-LD to case study and insight pages
3. Submit sitemap to Google Search Console
4. Set up Google Analytics 4
5. Monitor indexing and rankings
6. Create additional content (more case studies and insights)
7. Build backlinks through partnerships and PR
