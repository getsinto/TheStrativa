# Fix Vercel 404 - Action Required

## The Problem
Your deployment is showing 404 because Vercel needs environment variables to be set.

## Quick Fix (2 minutes)

### Step 1: Add Environment Variables in Vercel

1. Go to: https://vercel.com/getsinto/the-strativa/settings/environment-variables

2. Add these THREE variables:

**Variable 1:**
```
Name: NEXT_PUBLIC_SANITY_PROJECT_ID
Value: placeholder
Environment: Production, Preview, Development (select all)
```

**Variable 2:**
```
Name: NEXT_PUBLIC_SANITY_DATASET
Value: production
Environment: Production, Preview, Development (select all)
```

**Variable 3:**
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://the-strativa.vercel.app
Environment: Production, Preview, Development (select all)
```

3. Click "Save" for each one

### Step 2: Redeploy

After adding the variables:

**Option A: From Vercel Dashboard**
1. Go to: https://vercel.com/getsinto/the-strativa
2. Click "Deployments" tab
3. Find the latest deployment
4. Click the three dots (•••)
5. Click "Redeploy"
6. Wait 1-2 minutes

**Option B: Push New Code**
```bash
git add next.config.js
git commit -m "Fix Vercel deployment"
git push
```

### Step 3: Test

After redeployment completes, visit:
- https://the-strativa.vercel.app

You should see your homepage!

## Why This Happens

Next.js apps on Vercel need environment variables to be defined, even if they're just placeholders. Without them, the build might succeed but the app won't run properly.

## Alternative: Use .env in Repository (Not Recommended)

If you want to avoid setting variables in Vercel dashboard, you could commit a .env file, but this is NOT recommended for security reasons.

## After It Works

Once your site is live, you can:
1. Add a custom domain in Vercel settings
2. Update NEXT_PUBLIC_SITE_URL to your custom domain
3. Connect to a real Sanity CMS (optional - you have static fallback data)

## Need Help?

If it still doesn't work after adding variables and redeploying:
1. Check the new deployment logs
2. Look for any red error messages
3. Share the error with me
