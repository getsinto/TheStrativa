# Testing Checklist for The Strativa Website

## ⚠️ IMPORTANT: Manual Testing Required

Due to system limitations, please run these tests manually after setting up the environment.

---

## 🔧 SETUP STEPS

### 1. Install Dependencies
```bash
npm install
```

Expected output: All packages installed successfully without errors.

### 2. Create Environment File
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your values:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
RESEND_API_KEY=your-resend-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Type Check
```bash
npx tsc --noEmit
```

Expected: No TypeScript errors.

### 4. Run Build
```bash
npm run build
```

Expected: Build completes successfully with no errors.

---

## 🧪 RUNTIME TESTS

### Test 1: Development Server
```bash
npm run dev
```

**Check:**
- ✅ Server starts on http://localhost:3000
- ✅ No console errors in terminal
- ✅ Homepage loads without errors

### Test 2: Homepage (/)
**Navigate to:** http://localhost:3000

**Check:**
- ✅ Hero section displays with logo and heading
- ✅ All 6 sections render correctly
- ✅ Animations trigger on scroll
- ✅ Navigation bar is fixed at top
- ✅ Footer displays at bottom
- ✅ No console errors in browser DevTools

### Test 3: About Page (/about)
**Navigate to:** http://localhost:3000/about

**Check:**
- ✅ Page loads without errors
- ✅ All 6 sections render
- ✅ Leadership cards display with monograms
- ✅ Sticky sidebar works on desktop
- ✅ Mobile responsive layout works

### Test 4: Services Page (/services)
**Navigate to:** http://localhost:3000/services

**Check:**
- ✅ Page loads with static fallback data
- ✅ All 3 services display
- ✅ Alternating layout (even/odd) works
- ✅ Decorative numbers display correctly
- ✅ CTA section at bottom renders

### Test 5: Case Studies Index (/case-studies)
**Navigate to:** http://localhost:3000/case-studies

**Check:**
- ✅ Page loads with static fallback data
- ✅ Grid of 3 case studies displays
- ✅ Cards are clickable
- ✅ Hover effects work
- ✅ Dates format correctly

### Test 6: Case Study Detail (/case-studies/erp-programme-closure)
**Navigate to:** http://localhost:3000/case-studies/erp-programme-closure

**Check:**
- ✅ Page loads without errors
- ✅ Breadcrumb navigation works
- ✅ Challenge, Approach, Outcome sections display
- ✅ Numbered list in Approach section renders
- ✅ "Next case study" link works (if available)
- ✅ "Back to Case Studies" link works

### Test 7: Insights Index (/insights)
**Navigate to:** http://localhost:3000/insights

**Check:**
- ✅ Page loads with static fallback data
- ✅ Grid of 3 insights displays
- ✅ Pull quotes display correctly
- ✅ Cards are clickable
- ✅ Dates format correctly

### Test 8: Insight Detail (/insights/ready-with-conditions)
**Navigate to:** http://localhost:3000/insights/ready-with-conditions

**Check:**
- ✅ Page loads without errors
- ✅ Breadcrumb navigation works
- ✅ Article content displays with proper formatting
- ✅ Pull quote section renders centered
- ✅ "More from Strativa" section shows other articles
- ✅ "Back to Insights" link works

### Test 9: Contact Page (/contact)
**Navigate to:** http://localhost:3000/contact

**Check:**
- ✅ Page loads without errors
- ✅ Form displays with all fields
- ✅ Two-column layout (form 60%, info 40%)

**Form Validation Tests:**
1. Try submitting empty form
   - ✅ Error messages appear for all required fields
   
2. Enter name with 1 character
   - ✅ Error: "Name must be at least 2 characters"
   
3. Enter invalid email (e.g., "test")
   - ✅ Error: "Please enter a valid email address"
   
4. Enter message with 5 characters
   - ✅ Error: "Message must be at least 10 characters"
   
5. Fill all fields correctly and submit
   - ✅ Submit button shows loading state
   - ✅ Success message displays with checkmark animation
   - ✅ Form resets after success
   
6. Try submitting again immediately
   - ✅ Button is disabled during submission (no double-submit)

### Test 10: Sanity Studio (/studio)
**Navigate to:** http://localhost:3000/studio

**Check:**
- ✅ Sanity Studio loads
- ✅ Login screen appears (if not authenticated)
- ✅ After login, desk structure shows all content types
- ✅ Can navigate between sections

---

## 📱 MOBILE RESPONSIVENESS TESTS

Test on these viewport sizes (use Chrome DevTools):

### 320px (iPhone SE)
- ✅ Text is readable (no overflow)
- ✅ Navigation collapses to hamburger
- ✅ Hero text scales down appropriately
- ✅ All grids stack to single column
- ✅ Contact form is full-width
- ✅ Footer stacks vertically

### 375px (iPhone 12/13)
- ✅ All content displays correctly
- ✅ No horizontal scroll

### 768px (iPad)
- ✅ Navigation switches from hamburger to full menu
- ✅ Grids display in 2 columns where appropriate
- ✅ Contact form maintains 60/40 split

### 1024px (Desktop)
- ✅ All desktop layouts active
- ✅ Sticky sidebars work (About page)
- ✅ Full navigation visible

