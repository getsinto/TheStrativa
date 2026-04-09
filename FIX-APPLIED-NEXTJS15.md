# Fix Applied: Next.js 15 Config Issue

## ❌ Error Encountered
```
Error: Configuring Next.js via 'next.config.ts' is not supported. 
Please replace the file with 'next.config.js' or 'next.config.mjs'.
```

## ✅ Fix Applied

### Changed:
- Deleted: `next.config.ts`
- Created: `next.config.mjs`

### Reason:
Next.js 15 no longer supports TypeScript config files (`.ts`). 
Must use JavaScript (`.js`) or ES Module (`.mjs`) format.

### File Content:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  transpilePackages: ['next-sanity'],
};

export default nextConfig;
```

## 🚀 Next Step

Run the build again:
```cmd
npm run build
```

**Expected:** Build should now succeed!

## 📝 Note

This is a breaking change in Next.js 15. The configuration is identical, just in JavaScript format instead of TypeScript.
