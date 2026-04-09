# CRITICAL: Fix Vercel 404 Error

## The Problem
Your site is deployed but showing 404 because **environment variables are missing**.

## THE FIX (Follow These Exact Steps)

### Step 1: Go to Vercel Environment Variables Page

**Direct Link:** https://vercel.com/getsinto/the-strativa/settings/environment-variables

Or manually:
1. Go to https://vercel.com/dashboard
2. Click on "the-strativa" project
3. Click "Settings" tab
4. Click "Environment Variables" in the left sidebar

### Step 2: Add These 3 Variables

**Variable 1:**
- Click "Add New" button
- Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Value: `placeholder`
- Environment: Check ALL THREE boxes (Production, Preview, Development)
- Click "Save"

**Variable 2:**
- Click "Add New" button again
- Name: `NEXT_PUBLIC_SANITY_DATASET`
- Value: `production`
- Environment: Check ALL THREE boxes (Production, Preview, Development)
- Click "Save"

**Variable 3:**
- Click "Add New" button again
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `https://the-strativa.vercel.app`
- Environment: Check ALL THREE boxes (Production, Preview, Development)
- Click "Save"

### Step 3: Redeploy

After adding ALL THREE variables:

1. Go to "Deployments" tab
2. Find the latest deployment (top of the list)
3. Click the three dots menu (•••) on the right
4. Click "Redeploy"
5. Click "Redeploy" again to confirm
6. Wait 1-2 minutes for deployment to complete

### Step 4: Verify

Once deployment shows "Ready":
- Visit: https://the-strativa.vercel.app
- You should see your homepage!

## Why This Is Required

Next.js apps on Vercel MUST have environment variables defined, even if they're placeholders. Without them:
- ✅ Build succeeds (which is why you see no build errors)
- ❌ Runtime fails (which is why you get 404)

## Screenshot Guide

When adding variables, it should look like this:

```
Name: NEXT_PUBLIC_SANITY_PROJECT_ID
Value: placeholder
☑ Production
☑ Preview  
☑ Development
[Save]
```

## Still Not Working?

If you still see 404 after:
1. Adding all 3 variables
2. Redeploying
3. Waiting for "Ready" status

Then:
1. Take a screenshot of your Environment Variables page
2. Take a screenshot of the 404 error
3. Share both with me

## Alternative: Use Vercel CLI

If the dashboard isn't working, you can add variables via CLI:

```bash
npm i -g vercel
vercel login
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
# Enter: placeholder
# Select: Production, Preview, Development

vercel env add NEXT_PUBLIC_SANITY_DATASET
# Enter: production
# Select: Production, Preview, Development

vercel env add NEXT_PUBLIC_SITE_URL
# Enter: https://the-strativa.vercel.app
# Select: Production, Preview, Development

vercel --prod
```

## Important Notes

- You MUST add all 3 variables
- You MUST select all 3 environments for each
- You MUST redeploy after adding them
- The values I provided are correct (use exactly as shown)

## What Happens Next

After adding variables and redeploying:
- ✅ Homepage will load
- ✅ All pages will work
- ✅ Navigation will work
- ✅ Case studies will display (using static data)
- ✅ Insights will display (using static data)
- ⚠️ Contact form won't send emails (needs RESEND_API_KEY - optional)

Your site will be fully functional with the static fallback data!
