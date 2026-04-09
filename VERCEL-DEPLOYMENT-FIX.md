# Fix Vercel 404 Deployment Error

## The Issue
You're getting a 404 NOT_FOUND error on Vercel deployment. This typically happens due to:
1. Missing environment variables
2. Build configuration issues
3. Missing vercel.json configuration

## Solution

### Step 1: Add Environment Variables to Vercel

Go to your Vercel project settings and add these environment variables:

**Required:**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**Optional (for contact form):**
```
RESEND_API_KEY=your-resend-api-key
```

**How to add them:**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable for Production, Preview, and Development

### Step 2: Verify vercel.json

I've created a `vercel.json` file with the correct configuration. Make sure it's committed to your repository.

### Step 3: Check Build Settings in Vercel

In your Vercel project settings:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (or leave empty for auto-detect)
- **Output Directory:** `.next` (or leave empty for auto-detect)
- **Install Command:** `npm install` (or leave empty for auto-detect)

### Step 4: Redeploy

After adding environment variables:

**Option A: Redeploy from Vercel Dashboard**
1. Go to Deployments tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"

**Option B: Push a new commit**
```bash
git add vercel.json VERCEL-DEPLOYMENT-FIX.md
git commit -m "Add Vercel configuration"
git push
```

### Step 5: Check Build Logs

If it still fails:
1. Go to your deployment in Vercel
2. Click on the failed deployment
3. Check the "Build Logs" tab
4. Look for specific error messages

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution:** Make sure all dependencies are in package.json and run:
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Issue: Environment variables not working
**Solution:** 
- Make sure variable names match exactly (case-sensitive)
- Redeploy after adding variables
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser

### Issue: Sanity connection fails
**Solution:**
- Verify your Sanity project ID is correct
- Check that your Sanity dataset exists
- The app will fall back to static data if Sanity fails

### Issue: Build succeeds but pages show 404
**Solution:**
- Check that app/page.tsx exists
- Verify all dynamic routes have proper folder structure
- Make sure there are no TypeScript errors

## Test Locally First

Before deploying, test the production build locally:

```bash
npm run build
npm run start
```

Visit http://localhost:3000 and check if everything works.

## Your App Structure

Your app uses:
- **Next.js 14.2.18** with App Router
- **Static data fallback** - works without Sanity
- **Dynamic routes** for case studies and insights
- **API route** for contact form (requires RESEND_API_KEY)

## What Should Work Without Environment Variables

These pages will work even without Sanity configured:
- Homepage (/)
- About (/about)
- Services (/services)
- Case Studies (/case-studies)
- Individual case studies (static data)
- Insights (/insights)
- Individual insights (static data)

Only the contact form requires RESEND_API_KEY to actually send emails.

## Next Steps

1. Add environment variables to Vercel
2. Commit and push vercel.json
3. Redeploy
4. Check the deployment URL

If you still see 404, share the build logs and I'll help debug further.
