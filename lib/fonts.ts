// Fonts are loaded via CDN in app/layout.tsx
// This avoids Node.js v25 ESM loader issues on Windows

export const playfair = {
  variable: '--font-display',
  className: 'font-display',
};

export const inter = {
  variable: '--font-body',
  className: 'font-body',
};
