# Sanity Webhook Setup Guide

This guide will help you set up automatic revalidation when you update content in Sanity.

## What We Fixed

1. **Reduced revalidation time** from 1 hour (3600s) to 1 minute (60s)
2. **Disabled CDN caching** (`useCdn: false`) to get fresh data
3. **Created revalidate API endpoint** for instant updates via webhooks
4. **Enabled dynamic params** for case study pages to handle new content
5. **Added error logging** for better debugging

## Step 1: Add Environment Variable

Add this to your `.env.local` file and Vercel environment variables:

```env
REVALIDATE_SECRET=your-secret-key-here-make-it-random-and-secure
```

Generate a secure random string for the secret. You can use this command:
```bash
openssl rand -base64 32
```

## Step 2: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `REVALIDATE_SECRET`
   - **Value**: (the same secret from your .env.local)
   - **Environments**: Production, Preview, Development

## Step 3: Set Up Sanity Webhook

1. Go to your Sanity project dashboard: https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **Webhooks**
4. Click **Create webhook**
5. Configure the webhook:

### Webhook Configuration

**Name**: `Vercel Revalidation`

**URL**: 
```
https://your-domain.com/api/revalidate?secret=YOUR_REVALIDATE_SECRET
```
Replace:
- `your-domain.com` with your actual domain (e.g., `stratoraconsulting.com`)
- `YOUR_REVALIDATE_SECRET` with your actual secret

**Dataset**: `production` (or your dataset name)

**Trigger on**: 
- ✅ Create
- ✅ Update  
- ✅ Delete

**Filter** (optional - leave empty to revalidate on all changes):
```groq
_type in ["caseStudy", "insight", "service"]
```

**HTTP method**: `POST`

**API version**: `v2021-03-25` (or latest)

**Include drafts**: ❌ (unchecked)

## Step 4: Test the Webhook

### Test from Sanity Dashboard

1. After creating the webhook, click **Test webhook**
2. You should see a success response with revalidated paths

### Test Manually

You can test the endpoint directly:

```bash
curl -X POST "https://your-domain.com/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"_type":"caseStudy","slug":{"current":"test"}}'
```

### Test by Updating Content

1. Go to your Sanity Studio
2. Edit any case study, insight, or service
3. Click **Publish**
4. Wait 1-2 seconds
5. Visit your website - the changes should appear immediately!

## How It Works

### Without Webhook (Current Behavior)
- You update content in Sanity
- Changes appear after 60 seconds (ISR revalidation)
- OR you manually redeploy on Vercel

### With Webhook (New Behavior)
- You update content in Sanity
- Sanity sends a webhook to your site
- Your site immediately revalidates the affected pages
- Changes appear within 1-2 seconds! ⚡

## Revalidation Strategy

The API endpoint revalidates pages based on content type:

### Case Study Updates
- `/case-studies` (listing page)
- `/case-studies/[slug]` (specific case study)
- `/` (homepage - featured work section)

### Insight Updates
- `/insights` (listing page)
- `/insights/[slug]` (specific insight)

### Service Updates
- `/services` (services page)

### Other Updates
- All main pages are revalidated

## Troubleshooting

### Webhook Not Working

1. **Check the secret**: Make sure it matches in both Vercel and Sanity
2. **Check the URL**: Ensure it's your production domain
3. **Check Vercel logs**: Go to Vercel → Deployments → Functions → Check logs
4. **Check Sanity webhook logs**: In Sanity dashboard → API → Webhooks → Click your webhook → View logs

### Changes Still Not Appearing

1. **Clear browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
2. **Check ISR is working**: Wait 60 seconds and refresh
3. **Check Sanity connection**: Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
4. **Redeploy**: Sometimes a fresh deployment helps

### 404 on Case Study Pages

This should now be fixed with `dynamicParams = true`. If you still see 404s:

1. Wait 60 seconds for ISR to pick up new content
2. Or trigger the webhook manually
3. Check that the slug in Sanity matches the URL

## Benefits

✅ **Instant updates** - See changes within seconds
✅ **No manual redeployment** needed
✅ **Better content workflow** for your team
✅ **Automatic cache invalidation**
✅ **Works with preview mode** (if you set it up)

## Next Steps (Optional)

### Add Preview Mode

You can also set up Sanity preview mode to see draft content before publishing:
https://www.sanity.io/docs/preview-content-on-site

### Monitor Webhook Activity

Check your Sanity webhook logs regularly to ensure everything is working smoothly.

---

**Questions?** Check the Sanity webhook documentation: https://www.sanity.io/docs/webhooks
