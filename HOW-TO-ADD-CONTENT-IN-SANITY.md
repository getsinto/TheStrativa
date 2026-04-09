# How to Add Content in Sanity Studio

## Why Your Content Isn't Showing

Your website is fetching from Sanity, but the content you added doesn't match the expected structure. Each content type has specific required fields.

## How to Add Services

### Step 1: Go to Services
1. Visit: https://strativa.netlify.app/studio
2. Click "Service" in the left sidebar
3. Click "Create new" (+ button)

### Step 2: Fill in ALL Required Fields

**Title** (required)
- Example: `Programme Delivery & Coordination`

**Summary** (required)
- Short tagline
- Example: `We bring structure and control to complex programmes.`

**Description** (required)
- Longer explanation
- Example: `Where there is unclear ownership, inconsistent reporting, and fragmented delivery, we introduce clear structure, defined accountability, and coordinated execution.`

**Bullets** (required - add 4 items)
- Click "Add item" for each bullet point
- Example bullets:
  - `Programme tracking and reporting`
  - `RAID management`
  - `Stakeholder coordination`
  - `Delivery oversight`

**Outcome** (required)
- The result/benefit
- Example: `Programmes that move forward with control, not confusion.`

**Order** (required)
- Number for sorting (1, 2, 3, etc.)
- Example: `1`

### Step 3: Publish
- Click "Publish" button (top right)
- Wait a few seconds
- Visit your services page: https://strativa.netlify.app/services

## How to Add Case Studies

### Step 1: Go to Case Studies
1. Click "Case Study" in the left sidebar
2. Click "Create new"

### Step 2: Fill in Required Fields

**Title** (required)
- Example: `ERP Programme Closure`

**Subtitle** (required)
- The tagline
- Example: `A complex ERP programme brought to a controlled, credible closure.`

**Slug** (required)
- Click "Generate" button
- Or type manually: `erp-programme-closure`

**Situation** (required)
- The context
- Example: `A major ERP programme involving multiple suppliers had reached its final stages without a clear understanding of delivery status.`

**Problem** (required - add multiple items)
- Click "Add item" for each problem point
- Examples:
  - `Multiple suppliers.`
  - `Unresolved issues.`
  - `No clear closure position.`

**Intervention** (required - add multiple items)
- Click "Add item" for each intervention point
- Examples:
  - `We stepped in to establish control.`
  - `We reviewed delivery against scope.`

**Outcome** (required - add multiple items)
- Click "Add item" for each outcome point
- Examples:
  - `A clear, evidence-based closure position.`
  - `Leadership were able to make a confident decision.`

**Final Line** (required)
- The closing statement
- Example: `Not a forced ending. A controlled closure.`

**Published At** (required)
- Select a date
- Example: `2024-09-01`

**Featured** (optional)
- Check if you want it featured on homepage

### Step 3: Publish
- Click "Publish"
- Visit: https://strativa.netlify.app/case-studies

## How to Add Insights (Blog Posts)

### Step 1: Go to Insights
1. Click "Insight" in the left sidebar
2. Click "Create new"

### Step 2: Fill in Required Fields

**Title** (required)
- Example: `Ready with Conditions`

**Slug** (required)
- Click "Generate" or type: `ready-with-conditions`

**Excerpt** (required)
- Short summary (2-3 sentences)

**Body** (required)
- Use the rich text editor
- Add paragraphs, headings, lists, etc.

**Published At** (required)
- Select a date

**Featured** (optional)
- Check if you want it featured

### Step 3: Publish
- Click "Publish"
- Visit: https://strativa.netlify.app/insights

## Important Notes

### Content Won't Show If:
- ❌ Required fields are missing
- ❌ Content is saved as "Draft" (not published)
- ❌ Slug is not generated
- ❌ Order field is missing (for services)

### Content Will Show If:
- ✅ All required fields are filled
- ✅ Content is "Published" (not draft)
- ✅ You wait 5-10 seconds after publishing
- ✅ You refresh the page

## Testing Your Content

After publishing:

1. **Wait 5-10 seconds** (for CDN to update)
2. **Refresh your website page**
3. **Clear cache if needed** (Ctrl + Shift + R)
4. **Check in incognito mode** if still not showing

## Troubleshooting

### Content still not showing?

**Check 1: Is it published?**
- Look for green "Published" badge in Studio
- If it says "Draft", click "Publish"

**Check 2: Are all required fields filled?**
- Scroll through the entire form
- Look for red error messages
- Fill in any missing fields

**Check 3: Is the slug correct?**
- For case studies and insights, slug must be unique
- No spaces, use hyphens: `my-case-study`
- Click "Generate" to auto-create

**Check 4: Wait and refresh**
- Wait 10 seconds after publishing
- Hard refresh: Ctrl + Shift + R
- Try incognito mode

**Check 5: Check the console**
- Open browser DevTools (F12)
- Look for any error messages
- Share them with me if you see errors

## Quick Start: Copy Existing Content

The easiest way to add content:

1. **Look at the static data** in your code files
2. **Copy the text** from there
3. **Paste into Sanity Studio** fields
4. **Publish**

The static data is already well-structured and matches what Sanity expects!

## Example: Adding Your First Service

1. Go to Studio → Service → Create new
2. Fill in:
   - Title: `Programme Delivery & Coordination`
   - Summary: `We bring structure and control to complex programmes.`
   - Description: `Where there is unclear ownership, inconsistent reporting, and fragmented delivery, we introduce clear structure, defined accountability, and coordinated execution.`
   - Bullets: (add 4)
     - `Programme tracking and reporting`
     - `RAID management`
     - `Stakeholder coordination`
     - `Delivery oversight`
   - Outcome: `Programmes that move forward with control, not confusion.`
   - Order: `1`
3. Click "Publish"
4. Visit: https://strativa.netlify.app/services
5. Your service should appear!

## Need Help?

If content still isn't showing:
1. Take a screenshot of your Sanity Studio form
2. Take a screenshot of your website
3. Share both with me
4. I'll help you debug!

## Pro Tip

Start by adding just ONE piece of content (one service, one case study) to test that it works. Once you see it on your website, you'll know the process works and can add the rest!
