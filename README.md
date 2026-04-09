# The Strativa — thestrativa.com

Premium programme delivery consultancy website built with Next.js 14, Sanity CMS, and deployed on Netlify.

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **CMS**: Sanity v3
- **Styling**: Tailwind CSS v3
- **Animations**: CSS + IntersectionObserver
- **Email**: Resend
- **Deployment**: Netlify
- **Repository**: GitHub

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/[your-username]/thestrativa.git
cd thestrativa
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your values (see Environment Variables section below).

### 4. Start development server

```bash
npm run dev
```

Visit http://localhost:3000

### 5. Access Sanity Studio (CMS)

Visit http://localhost:3000/studio

---

## Environment Variables

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID | sanity.io/manage |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` | sanity.io/manage |
| `SANITY_API_TOKEN` | Sanity API token with write access | sanity.io/manage → API |
| `RESEND_API_KEY` | Resend API key for contact emails | resend.com/api-keys |
| `NEXT_PUBLIC_SITE_URL` | Your domain | Set to https://thestrativa.com |

---

## Setting Up Sanity

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project (call it "thestrativa")
3. Copy the **Project ID** from the dashboard
4. Go to **API** → **Tokens** → create a token with **Editor** permissions
5. Add your production domain to **CORS Origins**: `https://thestrativa.com`
6. Also add `http://localhost:3000` for local development

---

## GitHub Setup

### Create a new repository

```bash
git init
git add .
git commit -m "Initial commit — The Strativa website"
git branch -M main
git remote add origin https://github.com/[your-username]/thestrativa.git
git push -u origin main
```

---

## Netlify Deployment

### Step 1: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and select the `thestrativa` repository
4. Netlify will auto-detect Next.js settings from `netlify.toml`

### Step 2: Set Environment Variables in Netlify

1. In Netlify: **Site settings** → **Environment variables**
2. Add all variables from `.env.local.example` with your real values:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

### Step 3: Set Custom Domain

1. In Netlify: **Site settings** → **Domain management**
2. Click **"Add custom domain"** → enter `thestrativa.com`
3. Add `www.thestrativa.com` as an alias
4. Copy the Netlify DNS records and add them to your domain registrar:
   - Add a **CNAME** record: `www` → `[your-site].netlify.app`
   - Add an **A** record: `@` → `75.2.60.5` (Netlify's load balancer)
5. Wait 24-48 hours for DNS propagation
6. Netlify will automatically provision SSL (HTTPS) via Let's Encrypt

### Step 4: Deploy

Every push to `main` branch on GitHub auto-deploys to Netlify.

Manual deploy: Click **"Trigger deploy"** in Netlify dashboard

---

## Managing Content (Sanity Studio)

Once deployed, the CMS is at: **https://thestrativa.com/studio**

### Adding a Case Study

1. Go to `/studio` → **Case Studies** → click **"+"**
2. Fill in:
   - Title
   - Slug (auto-generated from title)
   - Challenge (text description)
   - Approach (each bullet as a separate item)
   - Outcome (result statement)
   - Published At date
3. Toggle **Featured** if it should appear on the homepage
4. Click **Publish**

### Adding an Insight

1. Go to `/studio` → **Insights** → click **"+"**
2. Fill in:
   - Title
   - Slug (auto-generated)
   - Summary (2-3 sentences for card preview)
   - Quote (the pull quote shown in the article)
   - Body (full article text with formatting)
   - Published At date
3. Toggle **Featured** for homepage
4. Click **Publish**

### Adding a Service

1. Go to `/studio` → **Services** → click **"+"**
2. Fill in all fields
3. Set **Order** (1, 2, 3) to control display sequence
4. Click **Publish**

### Editing Site Settings

1. Go to `/studio` → **⚙ Site Settings**
2. Update:
   - Business name
   - Tagline
   - Contact email
   - LinkedIn URL
   - Contact response note
3. Click **Publish**

---

## Updating the Website

For code changes (layout, design, new pages):

1. Make changes locally
2. Test with `npm run dev`
3. Commit: `git add . && git commit -m "Description of change"`
4. Push: `git push origin main`
5. Netlify automatically rebuilds and deploys (takes ~2 minutes)

---

## Project Structure

```
thestrativa/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with Nav + Footer
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── case-studies/        # Case studies pages
│   ├── insights/            # Insights/blog pages
│   ├── contact/             # Contact page
│   ├── studio/              # Sanity Studio
│   ├── api/                 # API routes
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── layout/             # Nav, Footer
│   ├── ui/                 # Reusable UI components
│   └── ContactForm.tsx     # Contact form
├── sanity/                  # Sanity configuration
│   ├── schemas/            # Content schemas
│   ├── lib/                # Sanity client and queries
│   └── structure.ts        # Studio structure
├── lib/                     # Utility functions
│   ├── fonts.ts            # Font configuration
│   └── seo.ts              # SEO helpers
├── hooks/                   # Custom React hooks
├── styles/                  # Global styles
├── public/                  # Static assets
├── sanity.config.ts        # Sanity config
├── tailwind.config.ts      # Tailwind config
├── netlify.toml            # Netlify config
└── package.json            # Dependencies
```

---

## Performance

The site is built for performance:

- Static pages generated at build time (no server required for page loads)
- Sanity content fetched at build time with fallback to static data
- Images served through Next.js Image Optimization
- Fonts loaded via `next/font` (eliminates layout shift)
- Minimal JavaScript (no heavy frameworks)
- Target Lighthouse scores: Performance 95+, SEO 100, Accessibility 95+

---

## SEO

The website includes:

- Dynamic XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- OpenGraph and Twitter Card meta tags
- JSON-LD structured data (Organization schema)
- Semantic HTML structure
- Proper heading hierarchy
- Fast Core Web Vitals

Submit sitemap to Google Search Console: `https://thestrativa.com/sitemap.xml`

---

## Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Troubleshooting

### Build fails on Netlify

1. Check environment variables are set correctly
2. Check build logs in Netlify dashboard
3. Try building locally: `npm run build`

### Sanity Studio not loading

1. Check CORS origins in Sanity dashboard include your domain
2. Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
3. Clear browser cache and try again

### Contact form not sending emails

1. Check `RESEND_API_KEY` is set in Netlify environment variables
2. Check Resend dashboard for error logs
3. Verify email address in `app/api/contact/route.ts`

---

## Contact

**The Strativa**  
hello@thestrativa.com  
thestrativa.com

*Delivery partnership led by Olusegun Olamide and Hiram Kanwal*

---

## License

All rights reserved © 2025 The Strativa
