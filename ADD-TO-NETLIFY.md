# Fix Netlify Studio Redirect Loop

## The Problem
The `/studio` redirect loop happens because:
1. Netlify needs environment variables
2. There was a redirect rule causing issues

## The Fix

### Step 1: Add Environment Variables to Netlify

1. Go to your Netlify dashboard: https://app.netlify.com/
2. Select your site: "strativa"
3. Go to: **Site settings** → **Environment variables**
4. Click **Add a variable** → **Add a single variable**

Add these 3 variables:

**Variable 1:**
- Key: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Value: `52h1havb`
- Scopes: Check all (Builds, Functions, Post-processing)
- Click "Create variable"

**Variable 2:**
- Key: `NEXT_PUBLIC_SANITY_DATASET`
- Value: `production`
- Scopes: Check all
- Click "Create variable"

**Variable 3:**
- Key: `NEXT_PUBLIC_SITE_URL`
- Value: `https://strativa.netlify.app`
- Scopes: Check all
- Click "Create variable"

**Variable 4 (Optional):**
- Key: `SANITY_API_TOKEN`
- Value: `skSjoaiEXGvUCtYJtjt5kCSzpopAhMOKRcfC2raT2OI3C8O90WFSZ7dAOht4dpIRDNy16S2AZHV6IkcZgo4knCqXrfjm1pfXTERy7FJmAXCnBE3NvoUhEMUnb73UfUjsnrgTmcXhIXx4VuPLlGoTjliLSapR43bHdle7v9py8ZcE4uflT423`
- Scopes: Check all
- Click "Create variable"

### Step 2: Commit and Push the Fixed netlify.toml

The redirect rule has been removed. Now commit and push:

```bash
git add netlify.toml ADD-TO-NETLIFY.md
git commit -m "Fix Netlify studio redirect loop"
git push
```

### Step 3: Trigger a Redeploy

After pushing:
1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** → **Deploy site**
3. Wait 1-2 minutes for deployment

### Step 4: Clear Browser Cache

The redirect loop might be cached in your browser:

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete`
2. Select "Cookies and other site data"
3. Select "Cached images and files"
4. Click "Clear data"

**Or use Incognito/Private mode:**
- Open a new incognito window
- Visit: https://strativa.netlify.app/studio

### Step 5: Test

Visit: https://strativa.netlify.app/studio

You should now see the Sanity Studio login page!

## Alternative: Access Studio Locally

If Netlify still has issues, you can always use Studio locally:

```bash
npm run dev
```

Then visit: http://localhost:3000/studio

Any content you add will sync to Netlify automatically!

## Troubleshooting

### Still seeing redirect loop?

1. **Clear ALL browser data for the site:**
   - Go to: chrome://settings/content/all
   - Search for "strativa.netlify.app"
   - Click "Remove" on all entries
   - Try again

2. **Try a different browser:**
   - Firefox, Safari, or Edge
   - Or use incognito mode

3. **Check environment variables:**
   - Make sure all 3 variables are added
   - Make sure there are no typos
   - Make sure "Builds" scope is checked

4. **Wait for deployment:**
   - After adding variables, wait for new deployment
   - Check Deploys tab for "Published" status

### Studio loads but can't sign in?

- Make sure you're using the correct Sanity account
- Check that Project ID is correct: `52h1havb`
- Try signing out of Sanity and back in

### Content not showing?

- Make sure you clicked "Publish" in Studio
- Wait a few seconds for CDN to update
- Try refreshing the page

## What Changed

I removed this redirect rule from netlify.toml:
```toml
[[redirects]]
  from = "/studio"
  to = "/studio/"
  status = 301
  force = true
```

This was causing the redirect loop. Next.js handles the `/studio` route automatically.

## Next Steps

1. Add environment variables to Netlify
2. Commit and push the fixed netlify.toml
3. Wait for deployment
4. Clear browser cache
5. Visit `/studio` - it should work!

## Using Studio

Once it's working:
- Sign in with your Sanity account
- Click "Case Study" to add case studies
- Click "Insight" to add blog posts
- Click "Publish" to make content live
- Content appears on your site immediately!

## Need Help?

If you're still stuck:
1. Share a screenshot of the error
2. Share your Netlify environment variables page (hide the values)
3. I'll help you debug!
