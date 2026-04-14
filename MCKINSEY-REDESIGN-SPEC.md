# McKinsey-Inspired Redesign Specification
## Stratora Consulting Website

---

## Design Philosophy

**Editorial Authority** — The website should feel like a premium business publication (Harvard Business Review, The Economist) rather than a typical consulting website.

**Confident Minimalism** — Every element earns its place. Large whitespace creates breathing room and emphasizes key messages.

**Structured Hierarchy** — Clear visual hierarchy guides the eye through content with purpose.

---

## Color Palette

### Primary Colors
- **Navy Blue**: `#003366` — Primary brand color, authority, trust
- **Pure White**: `#FFFFFF` — Clean backgrounds, breathing space
- **Charcoal**: `#1A1A1A` — Body text, high contrast

### Secondary Colors
- **Steel Gray**: `#6B7280` — Supporting text, subtle elements
- **Light Gray**: `#F3F4F6` — Section backgrounds, cards
- **Accent Teal**: `#0EA5E9` — CTAs, links, highlights (sparingly)

### Usage Rules
- Navy blue for headers, key statements, and navigation
- White backgrounds dominate (80%+ of page)
- Gray for supporting text and subtle dividers
- Teal only for interactive elements and emphasis

---

## Typography System

### Font Stack
**Primary**: `'Playfair Display', Georgia, serif` — Headlines, display text
**Secondary**: `'Inter', -apple-system, sans-serif` — Body, UI elements

### Type Scale
```
Hero Headline: 72px / 1.1 / -0.02em / 700
Section Headline: 48px / 1.2 / -0.01em / 600
Subsection: 32px / 1.3 / 0 / 600
Body Large: 20px / 1.7 / 0 / 400
Body: 17px / 1.8 / 0 / 400
Body Small: 15px / 1.6 / 0 / 400
Label: 13px / 1.4 / 0.05em / 500 / UPPERCASE
```

### Typography Rules
- Headlines use Playfair Display (serif) for authority
- Body text uses Inter for readability
- Line height minimum 1.6 for body text
- Maximum line length: 75 characters (680px)
- Generous letter-spacing on labels (0.05em)

---

## Layout System

### Grid Structure
- **Container Max Width**: 1280px
- **Content Max Width**: 720px (for reading)
- **Grid**: 12 columns with 24px gutters
- **Breakpoints**: 
  - Mobile: 0-640px
  - Tablet: 641-1024px
  - Desktop: 1025px+

### Spacing Scale
```
xs: 8px
sm: 16px
md: 24px
lg: 40px
xl: 64px
2xl: 96px
3xl: 128px
4xl: 160px
```

### Vertical Rhythm
- Section padding: 160px (desktop) / 80px (mobile)
- Component spacing: 64px
- Element spacing: 24-40px
- Micro spacing: 8-16px

---

## Component Library

### 1. Hero Section (Editorial Style)
```
Structure:
- Full viewport height
- Centered content, max-width 720px
- Large headline (72px)
- Supporting text (20px, max 2 lines)
- Single primary CTA
- Subtle scroll indicator

Design:
- White background
- Navy headline
- Gray supporting text
- Minimal decoration
- Generous whitespace (80px+ around content)
```

### 2. Statement Block
```
Structure:
- Full-width section
- Centered quote/statement
- Max-width 900px
- Optional attribution

Design:
- Light gray background (#F3F4F6)
- Large serif text (48px)
- Italic for emphasis
- Thin border-left accent (navy, 4px)
```

### 3. Content Cards (Modular)
```
Structure:
- Grid layout (2 or 3 columns)
- Equal height cards
- Image + text or text-only
- Hover state

Design:
- White background
- Subtle border (#E5E7EB)
- 16px padding
- Hover: subtle shadow + border color change
```

### 4. Featured Insight
```
Structure:
- Horizontal split (40/60 or 50/50)
- Image left, content right
- Category label
- Headline
- Excerpt
- CTA link

Design:
- White background
- Navy headline
- Subtle divider between sections
- Image: grayscale or muted colors
```

### 5. Statistics Block
```
Structure:
- Horizontal row of 3-4 stats
- Large number + label
- Optional supporting text

Design:
- Navy numbers (72px, bold)
- Gray labels (13px, uppercase)
- Vertical dividers between stats
```