### 1440px+ (Large Desktop)
- ✅ Content centered with max-width
- ✅ No excessive whitespace

---

## ♿ ACCESSIBILITY TESTS

### Keyboard Navigation
1. Press Tab repeatedly
   - ✅ Focus moves through all interactive elements
   - ✅ Focus indicator is visible (teal outline)
   - ✅ Skip to main content works
   
2. On navigation menu
   - ✅ Can navigate all links with Tab
   - ✅ Can activate links with Enter
   
3. On contact form
   - ✅ Can tab through all fields
   - ✅ Can submit with Enter

### Screen Reader Test (Optional)
Use NVDA (Windows) or VoiceOver (Mac):
- ✅ Page title is announced
- ✅ Headings are announced correctly
- ✅ Form labels are associated with inputs
- ✅ Error messages are announced
- ✅ Navigation landmarks are identified

### Color Contrast
Use browser DevTools or WebAIM Contrast Checker:
- ✅ Body text (#525250) on white: Passes WCAG AA
- ✅ Teal (#2F5D62) on white: Passes WCAG AA
- ✅ Bronze (#A89F91) used only for decorative elements

---

## 🎨 ANIMATION TESTS

### Scroll Animations
1. Scroll down homepage slowly
   - ✅ Sections fade up as they enter viewport
   - ✅ Staggered animations work (services grid)
   - ✅ Animations trigger once (not on every scroll)

### Reduced Motion
1. Enable "Reduce motion" in OS settings
2. Reload page
   - ✅ Animations are instant (no transitions)
   - ✅ Page is still functional

### Navigation Animations
1. Click hamburger menu on mobile
   - ✅ Menu slides in from right
   - ✅ Backdrop fades in
   - ✅ Hamburger icon animates to X
   
2. Click outside menu
   - ✅ Menu slides out
   - ✅ Backdrop fades out

---

## 🚀 PERFORMANCE TESTS

### Lighthouse Audit
Run in Chrome DevTools (Incognito mode):

```bash
# Or use CLI
npx lighthouse http://localhost:3000 --view
```

**Target Scores:**
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100

### Network Tab
1. Open DevTools Network tab
2. Reload page
   - ✅ No failed requests (404s)
   - ✅ Fonts load from next/font
   - ✅ No external CSS files (all in JS bundle)

---

## 🔍 CONSOLE ERROR CHECK

Open browser DevTools Console on each page:

**Expected:** No errors (red messages)
**Acceptable:** Warnings about missing Sanity data (if not configured)

---

## 📊 BUILD TESTS

### Production Build
```bash
npm run build
```

**Check output for:**
- ✅ All pages compile successfully
- ✅ No TypeScript errors
- ✅ Static pages generated:
  - / (homepage)
  - /about
  - /services
  - /case-studies
  - /case-studies/[slug] (3 pages)
  - /insights
  - /insights/[slug] (3 pages)
  - /contact
  - /studio

### Start Production Server
```bash
npm run start
```

**Check:**
- ✅ Server starts on http://localhost:3000
- ✅ All pages load correctly
- ✅ No console errors

---

## 🐛 COMMON ISSUES & FIXES

### Issue: "Module not found" errors
**Fix:** Run `npm install` again

### Issue: Sanity data not loading
**Fix:** Check `.env.local` has correct Sanity credentials

### Issue: Contact form not sending emails
**Fix:** Check `RESEND_API_KEY` in `.env.local`

### Issue: TypeScript errors
**Fix:** Run `npm install` to ensure all type definitions are installed

### Issue: Build fails
**Fix:** 
1. Delete `.next` folder
2. Run `npm run build` again

---

## ✅ FINAL CHECKLIST

Before deploying to production:

- [ ] All tests above pass
- [ ] No console errors on any page
- [ ] Build completes successfully
- [ ] Environment variables configured
- [ ] Sanity Studio accessible
- [ ] Contact form sends emails
- [ ] Mobile responsive on all breakpoints
- [ ] Keyboard navigation works
- [ ] Lighthouse scores meet targets
- [ ] All links work (no 404s)

---

## 📝 NOTES

1. **Static Fallback Data**: The app includes static fallback data for all Sanity content, so it will work even without Sanity configured.

2. **Email Sending**: Contact form requires valid `RESEND_API_KEY` to send emails. Without it, form will show error but app won't crash.

3. **Sanity Studio**: Requires valid Sanity credentials to access. Without them, `/studio` will show login screen.

4. **Environment Variables**: App will run without env vars but some features won't work (email, CMS).

---

## 🎯 EXPECTED BEHAVIOR

**With Environment Variables:**
- ✅ Full functionality
- ✅ CMS content loads from Sanity
- ✅ Contact form sends emails

**Without Environment Variables:**
- ✅ App runs successfully
- ✅ Static fallback content displays
- ✅ Contact form shows error (but doesn't crash)
- ✅ Sanity Studio shows login screen

---

## 🔧 MANUAL FIX REQUIRED IF ERRORS FOUND

If you encounter any errors during testing, please report them with:
1. Page URL where error occurred
2. Error message from console
3. Steps to reproduce
4. Browser and device information

I will provide immediate fixes for any issues found.
