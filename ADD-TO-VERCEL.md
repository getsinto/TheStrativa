# Add Sanity Environment Variables to Vercel

## Your Sanity Project Details

- **Project ID:** `52h1havb`
- **Dataset:** `production`
- **Token:** (see below)

## Step-by-Step Instructions

### 1. Go to Vercel Environment Variables

**Direct Link:** https://vercel.com/getsinto/the-strativa/settings/environment-variables

### 2. Update/Add These Variables

**Variable 1: NEXT_PUBLIC_SANITY_PROJECT_ID**
- Click "Edit" on existing variable (or "Add New" if not there)
- Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Value: `52h1havb`
- Environment: ☑ Production ☑ Preview ☑ Development
- Click "Save"

**Variable 2: NEXT_PUBLIC_SANITY_DATASET**
- Click "Edit" on existing variable (or "Add New" if not there)
- Name: `NEXT_PUBLIC_SANITY_DATASET`
- Value: `production`
- Environment: ☑ Production ☑ Preview ☑ Development
- Click "Save"

**Variable 3: NEXT_PUBLIC_SITE_URL**
- Click "Edit" on existing variable (or "Add New" if not there)
- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `https://the-strativa.vercel.app`
- Environment: ☑ Production ☑ Preview ☑ Development
- Click "Save"

**Variable 4: SANITY_API_TOKEN** (Optional - for write access)
- Click "Add New"
- Name: `SANITY_API_TOKEN`
- Value: `skSjoaiEXGvUCtYJtjt5kCSzpopAhMOKRcfC2raT2OI3C8O90WFSZ7dAOht4dpIRDNy16S2AZHV6IkcZgo4knCqXrfjm1pfXTERy7FJmAXCnBE3NvoUhEMUnb73UfUjsnrgTmcXhIXx4VuPLlGoTjliLSapR43bHdle7v9py8ZcE4uflT423`
- Environment: ☑ Production ☑ Preview ☑ Development
- Click "Save"

### 3. Redeploy

After adding all variables:
1. Go to "Deployments" tab
2. Click the three dots (•••) on the latest deployment
3. Click "Redeploy"
4. Wait 1-2 minutes

### 4. Test Your Site

Visit: https://the-strativa.vercel.app

You should now see:
- ✅ Homepage loads (no 404!)
- ✅ All pages work
- ✅ Sanity Studio accessible at `/studio`

### 5. Access Sanity Studio

**On Vercel:**
- Visit: https://the-strativa.vercel.app/studio
- Sign in with your Sanity account
- Start managing content!

**Locally:**
- Run: `npm run dev`
- Visit: http://localhost:3000/studio
- Sign in and manage content

## What You Can Do Now

✅ Add/edit case studies in Sanity Studio
✅ Add/edit insights (blog posts)
✅ Manage services
✅ Add team members
✅ Update site settings

All without touching code!

## Important Notes

- The `.env.local` file is already created locally (not committed to git)
- The token is sensitive - never commit it to git
- The `.gitignore` already excludes `.env.local`
- You need to add variables to Vercel manually (they're not synced from git)

## Troubleshooting

**Still seeing 404 on Vercel?**
- Make sure you added ALL 3 required variables (first 3 above)
- Make sure you checked all 3 environments for each
- Make sure you redeployed after adding them
- Wait a few minutes for deployment to complete

**Studio won't load?**
- Make sure you're signed in to Sanity
- Check that Project ID is correct: `52h1havb`
- Try clearing browser cache

**Can't edit content?**
- Make sure you added the SANITY_API_TOKEN
- Check that the token has "Editor" permissions
- Try signing out and back in to Studio

## Next Steps

1. Add the 3 required variables to Vercel (first 3 above)
2. Redeploy
3. Visit your site - the 404 should be gone!
4. Visit `/studio` to start managing content
5. Add your first case study or insight!

## Need Help?

If you get stuck, share:
- Screenshot of your Vercel environment variables page
- Any error messages you see
- I'll help you troubleshoot!
