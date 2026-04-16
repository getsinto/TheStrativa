# Fix 404 Error on Case Study Pages

## The Issue
You're seeing 404 errors when visiting case study detail pages like:
- `localhost:3001/case-studies/erp-programme-closure`
- `localhost:3001/case-studies/lessons-learned-survey-design`
- `localhost:3001/case-studies/go-live-readiness`

## Why This Happens
Your browser has **cached the old 404 response**. The pages are actually working now, but your browser is showing you the cached error page.

## Solution: Clear Browser Cache

### Option 1: Hard Refresh (Recommended)
**Windows/Linux:**
- Press `Ctrl + Shift + R` or `Ctrl + F5`

**Mac:**
- Press `Cmd + Shift + R`

This forces the browser to reload the page without using cache.

### Option 2: Clear Cache in Browser Settings
**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Select "Cached images and files"
3. Click "Clear data"

**Firefox:**
1. Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
2. Select "Cache"
3. Click "Clear Now"

### Option 3: Use Incognito/Private Window
1. Open a new incognito/private window
2. Visit `localhost:3001/case-studies/erp-programme-closure`
3. The page should load correctly

### Option 4: Restart Dev Server
1. Stop the dev server (Ctrl + C in terminal)
2. Delete the `.next` folder: `Remove-Item -Recurse -Force .next`
3. Start dev server again: `npm run dev`
4. Hard refresh the page (Ctrl + Shift + R)

## Verification
After clearing cache, you should see:
- ✅ Case study detail pages load correctly
- ✅ All content displays properly
- ✅ Navigation works between case studies

## Technical Details
The pages are configured with:
- `dynamicParams = true` - Allows on-demand page generation
- `revalidate = 60` - Pages refresh every 60 seconds
- Fallback to static data when Sanity is unavailable

The build shows 3 case studies are pre-generated:
- erp-programme-closure
- lessons-learned-survey-design
- go-live-readiness

Additional case studies (from-chaos-to-control, website-delivery) will be generated on-demand when first visited.

## Still Having Issues?
If the problem persists after clearing cache:
1. Check the browser console for errors (F12 → Console tab)
2. Check the terminal for server errors
3. Verify the dev server is running on port 3001
4. Try a different browser
