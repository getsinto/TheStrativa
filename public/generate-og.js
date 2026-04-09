/**
 * OG Image Generation Instructions for The Strativa
 * 
 * This file provides instructions for creating the Open Graph image.
 * The image should be created manually using Canva, Figma, or similar tools.
 * 
 * SPECIFICATIONS:
 * - Dimensions: 1200px × 630px
 * - Format: PNG
 * - File location: public/og-image.png
 * 
 * DESIGN REQUIREMENTS:
 * 
 * 1. Background:
 *    - Color: #0F1113 (charcoal)
 *    - Fill entire canvas
 * 
 * 2. Logo/Wordmark (centered):
 *    - Text: "STRATIVA"
 *    - Font: Playfair Display
 *    - Weight: 700 (Bold)
 *    - Color: #FFFFFF (white)
 *    - Size: ~80px
 *    - Letter spacing: 0.25em
 *    - Position: Centered horizontally, ~200px from top
 * 
 * 3. Decorative Line (above wordmark):
 *    - Width: 60px
 *    - Height: 2px
 *    - Color: #2F5D62 (teal)
 *    - Position: Centered horizontally, ~40px above wordmark
 * 
 * 4. Tagline (below wordmark):
 *    - Text: "Clarity where others see complexity."
 *    - Font: Inter
 *    - Weight: 400 (Regular)
 *    - Color: #FFFFFF with 65% opacity (rgba(255, 255, 255, 0.65))
 *    - Size: ~32px
 *    - Position: Centered horizontally, ~40px below wordmark
 * 
 * 5. Optional: Subtle texture overlay
 *    - Add a very fine grain texture at 4% opacity
 *    - This matches the website's hero sections
 * 
 * ALTERNATIVE TOOLS:
 * 
 * If you want to generate this programmatically, consider:
 * - @vercel/og (Vercel's OG Image Generation)
 * - Puppeteer (headless browser screenshots)
 * - Sharp + Canvas (Node.js image manipulation)
 * 
 * EXAMPLE USING @vercel/og:
 * 
 * Create app/api/og/route.tsx:
 * 
 * import { ImageResponse } from '@vercel/og'
 * 
 * export async function GET() {
 *   return new ImageResponse(
 *     (
 *       <div style={{
 *         background: '#0F1113',
 *         width: '100%',
 *         height: '100%',
 *         display: 'flex',
 *         flexDirection: 'column',
 *         alignItems: 'center',
 *         justifyContent: 'center',
 *       }}>
 *         <div style={{
 *           width: '60px',
 *           height: '2px',
 *           background: '#2F5D62',
 *           marginBottom: '40px',
 *         }} />
 *         <div style={{
 *           fontFamily: 'serif',
 *           fontSize: '80px',
 *           fontWeight: 700,
 *           color: 'white',
 *           letterSpacing: '0.25em',
 *           marginBottom: '40px',
 *         }}>
 *           STRATIVA
 *         </div>
 *         <div style={{
 *           fontFamily: 'sans-serif',
 *           fontSize: '32px',
 *           color: 'rgba(255, 255, 255, 0.65)',
 *         }}>
 *           Clarity where others see complexity.
 *         </div>
 *       </div>
 *     ),
 *     {
 *       width: 1200,
 *       height: 630,
 *     }
 *   )
 * }
 * 
 * Then update metadata to use: images: [{ url: '/api/og' }]
 */

console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  OG IMAGE GENERATION INSTRUCTIONS                              ║
║                                                                ║
║  Please create public/og-image.png manually using:            ║
║  - Canva (recommended for non-developers)                     ║
║  - Figma (recommended for designers)                          ║
║  - @vercel/og (recommended for programmatic generation)       ║
║                                                                ║
║  Specifications are documented in this file above.            ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
`);
