# 🔧 Clear Next.js Cache

## Problem
Next.js is still looking for the old `next.config.ts` file because it's cached in the `.next` folder.

## Solution
Clear the cache and rebuild.

---

## Option 1: Use the Batch File (Easiest)

Double-click: `clear-cache-and-run.bat`

This will:
1. Delete the `.next` folder
2. Run `npm run dev`

---

## Option 2: Manual Commands

Open Command Prompt and run:

```cmd
rmdir /s /q .next
npm run dev
```

---

## Option 3: Step by Step

### Step 1: Delete Cache Folder
```cmd
rmdir /s /q .next
```

### Step 2: Run Dev Server
```cmd
npm run dev
```

**Expected:** Server starts successfully on http://localhost:3000

---

## ✅ Success Indicators

You'll see:
```
  ▲ Next.js 15.1.6
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in X.Xs
```

Then open: http://localhost:3000

---

## 🎯 After Cache is Cleared

The app should:
- ✅ Start without errors
- ✅ Load homepage at http://localhost:3000
- ✅ All pages work correctly

---

## 📝 Why This Happened

Next.js caches the configuration in the `.next` folder. When we renamed `next.config.ts` to `next.config.mjs`, the cache still referenced the old file. Deleting the cache forces Next.js to read the new config file.

---

## 🚀 Next Steps

After the dev server starts:

1. Open http://localhost:3000
2. Test all pages (see TESTING-CHECKLIST.md)
3. Check browser console for errors (F12)
4. Test contact form validation
5. Test mobile responsiveness

---

## ❌ If You Still See Errors

If you still see the same error after clearing cache:

1. Make sure you're in the correct directory:
   ```cmd
   cd C:\Users\shahi\OneDrive\Desktop\pro\tr
   ```

2. Verify the files:
   ```cmd
   dir next.config.*
   ```
   
   Should show:
   - `next.config.mjs` ✅
   - NOT `next.config.ts` ❌

3. If `next.config.ts` still exists, delete it manually:
   ```cmd
   del next.config.ts
   ```

4. Clear cache again:
   ```cmd
   rmdir /s /q .next
   npm run dev
   ```

---

## 💡 Quick Fix Command

Copy and paste this entire command:
```cmd
rmdir /s /q .next && npm run dev
```

This will clear cache and start the server in one command.
