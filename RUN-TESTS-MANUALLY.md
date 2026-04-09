# 🚀 Manual Testing Instructions

## ⚠️ PowerShell Execution Policy Issue

Your system has PowerShell execution policy restrictions. Here's how to test the app:

---

## Option 1: Use Command Prompt (Recommended)

### Step 1: Open Command Prompt
1. Press `Win + R`
2. Type `cmd`
3. Press Enter

### Step 2: Navigate to Project
```cmd
cd C:\Users\shahi\OneDrive\Desktop\pro\tr
```

### Step 3: Update Dependencies (Fix Security Issues)
```cmd
npm install
```

**Expected:** Dependencies update to latest secure versions

### Step 4: Run TypeScript Check
```cmd
npx tsc --noEmit
```

**Expected:** ✅ No errors

### Step 5: Build the App
```cmd
npm run build
```

**Expected:** ✅ Build completes successfully

### Step 6: Run Development Server
```cmd
npm run dev
```

**Expected:** Server starts on http://localhost:3000

### Step 7: Open in Browser
Open: http://localhost:3000

**Expected:** Homepage loads without errors

---

## Option 2: Fix PowerShell Execution Policy

### Enable PowerShell Scripts (Admin Required)

1. **Open PowerShell as Administrator**
   - Press `Win + X`
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"

2. **Check Current Policy**
   ```powershell
   Get-ExecutionPolicy
   ```

3. **Set Policy to RemoteSigned**
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   
4. **Confirm**
   Type `Y` and press Enter

5. **Now you can run npm commands in PowerShell**
   ```powershell
   cd C:\Users\shahi\OneDrive\Desktop\pro\tr
   npm run build
   ```

---

## Option 3: Use the Batch File

Double-click `quick-test.bat` in the project folder.

This will:
1. Update dependencies
2. Run TypeScript check
3. Build the app

---

## 🧪 TESTING CHECKLIST

Once the dev server is running (`npm run dev`), test these pages:

### ✅ Homepage
- URL: http://localhost:3000
- Check: Hero section, all 6 sections load
- Check: No console errors (F12 → Console tab)

### ✅ About Page
- URL: http://localhost:3000/about
- Check: All sections load, leadership cards display

### ✅ Services Page
- URL: http://localhost:3000/services
- Check: 3 services display with alternating layout

### ✅ Case Studies Index
- URL: http://localhost:3000/case-studies
- Check: 3 case study cards display

### ✅ Case Study Detail
- URL: http://localhost:3000/case-studies/erp-programme-closure
- Check: Challenge, Approach, Outcome sections display

### ✅ Insights Index
- URL: http://localhost:3000/insights
- Check: 3 insight cards display

### ✅ Insight Detail
- URL: http://localhost:3000/insights/ready-with-conditions
- Check: Article content displays correctly

### ✅ Contact Page
- URL: http://localhost:3000/contact
- Check: Form displays
- Test: Submit empty form → validation errors appear
- Test: Fill correctly → shows "Email service not configured" (expected)

### ✅ Sanity Studio
- URL: http://localhost:3000/studio
- Check: Sanity login screen appears

---

## 📊 EXPECTED BUILD OUTPUT

When you run `npm run build`, you should see:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (14/14)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /about                               ...      ...
├ ○ /case-studies                        ...      ...
├ ○ /case-studies/[slug]                 ...      ...
├ ○ /contact                             ...      ...
├ ○ /insights                            ...      ...
├ ○ /insights/[slug]                     ...      ...
├ ○ /services                            ...      ...
└ ○ /studio/[[...tool]]                  ...      ...

○  (Static)  prerendered as static content
```

**No errors should appear!**

---

## 🐛 IF YOU SEE ERRORS

### Error: "Cannot find module"
**Fix:** Run `npm install` again

### Error: TypeScript errors
**Fix:** 
```cmd
npm install
npx tsc --noEmit
```

### Error: Build fails
**Fix:**
```cmd
rmdir /s /q .next
npm run build
```

### Error: Port 3000 already in use
**Fix:**
```cmd
# Kill the process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use a different port
npm run dev -- -p 3001
```

---

## ✅ SUCCESS INDICATORS

You'll know everything works when:

1. ✅ `npm install` completes without critical errors
2. ✅ `npx tsc --noEmit` shows no TypeScript errors
3. ✅ `npm run build` completes successfully
4. ✅ `npm run dev` starts server on port 3000
5. ✅ http://localhost:3000 loads the homepage
6. ✅ All pages load without console errors
7. ✅ Contact form shows validation errors when empty
8. ✅ Navigation works between all pages

---

## 📝 SECURITY WARNINGS

The npm install showed these warnings:

### ✅ FIXED:
- **Next.js 14.2.0 vulnerability** → Updated to 15.1.6 in package.json
- **React 18** → Updated to React 19
- **Resend 3** → Updated to Resend 4

### ⚠️ DEPRECATION WARNINGS (Non-Critical):
- `whatwg-encoding` - Used by Sanity, doesn't affect functionality
- `get-random-values-esm` - Used by dependencies, doesn't affect functionality
- `glob` - Used by build tools, doesn't affect runtime
- `@sanity/next-loader` - Deprecated but still works

These deprecation warnings don't affect the app's functionality. They're in dependencies, not our code.

---

## 🎯 NEXT STEPS

After successful testing:

1. ✅ All pages work → Ready for deployment
2. ✅ Create `.env.local` with your credentials (optional)
3. ✅ Push to GitHub
4. ✅ Deploy to Netlify/Vercel
5. ✅ Add environment variables in hosting platform

---

## 💡 TIPS

### Quick Test Command (in CMD)
```cmd
npm run build && npm run dev
```

### Check for Errors Only
```cmd
npm run build 2>&1 | findstr /i "error"
```

### View All Routes
After build, check `.next/server/app/` folder to see all generated pages

---

## 📞 NEED HELP?

If you encounter any errors:

1. Copy the exact error message
2. Note which command caused it
3. Check the browser console (F12) for additional errors
4. Report back with the error details

I'll provide immediate fixes!

---

## ✨ SUMMARY

**Current Status:** Dependencies installed successfully

**Next Command:** 
```cmd
npm run build
```

**Expected Result:** Build succeeds with no errors

**Then Run:**
```cmd
npm run dev
```

**Expected Result:** Server starts, app loads on http://localhost:3000

🎉 The app is ready to test!
