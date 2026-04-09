# Deployment Guide for The Strativa

This guide covers the complete deployment process from local development to production on Netlify.

---

## Prerequisites

Before deploying, ensure you have:

1. ✅ A GitHub account
2. ✅ A Netlify account (free tier is sufficient)
3. ✅ A Sanity account (free tier is sufficient)
4. ✅ A Resend account (free tier: 100 emails/day)
5. ✅ A domain name (thestrativa.com)

---

## Step-by-Step Deployment

### 1. Set Up Sanity CMS

#### Create Sanity Project

```bash
# Install Sanity CLI globally (optional)
npm install -g @sanity/cli

# Or use the web interface at sanity.io
```

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click **"Create project"**
3. Name: "The Strativa"
4. Copy the **Project ID** (you'll need this)

#### Create API Token

1. In your Sanity project dashboard, go to **API** → **Tokens**
2. Click **"Add API token"**
3. Name: "Production Token"
4. Permissions: **Editor**
5. Copy the token (you'll need this)

#### Configure CORS

1. In Sanity dashboard, go to **API** → **CORS Origins**
2. Add these origins:
   - `http://localhost:3000` (for local development)
   - `https://thestrativa.com` (for production)
   - `https://www.thestrativa.com` (for www subdomain)
3. Allow credentials: **Yes**

---

### 2. Set Up Resend (Email Service)

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address
3. Go to **API Keys** → **Create API Key**
4. Name: "The Strativa Production"
5. Permission: **Sending access**
6. Copy the API key (you'll need this)

#### Configure Domain (Optional but Recommended)

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter: `thestrativa.com`
4. Add the DNS records to your domain registrar:
   - SPF record
   - DKIM records
   - DMARC record (optional)
5. Wait for verification (can take up to 48 hours)

Once verified, update the "from" address in `app/api/contact/route.ts`:

```typescript
from: 'The Strativa <hello@thestrativa.com>',
```

---

### 3. Push to GitHub

#### Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit — The Strativa website"

# Rename branch to main
git branch -M main
```

#### Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `thestrativa`
3. Description: "The Strativa website — Programme delivery consultancy"
4. Visibility: **Private** (recommended) or Public
5. Do NOT initialize with README, .gitignore, or license
6. Click **"Create repository"**

#### Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/[your-username]/thestrativa.git

# Push
git push -u origin main
```

---

### 4. Deploy to Netlify

#### Connect Repository

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select the `thestrativa` repository

#### Configure Build Settings

Netlify should auto-detect these from `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 20

If not auto-detected, enter them manually.

#### Add Environment Variables

1. Before deploying, click **"Add environment variables"**
2. Add these variables:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | Your Sanity API token |
| `RESEND_API_KEY` | Your Resend API key |
| `NEXT_PUBLIC_SITE_URL` | `https://thestrativa.com` |

3. Click **"Deploy [site-name]"**

#### Wait for Build

- First build takes ~3-5 minutes
- Watch the build logs for any errors
- Once complete, you'll get a temporary URL like: `https://[random-name].netlify.app`

---

### 5. Configure Custom Domain

#### Add Domain to Netlify

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `thestrativa.com`
4. Click **"Verify"**
5. Netlify will ask if you own the domain — click **"Yes, add domain"**

#### Add www Subdomain

1. Click **"Add domain alias"**
2. Enter: `www.thestrativa.com`
3. Click **"Save"**

#### Configure DNS

You have two options:

**Option A: Use Netlify DNS (Recommended)**

1. In Netlify, click **"Set up Netlify DNS"**
2. Netlify will provide nameservers (e.g., `dns1.p01.nsone.net`)
3. Go to your domain registrar (e.g., Namecheap, GoDaddy)
4. Update nameservers to Netlify's nameservers
5. Wait 24-48 hours for propagation

**Option B: Use External DNS**

1. In your domain registrar's DNS settings, add:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 3600 |
| CNAME | www | [your-site].netlify.app | 3600 |

2. Wait 24-48 hours for propagation

#### Enable HTTPS

1. Once DNS is configured, Netlify automatically provisions SSL
2. This happens within 24 hours of DNS propagation
3. Check **Site settings** → **Domain management** → **HTTPS**
4. Ensure **"Force HTTPS"** is enabled

---

### 6. Configure GitHub Secrets (for CI)

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add these secrets:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `SANITY_API_TOKEN` | Your Sanity API token |
| `RESEND_API_KEY` | Your Resend API key |

The GitHub Actions workflow (`.github/workflows/ci.yml`) will now run on every push.

---

### 7. Test the Deployment

#### Test Homepage

1. Visit `https://thestrativa.com`
2. Check all sections load correctly
3. Test navigation links

#### Test Sanity Studio

1. Visit `https://thestrativa.com/studio`
2. Log in with your Sanity account
3. Try creating a test case study
4. Publish it
5. Check if it appears on the website (may need to trigger a rebuild)

#### Test Contact Form

1. Go to `https://thestrativa.com/contact`
2. Fill out the form
3. Submit
4. Check if you receive the email at `hello@thestrativa.com`
5. Check Resend dashboard for delivery status

#### Test SEO

1. Visit `https://thestrativa.com/sitemap.xml`
2. Visit `https://thestrativa.com/robots.txt`
3. Check meta tags with browser dev tools
4. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

---

### 8. Post-Deployment Tasks

#### Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://thestrativa.com`
3. Verify ownership (use DNS verification)
4. Submit sitemap: `https://thestrativa.com/sitemap.xml`

#### Set Up Analytics (Optional)

1. Create Google Analytics 4 property
2. Add tracking code to `app/layout.tsx`
3. Or use Netlify Analytics (paid feature)

#### Monitor Uptime

1. Set up uptime monitoring (e.g., UptimeRobot, Pingdom)
2. Monitor: `https://thestrativa.com`
3. Alert email: `hello@thestrativa.com`

---

## Continuous Deployment

Every push to the `main` branch triggers:

1. **GitHub Actions CI** (runs build and lint)
2. **Netlify Deploy** (builds and deploys to production)

To deploy changes:

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push origin main

# Netlify automatically deploys in ~2 minutes
```

---

## Rollback

If a deployment breaks the site:

1. Go to Netlify dashboard
2. Click **"Deploys"**
3. Find the last working deploy
4. Click **"..."** → **"Publish deploy"**
5. Site reverts to that version immediately

---

## Troubleshooting

### Build Fails

**Error: Missing environment variables**

- Check all env vars are set in Netlify
- Ensure no typos in variable names

**Error: Sanity fetch fails**

- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Check CORS origins include your domain
- Check API token has correct permissions

### Domain Not Working

**DNS not resolving**

- Wait 24-48 hours for DNS propagation
- Check DNS with: `dig thestrativa.com`
- Verify nameservers with: `whois thestrativa.com`

**SSL certificate not provisioning**

- Ensure DNS is fully propagated first
- Check Netlify dashboard for SSL status
- May take up to 24 hours after DNS propagation

### Contact Form Not Working

**Emails not sending**

- Check Resend API key is correct
- Check Resend dashboard for error logs
- Verify "from" email address is verified in Resend
- Check browser console for errors

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check Netlify deploy logs for errors
- Monitor Resend email delivery rate

**Monthly:**
- Review Google Search Console for SEO issues
- Check for Next.js and dependency updates
- Review and respond to contact form submissions

**Quarterly:**
- Update dependencies: `npm update`
- Review and optimize Core Web Vitals
- Audit accessibility with Lighthouse

---

## Support

For deployment issues:

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Sanity**: [sanity.io/help](https://sanity.io/help)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Resend**: [resend.com/docs](https://resend.com/docs)

---

## Checklist

Use this checklist to ensure everything is set up:

- [ ] Sanity project created
- [ ] Sanity API token created
- [ ] Sanity CORS origins configured
- [ ] Resend account created
- [ ] Resend API key created
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Netlify site created
- [ ] Environment variables added to Netlify
- [ ] Custom domain added to Netlify
- [ ] DNS configured
- [ ] HTTPS enabled
- [ ] GitHub secrets added
- [ ] Homepage loads correctly
- [ ] Sanity Studio accessible
- [ ] Contact form sends emails
- [ ] Sitemap accessible
- [ ] Robots.txt accessible
- [ ] Submitted to Google Search Console
- [ ] Uptime monitoring configured

---

**Deployment complete! 🚀**

Your website is now live at https://thestrativa.com
