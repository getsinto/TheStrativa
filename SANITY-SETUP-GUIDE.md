# How to Connect with Sanity CMS

## What is Sanity?

Sanity is a headless CMS that will let you manage your content (case studies, insights, services) through a web interface instead of editing code.

## Current Status

✅ Your app already has Sanity configured with static fallback data
✅ Your app works without Sanity (using static data)
✅ Sanity Studio is built into your app at `/studio`

## Option 1: Create a New Sanity Project (Recommended)

### Step 1: Sign Up for Sanity

1. Go to: https://www.sanity.io/
2. Click "Get Started" or "Sign Up"
3. Sign up with GitHub, Google, or Email
4. It's FREE for small projects

### Step 2: Create a New Project

1. After signing in, click "Create New Project"
2. Project Name: `The Strativa`
3. Dataset: `production` (default)
4. Click "Create Project"

### Step 3: Get Your Project ID

After creating the project, you'll see:
- **Project ID**: Something like `abc123xyz` (copy this!)
- **Dataset**: `production`

### Step 4: Add Environment Variables Locally

Create a `.env.local` file in your project root:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token-here

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Resend (optional - for contact form)
RESEND_API_KEY=your-resend-key-here
```

Replace `abc123xyz` with your actual Project ID from Sanity.

### Step 5: Add Environment Variables to Vercel

1. Go to: https://vercel.com/getsinto/the-strativa/settings/environment-variables
2. Update the existing variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `your-actual-project-id`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SITE_URL` = `https://the-strativa.vercel.app`
3. Click Save
4. Redeploy

### Step 6: Add Environment Variables to Netlify (if using)

1. Go to your Netlify site settings
2. Build & Deploy → Environment Variables
3. Add the same variables as above

### Step 7: Access Sanity Studio

**Locally:**
1. Run: `npm run dev`
2. Visit: http://localhost:3000/studio
3. Sign in with your Sanity account
4. Start adding content!

**On Vercel/Netlify:**
1. Visit: https://the-strativa.vercel.app/studio
2. Sign in with your Sanity account
3. Manage content from anywhere!

## Option 2: Use Existing Static Data (No Setup Required)

Your app already works with static data! You don't need Sanity if you're okay with:
- Editing content in code files
- Deploying to update content
- No admin interface

The static data is in:
- `app/case-studies/[slug]/page.tsx` - Case studies
- `app/insights/[slug]/page.tsx` - Insights (you'll need to check this file)

## What You Can Manage in Sanity

Once connected, you can manage:
- ✅ Case Studies
- ✅ Insights (blog posts)
- ✅ Services
- ✅ Team Members
- ✅ Site Settings

## Sanity Studio Features

Your Sanity Studio includes:
- Rich text editor
- Image uploads
- SEO fields
- Publishing workflow
- Content preview

## Get Your Sanity API Token (Optional - for write access)

1. Go to: https://www.sanity.io/manage
2. Select your project
3. Go to "API" tab
4. Click "Add API Token"
5. Name: `Production Token`
6. Permissions: `Editor` or `Administrator`
7. Copy the token
8. Add to `.env.local` as `SANITY_API_TOKEN`

## Testing the Connection

After setting up:

1. **Run locally:**
   ```bash
   npm run dev
   ```

2. **Visit Studio:**
   ```
   http://localhost:3000/studio
   ```

3. **Add a test case study:**
   - Click "Case Study" in the sidebar
   - Click "Create new"
   - Fill in the fields
   - Click "Publish"

4. **View on your site:**
   ```
   http://localhost:3000/case-studies
   ```

Your new case study should appear!

## Troubleshooting

### "Invalid Project ID"
- Make sure you copied the correct Project ID from Sanity
- Check that there are no spaces or extra characters
- The ID should be alphanumeric

### "Dataset not found"
- Make sure the dataset is named `production`
- You can check/create datasets in Sanity dashboard

### Studio won't load
- Make sure you're signed in to Sanity
- Check that environment variables are set correctly
- Try clearing browser cache

### Content not showing on site
- Make sure you clicked "Publish" in Sanity Studio
- Wait a few seconds for CDN to update
- Try refreshing the page

## Cost

Sanity is FREE for:
- Up to 3 users
- 100,000 API requests/month
- 10GB bandwidth
- 5GB assets

This is more than enough for your site!

## Do You Need Sanity?

**Use Sanity if:**
- ✅ You want a user-friendly admin interface
- ✅ Non-technical people need to update content
- ✅ You want to update content without deploying
- ✅ You want image management and rich text editing

**Skip Sanity if:**
- ✅ You're comfortable editing code
- ✅ You're the only one updating content
- ✅ You don't mind deploying to update content
- ✅ Your content doesn't change often

Your app works perfectly either way!

## Next Steps

1. Decide if you want to use Sanity or stick with static data
2. If using Sanity:
   - Create a Sanity account
   - Get your Project ID
   - Update environment variables
   - Access the Studio at `/studio`
3. If not using Sanity:
   - Keep using the static data
   - Just update the environment variables in Vercel to fix the 404

## Quick Start Commands

```bash
# Create .env.local file
echo "NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id" > .env.local
echo "NEXT_PUBLIC_SANITY_DATASET=production" >> .env.local
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" >> .env.local

# Run development server
npm run dev

# Visit Studio
# Open: http://localhost:3000/studio
```

## Need Help?

If you get stuck:
1. Check the Sanity documentation: https://www.sanity.io/docs
2. Share the error message with me
3. I can help you troubleshoot!
