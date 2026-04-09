# Quick Fix for Vercel 404 Error

## Most Likely Cause: Missing Environment Variables

### Fix in 3 Steps:

**1. Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: TheStrativa

**2. Add Environment Variables**
   - Go to: Settings → Environment Variables
   - Add these (minimum required):

   ```
   Name: NEXT_PUBLIC_SANITY_PROJECT_ID
   Value: (leave empty or use a placeholder like "placeholder")
   
   Name: NEXT_PUBLIC_SANITY_DATASET  
   Value: production
   
   Name: NEXT_PUBLIC_SITE_URL
   Value: https://your-project.vercel.app
   ```

   - Select: Production, Preview, Development (all three)
   - Click "Save"

**3. Redeploy**
   - Go to: Deployments tab
   - Find the latest deployment
   - Click the three dots (•••)
   - Click "Redeploy"
   - Wait for deployment to complete

## Why This Happens

Your app tries to connect to Sanity CMS on build. Without the environment variables, the build might fail or produce an incomplete deployment.

The good news: Your app has static fallback data, so it will work even without a real Sanity connection.

## Alternative: Push New Code

If you want to commit the vercel.json file I created:

```bash
git add vercel.json VERCEL-DEPLOYMENT-FIX.md VERCEL-QUICK-FIX.md
git commit -m "Add Vercel configuration"
git push
```

This will trigger a new deployment automatically.

## Check If It Worked

After redeploying, visit your Vercel URL. You should see:
- ✅ Homepage with hero section
- ✅ Navigation menu working
- ✅ Case studies page with 3 case studies
- ✅ All pages loading correctly

## Still Getting 404?

If you still see 404 after adding environment variables and redeploying:

1. Check the deployment logs in Vercel
2. Look for any red error messages
3. Share the error message with me

The 404 error code `NOT_FOUND` usually means the deployment didn't complete successfully, not that a page is missing.