### 6. Navigation
```
Structure:
- Fixed top bar
- Logo left, menu right
- Minimal items (5-6 max)
- CTA button

Design:
- White background
- Thin bottom border
- Navy text
- Hover: teal underline
- 80px height
```

---

## Page Layouts

### Homepage Structure
```
1. Hero (Editorial)
   - Large headline
   - Single CTA
   - Minimal design

2. Statement Block
   - Key message
   - Italic emphasis

3. Services Grid
   - 3 columns
   - Icon + title + description
   - Minimal cards

4. Featured Work
   - Large image
   - Case study preview
   - CTA to full case study

5. Insights Preview
   - 3 latest articles
   - Card grid
   - Link to all insights

6. Statistics
   - Key numbers
   - Social proof

7. CTA Section
   - Simple, centered
   - Single action
```

### Case Study Layout
```
1. Hero
   - Client name
   - Project title
   - Key stat/outcome

2. Challenge
   - Full-width text block
   - Max-width 720px

3. Approach
   - 2-column layout
   - Bullet points
   - Process diagram

4. Results
   - Statistics block
   - Quote from client
   - Visual evidence

5. Related Work
   - 2-3 related case studies
```

---

## Animation Guidelines

### Principles
- Subtle and purposeful
- Never distracting
- Enhance hierarchy
- Improve UX

### Animations
```css
/* Fade In Up */
opacity: 0 → 1
transform: translateY(24px) → translateY(0)
duration: 600ms
easing: cubic-bezier(0.4, 0, 0.2, 1)

/* Hover Scale */
transform: scale(1) → scale(1.02)
duration: 200ms
easing: ease-out

/* Border Slide */
width: 0 → 100%
duration: 400ms
easing: ease-in-out
```

### Usage
- Page load: Fade in up for hero content
- Scroll: Fade in up for sections (intersection observer)
- Hover: Subtle scale on cards
- Links: Underline slide animation

---

## Responsive Behavior

### Mobile (< 640px)
- Single column layouts
- Reduced font sizes (60% of desktop)
- Reduced spacing (50% of desktop)
- Stack horizontal elements
- Full-width CTAs

### Tablet (641-1024px)
- 2-column grids
- 80% font sizes
- 75% spacing
- Maintain hierarchy

### Desktop (1025px+)
- Full design system
- 3-column grids
- Maximum spacing
- Optimal line lengths

---

## Content Strategy

### Writing Style
- **Direct and confident** — No hedging or qualifiers
- **Active voice** — "We deliver" not "Delivery is provided"
- **Short sentences** — Maximum 25 words
- **Concrete language** — Specific over abstract
- **Client-focused** — Benefits over features

### Content Blocks
- Headlines: 6-10 words maximum
- Paragraphs: 3-4 sentences maximum
- Lists: 3-5 items maximum
- CTAs: 2-4 words maximum

---

## Implementation Priority

### Phase 1: Foundation
1. Update color palette
2. Implement typography system
3. Create spacing utilities
4. Build navigation component

### Phase 2: Core Components
1. Hero section (editorial style)
2. Statement blocks
3. Content cards
4. Featured insight component

### Phase 3: Page Redesigns
1. Homepage
2. About page
3. Case studies listing
4. Individual case study

### Phase 4: Polish
1. Animations
2. Micro-interactions
3. Mobile optimization
4. Performance optimization

---

## Success Metrics

### Design Quality
- Visual hierarchy score: 9/10+
- Whitespace ratio: 40%+
- Typography consistency: 100%
- Color palette adherence: 95%+

### User Experience
- Page load time: < 2s
- Time on page: +30%
- Bounce rate: -20%
- Conversion rate: +15%

---

## References

### Inspiration Sites
- McKinsey.com — Overall structure and authority
- BCG.com — Content blocks and cards
- Bain.com — Typography and spacing
- HBR.org — Editorial layouts
- The Economist — Clean, confident design

### Design Principles
1. **Less is more** — Remove before adding
2. **Hierarchy first** — Guide the eye
3. **Whitespace wins** — Let content breathe
4. **Typography matters** — It's 95% of design
5. **Consistency builds trust** — Systematic approach

---

*This specification provides the foundation for a McKinsey-inspired redesign that balances authority, clarity, and modern web design principles.*
