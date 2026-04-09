# 🔴 CRITICAL: Node.js Version Issue

## Problem
You're using Node.js v25.9.0, which is too new and has breaking changes with:
- ESM module loading on Windows
- Path handling (C:\ vs file://)
- Next.js font loader compatibility

## Error
```
Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'
```

---

## ✅ SOLUTION: Downgrade to Node.js LTS

### Option 1: Install Node.js v20 LTS (Recommended)

1. **Download Node.js v20 LTS**
   - Go to: https://nodejs.org/
   - Download: "20.x.x LTS (Recommended For Most Users)"
   - Run the installer

2. **Verify Installation**
   ```cmd
   node --version
   ```
   Should show: v20.x.x

3. **Reinstall Dependencies**
   ```cmd
   cd C:\Users\shahi\OneDrive\Desktop\pro\tr
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   npm run dev
   ```

---

### Option 2: Use NVM (Node Version Manager)

If you need multiple Node versions:

1. **Install NVM for Windows**
   - Download from: https://github.com/coreybutler/nvm-windows/releases
   - Install nvm-setup.exe

2. **Install Node.js v20**
   ```cmd
   nvm install 20
   nvm use 20
   ```

3. **Verify**
   ```cmd
   node --version
   ```

4. **Reinstall Dependencies**
   ```cmd
   cd C:\Users\shahi\OneDrive\Desktop\pro\tr
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   npm run dev
   ```

---

## 🎯 Recommended Node.js Versions

| Version | Status | Compatible |
|---------|--------|------------|
| v25.x | ❌ Too new | NO |
| v22.x | ⚠️ Current | Maybe |
| v20.x | ✅ LTS | YES |
| v18.x | ✅ LTS | YES |
| v16.x | ⚠️ Old | Maybe |

**Best Choice:** Node.js v20 LTS

---

## 🔍 Why Node.js v25 Doesn't Work

Node.js v25 introduced breaking changes:
- New ESM loader with stricter path validation
- Windows path handling changed (C:\ not recognized)
- Not compatible with Next.js 14 font loader
- Many npm packages not yet updated

---

## ⚡ Quick Fix Steps

1. **Uninstall Node.js v25**
   - Windows Settings → Apps → Node.js → Uninstall

2. **Install Node.js v20 LTS**
   - Download: https://nodejs.org/
   - Install the LTS version

3. **Verify**
   ```cmd
   node --version
   npm --version
   ```

4. **Clean and Reinstall**
   ```cmd
   cd C:\Users\shahi\OneDrive\Desktop\pro\tr
   rmdir /s /q node_modules
   rmdir /s /q .next
   del package-lock.json
   npm install
   ```

5. **Run Dev Server**
   ```cmd
   npm run dev
   ```

**Expected:** Server starts without errors!

---

## 🐛 Alternative: Try NODE_OPTIONS Workaround

If you can't downgrade Node.js right now, try this:

```cmd
set NODE_OPTIONS=--experimental-loader=./node_modules/next/dist/compiled/loader-runner/LoaderRunner.js
npm run dev
```

**Warning:** This is a workaround and may not work reliably.

---

## ✅ After Downgrading to Node.js v20

You should see:

```
▲ Next.js 14.2.18
- Local:        http://localhost:3000

✓ Starting...
✓ Ready in 2-3s
✓ Compiled / in 1.5s
```

Then open: http://localhost:3000

---

## 📊 Compatibility Matrix

| Component | Node v25 | Node v20 | Node v18 |
|-----------|----------|----------|----------|
| Next.js 14 | ❌ | ✅ | ✅ |
| React 18 | ❌ | ✅ | ✅ |
| Sanity v3 | ❌ | ✅ | ✅ |
| next/font | ❌ | ✅ | ✅ |

---

## 🎉 Expected Result (After Fix)

```cmd
C:\Users\shahi\OneDrive\Desktop\pro\tr>node --version
v20.11.0

C:\Users\shahi\OneDrive\Desktop\pro\tr>npm run dev

> thestrativa@1.0.0 dev
> next dev

▲ Next.js 14.2.18
- Local:        http://localhost:3000

✓ Starting...
✓ Ready in 2.3s
✓ Compiled / in 1.2s
```

Open http://localhost:3000 → Homepage loads! ✅

---

## 📝 Summary

**Problem:** Node.js v25 is incompatible with Next.js 14 on Windows

**Solution:** Downgrade to Node.js v20 LTS

**Steps:**
1. Uninstall Node.js v25
2. Install Node.js v20 LTS from nodejs.org
3. Delete node_modules and package-lock.json
4. Run npm install
5. Run npm run dev

**Result:** App works perfectly!

---

## 💡 Pro Tip

Always use LTS (Long Term Support) versions of Node.js for production projects. They're:
- ✅ Stable and well-tested
- ✅ Compatible with most packages
- ✅ Supported for 30 months
- ✅ Recommended by Next.js

---

## 📞 Need Help?

If you have trouble downgrading Node.js:

1. Check current version: `node --version`
2. Uninstall from Windows Settings
3. Download v20 LTS from nodejs.org
4. Install and restart terminal
5. Verify: `node --version` should show v20.x.x

Then reinstall the project dependencies and it will work!
