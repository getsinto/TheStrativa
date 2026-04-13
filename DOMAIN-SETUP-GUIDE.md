# Domain Setup Guide - Stratora Consulting

## Current Status
- **Brand Name:** Stratora Consulting
- **Target Domain:** stratoraconsulting.com
- **Current Deployment:** Netlify & Vercel (temporary domains)

---

## Domain Connection Steps

### 1. Purchase Domain
Purchase `stratoraconsulting.com` from a domain registrar:
- **Recommended:** Namecheap, Google Domains, or Cloudflare
- **Alternative:** GoDaddy, Hover

### 2. Choose Hosting Platform
You're currently deployed on both Netlify and Vercel. Choose one:

#### Option A: Netlify (Recommended for simplicity)
**Pros:**
- Simple setup
- Automatic SSL
- Good for static sites
- Free tier available

**Setup Steps:**
1. Go to Netlify Dashboard → Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter: `stratoraconsulting.com`
4. Netlify will provide DNS records

**DNS Configuration:**
Add these records at your domain registrar:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
```

#### Option B: Vercel
**Pros:**
- Excellent for Next.js
- Fast global CDN
- Advanced features

**Setup Steps:**
1. Go to Vercel Dashboard → Project Settings → Domains
2. Add domain: `stratoraconsulting.com`
3. Vercel will provide DNS records

**DNS Configuration:**
Add these records at your domain registrar:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Update Environment Variables
After domain is connected, update on your chosen platform:

**Netlify:**
- Site settings → Environment variables
- Update: `NEXT_PUBLIC_SITE_URL=https://stratoraconsulting.com`

**Vercel:**
- Project Settings → Environment Variables
- Update: `NEXT_PUBLIC_SITE_URL=https://stratoraconsulting.com`
- Redeploy after updating

### 4. Update Local Environment
Update your `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://stratoraconsulting.com
```

### 5. SSL Certificate
Both Netlify and Vercel automatically provision SSL certificates via Let's Encrypt.
- This usually takes 5-30 minutes after DNS propagation
- Your site will be accessible via HTTPS automatically

### 6. DNS Propagation
- DNS changes can take 24-48 hours to fully propagate
- Use https://dnschecker.org to check propagation status
- Test with: `nslookup stratoraconsulting.com`

---

## Email Setup

### Option 1: Google Workspace (Recommended)
**Cost:** ~$6/user/month

**Setup:**
1. Sign up at https://workspace.google.com
2. Verify domain ownership
3. Add MX records provided by Google
4. Create email: hello@stratoraconsulting.com

**MX Records (example):**
```
Priority: 1, Value: ASPMX.L.GOOGLE.COM
Priority: 5, Value: ALT1.ASPMX.L.GOOGLE.COM
Priority: 5, Value: ALT2.ASPMX.L.GOOGLE.COM
```

### Option 2: Zoho Mail (Budget-friendly)
**Cost:** Free for 5 users or ~$1/user/month

**Setup:**
1. Sign up at https://www.zoho.com/mail
2. Verify domain
3. Add MX records
4. Create email: hello@stratoraconsulting.com

### Option 3: Email Forwarding (Simple)
**Cost:** Free (via Cloudflare or domain registrar)

**Setup:**
1. Use Cloudflare Email Routing (free)
2. Forward hello@stratoraconsulting.com to your personal email
3. Limited features but works for basic needs

---

## Post-Setup Checklist

### Website
- [ ] Domain connected and accessible
- [ ] SSL certificate active (HTTPS working)
- [ ] www redirect working (www.stratoraconsulting.com → stratoraconsulting.com)
- [ ] All pages loading correctly
- [ ] Contact form working
- [ ] Sanity Studio accessible at /studio

### Email
- [ ] Email account created: hello@stratoraconsulting.com
- [ ] Test sending email
- [ ] Test receiving email
- [ ] Update contact form to use new email

### SEO & Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if needed)
- [ ] Update social media profiles with new domain
- [ ] Update LinkedIn company page

### Sanity CMS
- [ ] Update CORS origins to include stratoraconsulting.com
- [ ] Test Studio access from new domain
- [ ] Verify content publishing works

---

## Troubleshooting

### Domain not resolving
- Check DNS propagation: https://dnschecker.org
- Verify DNS records are correct
- Wait 24-48 hours for full propagation
- Clear browser cache

### SSL Certificate issues
- Wait 30 minutes after DNS propagation
- Check platform dashboard for SSL status
- Contact support if not auto-provisioned

### Email not working
- Verify MX records are correct
- Check SPF and DKIM records
- Test with mail-tester.com
- Allow 24 hours for email DNS propagation

---

## Recommended Setup

**For Stratora Consulting, I recommend:**

1. **Hosting:** Netlify (simpler, works great for your needs)
2. **Email:** Google Workspace (professional, reliable)
3. **Domain:** Purchase from Namecheap or Cloudflare

**Total Monthly Cost:**
- Domain: ~$12/year (~$1/month)
- Email: $6/month (Google Workspace)
- Hosting: Free (Netlify)
- **Total: ~$7/month**

---

## Support Contacts

**Netlify Support:**
- https://answers.netlify.com
- support@netlify.com

**Vercel Support:**
- https://vercel.com/support
- support@vercel.com

**Domain Registrar:**
- Check your registrar's support page

---

## Current Configuration

**Brand:** Stratora Consulting
**Email:** hello@stratoraconsulting.com
**Domain:** stratoraconsulting.com (to be configured)
**Tagline:** Clarity. Structure. Delivery.

**Deployment URLs (temporary):**
- Netlify: https://strativa.netlify.app
- Vercel: https://the-strativa.vercel.app

Once domain is connected, these will redirect to stratoraconsulting.com
